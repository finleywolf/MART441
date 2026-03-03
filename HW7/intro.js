document.getElementById("startBtn").addEventListener("click", function () {

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let age = document.getElementById("age").value.trim();

    // Basic validation
    if (firstName === "" || lastName === "" || age === "" || isNaN(age)) {
        alert("Please enter valid information.");
        return;
    }

    // Create player object
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
        attempts: 0
    };

    // Convert to JSON string
    let playerString = JSON.stringify(player);

    // Save to localStorage
    localStorage.setItem("playerData", playerString);

    // Go to game page
    window.location.href = "game.html";
});