// Doccumentation sur les Canvas
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images#D.C3.A9coupage

// Configuration du jeu.
const height = 250;
const width = 600;
const fps = 60;
const gravity = 1;
let debugLevel = 2;
let debugMessage;
let intervalStarted = false;

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
        collision[y][x] = { y: y, x: x, ground: 0, cactus: 0, leaf: 0 };
    }
}
// Definition de la collision avec sol.
for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (y >= 200) {
            collision[y][x].ground = 1;
        }

    }
}

function breakInterval() {
    clearInterval(interval);
    intervalStarted = false;
}

function nextInterval() {
    intervalLoop();
}

function startInterval() {
    if (!intervalStarted) {
        interval = setInterval(intervalLoop, 1000 / fps);
        intervalStarted = true;
    }

}

function showGroundCollision() {

    let groundYStart = 0;
    let groundYEnd = height;
    let groundXStart = 0;
    let groundXEnd = width;
    if (debugLevel >= 2) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (collision[y][0].ground === 1 && collision[y - 1][0].ground == 0) {
                    groundYStart = collision[y][0].y;
                }
            }
        }
        context.fillStyle = "rgba(0,0,0,0.5)";
        context.fillRect(groundXStart, groundYStart, groundXEnd - groundXStart, groundYEnd - groundYStart);
        context.stroke();
    }
}

function showGrid() {

    let gridYStart = 0;
    let gridYEnd = height;
    let gridXStart = 0;
    let gridXEnd = width;
    if (debugLevel >= 2) {

        for (let y = 0; y < height; y++) {
            context.fillStyle = "rgba(255,0,0,1)";
            if (y % 50 === 49) {
                context.fillRect(gridXStart, y, gridXEnd - gridXStart, 1 - gridYStart);
                context.fillText(y + 1, gridXEnd - 40, y);
            }

        }
        for (let x = 0; x < width; x++) {
            context.fillStyle = "rgba(255,0,0,1)";
            if (x % 50 === 49) {
                context.fillRect(x + 1, gridYStart, 1 - gridXStart, gridYEnd - gridYStart);
                context.fillText(x + 1, x, gridYEnd - 25);
            }
        }
        context.stroke();
    }
}


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
        if (debugLevel >= 1) {
            context.font = this.textFont;
            context.fillStyle = "rgba(0,0,0,1)";
            context.fillText(this.fps, this.pos[1], this.pos[0]);
            if (debugMessage !== undefined) {
                context.fillText(debugMessage, this.pos[1], this.pos[0] + 20);
            }
        }

    }
}
// Gestion des cactus
//////////////////////////////////////////////
//                                        
//                MMMMMMMM                
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//   MMMMM      MMMMMMMMMMM               
// MMMMMMMM     MMMMMMMMMMM               
// MMMMMMMM     MMMMMMMMMMM               
// MMMMMMMM     MMMMMMMMMMM               
// MMMMMMMM     MMMMMMMMMMM               
// MMMMMMMM     MMMMMMMMMMM       MMMM    
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
// MMMMMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//   MMMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//    MMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//      MMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//        MMMMMMMMMMMMMMMMM     MMMMMMMM  
//              MMMMMMMMMMM     MMMMMMMM  
//              MMMMMMMMMMMMMMMMMMMMMM    
//              MMMMMMMMMMMMMMMMMMMMM     
//              MMMMMMMMMMMMMMMMMMM       
//              MMMMMMMMMMMMMMMMMM        
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//              MMMMMMMMMMM               
//////////////////////////////////////////////                       
class Cactus {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [160, width];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/obstacle.png";
        this.imgHeight = 50;
        this.imgWidth = 25;
        this.imgPosY = 0;
        this.imgPosX = 0;
        this.enabled = false;
    }
    draw() {
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    collision() {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {
                    collision[y][x].cactus = 1;
                }
                else if (collision[y][x].cactus === 0) {
                    collision[y][x].cactus = 0;
                }
                else {
                    collision[y][x].cactus = 0;
                }
            }
        }
    }
    showCollision() {
        if (debugLevel >= 2) {
            for (let y = 0; y < height; y++) {

                for (let x = 0; x < width; x++) {

                    if (collision[y][x].cactus === 1) {
                        context.fillStyle = "rgba(0,0,0,0.5)";
                        context.fillRect(x, y, 1, 1);
                    }
                    if (typeof (collision[y - 1]) !== "undefined" && typeof (collision[y - 1][x - 1]) !== "undefined") {
                        if (typeof (collision[y - 1][x]) !== "undefined" && typeof (collision[y][x - 1]) !== "undefined") {
                            if ((collision[y - 1][x].cactus === 0 && collision[y][x - 1].cactus === 0) && collision[y][x].cactus === 1) {
                                context.fillStyle = "rgba(255,0,0,1)";
                                context.fillRect(x, y, 5, 5);
                            }
                        }
                    }
                }
            }
            context.stroke();
        }
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
        this.pos = [160, width];
    }
    move() {
        if (this.enabled === true) {
            this.pos[1] -= 1;
            this.collision();
            this.draw();
            this.showCollision();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }
}
// Gestion des dinosaures T-Rex
//////////////////////////////////////////////
//                      MMMMMMMMMMMMMMMM  
//                    MMMM  MMMMMMMMMMMMMM
//                    MMMM  MMMMMMMMMMMMMM
//                    MMMMMMMMMMMMMMMMMMMM
//                    MMMMMMMMMMMMMMMMMMMM
//                    MMMMMMMMMMMMMMMMMMMM
//                    MMMMMMMMMM          
//                    MMMMMMMMMM          
//                    MMMMMMMMMMMMMMMM    
//MM                MMMMMMMMMM            
//MM             MMMMMMMMMMMMM            
//MMMM        MMMMMMMMMMMMMMMMMMMM        
//MMMM        MMMMMMMMMMMMMMMMMMMM        
//MMMMMM    MMMMMMMMMMMMMMMMMM  MM        
//MMMMMMMMMMMMMMMMMMMMMMMMMMMM            
//MMMMMMMMMMMMMMMMMMMMMMMMMMMM            
//  MMMMMMMMMMMMMMMMMMMMMMMMMM            
//  MMMMMMMMMMMMMMMMMMMMMMMM              
//    MMMMMMMMMMMMMMMMMMMMMM              
//      MMMMMMMMMMMMMMMMMM                
//        MMMMMMMMMMMMMM                  
//          MMMMMM  MMMM                  
//          MMMMMM  MMMM                  
//          MMMM      MM                  
//          MM        MM                  
//          MMMM      MMMM                
//          MMMM      MMMM                
//////////////////////////////////////////////
class TRex {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [110, 100];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/dino.png";
        this.imgHeight = 43;
        this.imgWidth = 40;
        this.imgPosY = 0;
        this.imgPosX = 82;
        this.imgSteep = 0;
        this.posCollision = [this.pos[0] + this.imgHeight, this.pos[1] + this.imgWidth];
        this.collisionY = false;
        this.collisionX = false;
    }
    draw() {
        if (this.imgSteep <= 6) {
            this.imgPosY = 0;
            this.imgPosX = 82;
        }
        else if (this.imgSteep <= 11) {
            this.imgPosY = 0;
            this.imgPosX = 41;
        }
        else {
            this.imgPosY = 0;
            this.imgPosX = 41;
            this.imgSteep = 0;
        }
        this.imgSteep++;
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    gravity() {
        if (this.collisionY === false) {
            this.pos[0] += gravity;
        }
    }
    collision() {
        this.posCollision = [this.pos[0] + this.imgHeight, this.pos[1] + this.imgWidth];

        let collisionY;
        for (let index = 0; index <= this.imgWidth; index++) {

            if (collision[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                collisionY = true;
            }
        }
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }
        if (collision[this.posCollision[0]][this.posCollision[1]].ground === 1) {
            this.collisionY = true;
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (collision[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                collisionX = true;
            }
        }
        if (collisionX == true) {
            this.collisionX = true;
        }
        else {
            this.collisionX = false;
        }

        debugMessage='Y:';
        debugMessage+=this.collisionY;
        debugMessage+='X:';
        debugMessage+=this.collisionX;
    }
    showCollision() {
        if (debugLevel >= 2) {
            context.fillStyle = "rgba(0,0,0,0.5)";
            context.fillRect(this.pos[1], this.pos[0], this.posCollision[1] - this.pos[1], this.posCollision[0] - this.pos[0]);
            context.fillStyle = "rgba(255,0,0,1)";
            context.fillRect(this.pos[1], this.pos[0], 5, 5);
            context.stroke();
        }
    }
    jump() {
        if (this.pos[0] > 100) {
            this.pos[0] = this.pos[0] - 100;
        }
        else {
            this.pos[0] = 0;
        }
        this.collisionY = false;
    }
    move(posY, posX) {
        if (this.collisionY === false) {
            this.pos[0] = this.pos[0] + posY;
        }
        if (this.collisionX === false) {
            this.pos[1] = this.pos[1] + posX;
        }
        //if (collision[this.pos[0]][this.pos[1] + 30].cactus === 1 || collision[this.pos[0]][this.pos[1]].cactus === 1 && collision[this.pos[0] - 1][this.pos[1]].cactus === 0) {
        if (collision[this.pos[0]][this.pos[1] + 30].cactus === 1) {
            //this.jump();
        }
        this.gravity();
        this.collision();
        this.draw();
        this.showCollision();
    }
}


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

let debug = new Debug();
let player = new TRex();

let cactus = []
cactus[0] = new Cactus();
cactus[1] = new Cactus();
cactus[2] = new Cactus();
cactus[3] = new Cactus();

// Definition des evenents.
document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        player.jump();
    }
})

// Gestion des frames
document.addEventListener("keydown", function (event) {
    if (event.which === 36) {
        startInterval();
    }
    if (event.which === 35) {
        breakInterval();
    }
    if (event.which === 45) {
        nextInterval();
    }
    if (event.which === 49) {
        debugLevel = 1;
    }
    if (event.which === 50) {
        debugLevel = 2;
    }
    if (event.which === 48) {
        debugLevel = 0;
    }
})

let renderedFrame = 0;

function intervalLoop() {
    debug.startPerfMeasurement();
    renderedFrame++;

    // Dessin du fond d'ecran.
    context.drawImage(background, 0, 0, 600, 250);

    // Dessin du sol.
    context.drawImage(ground, 0, 200, 884, 50);

    if (renderedFrame % 50 === 49) {
        cactus[1].enable();
    }
    if (renderedFrame % 100 === 99) {
        cactus[2].enable();
    }
    //cactus[0].move();
    cactus[1].move();
    cactus[2].move();

    player.move(0, 0);
    showGroundCollision();
    showGrid();

    debug.draw();
}

startInterval();