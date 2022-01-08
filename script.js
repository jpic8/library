//script.js

const myLibrary = [];
const entryBtn = document.querySelector("[data-entry]");
const form = document.querySelector("[data-form]");
const table = document.querySelector("[data-table]");
const deck = document.querySelector("[data-deck]");

//event listeners
entryBtn.addEventListener("click", () => {
  newEntry(deck);
});

//Book object constructor for all library entries
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(entry) {
  myLibrary.push(entry);
}

function newEntry(deck) {
  let newBook = Object.create(Book);
  newBook.title = prompt("What is the title?");
  newBook.author = prompt("Who is the author?");
  newBook.pages = prompt("How many pages?");
  addBookToLibrary(newBook);
  newCard(deck, newBook);
}

function newCard(deck, newBook) {
  let entry = `${newBook.title} by ${newBook.author} is ${newBook.pages} pages`;
  let card = document.createElement("div");
  let deleteBtn = document.createElement("Button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Delete";
  card.innerText = entry;
  card.className = "libraryCard";
  card.appendChild(deleteBtn);
  deck.appendChild(card);
}

function initialDeck(deck, myLibrary) {
  for (let books of myLibrary) {
    let entry = `${books.title} by ${books.author} is ${books.pages} pages`;
    let card = document.createElement("div");
    let deleteBtn = document.createElement("Button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    card.innerText = entry;
    card.className = "libraryCard";
    card.appendChild(deleteBtn);
    deck.appendChild(card);
  }
}
// function initialTable(table, myLibrary) {
//   let thead = table.createTHead();
//   let headRow = thead.insertRow();
//   let details = Object.keys(myLibrary[0]);
//   for (key in details) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(details[key]);
//     th.appendChild(text);
//     headRow.appendChild(th);
//   }
//   for (let books of myLibrary) {
//     let row = table.insertRow();
//     for (key in books) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(books[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// function newEntry(table) {
//   let newBook = Object.create(Book);
//   newBook.title = prompt("What is the title?");
//   newBook.author = prompt("Who is the author?");
//   newBook.pages = prompt("How many pages?");
//   addBookToLibrary(newBook);
//   let row = table.insertRow();
//   for (key in newBook) {
//     let cell = row.insertCell();
//     let text = document.createTextNode(newBook[key]);
//     cell.appendChild(text);
//   }
// }

//#region library table
//generates table head with book entry details
// function generateTableHead(table, myLibrary) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   let details = Object.keys(myLibrary[0]);
//   for (key in details) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(details[key]);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }
// //generates table with Books from myLibrary
// function generateTable(table, myLibrary) {
//   for (let books of myLibrary) {
//     let row = table.insertRow();
//     for (key in books) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(books[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// generateTableHead(table, myLibrary);
// generateTable(table, myLibrary);
//#endregion

//#region prepopulated library
//prepopulate library with these temporary entries
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
theHobbit.read = false;
const zorro = new Book("Zorro", "Isabel Allende", 677);
zorro.read = true;
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 1008);
donQuixote.read = false;
const drSuess = new Book("Red Fish, Blue Fish", "Dr. Suess", 32);
drSuess.read = true;
addBookToLibrary(drSuess);
addBookToLibrary(theHobbit);
addBookToLibrary(zorro);
addBookToLibrary(donQuixote);
//#endregion

// updateDisplay(libTextElement, myLibrary);

//#region dev code
// function toggleLibrary(table) {
//   if ((table.style.display = "initial")) {
//     table.style.display = "none";
//     toggle.textContent = "show library";
//   } else {
//     table.style.display = "initial";
//     toggle.text = "hide library";
//   }
// }

// toggle.addEventListener("click", () => {
//   toggleLibrary(table);
// });

// function newEntry() {
//   newBook = Object.create(Book);
//   newBook.title = prompt("What is the title?");
//   newBook.author = prompt("Who is the author?");
//   newBook.pages = prompt("How many pages long?");
//   addBookToLibrary(newBook);
//   console.table(myLibrary);
//   let removeTab = document.querySelector("[data-table]");
//   let parentEl = removeTab.parentElement;
//   parentEl.removeChild(removeTab);
//   let newTab = document.querySelector("[data-table]");
//   generateTableHead(newTab, myLibrary);
//   generateTable(newTab, myLibrary);
// }

// function updateTable() {
//   if (table.innerContent === "") {
//     generateTable(myLibrary);
//   } else {
//     table.innerContent = "";
//     generateTable(myLibrary);
//   }
// }

// function newEntry() {
//   let newBook = Object.create(Book);
//   newBook.title = prompt("What is the title?");
//   newBook.author = prompt("who is the author?");
//   newBook.pages = prompt("Number of pages?");
//   addBookToLibrary(newBook);
//   let bookString = `${newBook.title} by ${newBook.author} is ${newBook.pages} pages long`;
//   let text = document.createTextNode(bookString);
//   libTextElement.appendChild(text);
// }

// function updateDisplay(libTextElement, myLibrary) {
//   for (let books of myLibrary) {
//     let bookString = JSON.stringify(books);
//     let text = document.createTextNode(bookString);
//     libTextElement.appendChild(`text \n`);
//   }
// }
//#endregion

// form.innerHTML =
//   "<input type 'text' id='title' value='title'><br><input type 'text' id='author' value= 'author'><br><input type 'text' id='pages' value='pages'><input type = 'submit' value='Submit'>";

initialDeck(deck, myLibrary);
