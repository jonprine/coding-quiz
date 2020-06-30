

var startButton = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");

var timerEl = document.getElementById("timer");
var secondsLeft = 75
var timeInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    timerEl.textContent = "Time: " +
    secondsLeft;
      secondsLeft--;

      if (secondsLeft <= 0) {
        timerEl.textContent = "Time: " + 0;
      }

  }, 1000);
};



function startQuiz() {
    startScreen.classList.add("hide")
    questionContainer.classList.remove("hide")
    currentQuestionIndex = 0
    askQuestion()
    startTimer()
}

function askQuestion () {
    question
    
}

function displayQuestion () {
    



}



var questions = [
    {
      question: "Commonly used data types DO NOT INCLUDE",
      answers: [ 
        {text: "1. alerts", correct: true},
        {text: "2. booleans", correct: false},
        {text: "3. strings", correct: false},
        {text: "4. numbers", correct: false}
        ]
    },
    {
      question: "The condition in an if/else statement is enclosed within",
      answers: [
        {text: "1. quotes", correct: false},
        {text: "2. curly brackets", correct: false},
        {text: "3. parenthesis", correct: true},
        {text: "4. square brackets", correct: false}
      ]
    },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: [
      {text: "1. numbers and strings", correct: false},
      {text: "2. other arrays", correct: false},
      {text: "3. booleans", correct: false},
      {text: "4. all of the above", correct: true}
      ]
    },
    {
      question: "A very useful tool used during developmenet and debugging for printing content to the debugger is:",
      answers: [
      {text: "1. JavaScript", correct: false},
      {text: "2. terminal/bash", correct: false},
      {text: "3. for loops", correct: false},
      {text: "4. console.log", correct: true}
      ]
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      answers: [
      {text: "1. commas", correct: false},
      {text: "2. curly brackets", correct: true},
      {text: "3. quotes", correct: false},
      {text: "4. parenthesis", correct: false}
      ]
    }
  ];

startButton.addEventListener("click", startQuiz)
startButton.addEventListener("click", startTimer)