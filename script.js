const toggleAdd = document.querySelector("#toggleaAdd");
const card = document.querySelector(".card");
const form = document.querySelector("#form");

const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary() {
    myLibrary.push(newBook);
}

toggleAdd.addEventListener("click", () => {
    toggle();
});

function toggle() {
    card.classList.toggle("toggle");
    if(!toggleAdd.disabled == true){
        toggleAdd.disabled = false;
    } else {
        toggleAdd.disabled = true;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead");
    if (!isRead.checked) {
        isRead = false;
    } else {
        isRead = true;
    }
    let newBook = new Book(title, author, pages, isRead);

    myLibrary.push(newBook);
    toggle();
    event.target.reset();
});
