/* First we will get access to the containers we created in index.html */

const flashcards = document.getElementsByClassName
("flashcards")[0];
const createBox = document.getElementsByClassName
("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ?  /* This checks if we are already using local storage */
JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top:1px; solid red; padding: 15px; margin-top:30px");

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style",
    "text-align:center; display:none; color:red");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){       /* This block allows double click to display the answer */
        if(h2_answer.style.display == "none")       /* If: answer is not displayed >> */
            h2_answer.style.display = "block";      /* Then: display it */
        else
            h2_answer.style.display = "none";       /* Else: do nothing (That is, if the answer is already displayed) */
    });

    flashcards.appendChild(div);
}

function addFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,         /* key: 'my_question' >> value: question.value */
        'my_answer' : answer.value
    }
}

contentArray.push(flashcard_info);              /* Here I add the above call for flashcard to localstorage */
localStorage.setItem('items', JSON.stringify
(contentArray));
divMaker(contentArray[contentArray.length - 1]);    /* This line makes the card display */
question.value = '';                                /* Here I clear the question and answer cards */
answer.value = '';

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreatBox(){
    createBox.getElementsByClassName.display = "none";
}