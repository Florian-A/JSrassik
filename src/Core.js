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
import { debugMessage, sharingGameOver, sharingScore } from './sharingVariables.js';
import { generateNumberBetween } from './sharingFunctions.js';

import Debug from './Debug.js';
import Cactus from './Cactus.js';
import Cloud from './Cloud.js';
import Ground from './Ground.js';
import Collision from './Collision.js';
import Trex from './Trex.js';
import Pterodactyl from './Pterodactyl';
import Score from './Score.js';
import GameOver from './GameOver.js';
import Responsive from './Responsive.js';

export default class Core {
    constructor() {

        // Definition des constantes.
        this.GRAVITY = 4;
        this.FPS = 58;
        this.DIFFICULTY = 10;

        // Selection du canvas et definition de sa taille.
        this.CANVAS = document.querySelector(".game > div > canvas");
        this.CONTEXT = this.CANVAS.getContext("2d");
        this.HEIGHT = 250;
        this.WIDTH = 600;

        // Definition de la taille du canvas.
        this.CANVAS.height = this.HEIGHT;
        this.CANVAS.width = this.WIDTH;

        // Definition du nombre d'images rendus.
        this.renderedFrame = 0;

        // Definition du tableau des collisions.
        this.collisionArray = [];

        // Definition des intervals.
        this.interval;
        this.intervalStarted = false;

        // Demande de redemarrage.
        this.restartRequested = false;

        // Gestion du debug.
        this.debugLevel = 0;

        // Ajout de l'obtion Debug.
        this.debug = new Debug(this);

        // Ajout de l'objet Collision.
        this.collision = new Collision(this);

        // Creation du ciel.
        this.background = new Image();
        this.background.src = "./layout/background.png";

        // Ajout de l'objet Ground.
        this.ground = new Ground(this);

        // Ajout des objets Cloud.
        this.cloud = [];
        this.cloud[0] = new Cloud(this);
        this.cloud[1] = new Cloud(this);
        this.cloud[2] = new Cloud(this);
        this.cloud[3] = new Cloud(this);
        this.cloud[4] = new Cloud(this);

        // Ajout des objets Cactus.
        this.cactus = [];
        this.cactus[0] = new Cactus(this);
        this.cactus[1] = new Cactus(this);
        this.cactus[2] = new Cactus(this);
        this.cactus[3] = new Cactus(this);

        // Ajout des objets Trex.
        this.trex = [];
        this.trex[0] = new Trex(this);
        this.trex[1] = new Trex(this);
        this.trex[2] = new Trex(this);
        this.trex[3] = new Trex(this);
        this.trex[4] = new Trex(this);

        // Ajout de l'objet Pterodactyl.
        this.player = new Pterodactyl(this);

        // Ajout de l'objet Responsive.
        this.responsive = new Responsive(this);

        // Ajout de l'objet Score.
        this.score = new Score(this);

        // Enregistrement du meilleur score dans le local storage.
        this.local = localStorage;

        console.log(this.local);

        // Ajout de l'objet Gameover.
        this.gameOver = new GameOver(this);

        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!this.intervalStarted) {
            this.intervalStarted = true;

            // Definition de l'interval du lancement de la boucle generale du jeu.
            // L'interval doit ABSOLUMENT etre defini par une fonction fléchée afin de passer correctement le this de cet objet.
            this.interval = setInterval(() => { this.intervalLoop() }, 1000 / this.FPS);
        }
    }
    breakInterval() {
        clearInterval(this.interval);
        this.intervalStarted = false;
    }

    nextInterval() {
        this.intervalLoop();
    }

    setHotKey() {
        document.addEventListener('keydown', (event) => {
            if (event.which === 36) {
                this.startInterval();
                sharingGameOver['b'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                sharingGameOver['b'] = false;
            }
        })
    }
    intervalLoop() {

        debugMessage['b'] = sharingScore['b'];

        // Debut du mesure du nombre d'images par secondes.
        this.debug.startPerfMeasurement();

        // Compteur du nombre de frames totales.
        this.renderedFrame++;

        // Dessin du fond d'ecran.
        this.CONTEXT.drawImage(this.background, 0, 0, 600, 250);

        // Animation du sol.
        this.ground.move();

        // Activation et animation des nuages.
        if (this.renderedFrame % 24 === 23) {
            if (generateNumberBetween(0, 1)) {
                this.cloud[0].enable();
            }
        }
        else if (this.renderedFrame % 87 === 86) {
            if (generateNumberBetween(0, 1)) {
                this.cloud[1].enable();
            }
        }
        else if (this.renderedFrame % 174 === 173) {
            if (generateNumberBetween(0, 1)) {
                this.cloud[2].enable();
            }
        }
        else if (this.renderedFrame % 297 === 296) {
            if (generateNumberBetween(0, 1)) {
                this.cloud[3].enable();
            }
        }
        else if (this.renderedFrame % 400 === 399) {
            if (generateNumberBetween(0, 1)) {
                this.cloud[4].enable();
            }
        }
        this.cloud[0].move();
        this.cloud[1].move();
        this.cloud[2].move();
        this.cloud[3].move();
        this.cloud[4].move();

        // Activation et animation des cactus.
        if (this.renderedFrame % 49 === 48) {
            if (generateNumberBetween(0, 1) && sharingScore['b'] > 5) {
                this.cactus[0].enable();
            }
        }
        if (this.renderedFrame % 237 === 236) {
            if (generateNumberBetween(0, 1) && sharingScore['b'] > 5) {
                this.cactus[1].enable();
            }
        }
        if (this.renderedFrame % 463 === 462) {
            if (generateNumberBetween(0, 1) && sharingScore['b'] > 5) {
                this.cactus[2].enable();
            }
        }
        this.cactus[0].move();
        this.cactus[1].move();
        this.cactus[2].move();

        // Activation et animation des cactus.
        if (!sharingGameOver['b']) {
            if (this.renderedFrame % 87 === 86) {
                if (generateNumberBetween(0, 1)) {
                    this.trex[0].enable();
                }
            }
            else if (this.renderedFrame % 163 === 162) {
                if (generateNumberBetween(0, 1)) {
                    this.trex[1].enable();
                }
            }
            else if (this.renderedFrame % 255 === 254) {
                if (generateNumberBetween(0, 1)) {
                    this.trex[2].enable();
                }
            }
            else if (this.renderedFrame % 578 === 577) {
                if (generateNumberBetween(0, 1)) {
                    this.trex[3].enable();
                }
            }
        }
        this.trex[0].move();
        this.trex[1].move();
        this.trex[2].move();
        this.trex[3].move();

        // Animation et gestion du personnage principal
        this.player.move();

        // Affichage du score.
        this.score.draw();

        if (sharingScore['b'] > this.local.score || !this.local.score ) {
            localStorage.setItem('score', sharingScore['b'])
        }

        this.gameOver.check();

        // Dessin du menu debogage.
        this.debug.draw();
    }
}