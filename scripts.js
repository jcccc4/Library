

const library = document.getElementsByClassName("bookLibrary");
const modal = document.getElementById("myModal");
const btn = document.getElementById("book");
const span = document.getElementsByClassName("close")[0];
const inputtedData = document.getElementsByClassName("inputtedData");


if (!localStorage.getItem('bookList')) {
    localStorage.setItem('bookList', JSON.stringify([]));
}
let bookList = localStorage.getItem('bookList');
let k = JSON.parse(bookList);
var myLibrary = JSON.parse(bookList);
console.log(k, 21312);


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {


    console.log(library);

    btn.onclick = function () {
        modal.style.display = "block";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.getElementById("sub-btn").addEventListener("click", function (event) {

        modal.style.display = "none";

        console.log(bookList);

        myLibrary.push(new Book(inputtedData[0].value, inputtedData[1].value, inputtedData[2].value));
        localStorage.setItem("bookList", JSON.stringify(myLibrary));

    });

}

function Library() {
    console.log(JSON.parse(bookList).length, 'jk');
    for (let i = 0; i < JSON.parse(bookList).length; i++) {
        const items = document.createElement("div");
        items.className = "bookItems";

        for (let loop in myLibrary[i]) {
            const description = document.createElement("div");
            items.appendChild(description);
            description.className = "description";
            console.log(myLibrary);
            description.innerHTML = `${myLibrary[i][loop]}`;
        }

        library[0].appendChild(items);
        console.log(library[0]);
    }
}


addBookToLibrary();
Library();
