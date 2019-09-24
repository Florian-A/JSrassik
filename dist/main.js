/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cactus.js":
/*!***********************!*\
  !*** ./src/Cactus.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cactus; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
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
    constructor(parent) {
        this.parent = parent;
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [185, this.parent.WIDTH];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/obstacle.png";
        this.imgHeight = 50;
        this.imgWidth = 25;
        this.imgPosY = 0;
        this.imgPosX = 0;
        this.movementSpeed = 3;
        this.enabled = false;
    }
    draw() {
        this.parent.CONTEXT.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    // Mise a jour des informations de collision dans le tableau collision.
    localCollision() {
        // La boucle va parcourir tout le tableau de collission afin de definir la collision du cactus.
        for (let y = 185; y < this.parent.HEIGHT; y++) {
            for (let x = 0; x < this.parent.WIDTH; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {
                    this.parent.collisionArray[y][x].cactus = 1;

                    if (typeof (this.parent.collisionArray[y][x + this.movementSpeed + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY))]) !== "undefined") {
                        this.parent.collisionArray[y][x + this.movementSpeed + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY))].cactus = 0;
                    }
                }
            }
        }
    }
    enable() {
        this.enabled = true;
    }
    // Desactivation du cactus et assignation de sa position a droite du canvas, 
    disable() {
        this.enabled = false;
        this.pos = [185, this.parent.WIDTH];
    }
    move() {
        if (this.enabled === true) {
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'])
            {
                this.pos[1] -= 3 + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY));
            }
            this.localCollision();
            this.draw();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }
}

/***/ }),

/***/ "./src/Cloud.js":
/*!**********************!*\
  !*** ./src/Cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cloud; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor(parent) {
        this.parent = parent;
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(20, 140), 0];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/cloud.png";
        this.imgHeight = 13;
        this.imgWidth = 46;
        this.imgPosY = 0;
        this.imgPosX = 0;
        this.enabled = false;
    }
    draw() {
        this.parent.CONTEXT.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
        this.pos = [Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(20, 140), this.parent.WIDTH];
    }
    move() {
        if (this.enabled === true) {
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
                this.pos[1] -= 2 + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY));
            }
            else {
                this.pos[1] -= 0.1;
            }
            this.draw();
        }
        if (this.pos[1] < 0 - this.imgWidth) {
            this.disable();
        }
    }

}

/***/ }),

/***/ "./src/Collision.js":
/*!**************************!*\
  !*** ./src/Collision.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collision; });
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

class Collision {
    constructor(parent) {
        this.parent = parent;
        this.blankCollision = [];
        this.initCollision();
    }
    // Initialisation du système de collision.
    initCollision() {
        for (let y = 0; y < this.parent.HEIGHT; y++) {
            this.parent.collisionArray[y] = [];
            for (let x = 0; x < this.parent.WIDTH+100; x++) {
                this.parent.collisionArray[y][x] = { y: y, x: x, player: 0, ground: 0, cactus: 0, leaf: 0, trex: 0 };
            }
        }

        for (let y = 0; y < this.parent.HEIGHT; y++) {
            this.blankCollision[y] = [];
            for (let x = 0; x < this.parent.WIDTH+100; x++) {
                this.blankCollision[y][x] = { y: y, x: x, player: 0, ground: 0, cactus: 0, leaf: 0, trex: 0 };
            }
        }
    }
}

/***/ }),

/***/ "./src/Core.js":
/*!*********************!*\
  !*** ./src/Core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Core; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Debug.js */ "./src/Debug.js");
/* harmony import */ var _Cactus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cactus.js */ "./src/Cactus.js");
/* harmony import */ var _Cloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cloud.js */ "./src/Cloud.js");
/* harmony import */ var _Ground_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ground.js */ "./src/Ground.js");
/* harmony import */ var _Collision_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Collision.js */ "./src/Collision.js");
/* harmony import */ var _Trex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Trex.js */ "./src/Trex.js");
/* harmony import */ var _Pterodactyl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pterodactyl */ "./src/Pterodactyl.js");
/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Score.js */ "./src/Score.js");
/* harmony import */ var _GameOver_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GameOver.js */ "./src/GameOver.js");
/* harmony import */ var _Responsive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Responsive.js */ "./src/Responsive.js");
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














class Core {
    constructor() {

        // Definition des constantes.
        this.GRAVITY = 4;
        this.FPS = 58;
        this.DIFFICULTY = 7;

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
        this.debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);

        // Ajout de l'objet Collision.
        this.collision = new _Collision_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);

        // Creation du ciel.
        this.background = new Image();
        this.background.src = "./layout/background.png";

        // Ajout de l'objet Ground.
        this.ground = new _Ground_js__WEBPACK_IMPORTED_MODULE_5__["default"](this);

        // Ajout des objets Cloud.
        this.cloud = [];
        this.cloud[0] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.cloud[1] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.cloud[2] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.cloud[3] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        this.cloud[4] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);

        // Ajout des objets Cactus.
        this.cactus = [];
        this.cactus[0] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cactus[1] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cactus[2] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cactus[3] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);

        // Ajout des objets Trex.
        this.trex = [];
        this.trex[0] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        this.trex[1] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        this.trex[2] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        this.trex[3] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"](this);
        this.trex[4] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"](this);

        // Ajout de l'objet Pterodactyl.
        this.player = new _Pterodactyl__WEBPACK_IMPORTED_MODULE_8__["default"](this);

        // Ajout de l'objet Responsive.
        this.responsive = new _Responsive_js__WEBPACK_IMPORTED_MODULE_11__["default"](this);

        // Ajout de l'objet Score.
        this.score = new _Score_js__WEBPACK_IMPORTED_MODULE_9__["default"](this);

        // Enregistrement du meilleur score dans le local storage.
        this.local = localStorage;;

        // Ajout de l'objet Gameover.
        this.gameOver = new _GameOver_js__WEBPACK_IMPORTED_MODULE_10__["default"](this);

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
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'] = false;
            }
        })
    }
    intervalLoop() {

        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["debugMessage"]['b'] = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'];

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
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                this.cloud[0].enable();
            }
        }
        else if (this.renderedFrame % 87 === 86) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                this.cloud[1].enable();
            }
        }
        else if (this.renderedFrame % 174 === 173) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                this.cloud[2].enable();
            }
        }
        else if (this.renderedFrame % 297 === 296) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                this.cloud[3].enable();
            }
        }
        else if (this.renderedFrame % 400 === 399) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
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
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 1) {
                this.cactus[0].enable();
            }
        }
        if (this.renderedFrame % 237 === 236) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 1) {
                this.cactus[1].enable();
            }
        }
        if (this.renderedFrame % 463 === 462) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 1) {
                this.cactus[2].enable();
            }
        }
        this.cactus[0].move();
        this.cactus[1].move();
        this.cactus[2].move();

        // Activation et animation des cactus.
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
            if (this.renderedFrame % 87 === 86) {
                if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                    this.trex[0].enable();
                }
            }
            else if (this.renderedFrame % 163 === 162) {
                if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                    this.trex[1].enable();
                }
            }
            else if (this.renderedFrame % 255 === 254) {
                if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
                    this.trex[2].enable();
                }
            }
            else if (this.renderedFrame % 578 === 577) {
                if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1)) {
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

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > this.local.score || !this.local.score ) {
            localStorage.setItem('score', _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'])
        }

        this.gameOver.check();

        // Dessin du menu debogage.
        this.debug.draw();
    }
}

/***/ }),

/***/ "./src/Debug.js":
/*!**********************!*\
  !*** ./src/Debug.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Debug; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
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
    constructor(parent) {
        this.parent = parent;
        this.textFont = "18px monospace";
        this.pos = [20, 20];
        this.lastTime = 0;
        this.fps = 0;
        this.setHotKey();
    }
    // Mesure du nombre d'images par secondes.
    startPerfMeasurement() {
        let time = Date.now();
        this.fps = 'FPS:' + ((this.parent.FPS / (time - this.lastTime)) * (1000 / this.parent.FPS)).toFixed(2);
        this.lastTime = time;
    }
    // Affichage de la collision avec les cactus.
    displayCatusCollision() {
        if (this.parent.debugLevel >= 2) {
            for (let y = 0; y < this.parent.HEIGHT; y++) {
                for (let x = 0; x < this.parent.WIDTH; x++) {
                    if (this.parent.collisionArray[y][x].cactus === 1) {
                        this.parent.CONTEXT.fillStyle = "rgba(0,255,0,0.5)";
                        this.parent.CONTEXT.fillRect(x, y, 1, 1);
                    }
                }
            }
            this.parent.CONTEXT.stroke();
        }
    }
    // Affichage de la collision avec les T-Rex.
    displayTrexCollision() {
        if (this.parent.debugLevel >= 2) {
            for (let y = 0; y < this.parent.HEIGHT; y++) {
                for (let x = 0; x < this.parent.WIDTH; x++) {
                    if (this.parent.collisionArray[y][x].trex === 1) {
                        this.parent.CONTEXT.fillStyle = "rgba(255,0,0,0.5)";
                        this.parent.CONTEXT.fillRect(x, y, 1, 1);
                    }
                }
            }
            this.parent.CONTEXT.stroke();
        }
    }
    // Affichage de la collision avec le joueur.
    displayPlayerCollision() {
        if (this.parent.debugLevel >= 2) {
            for (let y = 0; y < this.parent.HEIGHT; y++) {
                for (let x = 0; x < this.parent.WIDTH; x++) {
                    if (this.parent.collisionArray[y][x].player === 1) {
                        this.parent.CONTEXT.fillStyle = "rgba(0,0,255,0.5)";
                        this.parent.CONTEXT.fillRect(x, y, 1, 1);
                    }
                }
            }
            this.parent.CONTEXT.stroke();
        }
    }
    // Affichage de la collision avec le sol.
    displayGroundCollision() {

        let groundYStart = 0;
        let groundYEnd = this.parent.HEIGHT;
        let groundXStart = 0;
        let groundXEnd = this.parent.WIDTH;
        if (this.parent.debugLevel >= 2) {
            for (let y = 0; y < this.parent.HEIGHT; y++) {
                for (let x = 0; x < this.parent.WIDTH; x++) {
                    if (this.parent.collisionArray[y][0].ground === 1 && this.parent.collisionArray[y - 1][0].ground === 0) {
                        groundYStart = this.parent.collisionArray[y][0].y;
                    }
                }
            }
            this.parent.CONTEXT.fillStyle = "rgba(0,0,0,0.5)";
            this.parent.CONTEXT.fillRect(groundXStart, groundYStart, groundXEnd - groundXStart, groundYEnd - groundYStart);
            this.parent.CONTEXT.stroke();
        }
    }
    // Affichage de la grille de deboguage.
    displayGrid() {

        let gridYStart = 0;
        let gridYEnd = this.parent.HEIGHT;
        let gridXStart = 0;
        let gridXEnd = this.parent.WIDTH;
        if (this.parent.debugLevel >= 2) {

            for (let y = 0; y < this.parent.HEIGHT; y++) {
                this.parent.CONTEXT.fillStyle = "rgba(255,0,0,1)";
                if (y % 50 === 49) {
                    this.parent.CONTEXT.fillRect(gridXStart, y, gridXEnd - gridXStart, 1 - gridYStart);
                    this.parent.CONTEXT.fillText(y + 1, gridXEnd - 40, y);
                }

            }
            for (let x = 0; x < this.parent.WIDTH; x++) {
                this.parent.CONTEXT.fillStyle = "rgba(255,0,0,1)";
                if (x % 50 === 49) {
                    this.parent.CONTEXT.fillRect(x + 1, gridYStart, 1 - gridXStart, gridYEnd - gridYStart);
                    this.parent.CONTEXT.fillText(x + 1, x, gridYEnd - 25);
                }
            }
            this.parent.CONTEXT.stroke();
        }
    }
    displayDebugMenu() {
        if (this.parent.debugLevel >= 1) {
            this.parent.CONTEXT.font = this.textFont;
            this.parent.CONTEXT.fillStyle = "rgba(0,0,0,1)";
            this.parent.CONTEXT.fillText(this.fps, this.pos[1], this.pos[0]);
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["debugMessage"]['b'] !== undefined) {
                this.parent.CONTEXT.fillText(_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["debugMessage"]['b'], this.pos[1], this.pos[0] + 20);
            }
        }
    }
    dumpCollision() {
        let dump = ``;
        for (let y = 0; y < this.parent.HEIGHT; y++) {
            for (let x = 0; x < this.parent.WIDTH; x++) {
                dump += this.parent.collisionArray[y][x].ground;
            }
            dump += `
            `;
        }
        console.log(dump);
    }
    setHotKey() {
        document.addEventListener("keydown", (event) => {
            if (event.which === 49) {
                this.parent.debugLevel = 1;
            }
            if (event.which === 50) {
                this.parent.debugLevel = 2;
            }
            if (event.which === 48) {
                this.parent.debugLevel = 0;
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

/***/ }),

/***/ "./src/GameOver.js":
/*!*************************!*\
  !*** ./src/GameOver.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOver; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");


class GameOver {
    constructor(parent) {
        this.parent = parent;
        this.gameOver = false;
        // Creation du message de fin du jeu.
        this.gameOverLayout = new Image();
        this.gameOverLayout.src = "./layout/gameover.png";
        // Affichage de la fin du jeu.
        this.gameOverDisplayed = false;
        this.restardAuthorized = false;
        this.animationSwitch = false;
    }
    check() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {

            if (this.parent.renderedFrame % 150 === 149) {
                this.gameOverDisplayed = true;
            }
            if (this.gameOverDisplayed) {

                this.draw();
                this.setHotKey();
            }
        }
    }

    restart(event) {

        if (event.code === "Space" || event.touches) {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'] && this.gameOverDisplayed && this.restardAuthorized) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] = 0;
                this.parent.restartRequested = true;
                this.gameOverDisplayed = false;
                this.restardAuthorized = false;
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'] = false;
            }
        }
    }

    setHotKey() {
        if (this.parent.renderedFrame % 150 === 149) {
            this.restardAuthorized = true;
        }
        document.addEventListener("keydown", () => this.restart(event));
        document.addEventListener("touchstart", () => this.restart(event));
    }

    draw() {
        this.parent.CONTEXT.fillStyle = "rgba(247,247,247,0.9)";
        this.parent.CONTEXT.fillRect(0, 0, this.parent.WIDTH, this.parent.HEIGHT);

        if (this.parent.renderedFrame % 65 === 64) {
            this.animationSwitch = !this.animationSwitch;
        }

        if (this.animationSwitch) {
            this.parent.CONTEXT.drawImage(this.gameOverLayout, 0, 0, 305, 180, Math.round(this.parent.WIDTH / 2 - this.gameOverLayout.width / 2), Math.round(this.parent.HEIGHT / 2 - this.gameOverLayout.height / 2), 305, 180);
        }
        else {
            this.parent.CONTEXT.drawImage(this.gameOverLayout, 0, 0, 305, 40, Math.round(this.parent.WIDTH / 2 - this.gameOverLayout.width / 2), 80, 305, 40);
        }
    }

}

/***/ }),

/***/ "./src/Ground.js":
/*!***********************!*\
  !*** ./src/Ground.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ground; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
//                                             Gestion du sol
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    
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
    constructor(parent) {
        this.parent = parent;
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
        for (let y = 0; y < this.parent.HEIGHT; y++) {
            for (let x = 0; x < this.parent.WIDTH; x++) {
                if (y >= 222) {
                    this.parent.collisionArray[y][x].ground = 1;
                }

            }
        }
    }
    draw() {
        this.parent.CONTEXT.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    move() {
        this.setGroundCollision();
        if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'])
        {
            this.pos[1] -= 3 + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY));
        }
        if (this.pos[1] <= -1200) {
            this.pos[1] = 0;
        }
        this.draw();
    }

}

/***/ }),

/***/ "./src/Pterodactyl.js":
/*!****************************!*\
  !*** ./src/Pterodactyl.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pterodactyl; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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



class Pterodactyl {
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
            this.imgSteep++;
        }
        Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["drawImageRot"])(this.parent.CONTEXT, this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.rotateDeg)
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
                    if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
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
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'] = true;
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

/***/ }),

/***/ "./src/Responsive.js":
/*!***************************!*\
  !*** ./src/Responsive.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Responsive; });
class Responsive {
    constructor(parent) {
        this.parent = parent;
        this.setEvent();
        this.setCanvasSize();
    }

    setCanvasSize() {
        let scale = 0;
        if (window.innerHeight * 0.003921569 >= window.innerWidth * 0.001666667) {
            scale = window.innerWidth * 0.001666667;
        }
        else {
            scale = window.innerHeight * 0.003921569;
        }

        let gameCanvas = document.querySelector('.game > div');
        gameCanvas.style.transform = `scale(${scale})`;
    }

    setEvent() {
        window.addEventListener("resize", () => this.setCanvasSize());
    }

}

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");

class Score {
    constructor(parent) {
        this.parent = parent;
        // Changement de police.
        this.textFont = "15px joystix";
        this.pos = [45, this.parent.WIDTH-260];
    }
    // Dessin dans le context.
    draw() {
        // Assignation du meilleur socre
        let hitScore = ('0000' + this.parent.local.score).slice(-4);
        let score = ('0000' + _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']).slice(-4);
        // Assignation et construction du message de score.
        let scoreMessage = `HIT:${hitScore} SCORE:${score}`;
        this.parent.CONTEXT.font = this.textFont;
        this.parent.CONTEXT.fillStyle = "rgba(0,0,0,0.7)";
        this.parent.CONTEXT.fillText(scoreMessage, this.pos[1], this.pos[0]);
    }
}

/***/ }),

/***/ "./src/Trex.js":
/*!*********************!*\
  !*** ./src/Trex.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trex; });
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
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


class Trex {
    constructor(parent) {
        this.parent = parent;
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [190, this.parent.WIDTH - 20];
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
        this.roofOfJump = 75;
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
        this.parent.CONTEXT.drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    gravity() {
        if (this.collisionY === false) {
            this.pos[0] += this.parent.GRAVITY;
        }
    }
    localCollision() {
        this.posCollision = [this.pos[0] + this.imgHeight, this.pos[1] + this.imgWidth];

        let collisionY;
        for (let index = 0; index <= this.imgWidth; index++) {

            if (typeof (this.parent.collisionArray[this.posCollision[0]]) !== "undefined") {
                if (typeof (this.parent.collisionArray[this.posCollision[0]][this.pos[1] + index]) !== "undefined") {

                    if (this.parent.collisionArray[this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                        collisionY = true;
                    }
                }
            }

        }
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }

        if (typeof (this.parent.collisionArray[this.posCollision[0] - 11][this.pos[1]]) !== "undefined") {
            if (this.parent.collisionArray[this.posCollision[0] - 11][this.pos[1]].ground === 1) {
                this.collisionY = true;
            }
        }
        if (typeof (this.parent.collisionArray[this.posCollision[0] - 11][this.posCollision[1]]) !== "undefined") {
            if (this.parent.collisionArray[this.posCollision[0] - 11][this.posCollision[1]].ground === 1) {
                this.collisionY = true;
            }
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (typeof (this.parent.collisionArray[this.posCollision[0]][this.pos[1] + index]) !== "undefined") {
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

        for (let y = this.pos[0]; y < this.parent.HEIGHT; y++) {
            for (let x = this.pos[1]; x < 200; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (this.parent.collisionArray[y][x]) !== "undefined") {
                        this.parent.collisionArray[y][x].trex = 1;
                    }
                    if (typeof (this.parent.collisionArray[y][x + this.imgWidth + 5]) !== "undefined") {
                        this.parent.collisionArray[y][x + this.imgWidth + 5].trex = 0;
                    }
                    if (typeof (this.parent.collisionArray[y + 10]) !== "undefined") {
                        if (typeof (this.parent.collisionArray[y + 10][x + 5]) !== "undefined") {
                            this.parent.collisionArray[y + 10][x + 5].trex = 0;
                        }
                    }
                    if (typeof (this.parent.collisionArray[y - this.imgHeight][x + 10]) !== "undefined") {
                        this.parent.collisionArray[y - this.imgHeight][x + 10].trex = 0;
                    }
                }
            }
        }

    }
    jump() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY) {
            this.roofOfJump = 85;
        }
        else if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY*2) {
            this.roofOfJump = 95;
        }
        else if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY*3) {
            this.roofOfJump = 105;
        }
        else if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY*4) {
            this.roofOfJump = 115;
        }
        else if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY*5) {
            this.roofOfJump = 125;
        }
        else if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] >= this.parent.DIFFICULTY*6) {
            this.roofOfJump = 135;
        }
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
        this.pos = [190, this.parent.WIDTH];
        this.isDead = false;
    }
    dead() {
        if (!this.isDead) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] += 1;
        }
        this.isDead = true;

        for (let y = this.pos[0]; y < this.parent.HEIGHT; y++) {
            for (let x = this.pos[1]; x < this.parent.WIDTH + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY)); x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (this.parent.collisionArray[y][x]) !== "undefined") {
                        this.parent.collisionArray[y][x].trex = 0;
                    }
                    if (typeof (this.parent.collisionArray[y][x + this.imgWidth + 2]) !== "undefined") {
                        this.parent.collisionArray[y][x + this.imgWidth + 2].trex = 0;
                    }
                    if (typeof (this.parent.collisionArray[y + 2]) !== "undefined") {
                        this.parent.collisionArray[y + 2][x + 2].trex = 0;
                    }
                    if (typeof (this.parent.collisionArray[y - this.imgHeight][x + 2]) !== "undefined") {
                        this.parent.collisionArray[y - this.imgHeight][x + 2].trex = 0;
                    }
                }
            }
        }

    }
    deadAnimation() {
        if (this.pos[0] <= this.parent.HEIGHT) {
            this.pos[1] -= 3 + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY));
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

                if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
                    this.pos[1] -= 5 + Math.floor((_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']/this.parent.DIFFICULTY));
                }
                else {
                    this.pos[1] -= 2;
                }


                this.localCollision();
                this.gravity();
                this.jumpControl();
                if (typeof (this.parent.collisionArray[this.pos[0]][this.pos[1] - 10]) !== "undefined") {
                    if (this.parent.collisionArray[this.pos[0]][this.pos[1] - 10].cactus === 1) {
                        this.jump();
                    }
                }
            }

            if (typeof (this.parent.collisionArray[this.pos[0]]) !== "undefined") {
                if (typeof (this.parent.collisionArray[this.pos[0]][this.pos[1]]) !== "undefined") {
                    if (this.parent.collisionArray[this.pos[0]][this.pos[1]].player === 1) {
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core.js */ "./src/Core.js");
//                                                                                                                      
//          JJJJJJJJJJJ   SSSSSSSSSSSSSSS                                                                       iiii  KKKKKKKKK    KKKKKKK
//          J:::::::::J SS:::::::::::::::S                                                                     i::::i K:::::::K    K:::::K
//          J:::::::::JS:::::SSSSSS::::::S                                                                      iiii  K:::::::K    K:::::K
//          JJ:::::::JJS:::::S     SSSSSSS                                                                            K:::::::K   K::::::K
//            J:::::J  S:::::S           rrrrr   rrrrrrrrr   aaaaaaaaaaaaa      ssssssssss       ssssssssss   iiiiiii KK::::::K  K:::::KKK
//            J:::::J  S:::::S           r::::rrr:::::::::r  a::::::::::::a   ss::::::::::s    ss::::::::::s  i:::::i   K:::::K K:::::K   
//            J:::::J   S::::SSSS        r:::::::::::::::::r aaaaaaaaa:::::ass:::::::::::::s ss:::::::::::::s  i::::i   K::::::K:::::K    
//            J:::::j    SS::::::SSSSS   rr::::::rrrrr::::::r         a::::as::::::ssss:::::ss::::::ssss:::::s i::::i   K:::::::::::K     
//            J:::::J      SSS::::::::SS  r:::::r     r:::::r  aaaaaaa:::::a s:::::s  ssssss  s:::::s  ssssss  i::::i   K:::::::::::K     
//JJJJJJJ     J:::::J         SSSSSS::::S r:::::r     rrrrrrraa::::::::::::a   s::::::s         s::::::s       i::::i   K::::::K:::::K    
//J:::::J     J:::::J              S:::::Sr:::::r           a::::aaaa::::::a      s::::::s         s::::::s    i::::i   K:::::K K:::::K   
//J::::::J   J::::::J              S:::::Sr:::::r          a::::a    a:::::assssss   s:::::s ssssss   s:::::s  i::::i KK::::::K  K:::::KKK
//J:::::::JJJ:::::::J  SSSSSSS     S:::::Sr:::::r          a::::a    a:::::as:::::ssss::::::ss:::::ssss::::::si::::::iK:::::::K   K::::::K
// JJ:::::::::::::JJ   S::::::SSSSSS:::::Sr:::::r          a:::::aaaa::::::as::::::::::::::s s::::::::::::::s i::::::iK:::::::K    K:::::K
//   JJ:::::::::JJ     S:::::::::::::::SS r:::::r           a::::::::::aa:::as:::::::::::ss   s:::::::::::ss  i::::::iK:::::::K    K:::::K
//     JJJJJJJJJ        SSSSSSSSSSSSSSS   rrrrrrr            aaaaaaaaaa  aaaa sssssssssss      sssssssssss    iiiiiiiiKKKKKKKKK    KKKKKKK //                                                                                                                      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let core = new _Core_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/sharingFunctions.js":
/*!*********************************!*\
  !*** ./src/sharingFunctions.js ***!
  \*********************************/
/*! exports provided: drawImageRot, generateNumberBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawImageRot", function() { return drawImageRot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateNumberBetween", function() { return generateNumberBetween; });
function drawImageRot(context,imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, pos1, pos0, imgDeg) {

    //Conversion de degre vers 
    let radian = imgDeg * Math.PI / 180;

    //Definition de l'origine de l'image a son centre.
    context.translate(pos1 + imgWidth / 2, pos0 + imgHeight / 2);

    //Rotation.
    context.rotate(radian);

    //Impression de l'image.
    context.drawImage(imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, imgHeight / 2 * (-1), imgWidth / 2 * (-1), imgWidth, imgHeight);

    //Remise a zero du canvas.
    context.rotate(radian * (-1));
    context.translate((pos1 + imgWidth / 2) * (-1), (pos0 + imgHeight / 2) * (-1));
}

function generateNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/***/ }),

/***/ "./src/sharingVariables.js":
/*!*********************************!*\
  !*** ./src/sharingVariables.js ***!
  \*********************************/
/*! exports provided: debugMessage, sharingGameOver, sharingScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugMessage", function() { return debugMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharingGameOver", function() { return sharingGameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharingScore", function() { return sharingScore; });
let debugMessage = { b: '' };
let sharingGameOver = { b: false };
let sharingScore = { b: 0 };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdWYXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzFSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QjtBQUM3QixlQUFlLGdEQUFJLEc7Ozs7Ozs7Ozs7OztBQ3BCbkI7QUFBQTtBQUFBO0FBQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQU8sb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixvQkFBb0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBjYWN0dXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU0gICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICBNTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgICAgICAgICAgIFxuaW1wb3J0IHtzaGFyaW5nR2FtZU92ZXIsIHNoYXJpbmdTY29yZX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjdHVzIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE4NSwgdGhpcy5wYXJlbnQuV0lEVEhdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L29ic3RhY2xlLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMjU7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDM7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgLy8gTWlzZSBhIGpvdXIgZGVzIGluZm9ybWF0aW9ucyBkZSBjb2xsaXNpb24gZGFucyBsZSB0YWJsZWF1IGNvbGxpc2lvbi5cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgLy8gTGEgYm91Y2xlIHZhIHBhcmNvdXJpciB0b3V0IGxlIHRhYmxlYXUgZGUgY29sbGlzc2lvbiBhZmluIGRlIGRlZmluaXIgbGEgY29sbGlzaW9uIGR1IGNhY3R1cy5cbiAgICAgICAgZm9yIChsZXQgeSA9IDE4NTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMubW92ZW1lbnRTcGVlZCArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkICsgTWF0aC5mbG9vcigoc2hhcmluZ1Njb3JlWydiJ10vdGhpcy5wYXJlbnQuRElGRklDVUxUWSkpXS5jYWN0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRGVzYWN0aXZhdGlvbiBkdSBjYWN0dXMgZXQgYXNzaWduYXRpb24gZGUgc2EgcG9zaXRpb24gYSBkcm9pdGUgZHUgY2FudmFzLCBcbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTg1LCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAzICsgTWF0aC5mbG9vcigoc2hhcmluZ1Njb3JlWydiJ10vdGhpcy5wYXJlbnQuRElGRklDVUxUWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgMCAtIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgbnVhZ2VzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBJSSAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy8gICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIFxuaW1wb3J0IHtzaGFyaW5nR2FtZU92ZXIsIHNoYXJpbmdTY29yZX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7Z2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9jbG91ZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQ2O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gW2dlbmVyYXRlTnVtYmVyQmV0d2VlbigyMCwgMTQwKSwgdGhpcy5wYXJlbnQuV0lEVEhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZighc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAyICsgTWF0aC5mbG9vcigoc2hhcmluZ1Njb3JlWydiJ10vdGhpcy5wYXJlbnQuRElGRklDVUxUWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgMCAtIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gXG4vLyAgICAgICAgIC5kODg4OGIuICAgLmQ4ODg4OGIuICA4ODggICAgICA4ODggICAgICA4ODg4ODg4ICAuZDg4ODhiLiA4ODg4ODg4ICAuZDg4ODg4Yi4gIDg4OGIgICAgODg4IFxuLy8gICAgICAgIGQ4OFAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICAgICA4ODggICAgICAgIDg4OCAgIGQ4OFAgIFk4OGIgIDg4OCAgIGQ4OFBcIiBcIlk4OGIgODg4OGIgICA4ODggXG4vLyAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgIFk4OGIuICAgICAgIDg4OCAgIDg4OCAgICAgODg4IDg4ODg4YiAgODg4IFxuLy8gICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgXCJZODg4Yi4gICAgODg4ICAgODg4ICAgICA4ODggODg4WTg4YiA4ODggXG4vLyAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICAgICBcIlk4OGIuICA4ODggICA4ODggICAgIDg4OCA4ODggWTg4Yjg4OCBcbi8vICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgICAgICAgXCI4ODggIDg4OCAgIDg4OCAgICAgODg4IDg4OCAgWTg4ODg4IFxuLy8gICAgICAgIFk4OGIgIGQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICAgICAgODg4ICAgICAgICA4ODggICBZODhiICBkODhQICA4ODggICBZODhiLiAuZDg4UCA4ODggICBZODg4OCBcbi8vICAgICAgICAgXCJZODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODg4ODg4OCA4ODg4ODg4OCA4ODg4ODg4ICBcIlk4ODg4UFwiIDg4ODg4ODggIFwiWTg4ODg4UFwiICA4ODggICAgWTg4OCBcbi8vIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24ge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5ibGFua0NvbGxpc2lvbiA9IFtdO1xuICAgICAgICB0aGlzLmluaXRDb2xsaXNpb24oKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgc3lzdMOobWUgZGUgY29sbGlzaW9uLlxuICAgIGluaXRDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIKzEwMDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0gPSB7IHk6IHksIHg6IHgsIHBsYXllcjogMCwgZ3JvdW5kOiAwLCBjYWN0dXM6IDAsIGxlYWY6IDAsIHRyZXg6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIHRoaXMuYmxhbmtDb2xsaXNpb25beV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEgrMTAwOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsYW5rQ29sbGlzaW9uW3ldW3hdID0geyB5OiB5LCB4OiB4LCBwbGF5ZXI6IDAsIGdyb3VuZDogMCwgY2FjdHVzOiAwLCBsZWFmOiAwLCB0cmV4OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICAgLmQ4ODg4OGIuICA4ODg4ODg4Yi4gIDg4ODg4ODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICBZODhiIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgIGQ4OFAgODg4ODg4OCAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODg4ODg4UFwiICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCBUODhiICAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggIFQ4OGIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4OCAgIFQ4OGIgODg4ODg4ODg4OFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGRlYnVnTWVzc2FnZSwgc2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmUgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuIH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuaW1wb3J0IERlYnVnIGZyb20gJy4vRGVidWcuanMnO1xuaW1wb3J0IENhY3R1cyBmcm9tICcuL0NhY3R1cy5qcyc7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9DbG91ZC5qcyc7XG5pbXBvcnQgR3JvdW5kIGZyb20gJy4vR3JvdW5kLmpzJztcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24uanMnO1xuaW1wb3J0IFRyZXggZnJvbSAnLi9UcmV4LmpzJztcbmltcG9ydCBQdGVyb2RhY3R5bCBmcm9tICcuL1B0ZXJvZGFjdHlsJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyLmpzJztcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gJy4vUmVzcG9uc2l2ZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZGVzIGNvbnN0YW50ZXMuXG4gICAgICAgIHRoaXMuR1JBVklUWSA9IDQ7XG4gICAgICAgIHRoaXMuRlBTID0gNTg7XG4gICAgICAgIHRoaXMuRElGRklDVUxUWSA9IDc7XG5cbiAgICAgICAgLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbiAgICAgICAgdGhpcy5DQU5WQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUgPiBkaXYgPiBjYW52YXNcIik7XG4gICAgICAgIHRoaXMuQ09OVEVYVCA9IHRoaXMuQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5IRUlHSFQgPSAyNTA7XG4gICAgICAgIHRoaXMuV0lEVEggPSA2MDA7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZSBsYSB0YWlsbGUgZHUgY2FudmFzLlxuICAgICAgICB0aGlzLkNBTlZBUy5oZWlnaHQgPSB0aGlzLkhFSUdIVDtcbiAgICAgICAgdGhpcy5DQU5WQVMud2lkdGggPSB0aGlzLldJRFRIO1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZHUgbm9tYnJlIGQnaW1hZ2VzIHJlbmR1cy5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEZyYW1lID0gMDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGR1IHRhYmxlYXUgZGVzIGNvbGxpc2lvbnMuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uQXJyYXkgPSBbXTtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGRlcyBpbnRlcnZhbHMuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGVtYW5kZSBkZSByZWRlbWFycmFnZS5cbiAgICAgICAgdGhpcy5yZXN0YXJ0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2VzdGlvbiBkdSBkZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1Z0xldmVsID0gMDtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29idGlvbiBEZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Zyh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IENvbGxpc2lvbi5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKHRoaXMpO1xuXG4gICAgICAgIC8vIENyZWF0aW9uIGR1IGNpZWwuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgR3JvdW5kLlxuICAgICAgICB0aGlzLmdyb3VuZCA9IG5ldyBHcm91bmQodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBDbG91ZC5cbiAgICAgICAgdGhpcy5jbG91ZCA9IFtdO1xuICAgICAgICB0aGlzLmNsb3VkWzBdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzFdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzJdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzNdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzRdID0gbmV3IENsb3VkKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2FjdHVzLlxuICAgICAgICB0aGlzLmNhY3R1cyA9IFtdO1xuICAgICAgICB0aGlzLmNhY3R1c1swXSA9IG5ldyBDYWN0dXModGhpcyk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzFdID0gbmV3IENhY3R1cyh0aGlzKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMl0gPSBuZXcgQ2FjdHVzKHRoaXMpO1xuICAgICAgICB0aGlzLmNhY3R1c1szXSA9IG5ldyBDYWN0dXModGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBUcmV4LlxuICAgICAgICB0aGlzLnRyZXggPSBbXTtcbiAgICAgICAgdGhpcy50cmV4WzBdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFsxXSA9IG5ldyBUcmV4KHRoaXMpO1xuICAgICAgICB0aGlzLnRyZXhbMl0gPSBuZXcgVHJleCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmV4WzNdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFs0XSA9IG5ldyBUcmV4KHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUHRlcm9kYWN0eWwuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFB0ZXJvZGFjdHlsKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUmVzcG9uc2l2ZS5cbiAgICAgICAgdGhpcy5yZXNwb25zaXZlID0gbmV3IFJlc3BvbnNpdmUodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBTY29yZS5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSh0aGlzKTtcblxuICAgICAgICAvLyBFbnJlZ2lzdHJlbWVudCBkdSBtZWlsbGV1ciBzY29yZSBkYW5zIGxlIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbFN0b3JhZ2U7O1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgR2FtZW92ZXIuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBuZXcgR2FtZU92ZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgfVxuICAgIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcnZhbFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGVmaW5pdGlvbiBkZSBsJ2ludGVydmFsIGR1IGxhbmNlbWVudCBkZSBsYSBib3VjbGUgZ2VuZXJhbGUgZHUgamV1LlxuICAgICAgICAgICAgLy8gTCdpbnRlcnZhbCBkb2l0IEFCU09MVU1FTlQgZXRyZSBkZWZpbmkgcGFyIHVuZSBmb25jdGlvbiBmbMOpY2jDqWUgYWZpbiBkZSBwYXNzZXIgY29ycmVjdGVtZW50IGxlIHRoaXMgZGUgY2V0IG9iamV0LlxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHsgdGhpcy5pbnRlcnZhbExvb3AoKSB9LCAxMDAwIC8gdGhpcy5GUFMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJyZWFrSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmV4dEludGVydmFsKCkge1xuICAgICAgICB0aGlzLmludGVydmFsTG9vcCgpO1xuICAgIH1cblxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzNikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHNoYXJpbmdHYW1lT3ZlclsnYiddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmVha0ludGVydmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICBzaGFyaW5nR2FtZU92ZXJbJ2InXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpbnRlcnZhbExvb3AoKSB7XG5cbiAgICAgICAgZGVidWdNZXNzYWdlWydiJ10gPSBzaGFyaW5nU2NvcmVbJ2InXTtcblxuICAgICAgICAvLyBEZWJ1dCBkdSBtZXN1cmUgZHUgbm9tYnJlIGQnaW1hZ2VzIHBhciBzZWNvbmRlcy5cbiAgICAgICAgdGhpcy5kZWJ1Zy5zdGFydFBlcmZNZWFzdXJlbWVudCgpO1xuXG4gICAgICAgIC8vIENvbXB0ZXVyIGR1IG5vbWJyZSBkZSBmcmFtZXMgdG90YWxlcy5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEZyYW1lKys7XG5cbiAgICAgICAgLy8gRGVzc2luIGR1IGZvbmQgZCdlY3Jhbi5cbiAgICAgICAgdGhpcy5DT05URVhULmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDAsIDYwMCwgMjUwKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gZHUgc29sLlxuICAgICAgICB0aGlzLmdyb3VuZC5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIG51YWdlcy5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDI0ID09PSAyMykge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRbMF0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgODcgPT09IDg2KSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZFsxXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAxNzQgPT09IDE3Mykge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRbMl0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMjk3ID09PSAyOTYpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3VkWzNdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDQwMCA9PT0gMzk5KSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZFs0XS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3VkWzBdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFsxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbMl0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzNdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFs0XS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIGNhY3R1cy5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDQ5ID09PSA0OCkge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSAmJiBzaGFyaW5nU2NvcmVbJ2InXSA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY3R1c1swXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMjM3ID09PSAyMzYpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkgJiYgc2hhcmluZ1Njb3JlWydiJ10gPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWN0dXNbMV0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDQ2MyA9PT0gNDYyKSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpICYmIHNoYXJpbmdTY29yZVsnYiddID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjdHVzWzJdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjdHVzWzBdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNhY3R1c1syXS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIGNhY3R1cy5cbiAgICAgICAgaWYgKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDg3ID09PSA4Nikge1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmV4WzBdLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDE2MyA9PT0gMTYyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMV0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMjU1ID09PSAyNTQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJleFsyXS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA1NzggPT09IDU3Nykge1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmV4WzNdLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZXhbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMl0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbM10ubW92ZSgpO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBldCBnZXN0aW9uIGR1IHBlcnNvbm5hZ2UgcHJpbmNpcGFsXG4gICAgICAgIHRoaXMucGxheWVyLm1vdmUoKTtcblxuICAgICAgICAvLyBBZmZpY2hhZ2UgZHUgc2NvcmUuXG4gICAgICAgIHRoaXMuc2NvcmUuZHJhdygpO1xuXG4gICAgICAgIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+IHRoaXMubG9jYWwuc2NvcmUgfHwgIXRoaXMubG9jYWwuc2NvcmUgKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzaGFyaW5nU2NvcmVbJ2InXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIuY2hlY2soKTtcblxuICAgICAgICAvLyBEZXNzaW4gZHUgbWVudSBkZWJvZ2FnZS5cbiAgICAgICAgdGhpcy5kZWJ1Zy5kcmF3KCk7XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFubmVhdSBkZSBkw6lib2dhZ2Vcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhiLiAgODg4ODg4ODg4OCA4ODg4ODhiLiAgIDg4OCAgICAgODg4ICAuZDg4ODhiLiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggIFwiWTg4YiA4ODggICAgICAgIDg4OCAgXCI4OGIgIDg4OCAgICAgODg4IGQ4OFAgIFk4OGIgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAuODhQICA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODg4ODg4ICAgIDg4ODg4ODhLLiAgODg4ICAgICA4ODggODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIFwiWTg4YiA4ODggICAgIDg4OCA4ODggIDg4ODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgLmQ4OFAgODg4ICAgICAgICA4ODggICBkODhQIFk4OGIuIC5kODhQIFk4OGIgIGQ4OFAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODg4ODg4UFwiICA4ODg4ODg4ODg4IDg4ODg4ODhQXCIgICBcIlk4ODg4OFBcIiAgIFwiWTg4ODhQODhcbi8vICAgICAgIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgZGVidWdNZXNzYWdlIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMucG9zID0gWzIwLCAyMF07XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIC8vIE1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgIHN0YXJ0UGVyZk1lYXN1cmVtZW50KCkge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gJ0ZQUzonICsgKCh0aGlzLnBhcmVudC5GUFMgLyAodGltZSAtIHRoaXMubGFzdFRpbWUpKSAqICgxMDAwIC8gdGhpcy5wYXJlbnQuRlBTKSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgY2FjdHVzLlxuICAgIGRpc3BsYXlDYXR1c0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgwLDI1NSwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgVC1SZXguXG4gICAgZGlzcGxheVRyZXhDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIGpvdWV1ci5cbiAgICBkaXNwbGF5UGxheWVyQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIHNvbC5cbiAgICBkaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIGxldCBncm91bmRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWUVuZCA9IHRoaXMucGFyZW50LkhFSUdIVDtcbiAgICAgICAgbGV0IGdyb3VuZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRYRW5kID0gdGhpcy5wYXJlbnQuV0lEVEg7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldWzBdLmdyb3VuZCA9PT0gMSAmJiB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gMV1bMF0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91bmRZU3RhcnQgPSB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVswXS55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdChncm91bmRYU3RhcnQsIGdyb3VuZFlTdGFydCwgZ3JvdW5kWEVuZCAtIGdyb3VuZFhTdGFydCwgZ3JvdW5kWUVuZCAtIGdyb3VuZFlTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBncmlsbGUgZGUgZGVib2d1YWdlLlxuICAgIGRpc3BsYXlHcmlkKCkge1xuXG4gICAgICAgIGxldCBncmlkWVN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyaWRZRW5kID0gdGhpcy5wYXJlbnQuSEVJR0hUO1xuICAgICAgICBsZXQgZ3JpZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWEVuZCA9IHRoaXMucGFyZW50LldJRFRIO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHkgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdChncmlkWFN0YXJ0LCB5LCBncmlkWEVuZCAtIGdyaWRYU3RhcnQsIDEgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsVGV4dCh5ICsgMSwgZ3JpZFhFbmQgLSA0MCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHggJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4ICsgMSwgZ3JpZFlTdGFydCwgMSAtIGdyaWRYU3RhcnQsIGdyaWRZRW5kIC0gZ3JpZFlTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFRleHQoeCArIDEsIHgsIGdyaWRZRW5kIC0gMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheURlYnVnTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHRoaXMuZnBzLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgaWYgKGRlYnVnTWVzc2FnZVsnYiddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KGRlYnVnTWVzc2FnZVsnYiddLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0gKyAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHVtcENvbGxpc2lvbigpIHtcbiAgICAgICAgbGV0IGR1bXAgPSBgYDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZHVtcCArPSB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkdW1wICs9IGBcbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZHVtcCk7XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIERlc3NpbiBkYW5zIGxlIGNvbnRleHQuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGVidWdNZW51KCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUNhdHVzQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRyZXhDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UGxheWVyQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcmlkKCk7XG4gICAgfVxufSIsImltcG9ydCB7IHNoYXJpbmdHYW1lT3Zlciwgc2hhcmluZ1Njb3JlIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvLyBDcmVhdGlvbiBkdSBtZXNzYWdlIGRlIGZpbiBkdSBqZXUuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlckxheW91dC5zcmMgPSBcIi4vbGF5b3V0L2dhbWVvdmVyLnBuZ1wiO1xuICAgICAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgZmluIGR1IGpldS5cbiAgICAgICAgdGhpcy5nYW1lT3ZlckRpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc3RhcmRBdXRob3JpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3dpdGNoID0gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrKCkge1xuICAgICAgICBpZiAoc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LnJlbmRlcmVkRnJhbWUgJSAxNTAgPT09IDE0OSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXJEaXNwbGF5ZWQpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0YXJ0KGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiU3BhY2VcIiB8fCBldmVudC50b3VjaGVzKSB7XG4gICAgICAgICAgICBpZiAoc2hhcmluZ0dhbWVPdmVyWydiJ10gJiYgdGhpcy5nYW1lT3ZlckRpc3BsYXllZCAmJiB0aGlzLnJlc3RhcmRBdXRob3JpemVkKSB7XG4gICAgICAgICAgICAgICAgc2hhcmluZ1Njb3JlWydiJ10gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJlc3RhcnRSZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcmRBdXRob3JpemVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2hhcmluZ0dhbWVPdmVyWydiJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnJlbmRlcmVkRnJhbWUgJSAxNTAgPT09IDE0OSkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJkQXV0aG9yaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKCkgPT4gdGhpcy5yZXN0YXJ0KGV2ZW50KSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHRoaXMucmVzdGFydChldmVudCkpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI0NywyNDcsMjQ3LDAuOSlcIjtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCgwLCAwLCB0aGlzLnBhcmVudC5XSURUSCwgdGhpcy5wYXJlbnQuSEVJR0hUKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQucmVuZGVyZWRGcmFtZSAlIDY1ID09PSA2NCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Td2l0Y2ggPSAhdGhpcy5hbmltYXRpb25Td2l0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25Td2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuZ2FtZU92ZXJMYXlvdXQsIDAsIDAsIDMwNSwgMTgwLCBNYXRoLnJvdW5kKHRoaXMucGFyZW50LldJRFRIIC8gMiAtIHRoaXMuZ2FtZU92ZXJMYXlvdXQud2lkdGggLyAyKSwgTWF0aC5yb3VuZCh0aGlzLnBhcmVudC5IRUlHSFQgLyAyIC0gdGhpcy5nYW1lT3ZlckxheW91dC5oZWlnaHQgLyAyKSwgMzA1LCAxODApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5nYW1lT3ZlckxheW91dCwgMCwgMCwgMzA1LCA0MCwgTWF0aC5yb3VuZCh0aGlzLnBhcmVudC5XSURUSCAvIDIgLSB0aGlzLmdhbWVPdmVyTGF5b3V0LndpZHRoIC8gMiksIDgwLCAzMDUsIDQwKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkdSBzb2xcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAuZDg4ODhiLiAgODg4ODg4OGIuICAgLmQ4ODg4OGIuICA4ODggICAgIDg4OCA4ODhiICAgIDg4OCA4ODg4ODg4Yi4gIFxuLy8gICAgICAgICAgICAgICAgICBkODhQICBZODhiIDg4OCAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICAgIDg4OCA4ODg4YiAgIDg4OCA4ODggIFwiWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4ODg4YiAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODhZODhiIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICA4ODggIDg4ODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCBZODhiODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4IFQ4OGIgICA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODggIFk4ODg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICBZODhiICBkODhQIDg4OCAgVDg4YiAgWTg4Yi4gLmQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggODg4ICAuZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQODggODg4ICAgVDg4YiAgXCJZODg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggODg4ODg4OFBcIiAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge3NoYXJpbmdHYW1lT3Zlciwgc2hhcmluZ1Njb3JlfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzIyMCwgMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZ3JvdW5kLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEyO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMTgwMDtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICB9XG4gICAgLy8gRGVmaW5pdGlvbiBkZSBsYSBjb2xsaXNpb24gYXZlYyBzb2wuXG4gICAgc2V0R3JvdW5kQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeSA+PSAyMjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0uZ3JvdW5kID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRHcm91bmRDb2xsaXNpb24oKTtcbiAgICAgICAgaWYoIXNoYXJpbmdHYW1lT3ZlclsnYiddKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAzICsgTWF0aC5mbG9vcigoc2hhcmluZ1Njb3JlWydiJ10vdGhpcy5wYXJlbnQuRElGRklDVUxUWSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8PSAtMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBkaW5vc2F1cmVzIFB0w6lyb2RhY3R5bGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaICAgIFpaWiAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlogICAgWlpaWlogICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWiAgWlpaWlpaWlpaICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaICBaWlpaWlpaWlpaWiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgc2hhcmluZ0dhbWVPdmVyIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7IGRyYXdJbWFnZVJvdCB9IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB0ZXJvZGFjdHlsIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzcwLCAxMDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L3B0ZXJvLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDM2O1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDI7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDgyO1xuICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA1MDtcbiAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIH1cbiAgICAgICAgZHJhd0ltYWdlUm90KHRoaXMucGFyZW50LkNPTlRFWFQsIHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5yb3RhdGVEZWcpXG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnBhcmVudC5HUkFWSVRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgLSAxMywgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoIC0gM107XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblk7XG4gICAgICAgIGlmIChjb2xsaXNpb25ZID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF07IHkgPCB0aGlzLnBvc0NvbGxpc2lvblswXTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBvc0NvbGxpc2lvblsxXTsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0ucGxheWVyID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDE0XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxNF1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XS5wbGF5ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHNob3dDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QodGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLnBvc0NvbGxpc2lvblsxXSAtIHRoaXMucG9zWzFdLCB0aGlzLnBvc0NvbGxpc2lvblswXSAtIHRoaXMucG9zWzBdKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QodGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCA1LCA1KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcCgpIHtcbiAgICAgICAgaWYgKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45MCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkgJiYgdGhpcy5yb3RhdGVEZWcgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5jb2xsaXNpb25ZKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJlbnQucmVzdGFydFJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgfVxuICAgIGF1dG9QbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gKyAxNV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSB8fCB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWFkQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMucGFyZW50LkdSQVZJVFk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF0tMjA7IHkgPCB0aGlzLnBvc0NvbGxpc2lvblswXTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBvc0NvbGxpc2lvblsxXTsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnJlc3RhcnRSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSB8fCB0aGlzLmNvbGxpc2lvblgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYXJpbmdHYW1lT3ZlclsnYiddID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVhZEFuaW1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0udHJleCA9PT0gMSAmJiB0aGlzLnRyZXhDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuanVtcENvbnRyb2woKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zZXRFdmVudCgpO1xuICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoKTtcbiAgICB9XG5cbiAgICBzZXRDYW52YXNTaXplKCkge1xuICAgICAgICBsZXQgc2NhbGUgPSAwO1xuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICogMC4wMDM5MjE1NjkgPj0gd2luZG93LmlubmVyV2lkdGggKiAwLjAwMTY2NjY2Nykge1xuICAgICAgICAgICAgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDAxNjY2NjY3O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NhbGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAwMzkyMTU2OTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBnYW1lQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUgPiBkaXYnKTtcbiAgICAgICAgZ2FtZUNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICB9XG5cbiAgICBzZXRFdmVudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5zZXRDYW52YXNTaXplKCkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IHNoYXJpbmdTY29yZSB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBDaGFuZ2VtZW50IGRlIHBvbGljZS5cbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IFwiMTVweCBqb3lzdGl4XCI7XG4gICAgICAgIHRoaXMucG9zID0gWzQ1LCB0aGlzLnBhcmVudC5XSURUSC0yNjBdO1xuICAgIH1cbiAgICAvLyBEZXNzaW4gZGFucyBsZSBjb250ZXh0LlxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIEFzc2lnbmF0aW9uIGR1IG1laWxsZXVyIHNvY3JlXG4gICAgICAgIGxldCBoaXRTY29yZSA9ICgnMDAwMCcgKyB0aGlzLnBhcmVudC5sb2NhbC5zY29yZSkuc2xpY2UoLTQpO1xuICAgICAgICBsZXQgc2NvcmUgPSAoJzAwMDAnICsgc2hhcmluZ1Njb3JlWydiJ10pLnNsaWNlKC00KTtcbiAgICAgICAgLy8gQXNzaWduYXRpb24gZXQgY29uc3RydWN0aW9uIGR1IG1lc3NhZ2UgZGUgc2NvcmUuXG4gICAgICAgIGxldCBzY29yZU1lc3NhZ2UgPSBgSElUOiR7aGl0U2NvcmV9IFNDT1JFOiR7c2NvcmV9YDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC43KVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHNjb3JlTWVzc2FnZSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgVC1SZXhcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgICBNTU1NTU1NTU1NTU1NTU1NTU0gIE1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgc2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmUgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmV4IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE5MCwgdGhpcy5wYXJlbnQuV0lEVEggLSAyMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZGluby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA0MztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA3NTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlIHx8IHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnBhcmVudC5HUkFWSVRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nV2lkdGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSAtIDExXVt0aGlzLnBvc1sxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NbMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdIC0gMTFdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCAyMDA7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoc2hhcmluZ1Njb3JlWydiJ10gPj0gdGhpcy5wYXJlbnQuRElGRklDVUxUWSkge1xuICAgICAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gODU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hhcmluZ1Njb3JlWydiJ10gPj0gdGhpcy5wYXJlbnQuRElGRklDVUxUWSoyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA5NTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjMpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEwNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDExNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjUpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEyNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjYpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEzNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgfVxuICAgIGp1bXBDb250cm9sKCkge1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSAmJiB0aGlzLnBvc1swXSA+PSB0aGlzLnJvb2ZPZkp1bXApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc1swXSAqIDAuOTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTkwLCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgfVxuICAgIGRlYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHNoYXJpbmdTY29yZVsnYiddICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBhcmVudC5XSURUSCArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDw9IHRoaXMucGFyZW50LkhFSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMyArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gNSArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDI7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXSAtIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXSAtIDEwXS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXV0ucGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgLTIwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgIEpKSkpKSkpKSkpKICAgU1NTU1NTU1NTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpaWlpICBLS0tLS0tLS0sgICAgS0tLS0tLS1xuLy8gICAgICAgICAgSjo6Ojo6Ojo6OkogU1M6Ojo6Ojo6Ojo6Ojo6OjpTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTo6OjppIEs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgICAgICAgICBKOjo6Ojo6Ojo6SlM6Ojo6OlNTU1NTUzo6Ojo6OlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgICAgICAgIEpKOjo6Ojo6OkpKUzo6Ojo6UyAgICAgU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLOjo6Ojo6OksgICBLOjo6Ojo6S1xuLy8gICAgICAgICAgICBKOjo6OjpKICBTOjo6OjpTICAgICAgICAgICBycnJyciAgIHJycnJycnJyciAgIGFhYWFhYWFhYWFhYWEgICAgICBzc3Nzc3Nzc3NzICAgICAgIHNzc3Nzc3Nzc3MgICBpaWlpaWlpIEtLOjo6Ojo6SyAgSzo6Ojo6S0tLXG4vLyAgICAgICAgICAgIEo6Ojo6OkogIFM6Ojo6OlMgICAgICAgICAgIHI6Ojo6cnJyOjo6Ojo6Ojo6ciAgYTo6Ojo6Ojo6Ojo6OmEgICBzczo6Ojo6Ojo6OjpzICAgIHNzOjo6Ojo6Ojo6OnMgIGk6Ojo6OmkgICBLOjo6OjpLIEs6Ojo6OksgICBcbi8vICAgICAgICAgICAgSjo6Ojo6SiAgIFM6Ojo6U1NTUyAgICAgICAgcjo6Ojo6Ojo6Ojo6Ojo6Ojo6ciBhYWFhYWFhYWE6Ojo6OmFzczo6Ojo6Ojo6Ojo6OjpzIHNzOjo6Ojo6Ojo6Ojo6OnMgIGk6Ojo6aSAgIEs6Ojo6OjpLOjo6OjpLICAgIFxuLy8gICAgICAgICAgICBKOjo6OjpqICAgIFNTOjo6Ojo6U1NTU1MgICBycjo6Ojo6OnJycnJyOjo6Ojo6ciAgICAgICAgIGE6Ojo6YXM6Ojo6Ojpzc3NzOjo6Ojpzczo6Ojo6OnNzc3M6Ojo6OnMgaTo6OjppICAgSzo6Ojo6Ojo6Ojo6SyAgICAgXG4vLyAgICAgICAgICAgIEo6Ojo6OkogICAgICBTU1M6Ojo6Ojo6OlNTICByOjo6OjpyICAgICByOjo6OjpyICBhYWFhYWFhOjo6OjphIHM6Ojo6OnMgIHNzc3NzcyAgczo6Ojo6cyAgc3Nzc3NzICBpOjo6OmkgICBLOjo6Ojo6Ojo6OjpLICAgICBcbi8vSkpKSkpKSiAgICAgSjo6Ojo6SiAgICAgICAgIFNTU1NTUzo6OjpTIHI6Ojo6OnIgICAgIHJycnJycnJhYTo6Ojo6Ojo6Ojo6OmEgICBzOjo6Ojo6cyAgICAgICAgIHM6Ojo6OjpzICAgICAgIGk6Ojo6aSAgIEs6Ojo6OjpLOjo6OjpLICAgIFxuLy9KOjo6OjpKICAgICBKOjo6OjpKICAgICAgICAgICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICAgYTo6OjphYWFhOjo6Ojo6YSAgICAgIHM6Ojo6OjpzICAgICAgICAgczo6Ojo6OnMgICAgaTo6OjppICAgSzo6Ojo6SyBLOjo6OjpLICAgXG4vL0o6Ojo6OjpKICAgSjo6Ojo6OkogICAgICAgICAgICAgIFM6Ojo6OlNyOjo6OjpyICAgICAgICAgIGE6Ojo6YSAgICBhOjo6Ojphc3Nzc3NzICAgczo6Ojo6cyBzc3Nzc3MgICBzOjo6OjpzICBpOjo6OmkgS0s6Ojo6OjpLICBLOjo6OjpLS0tcbi8vSjo6Ojo6OjpKSko6Ojo6Ojo6SiAgU1NTU1NTUyAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzOjo6Ojpzc3NzOjo6Ojo6c3M6Ojo6OnNzc3M6Ojo6OjpzaTo6Ojo6OmlLOjo6Ojo6OksgICBLOjo6Ojo6S1xuLy8gSko6Ojo6Ojo6Ojo6Ojo6SkogICBTOjo6Ojo6U1NTU1NTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OjphYWFhOjo6Ojo6YXM6Ojo6Ojo6Ojo6Ojo6OnMgczo6Ojo6Ojo6Ojo6Ojo6cyBpOjo6Ojo6aUs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgIEpKOjo6Ojo6Ojo6SkogICAgIFM6Ojo6Ojo6Ojo6Ojo6OjpTUyByOjo6OjpyICAgICAgICAgICBhOjo6Ojo6Ojo6OmFhOjo6YXM6Ojo6Ojo6Ojo6OnNzICAgczo6Ojo6Ojo6Ojo6c3MgIGk6Ojo6OjppSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgICBKSkpKSkpKSkogICAgICAgIFNTU1NTU1NTU1NTU1NTUyAgIHJycnJycnIgICAgICAgICAgICBhYWFhYWFhYWFhICBhYWFhIHNzc3Nzc3Nzc3NzICAgICAgc3Nzc3Nzc3Nzc3MgICAgaWlpaWlpaWlLS0tLS0tLS0sgICAgS0tLS0tLSyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlLmpzJztcbmxldCBjb3JlID0gbmV3IENvcmUoKTsiLCJleHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlUm90KGNvbnRleHQsaW1nTGF5b3V0LCBpbWdQb3NYLCBpbWdQb3NZLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCBwb3MxLCBwb3MwLCBpbWdEZWcpIHtcblxuICAgIC8vQ29udmVyc2lvbiBkZSBkZWdyZSB2ZXJzIFxuICAgIGxldCByYWRpYW4gPSBpbWdEZWcgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgLy9EZWZpbml0aW9uIGRlIGwnb3JpZ2luZSBkZSBsJ2ltYWdlIGEgc29uIGNlbnRyZS5cbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3MxICsgaW1nV2lkdGggLyAyLCBwb3MwICsgaW1nSGVpZ2h0IC8gMik7XG5cbiAgICAvL1JvdGF0aW9uLlxuICAgIGNvbnRleHQucm90YXRlKHJhZGlhbik7XG5cbiAgICAvL0ltcHJlc3Npb24gZGUgbCdpbWFnZS5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIGltZ0hlaWdodCAvIDIgKiAoLTEpLCBpbWdXaWR0aCAvIDIgKiAoLTEpLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcblxuICAgIC8vUmVtaXNlIGEgemVybyBkdSBjYW52YXMuXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuICogKC0xKSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoKHBvczEgKyBpbWdXaWR0aCAvIDIpICogKC0xKSwgKHBvczAgKyBpbWdIZWlnaHQgLyAyKSAqICgtMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn0iLCJleHBvcnQgbGV0IGRlYnVnTWVzc2FnZSA9IHsgYjogJycgfTtcbmV4cG9ydCBsZXQgc2hhcmluZ0dhbWVPdmVyID0geyBiOiBmYWxzZSB9O1xuZXhwb3J0IGxldCBzaGFyaW5nU2NvcmUgPSB7IGI6IDAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=