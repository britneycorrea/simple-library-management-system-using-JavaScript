// Create an object constructor for Book
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isAvailable = true;
}

// Array to store the books
const library = [];

// Function to add a new book to the library
function addBook(title, author) {
  const newBook = new Book(title, author);
  library.push(newBook);
}

// Function to borrow a book
function borrowBook(title) {
  const book = library.find(book => book.title === title);
  if (book) {
    book.isAvailable = false;
  } else {
    console.log("Book not found in the library.");
  }
}

// Function to return a book
function returnBook(title) {
  const book = library.find(book => book.title === title);
  if (book) {
    book.isAvailable = true;
  } else {
    console.log("Book not found in the library.");
  }
}

// Function to list all books in the library
function listBooks() {
  library.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Available: ${book.isAvailable}`);
  });
}

// Adding books to the library
addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("To Kill a Mockingbird", "Harper Lee");
addBook("1984", "George Orwell");

// Borrowing and returning books
borrowBook("The Great Gatsby");
returnBook("To Kill a Mockingbird");

// Listing all books
listBooks();
