let ulElement = document.querySelector("#highscores");
let highScores = localStorage.getItem("highscores");
    if(highScores === null) {
      highScores = [];
    } else {
      highScores = JSON.parse(highScores);
    }
for(i = 0; i < highScores.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = highScores[i].initials + "-" + highScores[i].score;
    ulElement.appendChild(liElement);
}
