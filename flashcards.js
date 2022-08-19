/* First we will get access to the containers we created in index.html */

const flashcards = document.getElementsByClassName
("flashcards")[0];
const createBox = document.getElementsByClassName
("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ?  /* This checks if we are already using local storage */
JSON.parse(localStorage.getItem('items')) : []

