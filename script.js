let myLibrary = [];

function Book(name,author,pages,readstatus){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;

    myLibrary.push(this);
}

function addBook(name,author,pages,readstatus){
    new Book(name,author,pages,readstatus);
}