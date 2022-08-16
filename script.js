const cards = document.querySelector('.cards');
const bookBtn = document.querySelector('.new-book');
const body = document.querySelector('body');

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard() {
    library.forEach(Element => {
        const cardDiv = document.createElement('div');
        const titleDiv = document.createElement('h1')
        const authorDiv = document.createElement('h3');
        const pagesDiv = document.createElement('h3');
        const readDiv = document.createElement('h3');

        cardDiv.classList.add('cardDiv');
        [titleDiv, authorDiv, pagesDiv, readDiv].forEach(
            Element => cardDiv.appendChild(Element)
        );

        titleDiv.textContent = `Title: ${Element.title}`;
        authorDiv.textContent = `Author: ${Element.author}`;
        pagesDiv.textContent = `Pages: ${Element.pages}`;
        readDiv.textContent = Element.read;

        cards.appendChild(cardDiv);
        return cardDiv;
    })
};

bookBtn.addEventListener('click', () => {

})

Book.prototype.addBookToLibrary = function() {
    library.push(this);
}

const book = new Book('Harry Potter', 'JK Rowling', '300', 'read');
const book1 = new Book('Atomic Habits', 'James Clear', '300', 'read');
book.addBookToLibrary();
book1.addBookToLibrary();

createCard();