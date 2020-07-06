// variables

var startButton = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var inputForm = document.getElementById("input-form");
var initials = document.getElementById("initials");
var linkHigh = document.getElementById("link");

var randomQuestion, currentQuestionIndex;
var feedbackEl = document.getElementById('feedback');

var timerEl = document.getElementById("timer");
var secondsLeft = 75
var timeInterval;

var score;

var recordScore = document.getElementById("finished");
var highScores = document.getElementById("high");
var listNames = document.getElementById("list-names");
var backBtn = document.getElementById("goback-btn");
var clearScores = document.getElementById("clear-btn");



//create timer

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


// function to begin quiz
function startQuiz() {
  startScreen.classList.add("hide")
  questionContainer.classList.remove("hide")
  recordScore.style.display = "none"
  randomQuestion = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  askQuestion()
}


function askQuestion() {
  getQuestion(randomQuestion[currentQuestionIndex])
  getAnswers(randomQuestion[currentQuestionIndex])
}


function getQuestion(question) {
  questionEl.innerText = question.question
}

function getAnswers(question) {
  answerBtns.innerHTML = "";
  var answers = question.answers
  for (i = 0; i < answers.length; i++) {
    // create buttons for answers
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = answers[i].text;
    btn.setAttribute("data-correct", answers[i].correct);
    btn.addEventListener("click", correctAnswer)
    answerBtns.appendChild(btn);
  }
}

function wrongAnswer() {
  secondsLeft = secondsLeft - 10;
}

function seeScore() {
  recordScore.classList.remove("hide")
  window.location.href = "./assets/highscores.html"

}

function correctAnswer() {
  if (this.dataset.correct === "true") {
    feedbackEl.innerText = "Correct!"
  } else {
    feedbackEl.innerText = "Wrong!"
    wrongAnswer()
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++
    askQuestion()
  } else {
    // stops timer
    clearInterval(timerInterval);
    // record score - not sure why I'm having to add 11 to get right number. guessing to offset wrongAnswer function.
    score = secondsLeft + 11;
    recordScore.style.display = "block"
    questionContainer.classList.add("hide")
    saveScore()
  }
}

var list = JSON.parse(localStorage.getItem("list"));

function saveScore() {
  if (list === null) {
    list = [];
  }

  inputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var userInput = initials.value.trim();

    var newRecord = {
      name: userInput,
      score: secondsLeft + 11
    };

    list.push(newRecord)

    localStorage.setItem("list", JSON.stringify(list))
    recordScore.style.display = "none"
    highScores.style.display = "block"
    showHighScore()
  });

};
// return to main screen
function backHome() {
  highScores.style.display = "none"
  startScreen.classList.remove("hide")

};

function showHighScore() {
  var list = JSON.parse(localStorage.getItem("list"))
  if (list === null) {
    list == [i];
  }

  var listNames = document.getElementById("list-names");

  for (var i = 0; i < list.length; i++) {
    var newLiEl = document.createElement("li");

    newLiEl.textContent = list[i].name + "  " + 
    list[i].score;
    listNames.appendChild(newLiEl);


  }
};

// clears high scores list
function clearNames() {
  listNames.textContent = "";
  localStorage.clear()
}

// to view high scores
function viewHigh() {
  highScores.style.display = "block"
  startScreen.classList.remove("hide")
  startScreen.classList.add("hide")


}

// questions and answers for quiz
var questions = [
  {
    question: "Commonly used data types do not include",
    answers: [
      { text: "1. alerts", correct: true },
      { text: "2. booleans", correct: false },
      { text: "3. strings", correct: false },
      { text: "4. numbers", correct: false }
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed within",
    answers: [
      { text: "1. quotes", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. parenthesis", correct: true },
      { text: "4. square brackets", correct: false }
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      { text: "1. numbers and strings", correct: false },
      { text: "2. other arrays", correct: false },
      { text: "3. booleans", correct: false },
      { text: "4. all of the above", correct: true }
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. terminal/bash", correct: false },
      { text: "3. for loops", correct: false },
      { text: "4. console.log", correct: true }
    ]
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "1. commas", correct: false },
      { text: "2. curly brackets", correct: true },
      { text: "3. quotes", correct: false },
      { text: "4. parenthesis", correct: false }
    ]
  }
];


// click events functionality 
startButton.addEventListener("click", startQuiz)
startButton.addEventListener("click", startTimer)
backBtn.addEventListener("click", backHome)
clearScores.addEventListener("click", clearNames)
linkHigh.addEventListener("click", viewHigh)