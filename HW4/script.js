// variable
let stepsTaken = 0;

// function
function makeChoice(choice) {
  stepsTaken = stepsTaken + 1; // addition

  const storyText = document.getElementById("storyText");
  const storyImage = document.getElementById("storyImage");

  // if statements
  if (choice === 1) {
    storyText.textContent =
      "You walk down the left path and hear water flowing nearby. Steps taken: " + stepsTaken;
    storyImage.src = "images/river.jpg";

  } else if (choice === 2) {
    storyText.textContent =
      "The right path leads you to an abandoned cabin. Steps taken: " + stepsTaken;
    storyImage.src = "images/cabin.jpg";

  } else if (choice === 3) {
    storyText.textContent =
      "You stay still. The forest grows quieter… and colder. Steps taken: " + stepsTaken;
    storyImage.src = "images/night.jpg";
  }
}
