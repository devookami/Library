const toggleAdd = document.querySelector("#toggleaAdd");
const card = document.querySelector(".card");
const form = document.querySelector("#form");
const grid = document.querySelector("#book-grid");
let myLibrary = [];

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
    createBookCard(newBook);
}

function createBookCard(book) {
    let bookCard = document.createElement("div");
    bookCard.style.border = "1px solid #ccc";
    bookCard.style.padding = "10px";
    bookCard.style.borderRadius = "5px";
    bookCard.style.boxShadow = "0 0 5px rgba(0,0,0,0.1)";

    bookCard.innerHTML = `
        <h3 class="title">${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class="change">${book.isRead ? "Read" : "Not Read"}</button>
        <button class="remove">remove</button>
    `;

    grid.appendChild(bookCard);

    // bookCard.querySelector(".remove").addEventListener("click", (event) => {
    //    console.log(check(myLibrary, bookCard));
    // });

    bookCard.querySelector(".change").addEventListener("click", () => {
        book.isRead = !book.isRead;
        updateReadStatus(bookCard, book.isRead);
    });

    bookCard.querySelector(".remove").addEventListener("click", () => {
        removeBook(book, bookCard);
    });
}

function updateReadStatus(card, isRead) {
    let changeBtn = card.querySelector(".change");
    changeBtn.innerText = isRead ? "Read" : "Not Read";
}

function removeBook(book, card) {
    grid.removeChild(card);
    myLibrary = myLibrary.filter(item => item !== book);
}
