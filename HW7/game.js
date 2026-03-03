let board = document.getElementById("gameBoard");
let attemptDisplay = document.getElementById("attemptCount");

let cards = ["🍎","🍎","🐶","🐶","🚗","🚗","🌟","🌟"];

cards.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let attempts = 0;
let matches = 0;

// Create board
cards.forEach(symbol => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.dataset.symbol = symbol;
    div.innerText = "";
    board.appendChild(div);

    div.addEventListener("click", handleClick);
});

function handleClick() {

    if (lockBoard || this.innerText !== "") return;

    this.innerText = this.dataset.symbol;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    attempts++;
    attemptDisplay.innerText = attempts;

    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        matches++;
        resetTurn();
        checkWin();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.innerText = "";
            secondCard.innerText = "";
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function checkWin() {
    if (matches === cards.length / 2) {

        // Get player data
        let player = JSON.parse(localStorage.getItem("playerData"));

        player.attempts = attempts;

        localStorage.setItem("playerData", JSON.stringify(player));

        window.location.href = "results.html";
    }
}