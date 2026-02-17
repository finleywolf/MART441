let stepsTaken = 0;
let gameActive = true;

// MAIN FUNCTION (handles textbox input)
function handleInput() {
  if (!gameActive) return;

  const inputElement = document.getElementById("userInput");
  const userChoice = inputElement.value.toLowerCase().trim();

  inputElement.value = ""; // clear textbox

  processChoice(userChoice);
}

// FUNCTION THAT TAKES A PARAMETER
function processChoice(choice) {
  const storyText = document.getElementById("storyText");
  const storyImage = document.getElementById("storyImage");

  stepsTaken++;

  // CONTROL STRUCTURE
  if (choice === "left") {
    storyText.textContent =
      "You walk left and find a river. Type: cross or follow. Steps: " + stepsTaken;
    storyImage.src = "images/river.jpeg";

  } else if (choice === "right") {
    storyText.textContent =
      "You walk right and find a cabin. Type: enter or knock. Steps: " + stepsTaken;
    storyImage.src = "images/cabin.jpeg";

  } else if (choice === "stay") {
    storyText.textContent =
      "You stay still... night falls. Type: sleep or run. Steps: " + stepsTaken;
    storyImage.src = "images/night.jpeg";

  } else if (choice === "cross") {
    storyText.textContent =
      "You cross the river safely and escape! Type: restart";
    storyImage.src = "images/sunrise.jpeg";
    endGame();

  } else if (choice === "enter") {
    storyText.textContent =
      "The cabin door locks behind you. You are trapped. Type: restart";
    storyImage.src = "images/darkcabin.jpeg";
    endGame();

  } else if (choice === "restart") {
    restartGame();
  } else {
    storyText.textContent =
      "Invalid choice. Try again.";
  }

  changeBackground();
}

// FUNCTION THAT RETURNS A VALUE
function getDangerLevel() {
  if (stepsTaken >= 5) {
    return "high";
  } else {
    return "low";
  }
}

// LOOP EXAMPLE
function changeBackground() {
  const danger = getDangerLevel();
  const body = document.body;

  // while loop example
  let i = 0;
  while (i < 1) {
    if (danger === "high") {
      body.style.backgroundColor = "#3b0a0a";
    } else {
      body.style.backgroundColor = "#0f1a13";
    }
    i++;
  }
}

function endGame() {
  gameActive = false;
}

function restartGame() {
  stepsTaken = 0;
  gameActive = true;

  document.getElementById("storyText").textContent =
    "You wake up alone in the forest. Type: left, right, or stay.";

  document.getElementById("storyImage").src = "images/woods.jpeg";
  document.body.style.backgroundColor = "#0f1a13";
}
