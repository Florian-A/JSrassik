//                                            Gestion des dinosaures Ptérodactyle
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                   
//                                                             ZZ             
//                                                           ZZZZ             
//                                                         ZZZZZZ             
//                                                        ZZZZZ    ZZZ        
//                                                      ZZZZZZZ    ZZZZZ      
//                                                    ZZZZZZZZZ  ZZZZZZZZZ    
//                                                  ZZZZZZZZZZZ  ZZZZZZZZZZZ  
//                                                  ZZZZZZZZZZZ  ZZZZZZZZZZZ  
//                                                  ZZZZZZZZZZZZZZZZZZZZZZZZZZ
//                                                ZZZZZZZZZZZZZZZZZ           
//                                     ZZZZZZZZZZZZZZZZZZZZZZZZZZ             
//                                           ZZZZZZZZZZZZZZZZZZ               
//                                       ZZZZZZZZZZZZZZZZZZZZ                 
//                                             ZZZZZZZZZZZZ                   
//                                                                                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { sharingGameOver } from './sharingVariables.js';
import { drawImageRot } from './sharingFunctions.js';

export default class Pterodactyl {
    constructor(parent) {
        this.parent = parent;
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [70, 100];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/ptero.png";
        this.imgHeight = 36;
        this.imgWidth = 42;
        this.imgPosY = 0;
        this.imgPosX = 82;
        this.imgSteep = 0;
        this.posCollision = [this.pos[0] + this.imgHeight - 13, this.pos[1] + this.imgWidth - 3];
        this.collisionY = false;
        this.collisionX = false;
        this.trexCollision = false;
        this.jumpInProgress = false;
        this.inFalling = false;
        this.roofOfJump = 50;
        this.rotateDeg = 0;
        this.setHotKey();
    }
    draw() {
        if (this.imgSteep <= 6) {
            this.imgPosY = 0;
            this.imgPosX = 0;
        }
        else if (this.imgSteep <= 11) {
            this.imgPosY = 0;
            this.imgPosX = 46;
        }
        else {
            this.imgPosY = 0;
            this.imgPosX = 46;
            this.imgSteep = 0;
        }
        if (!sharingGameOver['b']) {
            this.imgSteep++;
        }
        drawImageRot(this.parent.CONTEXT, this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.rotateDeg)
    }
    gravity() {
        if (this.collisionY === false) {
            this.pos[0] += this.parent.GRAVITY;
        }
    }
    localCollision() {

        this.posCollision = [this.pos[0] + this.imgHeight - 13, this.pos[1] + this.imgWidth - 3];

        let collisionY;
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }
        if (typeof (this.parent.collisionArray[this.posCollision[0]]) !== "undefined") {
            if (this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].ground === 1) {
                this.collisionY = true;
            }
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (typeof (this.parent.collisionArray[this.posCollision[0]]) !== "undefined") {
                if (this.parent.collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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

        for (let y = this.pos[0]; y < this.posCollision[0]; y++) {
            for (let x = this.pos[1]; x < this.posCollision[1]; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {
                    if (!sharingGameOver['b']) {
                        if (typeof (this.parent.collisionArray[y]) !== "undefined") {
                            if (typeof (this.parent.collisionArray[y][x]) !== "undefined") {
                                this.parent.collisionArray[y][x].player = 1;
                            }
                        }
                    }
                    if (typeof (this.parent.collisionArray[y + 14]) !== "undefined") {
                        if (typeof (this.parent.collisionArray[y + 14][x]) !== "undefined") {
                            this.parent.collisionArray[y + 14][x].player = 0;
                        }
                    }
                    if (typeof (this.parent.collisionArray[y]) !== "undefined") {
                        if (typeof (this.parent.collisionArray[y - this.imgHeight][x]) !== "undefined") {
                            this.parent.collisionArray[y - this.imgHeight][x].player = 0;
                        }
                    }
                }
            }
        }


    }
    showCollision() {
        if (this.parent.debugLevel >= 2) {
            this.parent.CONTEXT.fillStyle = "rgba(0,0,0,0.5)";
            this.parent.CONTEXT.fillRect(this.pos[1], this.pos[0], this.posCollision[1] - this.pos[1], this.posCollision[0] - this.pos[0]);
            this.parent.CONTEXT.fillStyle = "rgba(255,0,0,1)";
            this.parent.CONTEXT.fillRect(this.pos[1], this.pos[0], 5, 5);
            this.parent.CONTEXT.stroke();
        }
    }
    jump() {
        if (!sharingGameOver['b']) {
            this.rotateDeg = 0;
            this.collisionY = false;
            this.jumpInProgress = true;
            this.inFalling = false;
        }
    }
    jumpControl() {
        if (this.jumpInProgress === true && this.pos[0] >= this.roofOfJump) {
            this.pos[0] = Math.round(this.pos[0] * 0.90);
            this.rotateDeg -= 1;
        }
        else if (!this.collisionY && this.rotateDeg <= 0) {
            this.jumpInProgress = false;
            this.inFalling = true;
            this.rotateDeg += 4;
        }
        else if (!this.collisionY) {
            this.jumpInProgress = false;
            this.inFalling = true;
            this.rotateDeg += 1;
        }
        else {
            this.jumpInProgress = false;
            this.inFalling = true;
            this.rotateDeg = 0;
        }
    }
    setHotKey() {
        document.addEventListener("keydown", (event) => {
            if (event.which === 32) {
                this.jump();
            }
        })
        document.addEventListener("touchstart", (event) => {
            this.jump();

        })
    }
    restart() {
        this.pos = [70, 100];
        this.collisionY = false;
        this.collisionX = false;
        this.parent.restartRequested = false;

    }
    autoPlay() {
        if (this.parent.collisionArray[this.posCollision[0] + 15][this.posCollision[1]].ground === 1 || this.parent.collisionArray[this.posCollision[0] + 15][this.posCollision[1]].cactus === 1) {
            this.jump();
        }
    }
    deadAnimation() {
        if (this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].ground === 0) {
            this.pos[0] += this.parent.GRAVITY;
        }

        for (let y = this.pos[0]-20; y < this.posCollision[0]; y++) {
            for (let x = this.pos[1]; x < this.posCollision[1]; x++) {

                            this.parent.collisionArray[y][x].player = 0;
                    
            }
        }


    }
    move() {
        if (this.parent.restartRequested) {
            this.restart();
        }

        if (this.collisionY || this.collisionX) {
            if (this.collisionX) {
                this.jump();
            }
            sharingGameOver['b'] = true;
            this.deadAnimation();
        }

        if (typeof (this.parent.collisionArray[this.posCollision[0]]) !== "undefined") {
            if (this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].trex === 1 && this.trexCollision === false) {
                this.trexCollision = true;
            }
            else {
                this.trexCollision = false;
            }
        }
        this.jumpControl();
        this.gravity();
        this.localCollision();
        this.draw();
    }
}