const cards = document.querySelector('.cards');
const bookBtn = document.querySelector('.new-book');
const body = document.querySelector('body');

const form = document.querySelector('.form');
const formClose = document.querySelector('.form-close');
const formSubmit = document.querySelector('.form-submit');

const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const formPages = document.querySelector('#pages');
const formRead = document.querySelector('#read');
const formInputs = document.querySelectorAll('.form-input');

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
    library.push(this);
}

function createCard(book) {
    const cardDiv = document.createElement('div');
    const titleDiv = document.createElement('h1')
    const authorDiv = document.createElement('h3');
    const pagesDiv = document.createElement('h3');
    const readDiv = document.createElement('h3');

    cardDiv.classList.add('cardDiv');
    [titleDiv, authorDiv, pagesDiv, readDiv].forEach(
        Element => cardDiv.appendChild(Element)
    );

    titleDiv.textContent = `Title: ${book.title}`;
    authorDiv.textContent = `Author: ${book.author}`;
    pagesDiv.textContent = `Pages: ${book.pages}`;
    readDiv.textContent = book.read;

    cards.appendChild(cardDiv);
    return cardDiv;
}

function formReset() {
    formInputs.forEach((input) => {
        input.value = '';
        input.checked = false;
    });
    form.setAttribute('style', 'display: none;');
}

formSubmit.addEventListener('click', () => {
    let readValue = '';
    if (formRead.value == 'on') {
        readValue += 'read';
    }
    const book = new Book(formTitle.value, formAuthor.value, formPages.value, readValue);
    book.addBookToLibrary();
    createCard(book);
    formReset();
});

bookBtn.addEventListener('click', () => form.setAttribute('style', 'display: block;'));
formClose.addEventListener('click', formReset());