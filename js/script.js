// Doccumentation sur les Canvas
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images#D.C3.A9coupage

// Configuration du jeu.
const height = 250;
const width = 600;
const fps = 60;
const gravity = 3;
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

function clearCollision() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            collision[y][x].ground = 0;
            collision[y][x].cactus = 0;
            collision[y][x].leaf = 0;

        }
    }
}

// Definition de la collision avec sol.
function groundCollision() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (y >= 222) {
                collision[y][x].ground = 1;
            }

        }
    }
}

function dumpCollision() {
    let dump = ``;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            dump += collision[y][x].cactus;
        }
        dump += `
        `;

    }
    console.log(dump);
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

function showCatusCollision() {

    if (debugLevel >= 2) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (collision[y][x].cactus === 1) {
                    context.fillStyle = "rgba(0,255,0,0.5)";
                    context.fillRect(x, y, 1, 1);
                }
                // Affichage du debut de la collision (carre rouge)
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

//                                           Panneau de débogage
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bbbbbbbb                                                  
// DDDDDDDDDDDDD                           b::::::b                                                  
// D::::::::::::DDD                        b::::::b                                                  
// D:::::::::::::::DD                      b::::::b                                                  
// DDD:::::DDDDD:::::D                      b:::::b                                                  
//   D:::::D    D:::::D     eeeeeeeeeeee    b:::::bbbbbbbbb    uuuuuu    uuuuuu     ggggggggg   ggggg
//   D:::::D     D:::::D  ee::::::::::::ee  b::::::::::::::bb  u::::u    u::::u    g:::::::::ggg::::g
//   D:::::D     D:::::D e::::::eeeee:::::eeb::::::::::::::::b u::::u    u::::u   g:::::::::::::::::g
//   D:::::D     D:::::De::::::e     e:::::eb:::::bbbbb:::::::bu::::u    u::::u  g::::::ggggg::::::gg
//   D:::::D     D:::::De:::::::eeeee::::::eb:::::b    b::::::bu::::u    u::::u  g:::::g     g:::::g 
//   D:::::D     D:::::De:::::::::::::::::e b:::::b     b:::::bu::::u    u::::u  g:::::g     g:::::g 
//   D:::::D     D:::::De::::::eeeeeeeeeee  b:::::b     b:::::bu::::u    u::::u  g:::::g     g:::::g 
//   D:::::D    D:::::D e:::::::e           b:::::b     b:::::bu:::::uuuu:::::u  g::::::g    g:::::g 
// DDD:::::DDDDD:::::D  e::::::::e          b:::::bbbbbb::::::bu:::::::::::::::uug:::::::ggggg:::::g 
// D:::::::::::::::DD    e::::::::eeeeeeee  b::::::::::::::::b  u:::::::::::::::u g::::::::::::::::g 
// D::::::::::::DDD       ee:::::::::::::e  b:::::::::::::::b    uu::::::::uu:::u  gg::::::::::::::g 
// DDDDDDDDDDDDD            eeeeeeeeeeeeee  bbbbbbbbbbbbbbbb       uuuuuuuu  uuuu    gggggggg::::::g 
//                                                                                           g:::::g 
//                                                                               gggggg      g:::::g 
//                                                                               g:::::gg   gg:::::g 
//                                                                                g::::::ggg:::::::g 
//                                                                                 gg:::::::::::::g  
//                                                                                   ggg::::::ggg    
//                                                                                      gggggg       
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Ground {

}
//                                             Gestion des cactus
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////                      
class Cactus {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [177, width];
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
            }
        }
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
        this.pos = [177, width];
    }
    move() {
        if (this.enabled === true) {
            this.pos[1] -= 3;
            this.collision();
            this.draw();
            //this.showCollision();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }
}
//                                          Gestion des dinosaures T-Rex
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        this.jumpInProgress = false;
        this.roofOfJump = 70;
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
        if(this.jumpInProgress===true || this.collisionY === false) {
            this.imgPosY = 0;
            this.imgPosX = 0;
            this.imgSteep = 0;
        }
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

        debugMessage = 'Y:';
        debugMessage += this.collisionY;
        debugMessage += ' ';
        debugMessage += 'X:';
        debugMessage += this.collisionX;
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
        this.collisionY = false;
        this.jumpInProgress = true;
    }
    jumpControl() {
        if (this.jumpInProgress === true && this.pos[0] >= this.roofOfJump) {
            this.pos[0] = Math.round(this.pos[0] * 0.92);
        }
        else {
            this.jumpInProgress = false;
        }
    }
    move() {

        if (collision[this.posCollision[0]][this.posCollision[1] + 30].cactus === 1) {
            this.jump();
        }

        this.jumpControl();
        this.gravity();
        this.collision();
        this.draw();
        this.showCollision();
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
cactus[1] = new Cactus("rgba(0,255,0,0.5)");
cactus[2] = new Cactus("rgba(255,115,0,0.5)");
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

    clearCollision();
    groundCollision();

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
    if (renderedFrame % 300 === 299) {
        cactus[3].enable();
    }
    cactus[0].move();
    cactus[1].move();
    cactus[2].move();
    cactus[3].move();

    player.move(0, 0);
    showGroundCollision();
    showCatusCollision();
    showGrid();

    debug.draw();
}

startInterval();