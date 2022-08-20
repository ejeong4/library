const cards = document.querySelector('.cards');
const bookBtn = document.querySelector('.new-book');
const body = document.querySelector('body');

const form = document.querySelector('.form');
const formClose = document.querySelector('.form-close');
const formSubmit = document.querySelector('.form-submit');
const removeToggle = document.querySelector('.remove');

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
    const removeBtn = document.createElement('button');

    removeBtn.setAttribute('id', 'card-remove-btn');

    cardDiv.classList.add('cardDiv');
    cardDiv.setAttribute('data-index', `${library.length-1}`);
    [removeBtn, titleDiv, authorDiv, pagesDiv, readDiv].forEach(
        Element => cardDiv.appendChild(Element)
    );

    titleDiv.textContent = `${book.title}`;
    authorDiv.textContent = `${book.author}`;
    pagesDiv.textContent = `${book.pages} pages`;
    readDiv.textContent = `${book.read}`;
    removeBtn.textContent = 'x';

    removeBtn.addEventListener('click', () => {
        library.splice(cardDiv.getAttribute('data-index'), 1);
        cardDiv.remove();
    })

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
    console.log(formRead.value)
    let readValue = '';
    if (formRead.checked === true) {
        readValue += 'Read';
    }
    const book = new Book(formTitle.value, formAuthor.value, formPages.value, readValue);
    book.addBookToLibrary();
    createCard(book);
    formReset();
});

removeToggle.addEventListener('click', () => {
    document.querySelectorAll('#card-remove-btn').forEach((button) => {
        console.log('hi');
        button.classList.add('card-remove-btn-toggle');
    })
})

bookBtn.addEventListener('click', () => form.setAttribute('style', 'display: flex;'));
formClose.addEventListener('click', formReset);


const firstBook = new Book('Atomic Habits', 'James Clear', 343, 'Read');
firstBook.addBookToLibrary();
createCard(firstBook);