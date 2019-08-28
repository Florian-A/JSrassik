//                                                                                                                      
//           JJJJJJJJJJJ   SSSSSSSSSSSSSSS                                                      iiii  kkkkkkkk           
//           J:::::::::J SS:::::::::::::::S                                                    i::::i k::::::k           
//           J:::::::::JS:::::SSSSSS::::::S                                                     iiii  k::::::k           
//           JJ:::::::JJS:::::S     SSSSSSS                                                           k::::::k           
//             J:::::J  S:::::S           rrrrr   rrrrrrrrr   aaaaaaaaaaaaa      ssssssssss   iiiiiii  k:::::k    kkkkkkk
//             J:::::J  S:::::S           r::::rrr:::::::::r  a::::::::::::a   ss::::::::::s  i:::::i  k:::::k   k:::::k 
//             J:::::J   S::::SSSS        r:::::::::::::::::r aaaaaaaaa:::::ass:::::::::::::s  i::::i  k:::::k  k:::::k  
//             J:::::j    SS::::::SSSSS   rr::::::rrrrr::::::r         a::::as::::::ssss:::::s i::::i  k:::::k k:::::k   
//             J:::::J      SSS::::::::SS  r:::::r     r:::::r  aaaaaaa:::::a s:::::s  ssssss  i::::i  k::::::k:::::k    
// JJJJJJJ     J:::::J         SSSSSS::::S r:::::r     rrrrrrraa::::::::::::a   s::::::s       i::::i  k:::::::::::k     
// J:::::J     J:::::J              S:::::Sr:::::r           a::::aaaa::::::a      s::::::s    i::::i  k:::::::::::k     
// J::::::J   J::::::J              S:::::Sr:::::r          a::::a    a:::::assssss   s:::::s  i::::i  k::::::k:::::k    
// J:::::::JJJ:::::::J  SSSSSSS     S:::::Sr:::::r          a::::a    a:::::as:::::ssss::::::si::::::ik::::::k k:::::k   
//  JJ:::::::::::::JJ   S::::::SSSSSS:::::Sr:::::r          a:::::aaaa::::::as::::::::::::::s i::::::ik::::::k  k:::::k  
//    JJ:::::::::JJ     S:::::::::::::::SS r:::::r           a::::::::::aa:::as:::::::::::ss  i::::::ik::::::k   k:::::k 
//      JJJJJJJJJ        SSSSSSSSSSSSSSS   rrrrrrr            aaaaaaaaaa  aaaa sssssssssss    iiiiiiiikkkkkkkk    kkkkkkk
//                                                                                                                      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function generateNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//         .d8888b.   .d88888b.  888      888      8888888  .d8888b. 8888888  .d88888b.  888b    888 
//        d88P  Y88b d88P" "Y88b 888      888        888   d88P  Y88b  888   d88P" "Y88b 8888b   888 
//        888    888 888     888 888      888        888   Y88b.       888   888     888 88888b  888 
//        888        888     888 888      888        888    "Y888b.    888   888     888 888Y88b 888 
//        888        888     888 888      888        888       "Y88b.  888   888     888 888 Y88b888 
//        888    888 888     888 888      888        888         "888  888   888     888 888  Y88888 
//        Y88b  d88P Y88b. .d88P 888      888        888   Y88b  d88P  888   Y88b. .d88P 888   Y8888 
//         "Y8888P"   "Y88888P"  88888888 88888888 8888888  "Y8888P" 8888888  "Y88888P"  888    Y888 
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
collisionArray = [];
class Collision {
    constructor() {
        this.initCollision();
    }
    // Initialisation du système de collision.
    initCollision() {
        for (let y = 0; y < height; y++) {
            collisionArray[y] = [];
            for (let x = 0; x < width; x++) {
                collisionArray[y][x] = { y: y, x: x, ground: 0, cactus: 0, leaf: 0 };
            }
        }
    }

    clearCollision() {
        for (let y = 0; y < height; y++) {
            //collisionArray.fill({})
            for (let x = 0; x < width; x++) {
                collisionArray[y][x].ground = 0;
                collisionArray[y][x].cactus = 0;
                collisionArray[y][x].leaf = 0;

            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////           //                                                                                    
//                   .d8888b.  8888888b.   .d88888b.  888     888 888b    888 8888888b.  
//                  d88P  Y88b 888   Y88b d88P" "Y88b 888     888 8888b   888 888  "Y88b 
//                  888    888 888    888 888     888 888     888 88888b  888 888    888 
//                  888        888   d88P 888     888 888     888 888Y88b 888 888    888 
//                  888  88888 8888888P"  888     888 888     888 888 Y88b888 888    888 
//                  888    888 888 T88b   888     888 888     888 888  Y88888 888    888 
//                  Y88b  d88P 888  T88b  Y88b. .d88P Y88b. .d88P 888   Y8888 888  .d88P 
//                   "Y8888P88 888   T88b  "Y88888P"   "Y88888P"  888    Y888 8888888P"             
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                                                              
class Ground {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [220, 0];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/ground.png";
        this.imgHeight = 12;
        this.imgWidth = 1800;
        this.imgPosY = 0;
        this.imgPosX = 0;
    }
    // Definition de la collision avec sol.
    setGroundCollision() {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (y >= 222) {
                    collisionArray[y][x].ground = 1;
                }

            }
        }
    }
    draw() {
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    move() {
        this.setGroundCollision();
        this.pos[1] -= 3;
        if (this.pos[1] <= -1200) {
            this.pos[1] = 0;
        }
        this.draw();
    }

}
//                                             Gestion des nuages
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                               IIIIIIIIIIIIII                    
//                                              IIIIIIIIIIIIIIIII                   
//                                            IIIIIIIIIIIIIIIIIII                   
//                                            IIIIIIIIIIIIIIIIIIIIIIIIIIIIII        
//                                        IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII        
//                                      IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII    
//                              IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII  
//                             IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
//                        II  IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
//                       IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////  
class Cloud {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [generateNumberBetween(20, 140), 0];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/cloud.png";
        this.imgHeight = 13;
        this.imgWidth = 46;
        this.imgPosY = 0;
        this.imgPosX = 0;
        this.enabled = false;
    }
    draw() {
        context.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
        this.pos = [generateNumberBetween(20, 140), width];
    }
    move() {
        if (this.enabled === true) {
            this.pos[1] -= 2;
            this.draw();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }

}
//                                             Gestion des cactus
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        
//                                                  MMMMMMMM                
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                     MMMMM      MMMMMMMMMMM               
//                                   MMMMMMMM     MMMMMMMMMMM               
//                                   MMMMMMMM     MMMMMMMMMMM               
//                                   MMMMMMMM     MMMMMMMMMMM               
//                                   MMMMMMMM     MMMMMMMMMMM               
//                                   MMMMMMMM     MMMMMMMMMMM       MMMM    
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMM     MMMMMMMMMMM     MMMMMMMM  
//                                   MMMMMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//                                     MMMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//                                      MMMMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//                                        MMMMMMMMMMMMMMMMMMM     MMMMMMMM  
//                                          MMMMMMMMMMMMMMMMM     MMMMMMMM  
//                                                MMMMMMMMMMM     MMMMMMMM  
//                                                MMMMMMMMMMMMMMMMMMMMMM    
//                                                MMMMMMMMMMMMMMMMMMMMM     
//                                                MMMMMMMMMMMMMMMMMMM       
//                                                MMMMMMMMMMMMMMMMMM        
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//                                                MMMMMMMMMMM               
//
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
    localCollision() {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {
                    collisionArray[y][x].cactus = 1;
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
            this.localCollision();
            this.draw();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }
}
//                                            Gestion des dinosaures T-Rex
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                                         MMMMMMMMMMMMMMMM  
//                                                       MMMM  MMMMMMMMMMMMMM
//                                                       MMMM  MMMMMMMMMMMMMM
//                                                       MMMMMMMMMMMMMMMMMMMM
//                                                       MMMMMMMMMMMMMMMMMMMM
//                                                       MMMMMMMMMMMMMMMMMMMM
//                                                       MMMMMMMMMM          
//                                                       MMMMMMMMMM          
//                                                       MMMMMMMMMMMMMMMM    
//                                   MM                MMMMMMMMMM            
//                                   MM             MMMMMMMMMMMMM            
//                                   MMMM        MMMMMMMMMMMMMMMMMMMM        
//                                   MMMM        MMMMMMMMMMMMMMMMMMMM        
//                                   MMMMMM    MMMMMMMMMMMMMMMMMM  MM        
//                                   MMMMMMMMMMMMMMMMMMMMMMMMMMMM            
//                                   MMMMMMMMMMMMMMMMMMMMMMMMMMMM            
//                                     MMMMMMMMMMMMMMMMMMMMMMMMMM            
//                                     MMMMMMMMMMMMMMMMMMMMMMMM              
//                                       MMMMMMMMMMMMMMMMMMMMMM              
//                                         MMMMMMMMMMMMMMMMMM                
//                                           MMMMMMMMMMMMMM                  
//                                             MMMMMM  MMMM                  
//                                             MMMMMM  MMMM                  
//                                             MMMM      MM                  
//                                             MM        MM                  
//                                             MMMM      MMMM                
//                                             MMMM      MMMM                
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        this.setHotKey();
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
        if (this.jumpInProgress === true || this.collisionY === false) {
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
    localCollision() {
        this.posCollision = [this.pos[0] + this.imgHeight, this.pos[1] + this.imgWidth];

        let collisionY;
        for (let index = 0; index <= this.imgWidth; index++) {

            if (collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                collisionY = true;
            }
        }
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }
        if (collisionArray[this.posCollision[0]][this.posCollision[1]].ground === 1) {
            this.collisionY = true;
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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
    setHotKey() {
        document.addEventListener("keydown", (event) => {
            if (event.which === 32) {
                this.jump();
            }
        })
    }
    move() {

        if (collisionArray[this.posCollision[0]][this.posCollision[1] + 30].cactus === 1) {
            this.jump();
        }

        this.jumpControl();
        this.gravity();
        this.localCollision();
        this.draw();
        this.showCollision();
    }
}
//                                             Panneau de débogage
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  
//                            8888888b.  8888888888 888888b.   888     888  .d8888b.  
//                            888  "Y88b 888        888  "88b  888     888 d88P  Y88b 
//                            888    888 888        888  .88P  888     888 888    888 
//                            888    888 8888888    8888888K.  888     888 888        
//                            888    888 888        888  "Y88b 888     888 888  88888 
//                            888    888 888        888    888 888     888 888    888 
//                            888  .d88P 888        888   d88P Y88b. .d88P Y88b  d88P 
//                            8888888P"  8888888888 8888888P"   "Y88888P"   "Y8888P88
//       
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Debug {
    constructor() {
        this.textFont = "18px monospace";
        this.pos = [20, 20];
        this.lastTime = 0;
        this.fps = 0;
        this.setHotKey();
    }
    // Mesure du nombre d'images par secondes.
    startPerfMeasurement() {
        let time = Date.now();
        this.fps = 'FPS:' + ((fps / (time - this.lastTime)) * (1000 / fps)).toFixed(2);
        this.lastTime = time;
    }
    // Affichage de la collision avec les cactus.
    displayCatusCollision() {
        if (debugLevel >= 2) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    if (collisionArray[y][x].cactus === 1) {
                        context.fillStyle = "rgba(0,255,0,0.5)";
                        context.fillRect(x, y, 1, 1);
                    }
                    // Affichage du debut de la collision (carre rouge)
                    if (typeof (collisionArray[y - 1]) !== "undefined" && typeof (collisionArray[y - 1][x - 1]) !== "undefined") {
                        if (typeof (collisionArray[y - 1][x]) !== "undefined" && typeof (collisionArray[y][x - 1]) !== "undefined") {
                            if ((collisionArray[y - 1][x].cactus === 0 && collisionArray[y][x - 1].cactus === 0) && collisionArray[y][x].cactus === 1) {
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
    // Affichage de la collision avec le sol.
    displayGroundCollision() {

        let groundYStart = 0;
        let groundYEnd = height;
        let groundXStart = 0;
        let groundXEnd = width;
        if (debugLevel >= 2) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    if (collisionArray[y][0].ground === 1 && collisionArray[y - 1][0].ground == 0) {
                        groundYStart = collisionArray[y][0].y;
                    }
                }
            }
            context.fillStyle = "rgba(0,0,0,0.5)";
            context.fillRect(groundXStart, groundYStart, groundXEnd - groundXStart, groundYEnd - groundYStart);
            context.stroke();
        }
    }
    // Affichage de la grille de deboguage.
    displayGrid() {

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
    displayDebugMenu() {
        if (debugLevel >= 1) {
            context.font = this.textFont;
            context.fillStyle = "rgba(0,0,0,1)";
            context.fillText(this.fps, this.pos[1], this.pos[0]);
            if (debugMessage !== undefined) {
                context.fillText(debugMessage, this.pos[1], this.pos[0] + 20);
            }
        }
    }
    dumpCollision() {
        let dump = ``;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                dump += collisionArray[y][x].cactus;
            }
            dump += `
            `;
        }
        console.log(dump);
    }
    setHotKey() {
        document.addEventListener("keydown", function (event) {
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
    }
    // Dessin dans le context.
    draw() {
        this.displayDebugMenu();
        this.displayCatusCollision();
        this.displayGroundCollision();
        this.displayGrid();

    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                  .d8888b.   .d88888b.  8888888b.  8888888888 
//                                 d88P  Y88b d88P" "Y88b 888   Y88b 888        
//                                 888    888 888     888 888    888 888        
//                                 888        888     888 888   d88P 8888888    
//                                 888        888     888 8888888P"  888        
//                                 888    888 888     888 888 T88b   888        
//                                 Y88b  d88P Y88b. .d88P 888  T88b  888        
//                                  "Y8888P"   "Y88888P"  888   T88b 8888888888
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selection du canvas et definition de sa taille.
const canvas = document.querySelector("#game-display");
const context = canvas.getContext("2d");

const height = 250;
const width = 600;
const fps = 60;
const gravity = 4;

let debugLevel = 1;
let debugMessage;
let intervalStarted = false;
let renderedFrame = 0;

let collision = new Collision();
let ground = new Ground();
let player = new TRex();
let debug = new Debug();

let cloud = [];
cloud[0] = new Cloud();
cloud[1] = new Cloud();
cloud[2] = new Cloud();
cloud[3] = new Cloud();
cloud[4] = new Cloud();

let cactus = [];
cactus[0] = new Cactus();
cactus[1] = new Cactus();
cactus[2] = new Cactus();
cactus[3] = new Cactus();

// Creation du ciel / fond d'ecran
let background = new Image();
background.src = "./layout/background.png";

class Core {
    constructor() {
        canvas.width = width;
        canvas.height = height;
        this.interval;
        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!intervalStarted) {
            this.interval = setInterval(this.intervalLoop, 1000 / fps);
            intervalStarted = true;
        }

    }
    breakInterval() {
        clearInterval(this.interval);
        intervalStarted = false;
    }

    nextInterval() {
        this.intervalLoop();
    }

    setHotKey() {
        document.addEventListener('keydown', (event) => {
            if (event.which === 36) {
                this.startInterval();
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
            }
        })
    }

    intervalLoop() {
        debug.startPerfMeasurement();
        collision.clearCollision();
        renderedFrame++;

        // Dessin du fond d'ecran.
        context.drawImage(background, 0, 0, 600, 250);

        ground.move();

        if (renderedFrame % 24 === 23) {
            cloud[1].enable();
        }
        if (renderedFrame % 60 === 59) {
            cloud[2].enable();
        }
        if (renderedFrame % 90 === 89) {
            cloud[3].enable();
        }
        if (renderedFrame % 130 === 129) {
            cloud[4].enable();
        }
        cloud[0].move();
        cloud[1].move();
        cloud[2].move();
        cloud[4].move();

        if (renderedFrame % 50 === 49) {
            cactus[0].enable();
        }
        if (renderedFrame % 100 === 99) {
            cactus[1].enable();
        }
        if (renderedFrame % 300 === 299) {
            cactus[2].enable();
        }
        cactus[0].move();
        cactus[1].move();
        cactus[2].move();
        cactus[3].move();

        player.move();
        debug.draw();
    }



}
let core = new Core();