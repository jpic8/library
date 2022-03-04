const libraryModule = (() => {
  //DOM elements
  const addBtn = document.querySelector("#addBtn");
  const newBtn = document.querySelector("#newBtn");
  const popUpForm = document.querySelector("#popUp");
  const closePopUp = document.getElementsByTagName("span")[0];

  //global event listeners
  addBtn.addEventListener("click", validateForm);
  newBtn.addEventListener("click", () => (popUpForm.style.display = "block"));
  closePopUp.addEventListener(
    "click",
    () => (popUpForm.style.display = "none")
  );
  window.addEventListener("load", () => restore(myLibrary));

  //constructor function for book objects in library
  class Book {
    constructor(title, author, pages, read) {
      this.title = form.title.value;
      this.author = form.author.value;
      this.pages = form.pages.value;
      this.read = form.read.checked;
    }
  }

  let myLibrary = []; //empty array
  let newBook;

  function addBookToLibrary() {
    window.event.preventDefault();
    popUpForm.style.display = "none";
    myLibrary.push(newBook);
    setData();
    render();
    form.reset();
    console.table(myLibrary);
  }

  function validateForm() {
    window.event.preventDefault();
    newBook = new Book(title, author, pages, read);
    if (newBook.title == "") {
      alert("Please enter a valid title");
    } else if (newBook.author == "") {
      alert("Please enter a valid author");
    } else if (
      newBook.pages > 24000 ||
      newBook.pages === NaN ||
      newBook.pages == ""
    ) {
      alert("Please enter a valid page count");
    } else {
      addBookToLibrary();
    }
  }

  //called by render() to propogate DOM with myLibrary array objects
  function createBook(item) {
    const library = document.querySelector("#library-container");
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", myLibrary.indexOf(item));
    const titleDiv = document.createElement("div");
    titleDiv.textContent = item.title;
    titleDiv.classList.add("title");
    bookDiv.appendChild(titleDiv);
    const authDiv = document.createElement("div");
    authDiv.textContent = item.author;
    authDiv.classList.add("author");
    bookDiv.appendChild(authDiv);
    const pageDiv = document.createElement("div");
    pageDiv.textContent = item.pages;
    pageDiv.classList.add("pages");
    bookDiv.appendChild(pageDiv);
    const readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    bookDiv.appendChild(readBtn);
    if (item.read === false) {
      readBtn.textContent = "Not Read";
      readBtn.style.backgroundColor = "#e04f63";
    } else {
      readBtn.textContent = "Read";
      readBtn.style.backgroundColor = "#63da63";
    }
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("id", "removeBtn");
    bookDiv.appendChild(removeBtn);
    library.appendChild(bookDiv);
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(item), 1);
      setData();
      render();
    });
    readBtn.addEventListener("click", () => {
      item.read = !item.read;
      setData();
      render();
    });
  }

  // setting Library to be stored in local storage
  function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
  }

  //clears DOM and calls createBook function to render from myLibrary array
  function render() {
    const display = document.getElementById("library-container");
    const books = document.querySelectorAll(".book");
    books.forEach((book) => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
      createBook(myLibrary[i]);
    }
  }

  function restore() {
    if (!localStorage.myLibrary) {
      render();
    } else {
      let objects = localStorage.getItem("myLibrary");
      objects = JSON.parse(objects);
      myLibrary = objects;
      render();
    }
  }
})();
