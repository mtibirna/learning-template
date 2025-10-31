const getShowButton = document.getElementById("showDialog");
const getModal = document.getElementById("bookModal");

getShowButton.addEventListener("click", () => {
  getModal.show();
});

const preventDefault = document.getElementById("confirmBtn");
preventDefault.addEventListener("click", (event) => {
  event.preventDefault();
});

const myLibrary = [];

class Book {
  constructor(id, author, title, pages, isRead) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(id, author, title, pages, isRead) {
  id = window.crypto.randomUUID();
  author = document.getElementById("author");
  title = document.getElementById("title");
  pages = document.getElementById("pages");
  if (document.getElementById("noRadio").checked) {
    isRead = false;
  } else if (document.getElementById("yesRadio").checked) {
    isRead = true;
  }

  const newBook = new Book(id, author.value, title.value, pages.value, isRead);

  myLibrary.push(newBook);
  console.log(myLibrary);
  return newBook;
}
