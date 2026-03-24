let imgIndex = 0;

function changeImage() {
  $("#mainImage").fadeOut(1000, function () {

    imgIndex = (imgIndex + 1) % images.length;
    $("#mainImage").attr("src", images[imgIndex]);

    // random position
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    $(this).css({ left: x, top: y });

    $(this).fadeIn(1000).animate({
      left: "+=50",
      top: "+=30"
    }, 2000);
  });
}

setInterval(changeImage, 4000);

let textIndex = 0;

function changeText() {
  textIndex = (textIndex + 1) % textArray.length;

  $("#textBox")
    .fadeOut(500, function () {
      $(this).text(textArray[textIndex]).fadeIn(500);
    })
    .animate({
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight
    }, 2000);
}

setInterval(changeText, 3000);

let shapeIndex = 0;

function changeShape() {
  shapeIndex = (shapeIndex + 1) % shapes.length;

  let style = shapes[shapeIndex];

  $("#shape").css(style).animate({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
    width: Math.random() * 150 + 50,
    height: Math.random() * 150 + 50
  }, 2000);
}

setInterval(changeShape, 2500);

const textArray = [
  "I will get my life together tomorrow",
  "drink water. please.",
  "everyone else seems to know what's going on",
  "maybe a nap will fix it",
  "I am thriving (this is a lie)",
  "breathe in. hold. breathe out.",
  "you are not a failure, just buffering",
  "progress is still progress",
  "okay... maybe things are fine",
  "…wait, are they?"
];

const images = [
  "imgs/chaos1.webp",     // messy room
  "imgs/social.jpeg",     // friends / crowd
  "imgs/exercise.jpeg",   // running / gym
  "imgs/books.jpeg",      // studying
  "imgs/nature.jpeg",     // peaceful nature
  "imgs/laptop.jpeg",       // laptop grind
  "imgs/city.jpeg",       // environment
  "imgs/money.jpeg"       // money / bills
];

const shapes = [
  { borderRadius: "0%", background: "#ff4d4d" },     // stress square
  { borderRadius: "50%", background: "#4dff88" },    // calm circle
  { borderRadius: "30% 70% 70% 30%", background: "#4da6ff" }, // chaos blob
  { borderRadius: "10%", background: "#ffd24d" }     // weird in-between
];