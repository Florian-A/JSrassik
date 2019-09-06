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
import { canvas, context, height, width, fps, gravity } from './sharingConstants.js';
import { debugLevel, debugMessage, intervalStarted, renderedFrame, gameOverd, score, collisionArray, clearedCollisionArray } from './sharingVariables.js';
import { drawImageRot, generateNumberBetween } from './sharingFunctions.js';

import Debug from './Debug.js';
import Cactus from './Cactus.js';
import Cloud from './Cloud.js';
import Ground from './Ground.js';
import Collision from './Collision.js';
import Trex from './Trex.js';
import Pterodactyl from './Pterodactyl';
import GameOver from './GameOver.js';

export default class Core {
    constructor() {

        // Definition de la taille du canvas.
        canvas.width = width;
        canvas.height = height;

        // Definition des constantes.
        this.GRAVITY = 4;

        this.interval;

        // Ajout de l'obtion Debug.
        this.debug = new Debug();

        // Ajout de l'objet Collision.
        this.collision = new Collision();

        // Creation du ciel.
        this.background = new Image();
        this.background.src = "./layout/background.png";

        // Ajout de l'objet Ground.
        this.ground = new Ground();

        // Ajout des objets Cloud.
        this.cloud = [];
        this.cloud[0] = new Cloud();
        this.cloud[1] = new Cloud();
        this.cloud[2] = new Cloud();
        this.cloud[3] = new Cloud();

        // Ajout des objets Cactus.
        this.cactus = [];
        this.cactus[0] = new Cactus();
        this.cactus[1] = new Cactus();
        this.cactus[2] = new Cactus();
        this.cactus[3] = new Cactus();

        // Ajout des objets Trex.
        this.trex = [];
        this.trex[0] = new Trex();
        this.trex[1] = new Trex();
        this.trex[2] = new Trex();
        this.trex[3] = new Trex();
        this.trex[4] = new Trex();

        // Ajout de l'objet player.
        this.player = new Pterodactyl(this);

        // Ajout de l'objet Gameover.
        this.gameOver = new GameOver();

        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!intervalStarted['buffer']) {
            this.interval = setInterval(() => { this.intervalLoop() }, 1000 / fps);
            intervalStarted['buffer'] = true;
        }
    }
    breakInterval() {
        clearInterval(this.interval);
        intervalStarted['buffer'] = false;
    }

    nextInterval() {
        this.intervalLoop();
    }

    setHotKey() {
        document.addEventListener('keydown', (event) => {
            if (event.which === 36) {
                this.startInterval();
                gameOverd['buffer'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                gameOverd['buffer'] = false;
            }
        })
    }
    intervalLoop() {

        // Debut du mesure du nombre d'images par secondes.
        this.debug.startPerfMeasurement();

        // Compteur du nombre de frames totales.
        renderedFrame['buffer']++;

        this.collision.clearCollision();

        // Dessin du fond d'ecran.
        context.drawImage(this.background, 0, 0, 600, 250);

        // Animation du sol.
        this.ground.move();

        // Activation et animation des nuages.
        if (renderedFrame['buffer'] % 24 === 23) {
            this.cloud[0].enable();
        }
        if (renderedFrame['buffer'] % 60 === 59) {
            this.cloud[1].enable();
        }
        if (renderedFrame['buffer'] % 90 === 89) {
            this.cloud[2].enable();
        }
        if (renderedFrame['buffer'] % 130 === 129) {
            this.cloud[3].enable();
        }
        this.cloud[0].move();
        this.cloud[1].move();
        this.cloud[2].move();
        this.cloud[3].move();

        // Activation et animation des cactus.
        if (renderedFrame['buffer'] % 50 === 49) {
            this.cactus[0].enable();
        }
        if (renderedFrame['buffer'] % 100 === 99) {
            this.cactus[1].enable();
        }
        if (renderedFrame['buffer'] % 300 === 299) {
            this.cactus[2].enable();
        }
        this.cactus[0].move();
        this.cactus[1].move();
        this.cactus[2].move();

        // Activation et animation des cactus.
        if (!gameOverd['buffer']) {
            if (renderedFrame['buffer'] % 50 === 49) {
                this.trex[0].enable();
            }
            if (renderedFrame['buffer'] % 100 === 99) {
                this.trex[1].enable();
            }
            if (renderedFrame['buffer'] % 300 === 299) {
                this.trex[2].enable();
            }
        }
        this.trex[0].move();
        this.trex[1].move();
        this.trex[2].move();
        this.trex[3].move();

        // Animation et gestion du personnage principal
        this.player.move();


        this.gameOver.check();
        
        // Dessin du menu debogage.
        this.debug.draw();
    }
}