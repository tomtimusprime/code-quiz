const startButton = document.querySelector("#start");
startButton.addEventListener("click", startGame)
const questionContainerElement = document.querySelector("#question-container");
const answer1btn = document.querySelector("#answer1");
const answer2btn = document.querySelector("#answer2");
const answer3btn = document.querySelector("#answer3");
const answer4btn = document.querySelector("#answer4");

let timerTextElement = document.querySelector("#timer-text");
let timerCount = 75;
timerTextElement.textContent = `Time Remaining: ${timerCount}`;
quizTimer();

function startGame() {
  console.log("game started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  answer1btn.classList.remove("hide");
  answer2btn.classList.remove("hide");
  answer3btn.classList.remove("hide");
  answer4btn.classList.remove("hide");

}


function quizTimer() {
    let timerId = setInterval(function() {
        timerCount--;
        timerTextElement.textContent = `Time Remaining: ${timerCount}`;
        if(timerCount === 0) {
            clearTimeout(timerId);
        }
    }, 1000)
}

const questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "Which framework was made by facebook and is in high demand right now?",
        answers: {
            a: "Angular",
            b: "Vue",
            c: "JQuery",
            d: "React"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the latest version of javscript right now?",
        answers: {
            a: "ES5",
            b: "ES6",
            c: "ES7",
            d: "ES4"
        },
        correctAnswer: "b",
    }
  ];

  

  function setNextQuestion() {

  }

  function selectAnswer() {

  }