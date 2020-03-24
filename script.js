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
    {question}
]