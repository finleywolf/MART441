const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let obstacles = [];
let collectibles = [];
let score = 0;

// ------------------ CLASSES ------------------

class Obstacle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Collectible {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.active = true;
  }

  draw() {
    if (!this.active) return;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Player {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.size = 20;
    this.speed = 3;
  }

  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  move(dx, dy) {
    let newX = this.x + dx;
    let newY = this.y + dy;

    // Stay in bounds
    if (newX < 0 || newX + this.size > canvas.width) return;
    if (newY < 0 || newY + this.size > canvas.height) return;

    // Check obstacle collision BEFORE moving
    for (let obs of obstacles) {
      if (rectCollision(newX, newY, this.size, this.size, obs)) {
        return; // BLOCK movement
      }
    }

    this.x = newX;
    this.y = newY;
  }
}

const player = new Player();

// ------------------ COLLISION ------------------

function rectCollision(px, py, pSize, pSize2, obj) {
  return (
    px < obj.x + obj.width &&
    px + pSize > obj.x &&
    py < obj.y + obj.height &&
    py + pSize2 > obj.y
  );
}

function circleRectCollision(circle, player) {
  return (
    player.x < circle.x + circle.size &&
    player.x + player.size > circle.x - circle.size &&
    player.y < circle.y + circle.size &&
    player.y + player.size > circle.y - circle.size
  );
}

// ------------------ LOAD JSON ------------------

async function loadData() {
  const obstacleData = await fetch("obstacles.json").then(r => r.json());
  obstacles = obstacleData.map(o => new Obstacle(o.x, o.y, o.width, o.height, o.color));

  const collectibleData = await fetch("collectibles.json").then(r => r.json());
  collectibles = collectibleData.map(c => new Collectible(c.x, c.y, c.size, c.color));
}

loadData();

// ------------------ INPUT ------------------

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.move(0, -player.speed);
  if (e.key === "ArrowDown") player.move(0, player.speed);
  if (e.key === "ArrowLeft") player.move(-player.speed, 0);
  if (e.key === "ArrowRight") player.move(player.speed, 0);
});

// ------------------ GAME LOOP ------------------

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw obstacles
  obstacles.forEach(o => o.draw());

  // Draw & check collectibles
  collectibles.forEach(c => {
    if (c.active && circleRectCollision(c, player)) {
      c.active = false;
      score++;
    }
    c.draw();
  });

  // Draw player
  player.draw();

  // Draw score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);

  requestAnimationFrame(update);
}

update();