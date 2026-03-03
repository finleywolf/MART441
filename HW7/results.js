let playerString = localStorage.getItem("playerData");

if (playerString) {

    let player = JSON.parse(playerString);

    document.getElementById("results").innerHTML =
        "Name: " + player.firstName + " " + player.lastName + "<br>" +
        "Age: " + player.age + "<br>" +
        "Total Attempts: " + player.attempts;
}

document.getElementById("playAgain").addEventListener("click", function () {
    window.location.href = "game.html";
});

document.getElementById("reset").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "index.html";
});