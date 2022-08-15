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

Book.prototype.sayBook = function() {
    console.log(this);
}

const book = new Book('Harry Potter', 'JK Rowling', '300', 'read');
book.sayBook();
book.addBookToLibrary();
console.log(library);