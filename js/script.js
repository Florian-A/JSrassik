// Doccumentation sur les Canvas
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images#D.C3.A9coupage

// Configuration du jeu.
const height = 250;
const width = 600;
const fps = 60;
const gravity = 6;
let debugMessage;

// Selection du canvas et definition de sa taille.
const canvas = document.querySelector("#game-display");
canvas.width = width;
canvas.height = height;

// Definition du context.
const context = canvas.getContext("2d");

// Definition du system de collision basique.
const collision = [];
for (let y = 0; y < height; y++) {
    collision[y] = [];
    for (let x = 0; x < width; x++) {
        collision[y][x] = { x: x, y: y, ground: 0, cactus: 0, leaf: 0 };
    }
}
// Definition de la collision avec sol.
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (y >= 160) {
            collision[y][x].ground = 1;
        }

    }
}
// Definition de la collision avec un cactus
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (y >= 120 && x >= 370 && x <= 400) {
            collision[y][x].cactus = 1;
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

// Panneau de debugage //
class Debug {
    constructor() {
        this.textFont = "18px monospace";
        this.pos = [20, 20];
        this.lastTime = 0;
        this.fps = 0;
    }
    // Mesure du nombre d'images par secondes.
    startPerfMeasurement() {
        let time = Date.now();
        this.fps = 'FPS:' + ((fps / (time - this.lastTime)) * (1000 / fps)).toFixed(2);
        this.lastTime = time;
    }
    // Dessin dans le context.
    draw() {
        context.font = this.textFont;
        context.fillText(this.fps, this.pos[1], this.pos[0]);
        if (debugMessage !== null) {
            context.fillText(debugMessage, this.pos[1], this.pos[0] + 20);
        }
    }
}

class TRex {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [0, 0];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/dino.png";
        this.imgHeight = 43;
        this.imgWidth = 40;
        this.imgPosY = 0;
        this.imgPosX = 82;
        this.collisionY = false;
        this.collisionX = false;
    }
    draw() {
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgHeight, this.imgWidth);
    }
    gravity() {
        if (this.collisionY === false && collision[this.pos[0]][this.pos[1]].cactus === 0) {
            this.pos[0] += gravity;
        }
    }
    collision() {
        if (collision[this.pos[0]][this.pos[0]].ground === 1) {
            this.collisionY = true;
        }
        if (collision[this.pos[0]][this.pos[1]].cactus === 1) {
            this.collisionX = true;
        }
        else {
            this.collisionX = false;
        }
    }
    jump() {
        this.pos[0] = this.pos[0] - 80;
        this.collisionY = false;
    }
    move(posY, posX) {
        if (this.collisionY === false) {
            this.pos[0] = this.pos[0] + posY;
        }
        if (this.collisionX === false) {
            this.pos[1] = this.pos[1] + posX;
        }
        debugMessage = collision[this.pos[0]][this.pos[1]+30].cactus;

        if(collision[this.pos[0]][this.pos[1]+30].cactus === 1 || collision[this.pos[0]][this.pos[1]].cactus === 1) {
            this.jump();
        }
        this.gravity();
        this.collision();
        this.draw();
    }
}



let player = new TRex();
let debug = new Debug();

// Definition des evenents.
document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        player.jump();
    }
})

function draw() {
    debug.startPerfMeasurement();

    // Dessin du fond d'ecran.
    context.drawImage(background, 0, 0, 600, 250);

    // Dessin du sol.
    context.drawImage(ground, 0, 200, 884, 50);


    // Obstacle
    context.drawImage(obstacle, 0, 0, 25, 50, 400, 160, 25, 50);

    player.move(0, 2);

    debug.draw();
}

setInterval(draw, 1000 / fps);