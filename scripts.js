let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const modal = document.getElementById("myModal");
    let btn = document.getElementById("book");
    const span = document.getElementsByClassName("close")[0];
    const inputtedData = document.getElementsByClassName("inputtedData");
    const library = document.getElementsByClassName("bookLibrary");
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
        event.preventDefault();
        const node = document.createTextNode("This is new.");
        const items = document.createElement("div");
        modal.style.display = "none";

        myLibrary.push(new Book(inputtedData[0].value, inputtedData[1].value, inputtedData[2].value));

        items.appendChild(node);
        items.className = "bookItems";
        library[0].appendChild(items);
        console.log(library[0]);

    });

}



addBookToLibrary();