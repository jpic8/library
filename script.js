//script refactor

const libraryModule = (function () {
  let myLibrary = [];

  //constructor function for book objects in library
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  //DOM elements
  const newBookBtn = document.querySelector("[data-entry]");
  const display = document.querySelector("[data-display]");
  // const deleteBtn = document.getElementsByClassName(".deleteBtn");

  //event listeners
  newBookBtn.addEventListener("click", () => {
    userInput(display);
  });
  // deleteBtn.addEventListener("click", () => {
  //   deleteEntry();
  // });

  function clearDOM() {
    let list = display;
    let first = list.firstElementChild;
    while (first) {
      first.remove();
      first = list.firstElementChild;
    }
  }

  function render(myLibrary) {
    clearDOM();
    for (i = 0; i < myLibrary.length; i++) {
      let entry = `${myLibrary[i].title} by ${myLibrary[i].author} is ${myLibrary[i].pages} pages`;
      let li = document.createElement("li");
      li.innerText = entry;
      li.className = "libraryCard";
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.className = "deleteBtn";
      li.appendChild(deleteBtn);
      display.appendChild(li);
    }
  }

  function userInput() {
    let book = Object.create(Book);
    book.title = prompt("What is the title?");
    book.author = prompt("Who is the author?");
    book.pages = prompt("How many pages?");
    myLibrary.push(book);
    render(myLibrary);
  }

  // function deleteEntry() {
  //   display.removeChild(e.target);
  //   render(myLibrary);
  // }

  const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
  theHobbit.read = false;
  const zorro = new Book("Zorro", "Isabel Allende", 677);
  zorro.read = true;
  const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 1008);
  donQuixote.read = false;
  const drSuess = new Book("Red Fish, Blue Fish", "Dr. Suess", 32);
  drSuess.read = true;
  myLibrary.push(drSuess);
  myLibrary.push(theHobbit);
  myLibrary.push(zorro);
  myLibrary.push(donQuixote);

  return {
    myLibrary,
    display,
    render,
    clearDOM,
  };
})();

let base = libraryModule;
//renders predetermined library queue
base.render(base.myLibrary);
