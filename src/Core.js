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
import {context,height,width,fps,gravity} from './sharingConstants.js';
import {debugLevel,debugMessage,intervalStarted,renderedFrame,gameOver,score,collisionArray,clearedCollisionArray} from './sharingVariables.js';
import {drawImageRot,generateNumberBetween} from './sharingFunctions.js';

import Debug from './Debug.js';
import Cactus from './Cactus.js';
import Cloud from './Cloud.js';
import Collision from './Collision.js';
import Trex from './Trex.js';
import Pterodactyl from './Pterodactyl.js';

let collision = new Collision();
let ground = new Ground();
let player = new Pterodactyl();
let debug = new Debug();
let trex = [];
trex[0] = new Trex();
trex[1] = new Trex();
trex[2] = new Trex();
trex[3] = new Trex();
trex[4] = new Trex();
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

export default class Core {
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
                gameOver = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                gameOver = false;
            }
        })
    }

    intervalLoop() {
        debug.startPerfMeasurement();
        collision.clearCollision();
        renderedFrame++;

        if (gameOver) {
            this.breakInterval();
        }

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


        if (renderedFrame % 50 === 49) {
            trex[0].enable();
        }
        if (renderedFrame % 100 === 99) {
            trex[1].enable();
        }
        if (renderedFrame % 300 === 299) {
            trex[2].enable();
        }
        trex[0].move();
        trex[1].move();
        trex[2].move();
        trex[3].move();

        player.move();
        debug.draw();
    }
}