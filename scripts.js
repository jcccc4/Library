

const library = document.getElementsByClassName("bookLibrary");
const modal = document.getElementById("myModal");
const btn = document.getElementById("book");
const span = document.getElementsByClassName("close")[0];
const inputtedData = document.getElementsByClassName("inputtedData");


if (!localStorage.getItem('bookList')) {
    localStorage.setItem('bookList', JSON.stringify([]));
}
let bookList = localStorage.getItem('bookList');
var myLibrary = JSON.parse(bookList);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
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
}

function validateForm() {
    document.getElementById("sub-btn").addEventListener("click", function (event) {
        event.preventDefault();

        modal.style.display = "none";
        let x = document.forms["myForm"];
        console.log(myLibrary);
        if (x[0].value.length === 0 || x[1].value.length === 0 || x[2].value.length === 0) {
            alert("All input must be filled out");
            location.reload();
        } else {
            myLibrary.push(new Book(inputtedData[0].value, inputtedData[1].value, inputtedData[2].value, inputtedData[3].checked));
            localStorage.setItem("bookList", JSON.stringify(myLibrary));
            location.reload();
        }
    });
}

function Library() {
    console.log(myLibrary);
    for (let i = 0; i < JSON.parse(bookList).length; i++) {
        const items = document.createElement("div");
        const closeItems = document.createElement("span");
        items.className = "bookItems";
        items.appendChild(closeItems);
        closeItems.innerHTML = "<span class='closeItems'>&times;</span>";
        for (let loop in myLibrary[i]) {
            const description = document.createElement("div");
            items.appendChild(description);
            description.className = "description";
            if (loop === 'read') {
                const buttonRead = document.createElement("button");
                items.appendChild(buttonRead);
                buttonRead.className = 'buttonRead';
                if (myLibrary[i][loop] === true) {
                    buttonRead.className = 'readClick buttonRead';
                    buttonRead.innerText = "Read";
                } else {
                    buttonRead.className = 'readClick buttonNotRead';
                    buttonRead.innerText = "Not Read";
                }
            } else {description.innerHTML = `${myLibrary[i][loop]}`;};
        }

        library[0].appendChild(items);
    }

}
function onRead() {
    const readClick = document.getElementsByClassName("readClick");
    for (let click in myLibrary) {
        readClick[click].addEventListener('click', () => {
            if (myLibrary[click].read === true) {
                myLibrary[click].read = false;
                localStorage.setItem("bookList", JSON.stringify(myLibrary));
                location.reload();
            } else {
                myLibrary[click].read = true;
                localStorage.setItem("bookList", JSON.stringify(myLibrary));
                location.reload();
            }
        });
    }
}
function closeItem() {
    const removeItems = document.getElementsByClassName("closeItems");

    for (let rep in myLibrary) {

        removeItems[rep].addEventListener('click', function () {

            myLibrary.splice(rep, 1);

            localStorage.setItem("bookList", JSON.stringify(myLibrary));
            location.reload();
        });
    }
}


addBookToLibrary();
Library();
validateForm();
closeItem();
onRead();