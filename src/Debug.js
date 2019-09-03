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
import {context,height,width,fps,gravity} from './sharingConstants.js';
import {debugLevel,debugMessage,intervalStarted,renderedFrame,gameOver,score,collisionArray,clearedCollisionArray} from './sharingVariables.js';
import {drawImageRot,generateNumberBetween} from './sharingFunctions.js';
export default class Debug {
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
                }
            }
            context.stroke();
        }
    }
    // Affichage de la collision avec les T-Rex.
    displayTrexCollision() {
        if (debugLevel >= 2) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    if (collisionArray[y][x].trex === 1) {
                        context.fillStyle = "rgba(255,0,0,0.5)";
                        context.fillRect(x, y, 1, 1);
                    }
                }
            }
            context.stroke();
        }
    }
    // Affichage de la collision avec le joueur.
    displayPlayerCollision() {
        if (debugLevel >= 2) {
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    if (collisionArray[y][x].player === 1) {
                        context.fillStyle = "rgba(0,0,255,0.5)";
                        context.fillRect(x, y, 1, 1);
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
                    if (collisionArray[y][0].ground === 1 && collisionArray[y - 1][0].ground === 0) {
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
                dump += collisionArray[y][x].ground;
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
        this.displayTrexCollision();
        this.displayPlayerCollision();
        this.displayGroundCollision();
        this.displayGrid();
    }
}