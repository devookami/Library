const toggleAdd = document.querySelector("#toggleaAdd");
const card = document.querySelector(".card");
const form = document.querySelector("#form");
const change = document.querySelector("#change");

const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

toggleAdd.addEventListener("click", () => {
    toggle();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // createBookCard();
    addBookToLibrary();
    toggle();
    event.target.reset();
});

function toggle() {
    card.classList.toggle("toggle");
    if (!toggleAdd.disabled == true) {
        toggleAdd.disabled = false;
    } else {
        toggleAdd.disabled = true;
    }
}

function addBookToLibrary() {
    let  title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead");
    if (!isRead.checked) {
        isRead = false;
    } else {
        isRead = true;
    }
    let newBook = new Book(title, author, pages, isRead);
    createBookCard(newBook);
    myLibrary.push(newBook);
}

function createBookCard(name) {
    let bookCard = document.createElement('div');
    bookCard.style.border = '1px solid #ccc';
    bookCard.style.padding = '10px';
    bookCard.style.borderRadius = '5px';
    bookCard.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';

    bookCard.innerHTML = `
        <h3>Naziv: ${name.title}</h3>
        <p>Autor: ${name.author}</p>
        <p>Strana: ${name.pages}</p>
        <button id="change">${name.isRead ? "Procitano" : "Nije Procitano"}</button>
        <button>remove</button>
    `;

    document.querySelector('#book-grid').appendChild(bookCard);
}
