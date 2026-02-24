// 12 blank images
let blankImages = [
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png",
    "images/blank.png"
];

// 6 images, each repeated twice (pairs)
let actualImages = [
    "images/img1.jpeg",
    "images/img1.jpeg",
    "images/img2.png",
    "images/img2.png",
    "images/img3.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img6.jpeg"
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        // swap
        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

shuffle(actualImages);

let gameBoard = document.getElementById("gameBoard");

for (let i = 0; i < blankImages.length; i++) {

    let img = document.createElement("img");
    img.src = blankImages[i];
    img.classList.add("tile");

    // store index 
    img.setAttribute("data-index", i);

    img.addEventListener("click", revealImage);

    gameBoard.appendChild(img);
}
function revealImage() {

    let index = this.getAttribute("data-index");

    this.src = actualImages[index];
}