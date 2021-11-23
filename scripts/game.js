let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function addTurn() {
    // Empty playerMoves array
    game.playerMoves = [];
    // Pick random button and add to currentGame array
    let randomButton = game.choices[Math.floor(Math.random()*game.choices.length)];
    game.currentGame.push(randomButton);
    // showTurns()
}

function lightsOn(element) {
    let circ = document.getElementById(element);
    circ.classList.add("light");
    setTimeout(() => {
        circ.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };
