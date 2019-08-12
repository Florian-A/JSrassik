// Doccumentation sur les Canvas
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images

// Configuration du jeu.
const height = 250;
const width = 600;
const fps = 60;
const gravity = 2;

// Selection du canvas et definition de sa taille.
const canvas = document.querySelector("#game-display");
canvas.width = width;
canvas.height = height;
// Definition du context.
const context = canvas.getContext("2d");

// System de collision basique.
const collision = [];
for (let y = 0; y < height; y++) {
    collision[y] = [];
    for (let x = 0; x < width; x++) {
        collision[y][x] = { x: x, y: y, ground: 0, cactus: 0, leaf:0 };
    }
}
// Definition de la collision avec sol.
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if(y>=200)
        {
            collision[y][x] = { x: x, y: y, ground: 1, cactus: 0, leaf:0 };
        }
        
    }
}

// Creation d'un obstacle
let obstacle = new Image();
obstacle.src = "./layout/obstacle.png";

// Creation du ciel / fond d'ecran
let background = new Image();
background.src = "./layout/background.png";

// Creation du sol
let ground = new Image();
ground.src = "./layout/ground.png";

// Game Over
let lGameOver = new Image();
lGameOver.src = "./layout/gameover.png";

let gameOver = false;
let dinoJumpStart = false;

// Definition des evenents.
document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        if (dinoPos[1] === 160 && !gameOver) {
            dinoJumpStart = true;
        }
    }
})

// Panneau de debugage //
class Debug {
    constructor() {
        this.textFont = "18px monospace";
        this.pos = [canvas.width-150, 20];
        this.text = "Debug";
        this.lastTime = 0;
        this.fps = 0;
    }
    // Mesure du nombre d'images par secondes.
    startPerfMeasurement() {
        //this.fps = 'FPS:'+(((performance.now()-this.drawingTime))*fps/(performance.now()-this.drawingTime)).toFixed(2);
        let time = Date.now();
        this.fps = time - this.lastTime * (fps/(time-this.lastTime));
        this.lastTime = Date.now();
    }
    // Dessin dans le context.
    draw() {
        context.font = this.textFont;
        context.fillText(this.fps, this.pos[0], this.pos[1]);
    }
}

class TRex {
    constructor() {
      this.pos = [0, 0];
      this.imgLayout = new Image();
      this.imgLayout.src = "./layout/dino.png";
      this.imgHeight = 43;
      this.imgWidth = 40;
      this.imgPosY = 0;
      this.imgPosX = 82;
    }
    draw() {
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[0], this.pos[1],this.imgHeight, this.imgWidth);
    }
    gravity() {
        this.pos[0] -= gravity;
    }
    collision() {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (collision[y][x].ground == 1) {
                    this.pos[1] = 160;
                }
            }
        }
    }
    move(posY,posX) {
        this.pos[0] = this.pos[0]+posY;
        this.pos[1] = this.pos[1]+posX;
        this.gravity();
        this.collision();
        this.draw();
    }
  }

let player = new TRex();
let debug = new Debug();

function draw() {
    debug.startPerfMeasurement();

    // Dessin du fond d'ecran.
    context.drawImage(background, 0, 0, 600, 250);

    // Dessin du sol.
    context.drawImage(ground, 0, 200, 884, 50);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (collision[y][x].ground == 1) {
                //context.beginPath();
                //context.rect(1, 1, 1, 1);
                //context.fillStyle = "#0095DD";
                //context.fill();
                //context.closePath();
            }
        }
    }

    // Obstacle
    context.drawImage(obstacle, 0, 0, 25, 50, 400, 160, 25, 50);

    player.move(4,4);

    debug.draw();
}

setInterval(draw, 1000/fps);
