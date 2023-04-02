// Define Variables  - can also use getElementById
const startBtn = document.querySelector("#start-button");
const startSection = document.querySelector(".start-screen");
const questionTitle = document.querySelector(".question-title");
const choices = document.querySelector(".choices");
const submitBtn = document.querySelector("#submit-button");
const questionsDiv = document.querySelector(".questions");
const highScores = document.querySelector(".high-scores");
const clearScores = document.querySelector(".clear-scores");

let index = 0;
let time = 0;
let interval = 0;
let timeleft = 0;
let timer = document.querySelector(".timer");
let wrapper = document.querySelector(".wrapper");



function startQuiz(event) {
    startSection.style.display = 'none';
    questionsDiv.className = "";



}
// Event listen er for staring quiz and submitting choices
startBtn.addEventListener('click', start-button);
submitBtn.addEventListener('click, submit-button');


