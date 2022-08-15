const cards = document.querySelector('.cards');

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
        const infoDiv = document.createElement('h3');

        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(infoDiv);

        titleDiv.textContent = `Title: ${Element.title}`;
        infoDiv.textContent = `Author: ${Element.author} Pages: ${Element.pages} ${Element.read}`;

        cards.appendChild(cardDiv);
        return cardDiv;
    })
};

Book.prototype.addBookToLibrary = function() {
    library.push(this);
}

const book = new Book('Harry Potter', 'JK Rowling', '300', 'read');
book.addBookToLibrary();
createCard();