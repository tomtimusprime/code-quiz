let timerTextElement = document.querySelector("#timer-text");
let timerCount = 75;
timerTextElement.textContent = `Time Remaining: ${timerCount}`;
quizTimer();

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