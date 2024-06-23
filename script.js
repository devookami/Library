const toggleAdd = document.querySelector("#toggleaAdd");
const card = document.querySelector(".card");

toggleAdd.addEventListener("click", () => {
    card.classList.toggle('toggle');
    toggleAdd.disabled = true;
});

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    // do stuff here
}
