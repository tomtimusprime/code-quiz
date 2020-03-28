//================================
//Declaring the questions variable
//================================

const questions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      {text: "Douglas Crockford", correct: false},
      {text: "Sheryl Sandberg", correct: false},
      {text: "Brendan Eich", correct: true},
      {text: "Bill Gates", correct: false}
    ]
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      { text: "Node.js", correct: false},
      { text: "TypeScript", correct: false},
      { text: "npm", correct: true},
      { text: "Java", correct: false}
    ]
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      {text: "Angular", correct: false},
      {text: "jQuery", correct: false},
      {text: "RequireJS", correct: false},
      {text: "ESLint", correct: true}
    ]
  },
  {
      question: "Which framework was made by facebook and is in high demand right now (March 2020)?",
      answers: [
          {text: "Angular", correct: false},
          {text: "Vue", correct: false},
          {text: "JQuery", correct: false},
          {text: "React", correct: true}
      ]
  },
  {
      question: "What is the latest version of javscript right now?",
      answers: [
          {text: "ES5", correct: false},
          {text: "ES6", correct: true},
          {text: "ES7", correct: false},
          {text: "ES4", correct: false}
      ]
  }
];


//=========================
//Declare the DOM variables
//=========================
const startButton = document.querySelector("#start");
const questionContainerElement = document.querySelector("#question-container");
const nextBtn = document.querySelector("#next");
const questionElement = document.querySelector("#question-element");
const answerButtonsElement = document.querySelector("#answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;

let timerTextElement = document.querySelector("#timer-text");
let timerCount = 75;
let timer;
timerTextElement.textContent = `Time Remaining: ${timerCount}`;

//==========================
//Start Button functionality
//==========================
startButton.addEventListener("click", startGame)

function startGame() {
  timer = quizTimer();
  console.log("game started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  questionElement.classList.remove("hide")
  nextBtn.classList.remove("hide");
  answerButtonsElement.classList.remove("hide");  
  shuffledQuestions = questions.sort(function() {
    return Math.random() - 0.5;
  })
  currentQuestionIndex = 0; 
  setNextQuestion();
}
function setNextQuestion() {
  resetQuestions();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


//Next Button functionality
nextBtn.addEventListener("click", function() {
  currentQuestionIndex++;
  setNextQuestion();
});

//Quiz Timer Functionality
function quizTimer() {
  let timerId = setInterval(function() {
    timerCount--;  
    timerTextElement.textContent = `Time Remaining: ${timerCount}`;
      if(timerCount === 0) {
          clearTimeout(timerId);
          startButton.classList.add("hide");
          nextBtn.classList.add("hide");
          answerButtonsElement.classList.add("hide");
          questionContainerElement.textContent = "Game Over. You've run out of time!"
      }
  }, 1000);
  let timerObject = {stop: function(){clearTimeout(timerId);}};
  return timerObject;
}

function showQuestion(question) {
  questionElement.innerText = question.question;
    question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.setAttribute("class", "btn btn-primary button-effects");
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button); 
  })
}

function resetQuestions () {
  nextBtn.classList.add("hide");
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if(!correct) {
    timerCount -=5;
  }
  console.log(shuffledQuestions.length);
  console.log(currentQuestionIndex);
  if(shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } 
  else {
    // startButton.innerText = "Restart Quiz"
    // startButton.classList.remove("hide");
    inputInitials();
  }
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if(correct){
    element.classList.add("correct");
  }
  else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}



function inputInitials() {
  timer.stop();
  let highscore = timerCount;
  console.log(highscore);
  answerButtonsElement.classList.add("hide");
  questionElement.innerText = "Enter your initials to add yourself to the high scores list!"
  let submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.setAttribute("class", "btn btn-primary button-effects");
  let formSubmission = document.createElement("input");
  formSubmission.setAttribute("type", "text");
  formSubmission.setAttribute("label", "Initials");
  questionContainerElement.appendChild(formSubmission);
  questionContainerElement.appendChild(submitButton);
}

//Why is getting it wrong and right causing it reduce by 5 when I set it to 1?
//WHy is the timer going into the negatives?
//Once the game is over how can I stop the clock?
//Once the game is over how can I trigger a field to input your name?
//Once the game is over how can I save to local storage the name and score you put in?

//