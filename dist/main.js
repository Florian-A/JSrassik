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
    localCollision() {
        for (let y = 0; y < this.parent.HEIGHT; y++) {
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
        this.local = localStorage;

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
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 5) {
                this.cactus[0].enable();
            }
        }
        if (this.renderedFrame % 237 === 236) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 5) {
                this.cactus[1].enable();
            }
        }
        if (this.renderedFrame % 463 === 462) {
            if (Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_1__["generateNumberBetween"])(0, 1) && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > 5) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] > this.local.score) {
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
        this.textFont = "15px joystix";
        this.pos = [40, this.parent.WIDTH-240];
    }
    // Dessin dans le context.
    draw() {
        let hitScore = ('0000' + this.parent.local.score).slice(-4);
        let score = ('0000' + _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b']).slice(-4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdWYXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBcUQ7QUFDdEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlFQUFZO0FBQzFDLGtDQUFrQyxTQUFTLFNBQVMsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NFOztBQUV2RDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHdCQUF3Qjs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHlCQUF5Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsd0JBQXdCO0FBQ3pELHFDQUFxQyxTQUFTOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQVk7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQixpRUFBWTtBQUM3QjtBQUNBO0FBQ0EsaUJBQWlCLGlFQUFZO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQVk7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQixpRUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0E7O0FBRUEsaUNBQWlDLHdCQUF3QjtBQUN6RCxxQ0FBcUMscUNBQXFDLGlFQUFZLCtCQUErQjs7QUFFckg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpRUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsb0VBQWU7QUFDcEMsbURBQW1ELGlFQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMVJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCO0FBQzdCLGVBQWUsZ0RBQUksRzs7Ozs7Ozs7Ozs7O0FDcEJuQjtBQUFBO0FBQUE7QUFBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBTyxvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLG9CQUFvQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGNhY3R1c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTSAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgIE1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgXG5pbXBvcnQge3NoYXJpbmdHYW1lT3Zlciwgc2hhcmluZ1Njb3JlfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWN0dXMge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbMTg1LCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvb2JzdGFjbGUucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSAyNTtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gMztcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5jYWN0dXMgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLm1vdmVtZW50U3BlZWQgKyBNYXRoLmZsb29yKChzaGFyaW5nU2NvcmVbJ2InXS90aGlzLnBhcmVudC5ESUZGSUNVTFRZKSldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMubW92ZW1lbnRTcGVlZCArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKV0uY2FjdHVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IFsxODUsIHRoaXMucGFyZW50LldJRFRIXTtcbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYoIXNoYXJpbmdHYW1lT3ZlclsnYiddKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDMgKyBNYXRoLmZsb29yKChzaGFyaW5nU2NvcmVbJ2InXS90aGlzLnBhcmVudC5ESUZGSUNVTFRZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAwIC0gdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBudWFnZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIElJICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vLyAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgXG5pbXBvcnQge3NoYXJpbmdHYW1lT3Zlciwgc2hhcmluZ1Njb3JlfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFtnZW5lcmF0ZU51bWJlckJldHdlZW4oMjAsIDE0MCksIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Nsb3VkLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEzO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDY7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDIgKyBNYXRoLmZsb29yKChzaGFyaW5nU2NvcmVbJ2InXS90aGlzLnBhcmVudC5ESUZGSUNVTFRZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAwIC0gdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBcbi8vICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgIDg4OCAgICAgIDg4ODg4ODggIC5kODg4OGIuIDg4ODg4ODggIC5kODg4ODhiLiAgODg4YiAgICA4ODggXG4vLyAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCAgWTg4YiAgODg4ICAgZDg4UFwiIFwiWTg4YiA4ODg4YiAgIDg4OCBcbi8vICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4Yi4gICAgICAgODg4ICAgODg4ICAgICA4ODggODg4ODhiICA4ODggXG4vLyAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICBcIlk4ODhiLiAgICA4ODggICA4ODggICAgIDg4OCA4ODhZODhiIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgICAgIFwiWTg4Yi4gIDg4OCAgIDg4OCAgICAgODg4IDg4OCBZODhiODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgICBcIjg4OCAgODg4ICAgODg4ICAgICA4ODggODg4ICBZODg4ODggXG4vLyAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggICAgICA4ODggICAgICAgIDg4OCAgIFk4OGIgIGQ4OFAgIDg4OCAgIFk4OGIuIC5kODhQIDg4OCAgIFk4ODg4IFxuLy8gICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4ODg4ODg4IDg4ODg4ODg4IDg4ODg4ODggIFwiWTg4ODhQXCIgODg4ODg4OCAgXCJZODg4ODhQXCIgIDg4OCAgICBZODg4IFxuLy8gXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJsYW5rQ29sbGlzaW9uID0gW107XG4gICAgICAgIHRoaXMuaW5pdENvbGxpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSBjb2xsaXNpb24uXG4gICAgaW5pdENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEgrMTAwOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSA9IHsgeTogeSwgeDogeCwgcGxheWVyOiAwLCBncm91bmQ6IDAsIGNhY3R1czogMCwgbGVhZjogMCwgdHJleDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5ibGFua0NvbGxpc2lvblt5XSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSCsxMDA7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxhbmtDb2xsaXNpb25beV1beF0gPSB7IHk6IHksIHg6IHgsIHBsYXllcjogMCwgZ3JvdW5kOiAwLCBjYWN0dXM6IDAsIGxlYWY6IDAsIHRyZXg6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4ODg4ODhiLiAgODg4ODg4ODg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgIFk4OGIgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgZDg4UCA4ODg4ODg4ICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4IFQ4OGIgICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgVDg4YiAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgVDg4YiA4ODg4ODg4ODg4XG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgZGVidWdNZXNzYWdlLCBzaGFyaW5nR2FtZU92ZXIsIHNoYXJpbmdTY29yZSB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU51bWJlckJldHdlZW4gfSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuXG5pbXBvcnQgRGVidWcgZnJvbSAnLi9EZWJ1Zy5qcyc7XG5pbXBvcnQgQ2FjdHVzIGZyb20gJy4vQ2FjdHVzLmpzJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL0Nsb3VkLmpzJztcbmltcG9ydCBHcm91bmQgZnJvbSAnLi9Hcm91bmQuanMnO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbi5qcyc7XG5pbXBvcnQgVHJleCBmcm9tICcuL1RyZXguanMnO1xuaW1wb3J0IFB0ZXJvZGFjdHlsIGZyb20gJy4vUHRlcm9kYWN0eWwnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR2FtZU92ZXIuanMnO1xuaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSAnLi9SZXNwb25zaXZlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZXMgY29uc3RhbnRlcy5cbiAgICAgICAgdGhpcy5HUkFWSVRZID0gNDtcbiAgICAgICAgdGhpcy5GUFMgPSA1ODtcbiAgICAgICAgdGhpcy5ESUZGSUNVTFRZID0gMTA7XG5cbiAgICAgICAgLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbiAgICAgICAgdGhpcy5DQU5WQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUgPiBkaXYgPiBjYW52YXNcIik7XG4gICAgICAgIHRoaXMuQ09OVEVYVCA9IHRoaXMuQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5IRUlHSFQgPSAyNTA7XG4gICAgICAgIHRoaXMuV0lEVEggPSA2MDA7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZSBsYSB0YWlsbGUgZHUgY2FudmFzLlxuICAgICAgICB0aGlzLkNBTlZBUy5oZWlnaHQgPSB0aGlzLkhFSUdIVDtcbiAgICAgICAgdGhpcy5DQU5WQVMud2lkdGggPSB0aGlzLldJRFRIO1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZHUgbm9tYnJlIGQnaW1hZ2VzIHJlbmR1cy5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEZyYW1lID0gMDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGR1IHRhYmxlYXUgZGVzIGNvbGxpc2lvbnMuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uQXJyYXkgPSBbXTtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGRlcyBpbnRlcnZhbHMuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGVtYW5kZSBkZSByZWRlbWFycmFnZS5cbiAgICAgICAgdGhpcy5yZXN0YXJ0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2VzdGlvbiBkdSBkZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1Z0xldmVsID0gMDtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29idGlvbiBEZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Zyh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IENvbGxpc2lvbi5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKHRoaXMpO1xuXG4gICAgICAgIC8vIENyZWF0aW9uIGR1IGNpZWwuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgR3JvdW5kLlxuICAgICAgICB0aGlzLmdyb3VuZCA9IG5ldyBHcm91bmQodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBDbG91ZC5cbiAgICAgICAgdGhpcy5jbG91ZCA9IFtdO1xuICAgICAgICB0aGlzLmNsb3VkWzBdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzFdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzJdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzNdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzRdID0gbmV3IENsb3VkKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2FjdHVzLlxuICAgICAgICB0aGlzLmNhY3R1cyA9IFtdO1xuICAgICAgICB0aGlzLmNhY3R1c1swXSA9IG5ldyBDYWN0dXModGhpcyk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzFdID0gbmV3IENhY3R1cyh0aGlzKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMl0gPSBuZXcgQ2FjdHVzKHRoaXMpO1xuICAgICAgICB0aGlzLmNhY3R1c1szXSA9IG5ldyBDYWN0dXModGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBUcmV4LlxuICAgICAgICB0aGlzLnRyZXggPSBbXTtcbiAgICAgICAgdGhpcy50cmV4WzBdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFsxXSA9IG5ldyBUcmV4KHRoaXMpO1xuICAgICAgICB0aGlzLnRyZXhbMl0gPSBuZXcgVHJleCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmV4WzNdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFs0XSA9IG5ldyBUcmV4KHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUHRlcm9kYWN0eWwuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFB0ZXJvZGFjdHlsKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUmVzcG9uc2l2ZS5cbiAgICAgICAgdGhpcy5yZXNwb25zaXZlID0gbmV3IFJlc3BvbnNpdmUodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBTY29yZS5cbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSh0aGlzKTtcblxuICAgICAgICAvLyBFbnJlZ2lzdHJlbWVudCBkdSBtZWlsbGV1ciBzY29yZSBkYW5zIGxlIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbFN0b3JhZ2U7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBHYW1lb3Zlci5cbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IG5ldyBHYW1lT3Zlcih0aGlzKTtcblxuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBEZWZpbml0aW9uIGRlIGwnaW50ZXJ2YWwgZHUgbGFuY2VtZW50IGRlIGxhIGJvdWNsZSBnZW5lcmFsZSBkdSBqZXUuXG4gICAgICAgICAgICAvLyBMJ2ludGVydmFsIGRvaXQgQUJTT0xVTUVOVCBldHJlIGRlZmluaSBwYXIgdW5lIGZvbmN0aW9uIGZsw6ljaMOpZSBhZmluIGRlIHBhc3NlciBjb3JyZWN0ZW1lbnQgbGUgdGhpcyBkZSBjZXQgb2JqZXQuXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4geyB0aGlzLmludGVydmFsTG9vcCgpIH0sIDEwMDAgLyB0aGlzLkZQUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnJlYWtJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgc2hhcmluZ0dhbWVPdmVyWydiJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHNoYXJpbmdHYW1lT3ZlclsnYiddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGludGVydmFsTG9vcCgpIHtcblxuICAgICAgICBkZWJ1Z01lc3NhZ2VbJ2InXSA9IHNoYXJpbmdTY29yZVsnYiddO1xuXG4gICAgICAgIC8vIERlYnV0IGR1IG1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgICAgICB0aGlzLmRlYnVnLnN0YXJ0UGVyZk1lYXN1cmVtZW50KCk7XG5cbiAgICAgICAgLy8gQ29tcHRldXIgZHUgbm9tYnJlIGRlIGZyYW1lcyB0b3RhbGVzLlxuICAgICAgICB0aGlzLnJlbmRlcmVkRnJhbWUrKztcblxuICAgICAgICAvLyBEZXNzaW4gZHUgZm9uZCBkJ2VjcmFuLlxuICAgICAgICB0aGlzLkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCwgNjAwLCAyNTApO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkdSBzb2wuXG4gICAgICAgIHRoaXMuZ3JvdW5kLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgbnVhZ2VzLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMjQgPT09IDIzKSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZFswXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA4NyA9PT0gODYpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3VkWzFdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDE3NCA9PT0gMTczKSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG91ZFsyXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAyOTcgPT09IDI5Nikge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdWRbM10uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgNDAwID09PSAzOTkpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3VkWzRdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvdWRbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzFdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFsyXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbM10ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzRdLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgY2FjdHVzLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgNDkgPT09IDQ4KSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpICYmIHNoYXJpbmdTY29yZVsnYiddID4gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjdHVzWzBdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAyMzcgPT09IDIzNikge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSAmJiBzaGFyaW5nU2NvcmVbJ2InXSA+IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY3R1c1sxXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgNDYzID09PSA0NjIpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkgJiYgc2hhcmluZ1Njb3JlWydiJ10gPiA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWN0dXNbMl0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWN0dXNbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNhY3R1c1sxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzJdLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgY2FjdHVzLlxuICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgODcgPT09IDg2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMF0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMTYzID09PSAxNjIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDAsIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJleFsxXS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAyNTUgPT09IDI1NCkge1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZU51bWJlckJldHdlZW4oMCwgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmV4WzJdLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDU3OCA9PT0gNTc3KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlTnVtYmVyQmV0d2VlbigwLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZXhbM10uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJleFswXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMudHJleFsxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMudHJleFsyXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMudHJleFszXS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGV0IGdlc3Rpb24gZHUgcGVyc29ubmFnZSBwcmluY2lwYWxcbiAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgpO1xuXG4gICAgICAgIC8vIEFmZmljaGFnZSBkdSBzY29yZS5cbiAgICAgICAgdGhpcy5zY29yZS5kcmF3KCk7XG4gICAgICAgIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+IHRoaXMubG9jYWwuc2NvcmUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHNoYXJpbmdTY29yZVsnYiddKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lT3Zlci5jaGVjaygpO1xuXG4gICAgICAgIC8vIERlc3NpbiBkdSBtZW51IGRlYm9nYWdlLlxuICAgICAgICB0aGlzLmRlYnVnLmRyYXcoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYW5uZWF1IGRlIGTDqWJvZ2FnZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OGIuICA4ODg4ODg4ODg4IDg4ODg4OGIuICAgODg4ICAgICA4ODggIC5kODg4OGIuICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgICAgODg4ICBcIjg4YiAgODg4ICAgICA4ODggZDg4UCAgWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIC44OFAgIDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4ODg4ODggICAgODg4ODg4OEsuICA4ODggICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgODg4IDg4OCAgODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAuZDg4UCA4ODggICAgICAgIDg4OCAgIGQ4OFAgWTg4Yi4gLmQ4OFAgWTg4YiAgZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhQXCIgIDg4ODg4ODg4ODggODg4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICAgXCJZODg4OFA4OFxuLy8gICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBkZWJ1Z01lc3NhZ2UgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IFwiMThweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5wb3MgPSBbMjAsIDIwXTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICB9XG4gICAgLy8gTWVzdXJlIGR1IG5vbWJyZSBkJ2ltYWdlcyBwYXIgc2Vjb25kZXMuXG4gICAgc3RhcnRQZXJmTWVhc3VyZW1lbnQoKSB7XG4gICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5mcHMgPSAnRlBTOicgKyAoKHRoaXMucGFyZW50LkZQUyAvICh0aW1lIC0gdGhpcy5sYXN0VGltZSkpICogKDEwMDAgLyB0aGlzLnBhcmVudC5GUFMpKS50b0ZpeGVkKDIpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlcyBjYWN0dXMuXG4gICAgZGlzcGxheUNhdHVzQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMjU1LDAsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlcyBULVJleC5cbiAgICBkaXNwbGF5VHJleENvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGUgam91ZXVyLlxuICAgIGRpc3BsYXlQbGF5ZXJDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDI1NSwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGUgc29sLlxuICAgIGRpc3BsYXlHcm91bmRDb2xsaXNpb24oKSB7XG5cbiAgICAgICAgbGV0IGdyb3VuZFlTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRZRW5kID0gdGhpcy5wYXJlbnQuSEVJR0hUO1xuICAgICAgICBsZXQgZ3JvdW5kWFN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyb3VuZFhFbmQgPSB0aGlzLnBhcmVudC5XSURUSDtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1bMF0uZ3JvdW5kID09PSAxICYmIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSAxXVswXS5ncm91bmQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VuZFlTdGFydCA9IHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldWzBdLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KGdyb3VuZFhTdGFydCwgZ3JvdW5kWVN0YXJ0LCBncm91bmRYRW5kIC0gZ3JvdW5kWFN0YXJ0LCBncm91bmRZRW5kIC0gZ3JvdW5kWVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGdyaWxsZSBkZSBkZWJvZ3VhZ2UuXG4gICAgZGlzcGxheUdyaWQoKSB7XG5cbiAgICAgICAgbGV0IGdyaWRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JpZFlFbmQgPSB0aGlzLnBhcmVudC5IRUlHSFQ7XG4gICAgICAgIGxldCBncmlkWFN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyaWRYRW5kID0gdGhpcy5wYXJlbnQuV0lEVEg7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KGdyaWRYU3RhcnQsIHksIGdyaWRYRW5kIC0gZ3JpZFhTdGFydCwgMSAtIGdyaWRZU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHkgKyAxLCBncmlkWEVuZCAtIDQwLCB5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeCAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KHggKyAxLCBncmlkWVN0YXJ0LCAxIC0gZ3JpZFhTdGFydCwgZ3JpZFlFbmQgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsVGV4dCh4ICsgMSwgeCwgZ3JpZFlFbmQgLSAyNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5RGVidWdNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZvbnQgPSB0aGlzLnRleHRGb250O1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFRleHQodGhpcy5mcHMsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSk7XG4gICAgICAgICAgICBpZiAoZGVidWdNZXNzYWdlWydiJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFRleHQoZGVidWdNZXNzYWdlWydiJ10sIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSArIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkdW1wQ29sbGlzaW9uKCkge1xuICAgICAgICBsZXQgZHVtcCA9IGBgO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICBkdW1wICs9IHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLmdyb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR1bXAgKz0gYFxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkdW1wKTtcbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gRGVzc2luIGRhbnMgbGUgY29udGV4dC5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlEZWJ1Z01lbnUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q2F0dXNDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VHJleENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQbGF5ZXJDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUdyaWQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmUgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vIENyZWF0aW9uIGR1IG1lc3NhZ2UgZGUgZmluIGR1IGpldS5cbiAgICAgICAgdGhpcy5nYW1lT3ZlckxheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZ2FtZW92ZXIucG5nXCI7XG4gICAgICAgIC8vIEFmZmljaGFnZSBkZSBsYSBmaW4gZHUgamV1LlxuICAgICAgICB0aGlzLmdhbWVPdmVyRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzdGFyZEF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Td2l0Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmIChzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQucmVuZGVyZWRGcmFtZSAlIDE1MCA9PT0gMTQ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlckRpc3BsYXllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT3ZlckRpc3BsYXllZCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnQoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJTcGFjZVwiIHx8IGV2ZW50LnRvdWNoZXMpIHtcbiAgICAgICAgICAgIGlmIChzaGFyaW5nR2FtZU92ZXJbJ2InXSAmJiB0aGlzLmdhbWVPdmVyRGlzcGxheWVkICYmIHRoaXMucmVzdGFyZEF1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgICAgICBzaGFyaW5nU2NvcmVbJ2InXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVzdGFydFJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlckRpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFyZEF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaGFyaW5nR2FtZU92ZXJbJ2InXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQucmVuZGVyZWRGcmFtZSAlIDE1MCA9PT0gMTQ5KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcmRBdXRob3JpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB0aGlzLnJlc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4gdGhpcy5yZXN0YXJ0KGV2ZW50KSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjQ3LDI0NywyNDcsMC45KVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KDAsIDAsIHRoaXMucGFyZW50LldJRFRILCB0aGlzLnBhcmVudC5IRUlHSFQpO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5yZW5kZXJlZEZyYW1lICUgNjUgPT09IDY0KSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN3aXRjaCA9ICF0aGlzLmFuaW1hdGlvblN3aXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblN3aXRjaCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5nYW1lT3ZlckxheW91dCwgMCwgMCwgMzA1LCAxODAsIE1hdGgucm91bmQodGhpcy5wYXJlbnQuV0lEVEggLyAyIC0gdGhpcy5nYW1lT3ZlckxheW91dC53aWR0aCAvIDIpLCBNYXRoLnJvdW5kKHRoaXMucGFyZW50LkhFSUdIVCAvIDIgLSB0aGlzLmdhbWVPdmVyTGF5b3V0LmhlaWdodCAvIDIpLCAzMDUsIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmdhbWVPdmVyTGF5b3V0LCAwLCAwLCAzMDUsIDQwLCBNYXRoLnJvdW5kKHRoaXMucGFyZW50LldJRFRIIC8gMiAtIHRoaXMuZ2FtZU92ZXJMYXlvdXQud2lkdGggLyAyKSwgODAsIDMwNSwgNDApO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGR1IHNvbFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICA4ODg4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgODg4IDg4OGIgICAgODg4IDg4ODg4ODhiLiAgXG4vLyAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgODg4ICAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgODg4IDg4ODhiICAgODg4IDg4OCAgXCJZODhiIFxuLy8gICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICA4ODggODg4ODhiICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICBkODhQIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OFk4OGIgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgODg4ODggODg4ODg4OFBcIiAgODg4ICAgICA4ODggODg4ICAgICA4ODggODg4IFk4OGI4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggVDg4YiAgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCAgWTg4ODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIFk4OGIgIGQ4OFAgODg4ICBUODhiICBZODhiLiAuZDg4UCBZODhiLiAuZDg4UCA4ODggICBZODg4OCA4ODggIC5kODhQIFxuLy8gICAgICAgICAgICAgICAgICAgXCJZODg4OFA4OCA4ODggICBUODhiICBcIlk4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODggICAgWTg4OCA4ODg4ODg4UFwiICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7c2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmV9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbMjIwLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9ncm91bmQucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMTI7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSAxODAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgIH1cbiAgICAvLyBEZWZpbml0aW9uIGRlIGxhIGNvbGxpc2lvbiBhdmVjIHNvbC5cbiAgICBzZXRHcm91bmRDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh5ID49IDIyMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnNldEdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICBpZighc2hhcmluZ0dhbWVPdmVyWydiJ10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDMgKyBNYXRoLmZsb29yKChzaGFyaW5nU2NvcmVbJ2InXS90aGlzLnBhcmVudC5ESUZGSUNVTFRZKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDw9IC0xMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgUHTDqXJvZGFjdHlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlogICAgWlpaICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWiAgICBaWlpaWiAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaICBaWlpaWlpaWlogICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBzaGFyaW5nR2FtZU92ZXIgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlUm90IH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHRlcm9kYWN0eWwge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvcHRlcm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMzY7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MjtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDUwO1xuICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW1nU3RlZXAgPD0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXArKztcbiAgICAgICAgfVxuICAgICAgICBkcmF3SW1hZ2VSb3QodGhpcy5wYXJlbnQuQ09OVEVYVCwgdGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLnJvdGF0ZURlZylcbiAgICB9XG4gICAgZ3Jhdml0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMucGFyZW50LkdSQVZJVFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG5cbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sbGlzaW9uWDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ0hlaWdodDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucG9zQ29sbGlzaW9uWzBdOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucG9zQ29sbGlzaW9uWzFdOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgc2hvd0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zQ29sbGlzaW9uWzFdIC0gdGhpcy5wb3NbMV0sIHRoaXMucG9zQ29sbGlzaW9uWzBdIC0gdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIDUsIDUpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29sbGlzaW9uWSAmJiB0aGlzLnJvdGF0ZURlZyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcblxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBvcyA9IFs3MCwgMTAwXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmVudC5yZXN0YXJ0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICB9XG4gICAgYXV0b1BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxIHx8IHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdICsgMTVdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYWRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy5wYXJlbnQuR1JBVklUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXS0yMDsgeSA8IHRoaXMucG9zQ29sbGlzaW9uWzBdOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucG9zQ29sbGlzaW9uWzFdOyB4KyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQucmVzdGFydFJlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZIHx8IHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcmluZ0dhbWVPdmVyWydiJ10gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS50cmV4ID09PSAxICYmIHRoaXMudHJleENvbGxpc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbCgpO1xuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnNldEV2ZW50KCk7XG4gICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZSgpO1xuICAgIH1cblxuICAgIHNldENhbnZhc1NpemUoKSB7XG4gICAgICAgIGxldCBzY2FsZSA9IDA7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAwMzkyMTU2OSA+PSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDAxNjY2NjY3KSB7XG4gICAgICAgICAgICBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoICogMC4wMDE2NjY2Njc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2FsZSA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDAzOTIxNTY5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZSA+IGRpdicpO1xuICAgICAgICBnYW1lQ2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgO1xuICAgIH1cblxuICAgIHNldEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnNldENhbnZhc1NpemUoKSk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgc2hhcmluZ1Njb3JlIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE1cHggam95c3RpeFwiO1xuICAgICAgICB0aGlzLnBvcyA9IFs0MCwgdGhpcy5wYXJlbnQuV0lEVEgtMjQwXTtcbiAgICB9XG4gICAgLy8gRGVzc2luIGRhbnMgbGUgY29udGV4dC5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgaGl0U2NvcmUgPSAoJzAwMDAnICsgdGhpcy5wYXJlbnQubG9jYWwuc2NvcmUpLnNsaWNlKC00KTtcbiAgICAgICAgbGV0IHNjb3JlID0gKCcwMDAwJyArIHNoYXJpbmdTY29yZVsnYiddKS5zbGljZSgtNCk7XG4gICAgICAgIGxldCBzY29yZU1lc3NhZ2UgPSBgSElUOiR7aGl0U2NvcmV9IFNDT1JFOiR7c2NvcmV9YDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC43KVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHNjb3JlTWVzc2FnZSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgVC1SZXhcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgICBNTU1NTU1NTU1NTU1NTU1NTU0gIE1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgc2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmUgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmV4IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE5MCwgdGhpcy5wYXJlbnQuV0lEVEggLSAyMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZGluby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA0MztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA3NTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlIHx8IHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnBhcmVudC5HUkFWSVRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nV2lkdGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSAtIDExXVt0aGlzLnBvc1sxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NbMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdIC0gMTFdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCAyMDA7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoc2hhcmluZ1Njb3JlWydiJ10gPj0gdGhpcy5wYXJlbnQuRElGRklDVUxUWSkge1xuICAgICAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gODU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hhcmluZ1Njb3JlWydiJ10gPj0gdGhpcy5wYXJlbnQuRElGRklDVUxUWSoyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA5NTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjMpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEwNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDExNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjUpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEyNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGFyaW5nU2NvcmVbJ2InXSA+PSB0aGlzLnBhcmVudC5ESUZGSUNVTFRZKjYpIHtcbiAgICAgICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDEzNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgfVxuICAgIGp1bXBDb250cm9sKCkge1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSAmJiB0aGlzLnBvc1swXSA+PSB0aGlzLnJvb2ZPZkp1bXApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc1swXSAqIDAuOTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTkwLCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgfVxuICAgIGRlYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHNoYXJpbmdTY29yZVsnYiddICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBhcmVudC5XSURUSCArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDw9IHRoaXMucGFyZW50LkhFSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMyArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gNSArIE1hdGguZmxvb3IoKHNoYXJpbmdTY29yZVsnYiddL3RoaXMucGFyZW50LkRJRkZJQ1VMVFkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDI7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXSAtIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXSAtIDEwXS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXV0ucGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgLTIwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgIEpKSkpKSkpKSkpKICAgU1NTU1NTU1NTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpaWlpICBLS0tLS0tLS0sgICAgS0tLS0tLS1xuLy8gICAgICAgICAgSjo6Ojo6Ojo6OkogU1M6Ojo6Ojo6Ojo6Ojo6OjpTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTo6OjppIEs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgICAgICAgICBKOjo6Ojo6Ojo6SlM6Ojo6OlNTU1NTUzo6Ojo6OlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgICAgICAgIEpKOjo6Ojo6OkpKUzo6Ojo6UyAgICAgU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLOjo6Ojo6OksgICBLOjo6Ojo6S1xuLy8gICAgICAgICAgICBKOjo6OjpKICBTOjo6OjpTICAgICAgICAgICBycnJyciAgIHJycnJycnJyciAgIGFhYWFhYWFhYWFhYWEgICAgICBzc3Nzc3Nzc3NzICAgICAgIHNzc3Nzc3Nzc3MgICBpaWlpaWlpIEtLOjo6Ojo6SyAgSzo6Ojo6S0tLXG4vLyAgICAgICAgICAgIEo6Ojo6OkogIFM6Ojo6OlMgICAgICAgICAgIHI6Ojo6cnJyOjo6Ojo6Ojo6ciAgYTo6Ojo6Ojo6Ojo6OmEgICBzczo6Ojo6Ojo6OjpzICAgIHNzOjo6Ojo6Ojo6OnMgIGk6Ojo6OmkgICBLOjo6OjpLIEs6Ojo6OksgICBcbi8vICAgICAgICAgICAgSjo6Ojo6SiAgIFM6Ojo6U1NTUyAgICAgICAgcjo6Ojo6Ojo6Ojo6Ojo6Ojo6ciBhYWFhYWFhYWE6Ojo6OmFzczo6Ojo6Ojo6Ojo6OjpzIHNzOjo6Ojo6Ojo6Ojo6OnMgIGk6Ojo6aSAgIEs6Ojo6OjpLOjo6OjpLICAgIFxuLy8gICAgICAgICAgICBKOjo6OjpqICAgIFNTOjo6Ojo6U1NTU1MgICBycjo6Ojo6OnJycnJyOjo6Ojo6ciAgICAgICAgIGE6Ojo6YXM6Ojo6Ojpzc3NzOjo6Ojpzczo6Ojo6OnNzc3M6Ojo6OnMgaTo6OjppICAgSzo6Ojo6Ojo6Ojo6SyAgICAgXG4vLyAgICAgICAgICAgIEo6Ojo6OkogICAgICBTU1M6Ojo6Ojo6OlNTICByOjo6OjpyICAgICByOjo6OjpyICBhYWFhYWFhOjo6OjphIHM6Ojo6OnMgIHNzc3NzcyAgczo6Ojo6cyAgc3Nzc3NzICBpOjo6OmkgICBLOjo6Ojo6Ojo6OjpLICAgICBcbi8vSkpKSkpKSiAgICAgSjo6Ojo6SiAgICAgICAgIFNTU1NTUzo6OjpTIHI6Ojo6OnIgICAgIHJycnJycnJhYTo6Ojo6Ojo6Ojo6OmEgICBzOjo6Ojo6cyAgICAgICAgIHM6Ojo6OjpzICAgICAgIGk6Ojo6aSAgIEs6Ojo6OjpLOjo6OjpLICAgIFxuLy9KOjo6OjpKICAgICBKOjo6OjpKICAgICAgICAgICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICAgYTo6OjphYWFhOjo6Ojo6YSAgICAgIHM6Ojo6OjpzICAgICAgICAgczo6Ojo6OnMgICAgaTo6OjppICAgSzo6Ojo6SyBLOjo6OjpLICAgXG4vL0o6Ojo6OjpKICAgSjo6Ojo6OkogICAgICAgICAgICAgIFM6Ojo6OlNyOjo6OjpyICAgICAgICAgIGE6Ojo6YSAgICBhOjo6Ojphc3Nzc3NzICAgczo6Ojo6cyBzc3Nzc3MgICBzOjo6OjpzICBpOjo6OmkgS0s6Ojo6OjpLICBLOjo6OjpLS0tcbi8vSjo6Ojo6OjpKSko6Ojo6Ojo6SiAgU1NTU1NTUyAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzOjo6Ojpzc3NzOjo6Ojo6c3M6Ojo6OnNzc3M6Ojo6OjpzaTo6Ojo6OmlLOjo6Ojo6OksgICBLOjo6Ojo6S1xuLy8gSko6Ojo6Ojo6Ojo6Ojo6SkogICBTOjo6Ojo6U1NTU1NTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OjphYWFhOjo6Ojo6YXM6Ojo6Ojo6Ojo6Ojo6OnMgczo6Ojo6Ojo6Ojo6Ojo6cyBpOjo6Ojo6aUs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgIEpKOjo6Ojo6Ojo6SkogICAgIFM6Ojo6Ojo6Ojo6Ojo6OjpTUyByOjo6OjpyICAgICAgICAgICBhOjo6Ojo6Ojo6OmFhOjo6YXM6Ojo6Ojo6Ojo6OnNzICAgczo6Ojo6Ojo6Ojo6c3MgIGk6Ojo6OjppSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgICBKSkpKSkpKSkogICAgICAgIFNTU1NTU1NTU1NTU1NTUyAgIHJycnJycnIgICAgICAgICAgICBhYWFhYWFhYWFhICBhYWFhIHNzc3Nzc3Nzc3NzICAgICAgc3Nzc3Nzc3Nzc3MgICAgaWlpaWlpaWlLS0tLS0tLS0sgICAgS0tLS0tLSyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlLmpzJztcbmxldCBjb3JlID0gbmV3IENvcmUoKTsiLCJleHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlUm90KGNvbnRleHQsaW1nTGF5b3V0LCBpbWdQb3NYLCBpbWdQb3NZLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCBwb3MxLCBwb3MwLCBpbWdEZWcpIHtcblxuICAgIC8vQ29udmVyc2lvbiBkZSBkZWdyZSB2ZXJzIFxuICAgIGxldCByYWRpYW4gPSBpbWdEZWcgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgLy9EZWZpbml0aW9uIGRlIGwnb3JpZ2luZSBkZSBsJ2ltYWdlIGEgc29uIGNlbnRyZS5cbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3MxICsgaW1nV2lkdGggLyAyLCBwb3MwICsgaW1nSGVpZ2h0IC8gMik7XG5cbiAgICAvL1JvdGF0aW9uLlxuICAgIGNvbnRleHQucm90YXRlKHJhZGlhbik7XG5cbiAgICAvL0ltcHJlc3Npb24gZGUgbCdpbWFnZS5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIGltZ0hlaWdodCAvIDIgKiAoLTEpLCBpbWdXaWR0aCAvIDIgKiAoLTEpLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcblxuICAgIC8vUmVtaXNlIGEgemVybyBkdSBjYW52YXMuXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuICogKC0xKSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoKHBvczEgKyBpbWdXaWR0aCAvIDIpICogKC0xKSwgKHBvczAgKyBpbWdIZWlnaHQgLyAyKSAqICgtMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn0iLCJleHBvcnQgbGV0IGRlYnVnTWVzc2FnZSA9IHsgYjogJycgfTtcbmV4cG9ydCBsZXQgc2hhcmluZ0dhbWVPdmVyID0geyBiOiBmYWxzZSB9O1xuZXhwb3J0IGxldCBzaGFyaW5nU2NvcmUgPSB7IGI6IDAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=