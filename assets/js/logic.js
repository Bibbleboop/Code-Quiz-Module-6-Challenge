***** part of code from nirmeet day 2 week 7  also see pod7 challenge logic vid

// Define Variables  - can also use getElementById
const startBtn = document.querySelector(".start");
const startSection = document.querySelector(".start-screen");
const questionTitle = document.querySelector(".question-title");
const choices = document.querySelector(".choices");
const questionsDiv = document.querySelector(".questions");
const highScores = document.querySelector(".high-scores");
const clearScores = document.querySelector(".clear-scores");

let index = 0;
let time = 0;
let interval = 0;
let timer = document.querySelector(".timer");
let wrapper = document.querySelector(".wrapper");

let questionNumber = 0;

function startQuiz(event) {
    startSection.style.display = 'none';
    questionsDiv.className = "";



}

startBtn.addEventListener('click', startQuiz);


// Click through the 'Start Quiz' button
// start.addEventListener("start", () => { 
//     //check answer
//     if choiceNo === QUIZ[index].answer) {

//     }
//     console.log(startQuiz)
// });