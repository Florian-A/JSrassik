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
import {context,height,width,fps,gravity} from './sharingConstants.js';
import {debugLevel,debugMessage,intervalStarted,renderedFrame,gameOver,score,collisionArray,clearedCollisionArray} from './sharingVariables.js';
import {drawImageRot,generateNumberBetween} from './sharingFunctions.js';
export default class Trex {
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [117, width + 30];
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
        this.isDead = false;
        this.enabled = false;
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


            if (typeof (collisionArray[this.posCollision[0]][this.pos[1] + index]) !== "undefined") {

                if (collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                    collisionY = true;
                }
            }

        }
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }
        if (typeof (collisionArray[this.posCollision[0]][this.posCollision[1]]) !== "undefined") {
            if (collisionArray[this.posCollision[0]][this.posCollision[1]].ground === 1) {
                this.collisionY = true;
            }
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (typeof (collisionArray[this.posCollision[0]][this.pos[1] + index]) !== "undefined") {
                if (collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                    collisionX = true;
                }
            }

        }
        if (collisionX == true) {
            this.collisionX = true;
        }
        else {
            this.collisionX = false;
        }

        for (let y = this.pos[0]; y < height; y++) {
            for (let x = this.pos[1]; x < width; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (collisionArray[y][x]) !== "undefined") {
                        collisionArray[y][x].trex = 1;
                    }
                    if (typeof (collisionArray[y][x + this.imgWidth + 5]) !== "undefined") {
                        collisionArray[y][x + this.imgWidth + 5].trex = 0;
                    }
                    if (typeof (collisionArray[y + 10]) !== "undefined") {
                        if (typeof (collisionArray[y + 10][x + 5]) !== "undefined") {
                            collisionArray[y + 10][x + 5].trex = 0;
                        }
                    }
                    if (typeof (collisionArray[y - this.imgHeight][x + 10]) !== "undefined") {
                        collisionArray[y - this.imgHeight][x + 10].trex = 0;
                    }
                }
            }
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
    enable() {
        if (!this.isDead) {
            this.enabled = true;
        }
    }
    disable() {
        this.enabled = false;
        this.pos = [160, width];
        this.isDead = false;
    }
    dead() {
        if (!this.isDead) {
            score['buffer'] += 1;
        }
        this.isDead = true;
        debugMessage['buffer'] = score['buffer'];

        for (let y = this.pos[0]; y < height; y++) {
            for (let x = this.pos[1]; x < width; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (collisionArray[y][x]) !== "undefined") {
                        collisionArray[y][x].trex = 0;
                    }
                    if (typeof (collisionArray[y][x + this.imgWidth + 2]) !== "undefined") {
                        collisionArray[y][x + this.imgWidth + 2].trex = 0;
                    }
                    if (typeof (collisionArray[y + 2]) !== "undefined") {
                        collisionArray[y + 2][x + 2].trex = 0;
                    }
                    if (typeof (collisionArray[y - this.imgHeight][x + 2]) !== "undefined") {
                        collisionArray[y - this.imgHeight][x + 2].trex = 0;
                    }
                }
            }
        }

    }
    deadAnimation() {
        if (this.pos[0] <= height) {
            this.pos[1] -= 3;
            this.pos[0] += 2;
        }
        else {
            this.disable();
        }
    }
    move() {

        if (this.enabled === true) {

            if (this.isDead) {
                this.deadAnimation();
            }
            else {
                this.pos[1] -= 5;
                this.localCollision();
                this.gravity();
                this.jumpControl();
                if (typeof (collisionArray[this.pos[0]][this.pos[1] - 10]) !== "undefined") {
                    if (collisionArray[this.pos[0]][this.pos[1] - 10].cactus === 1) {
                        this.jump();
                    }
                }
            }

            if (typeof (collisionArray[this.pos[0]]) !== "undefined") {
                if (typeof (collisionArray[this.pos[0]][this.pos[1]]) !== "undefined") {
                    if (collisionArray[this.pos[0]][this.pos[1]].player === 1) {
                        this.dead();
                    }
                }
            }

            this.draw();
        }
        if (this.pos[1] < -20) {
            this.disable();
        }
    }
}