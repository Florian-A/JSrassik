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

                    if (typeof (this.parent.collisionArray[y][x + this.movementSpeed]) !== "undefined") {
                        this.parent.collisionArray[y][x + this.movementSpeed].cactus = 0;
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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b'])
            {
                this.pos[1] -= 3;
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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
                this.pos[1] -= 2;
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
        this.parent = parent
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
    }

    clearCollision() {

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
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Debug.js */ "./src/Debug.js");
/* harmony import */ var _Cactus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cactus.js */ "./src/Cactus.js");
/* harmony import */ var _Cloud_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cloud.js */ "./src/Cloud.js");
/* harmony import */ var _Ground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ground.js */ "./src/Ground.js");
/* harmony import */ var _Collision_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collision.js */ "./src/Collision.js");
/* harmony import */ var _Trex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trex.js */ "./src/Trex.js");
/* harmony import */ var _Pterodactyl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pterodactyl */ "./src/Pterodactyl.js");
/* harmony import */ var _GameOver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GameOver.js */ "./src/GameOver.js");
/* harmony import */ var _Responsive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Responsive.js */ "./src/Responsive.js");
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

        // Definition du socre.
        this.score = 0;

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
        this.debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);

        // Ajout de l'objet Collision.
        this.collision = new _Collision_js__WEBPACK_IMPORTED_MODULE_5__["default"](this);

        // Creation du ciel.
        this.background = new Image();
        this.background.src = "./layout/background.png";

        // Ajout de l'objet Ground.
        this.ground = new _Ground_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);

        // Ajout des objets Cloud.
        this.cloud = [];
        this.cloud[0] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cloud[1] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cloud[2] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cloud[3] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.cloud[4] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);

        // Ajout des objets Cactus.
        this.cactus = [];
        this.cactus[0] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.cactus[1] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.cactus[2] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.cactus[3] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);

        // Ajout des objets Trex.
        this.trex = [];
        this.trex[0] = new _Trex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.trex[1] = new _Trex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.trex[2] = new _Trex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.trex[3] = new _Trex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
        this.trex[4] = new _Trex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);

        // Ajout de l'objet Pterodactyl.
        this.player = new _Pterodactyl__WEBPACK_IMPORTED_MODULE_7__["default"](this);

        // Ajout de l'objet Responsive.
        this.responsive = new _Responsive_js__WEBPACK_IMPORTED_MODULE_9__["default"](this);

        // Ajout de l'objet Gameover.
        this.gameOver = new _GameOver_js__WEBPACK_IMPORTED_MODULE_8__["default"](this);

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
                isGameOverd['b'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                isGameOverd['b'] = false;
            }
        })
    }
    intervalLoop() {

        // Debut du mesure du nombre d'images par secondes.
        this.debug.startPerfMeasurement();

        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["debugMessage"]['buffer'] = this.score;

        // Compteur du nombre de frames totales.
        this.renderedFrame++;

        this.collision.clearCollision();

        // Dessin du fond d'ecran.
        this.CONTEXT.drawImage(this.background, 0, 0, 600, 250);

        // Animation du sol.
        this.ground.move();

        // Activation et animation des nuages.
        if (this.renderedFrame % 24 === 23) {
            this.cloud[0].enable();
        }
        if (this.renderedFrame % 60 === 59) {
            this.cloud[1].enable();
        }
        if (this.renderedFrame % 90 === 110) {
            this.cloud[2].enable();
        }
        if (this.renderedFrame % 130 === 160) {
            this.cloud[3].enable();
        }
        if (this.renderedFrame % 130 === 200) {
            this.cloud[4].enable();
        }
        this.cloud[0].move();
        this.cloud[1].move();
        this.cloud[2].move();
        this.cloud[3].move();
        this.cloud[4].move();

        // Activation et animation des cactus.
        if (this.renderedFrame % 50 === 49) {
            this.cactus[0].enable();
        }
        if (this.renderedFrame % 100 === 99) {
            this.cactus[1].enable();
        }
        if (this.renderedFrame % 300 === 299) {
            this.cactus[2].enable();
        }
        this.cactus[0].move();
        this.cactus[1].move();
        this.cactus[2].move();

        // Activation et animation des cactus.
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
            if (this.renderedFrame % 50 === 49) {
                this.trex[0].enable();
            }
            if (this.renderedFrame % 100 === 99) {
                this.trex[1].enable();
            }
            if (this.renderedFrame % 300 === 299) {
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
    }
    check() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
            this.draw();
            this.setHotKey();
        }
    }

    restart(event) {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
            this.parent.score = 0;
            this.parent.restartRequested = true;
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b'] = false;
        }
    }

    setHotKey() {
        document.addEventListener("keydown", () => this.restart(event));
        document.addEventListener("touchstart", () => this.restart(event));
    }

    draw() {
        this.parent.CONTEXT.fillStyle = "rgba(247,247,247,0.9)";
        this.parent.CONTEXT.fillRect(0, 0, this.parent.WIDTH, this.parent.HEIGHT);
        this.parent.CONTEXT.drawImage(this.gameOverLayout, Math.round(this.parent.WIDTH / 2 - this.gameOverLayout.width / 2), Math.round(this.parent.HEIGHT / 2 - this.gameOverLayout.height / 2) - 20, 305, 180);
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
        if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b'])
        {
            this.pos[1] -= 3;
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
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
                    if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
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
    }
    move() {
        if (this.parent.restartRequested) {
            this.restart();
        }

        if (this.collisionY || this.collisionX) {
            if (this.collisionX) {
                this.jump();
            }
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b'] = true;
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
            for (let x = this.pos[1]; x < this.parent.WIDTH; x++) {

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
            this.parent.score += 1;
        }
        this.isDead = true;

        for (let y = this.pos[0]; y < this.parent.HEIGHT; y++) {
            for (let x = this.pos[1]; x < this.parent.WIDTH; x++) {

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

                if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["isGameOver"]['b']) {
                    this.pos[1] -= 5;
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




//let local = localStorage;
//localStorage.setItem('alpha', 1)

//console.log(gameCanvas.style);
// Importation des classes.

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
/*! exports provided: debugMessage, isGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugMessage", function() { return debugMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGameOver", function() { return isGameOver; });
let debugMessage = { b: '' };
let isGameOver = { b: false };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ1ZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBTyxvQkFBb0I7QUFDcEIsa0JBQWtCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgY2FjdHVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgICAgICAgICAgICAgICBcbmltcG9ydCB7aXNHYW1lT3Zlcn0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjdHVzIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE4NSwgdGhpcy5wYXJlbnQuV0lEVEhdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L29ic3RhY2xlLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMjU7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDM7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLm1vdmVtZW50U3BlZWRdLmNhY3R1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTg1LCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFpc0dhbWVPdmVyWydiJ10pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIG51YWdlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgSUkgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBcbmltcG9ydCB7aXNHYW1lT3Zlcn0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7Z2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9jbG91ZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQ2O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gW2dlbmVyYXRlTnVtYmVyQmV0d2VlbigyMCwgMTQwKSwgdGhpcy5wYXJlbnQuV0lEVEhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZighaXNHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFxuLy8gICAgICAgICAuZDg4ODhiLiAgIC5kODg4ODhiLiAgODg4ICAgICAgODg4ICAgICAgODg4ODg4OCAgLmQ4ODg4Yi4gODg4ODg4OCAgLmQ4ODg4OGIuICA4ODhiICAgIDg4OCBcbi8vICAgICAgICBkODhQICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgICAgODg4ICAgICAgICA4ODggICBkODhQICBZODhiICA4ODggICBkODhQXCIgXCJZODhiIDg4ODhiICAgODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICBZODhiLiAgICAgICA4ODggICA4ODggICAgIDg4OCA4ODg4OGIgIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgIFwiWTg4OGIuICAgIDg4OCAgIDg4OCAgICAgODg4IDg4OFk4OGIgODg4IFxuLy8gICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgXCJZODhiLiAgODg4ICAgODg4ICAgICA4ODggODg4IFk4OGI4ODggXG4vLyAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICAgICAgIFwiODg4ICA4ODggICA4ODggICAgIDg4OCA4ODggIFk4ODg4OCBcbi8vICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4YiAgZDg4UCAgODg4ICAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggXG4vLyAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ODg4ODggODg4ODg4ODggODg4ODg4OCAgXCJZODg4OFBcIiA4ODg4ODg4ICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggXG4vLyBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5pbml0Q29sbGlzaW9uKCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpc2F0aW9uIGR1IHN5c3TDqG1lIGRlIGNvbGxpc2lvbi5cbiAgICBpbml0Q29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSCsxMDA7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdID0geyB5OiB5LCB4OiB4LCBwbGF5ZXI6IDAsIGdyb3VuZDogMCwgY2FjdHVzOiAwLCBsZWFmOiAwLCB0cmV4OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckNvbGxpc2lvbigpIHtcblxuICAgIH1cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4ODg4ODhiLiAgODg4ODg4ODg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgIFk4OGIgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgZDg4UCA4ODg4ODg4ICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4IFQ4OGIgICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgVDg4YiAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgVDg4YiA4ODg4ODg4ODg4XG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgZGVidWdNZXNzYWdlLCBpc0dhbWVPdmVyIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuaW1wb3J0IERlYnVnIGZyb20gJy4vRGVidWcuanMnO1xuaW1wb3J0IENhY3R1cyBmcm9tICcuL0NhY3R1cy5qcyc7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9DbG91ZC5qcyc7XG5pbXBvcnQgR3JvdW5kIGZyb20gJy4vR3JvdW5kLmpzJztcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24uanMnO1xuaW1wb3J0IFRyZXggZnJvbSAnLi9UcmV4LmpzJztcbmltcG9ydCBQdGVyb2RhY3R5bCBmcm9tICcuL1B0ZXJvZGFjdHlsJztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyLmpzJztcbmltcG9ydCBSZXNwb25zaXZlIGZyb20gJy4vUmVzcG9uc2l2ZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZGVzIGNvbnN0YW50ZXMuXG4gICAgICAgIHRoaXMuR1JBVklUWSA9IDQ7XG4gICAgICAgIHRoaXMuRlBTID0gNTg7XG5cbiAgICAgICAgLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbiAgICAgICAgdGhpcy5DQU5WQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUgPiBkaXYgPiBjYW52YXNcIik7XG4gICAgICAgIHRoaXMuQ09OVEVYVCA9IHRoaXMuQ0FOVkFTLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5IRUlHSFQgPSAyNTA7XG4gICAgICAgIHRoaXMuV0lEVEggPSA2MDA7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZSBsYSB0YWlsbGUgZHUgY2FudmFzLlxuICAgICAgICB0aGlzLkNBTlZBUy5oZWlnaHQgPSB0aGlzLkhFSUdIVDtcbiAgICAgICAgdGhpcy5DQU5WQVMud2lkdGggPSB0aGlzLldJRFRIO1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZHUgbm9tYnJlIGQnaW1hZ2VzIHJlbmR1cy5cbiAgICAgICAgdGhpcy5yZW5kZXJlZEZyYW1lID0gMDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGR1IHNvY3JlLlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGR1IHRhYmxlYXUgZGVzIGNvbGxpc2lvbnMuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uQXJyYXkgPSBbXTtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGRlcyBpbnRlcnZhbHMuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGVtYW5kZSBkZSByZWRlbWFycmFnZS5cbiAgICAgICAgdGhpcy5yZXN0YXJ0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2VzdGlvbiBkdSBkZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1Z0xldmVsID0gMDtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29idGlvbiBEZWJ1Zy5cbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Zyh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IENvbGxpc2lvbi5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKHRoaXMpO1xuXG4gICAgICAgIC8vIENyZWF0aW9uIGR1IGNpZWwuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgR3JvdW5kLlxuICAgICAgICB0aGlzLmdyb3VuZCA9IG5ldyBHcm91bmQodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBDbG91ZC5cbiAgICAgICAgdGhpcy5jbG91ZCA9IFtdO1xuICAgICAgICB0aGlzLmNsb3VkWzBdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzFdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzJdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzNdID0gbmV3IENsb3VkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3VkWzRdID0gbmV3IENsb3VkKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2FjdHVzLlxuICAgICAgICB0aGlzLmNhY3R1cyA9IFtdO1xuICAgICAgICB0aGlzLmNhY3R1c1swXSA9IG5ldyBDYWN0dXModGhpcyk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzFdID0gbmV3IENhY3R1cyh0aGlzKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMl0gPSBuZXcgQ2FjdHVzKHRoaXMpO1xuICAgICAgICB0aGlzLmNhY3R1c1szXSA9IG5ldyBDYWN0dXModGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGVzIG9iamV0cyBUcmV4LlxuICAgICAgICB0aGlzLnRyZXggPSBbXTtcbiAgICAgICAgdGhpcy50cmV4WzBdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFsxXSA9IG5ldyBUcmV4KHRoaXMpO1xuICAgICAgICB0aGlzLnRyZXhbMl0gPSBuZXcgVHJleCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmV4WzNdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFs0XSA9IG5ldyBUcmV4KHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUHRlcm9kYWN0eWwuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFB0ZXJvZGFjdHlsKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgUmVzcG9uc2l2ZS5cbiAgICAgICAgdGhpcy5yZXNwb25zaXZlID0gbmV3IFJlc3BvbnNpdmUodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBHYW1lb3Zlci5cbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IG5ldyBHYW1lT3Zlcih0aGlzKTtcblxuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBEZWZpbml0aW9uIGRlIGwnaW50ZXJ2YWwgZHUgbGFuY2VtZW50IGRlIGxhIGJvdWNsZSBnZW5lcmFsZSBkdSBqZXUuXG4gICAgICAgICAgICAvLyBMJ2ludGVydmFsIGRvaXQgQUJTT0xVTUVOVCBldHJlIGRlZmluaSBwYXIgdW5lIGZvbmN0aW9uIGZsw6ljaMOpZSBhZmluIGRlIHBhc3NlciBjb3JyZWN0ZW1lbnQgbGUgdGhpcyBkZSBjZXQgb2JqZXQuXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4geyB0aGlzLmludGVydmFsTG9vcCgpIH0sIDEwMDAgLyB0aGlzLkZQUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnJlYWtJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgaXNHYW1lT3ZlcmRbJ2InXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtJbnRlcnZhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0NSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgaXNHYW1lT3ZlcmRbJ2InXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpbnRlcnZhbExvb3AoKSB7XG5cbiAgICAgICAgLy8gRGVidXQgZHUgbWVzdXJlIGR1IG5vbWJyZSBkJ2ltYWdlcyBwYXIgc2Vjb25kZXMuXG4gICAgICAgIHRoaXMuZGVidWcuc3RhcnRQZXJmTWVhc3VyZW1lbnQoKTtcblxuICAgICAgICBkZWJ1Z01lc3NhZ2VbJ2J1ZmZlciddID0gdGhpcy5zY29yZTtcblxuICAgICAgICAvLyBDb21wdGV1ciBkdSBub21icmUgZGUgZnJhbWVzIHRvdGFsZXMuXG4gICAgICAgIHRoaXMucmVuZGVyZWRGcmFtZSsrO1xuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uLmNsZWFyQ29sbGlzaW9uKCk7XG5cbiAgICAgICAgLy8gRGVzc2luIGR1IGZvbmQgZCdlY3Jhbi5cbiAgICAgICAgdGhpcy5DT05URVhULmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDAsIDYwMCwgMjUwKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gZHUgc29sLlxuICAgICAgICB0aGlzLmdyb3VuZC5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIG51YWdlcy5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDI0ID09PSAyMykge1xuICAgICAgICAgICAgdGhpcy5jbG91ZFswXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgNjAgPT09IDU5KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3VkWzFdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA5MCA9PT0gMTEwKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3VkWzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAxMzAgPT09IDE2MCkge1xuICAgICAgICAgICAgdGhpcy5jbG91ZFszXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMTMwID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRbNF0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG91ZFswXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzJdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFszXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbNF0ubW92ZSgpO1xuXG4gICAgICAgIC8vIEFjdGl2YXRpb24gZXQgYW5pbWF0aW9uIGRlcyBjYWN0dXMuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjdHVzWzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAxMDAgPT09IDk5KSB7XG4gICAgICAgICAgICB0aGlzLmNhY3R1c1sxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMzAwID09PSAyOTkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjdHVzWzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjdHVzWzBdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNhY3R1c1syXS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIGNhY3R1cy5cbiAgICAgICAgaWYgKCFpc0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMF0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMTAwID09PSA5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleFsxXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAzMDAgPT09IDI5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleFsyXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZXhbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMl0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbM10ubW92ZSgpO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBldCBnZXN0aW9uIGR1IHBlcnNvbm5hZ2UgcHJpbmNpcGFsXG4gICAgICAgIHRoaXMucGxheWVyLm1vdmUoKTtcblxuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIuY2hlY2soKTtcblxuICAgICAgICAvLyBEZXNzaW4gZHUgbWVudSBkZWJvZ2FnZS5cbiAgICAgICAgdGhpcy5kZWJ1Zy5kcmF3KCk7XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFubmVhdSBkZSBkw6lib2dhZ2Vcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhiLiAgODg4ODg4ODg4OCA4ODg4ODhiLiAgIDg4OCAgICAgODg4ICAuZDg4ODhiLiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggIFwiWTg4YiA4ODggICAgICAgIDg4OCAgXCI4OGIgIDg4OCAgICAgODg4IGQ4OFAgIFk4OGIgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAuODhQICA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODg4ODg4ICAgIDg4ODg4ODhLLiAgODg4ICAgICA4ODggODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIFwiWTg4YiA4ODggICAgIDg4OCA4ODggIDg4ODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgLmQ4OFAgODg4ICAgICAgICA4ODggICBkODhQIFk4OGIuIC5kODhQIFk4OGIgIGQ4OFAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODg4ODg4UFwiICA4ODg4ODg4ODg4IDg4ODg4ODhQXCIgICBcIlk4ODg4OFBcIiAgIFwiWTg4ODhQODhcbi8vICAgICAgIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgZGVidWdNZXNzYWdlIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMucG9zID0gWzIwLCAyMF07XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIC8vIE1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgIHN0YXJ0UGVyZk1lYXN1cmVtZW50KCkge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gJ0ZQUzonICsgKCh0aGlzLnBhcmVudC5GUFMgLyAodGltZSAtIHRoaXMubGFzdFRpbWUpKSAqICgxMDAwIC8gdGhpcy5wYXJlbnQuRlBTKSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgY2FjdHVzLlxuICAgIGRpc3BsYXlDYXR1c0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgwLDI1NSwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgVC1SZXguXG4gICAgZGlzcGxheVRyZXhDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIGpvdWV1ci5cbiAgICBkaXNwbGF5UGxheWVyQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIHNvbC5cbiAgICBkaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIGxldCBncm91bmRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWUVuZCA9IHRoaXMucGFyZW50LkhFSUdIVDtcbiAgICAgICAgbGV0IGdyb3VuZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRYRW5kID0gdGhpcy5wYXJlbnQuV0lEVEg7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldWzBdLmdyb3VuZCA9PT0gMSAmJiB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gMV1bMF0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91bmRZU3RhcnQgPSB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVswXS55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdChncm91bmRYU3RhcnQsIGdyb3VuZFlTdGFydCwgZ3JvdW5kWEVuZCAtIGdyb3VuZFhTdGFydCwgZ3JvdW5kWUVuZCAtIGdyb3VuZFlTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBncmlsbGUgZGUgZGVib2d1YWdlLlxuICAgIGRpc3BsYXlHcmlkKCkge1xuXG4gICAgICAgIGxldCBncmlkWVN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyaWRZRW5kID0gdGhpcy5wYXJlbnQuSEVJR0hUO1xuICAgICAgICBsZXQgZ3JpZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWEVuZCA9IHRoaXMucGFyZW50LldJRFRIO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHkgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdChncmlkWFN0YXJ0LCB5LCBncmlkWEVuZCAtIGdyaWRYU3RhcnQsIDEgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsVGV4dCh5ICsgMSwgZ3JpZFhFbmQgLSA0MCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHggJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh4ICsgMSwgZ3JpZFlTdGFydCwgMSAtIGdyaWRYU3RhcnQsIGdyaWRZRW5kIC0gZ3JpZFlTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFRleHQoeCArIDEsIHgsIGdyaWRZRW5kIC0gMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheURlYnVnTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHRoaXMuZnBzLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgaWYgKGRlYnVnTWVzc2FnZVsnYiddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KGRlYnVnTWVzc2FnZVsnYiddLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0gKyAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHVtcENvbGxpc2lvbigpIHtcbiAgICAgICAgbGV0IGR1bXAgPSBgYDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZHVtcCArPSB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkdW1wICs9IGBcbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZHVtcCk7XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVidWdMZXZlbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIERlc3NpbiBkYW5zIGxlIGNvbnRleHQuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGVidWdNZW51KCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUNhdHVzQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRyZXhDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UGxheWVyQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcmlkKCk7XG4gICAgfVxufSIsImltcG9ydCB7aXNHYW1lT3Zlcn0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAvLyBDcmVhdGlvbiBkdSBtZXNzYWdlIGRlIGZpbiBkdSBqZXUuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlckxheW91dC5zcmMgPSBcIi4vbGF5b3V0L2dhbWVvdmVyLnBuZ1wiO1xuICAgIH1cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydChldmVudCkge1xuICAgICAgICBpZiAoaXNHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZXN0YXJ0UmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzR2FtZU92ZXJbJ2InXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB0aGlzLnJlc3RhcnQoZXZlbnQpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4gdGhpcy5yZXN0YXJ0KGV2ZW50KSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjQ3LDI0NywyNDcsMC45KVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KDAsIDAsIHRoaXMucGFyZW50LldJRFRILCB0aGlzLnBhcmVudC5IRUlHSFQpO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmdhbWVPdmVyTGF5b3V0LCBNYXRoLnJvdW5kKHRoaXMucGFyZW50LldJRFRIIC8gMiAtIHRoaXMuZ2FtZU92ZXJMYXlvdXQud2lkdGggLyAyKSwgTWF0aC5yb3VuZCh0aGlzLnBhcmVudC5IRUlHSFQgLyAyIC0gdGhpcy5nYW1lT3ZlckxheW91dC5oZWlnaHQgLyAyKSAtIDIwLCAzMDUsIDE4MCk7XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGR1IHNvbFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICA4ODg4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgODg4IDg4OGIgICAgODg4IDg4ODg4ODhiLiAgXG4vLyAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgODg4ICAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgODg4IDg4ODhiICAgODg4IDg4OCAgXCJZODhiIFxuLy8gICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICA4ODggODg4ODhiICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICBkODhQIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OFk4OGIgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgODg4ODggODg4ODg4OFBcIiAgODg4ICAgICA4ODggODg4ICAgICA4ODggODg4IFk4OGI4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggVDg4YiAgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCAgWTg4ODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIFk4OGIgIGQ4OFAgODg4ICBUODhiICBZODhiLiAuZDg4UCBZODhiLiAuZDg4UCA4ODggICBZODg4OCA4ODggIC5kODhQIFxuLy8gICAgICAgICAgICAgICAgICAgXCJZODg4OFA4OCA4ODggICBUODhiICBcIlk4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODggICAgWTg4OCA4ODg4ODg4UFwiICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7aXNHYW1lT3Zlcn0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsyMjAsIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2dyb3VuZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMjtcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDE4MDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgfVxuICAgIC8vIERlZmluaXRpb24gZGUgbGEgY29sbGlzaW9uIGF2ZWMgc29sLlxuICAgIHNldEdyb3VuZENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gMjIyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLmdyb3VuZCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0R3JvdW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIGlmKCFpc0dhbWVPdmVyWydiJ10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDw9IC0xMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgUHTDqXJvZGFjdHlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlogICAgWlpaICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWiAgICBaWlpaWiAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaICBaWlpaWlpaWlogICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBpc0dhbWVPdmVyIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7IGRyYXdJbWFnZVJvdCB9IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB0ZXJvZGFjdHlsIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzcwLCAxMDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L3B0ZXJvLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDM2O1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDI7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDgyO1xuICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA1MDtcbiAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICB9XG4gICAgICAgIGRyYXdJbWFnZVJvdCh0aGlzLnBhcmVudC5DT05URVhULCB0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucm90YXRlRGVnKVxuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy5wYXJlbnQuR1JBVklUWTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcblxuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xsaXNpb25YO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nSGVpZ2h0OyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblggPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgdGhpcy5wb3NDb2xsaXNpb25bMF07IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgdGhpcy5wb3NDb2xsaXNpb25bMV07IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgc2hvd0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zQ29sbGlzaW9uWzFdIC0gdGhpcy5wb3NbMV0sIHRoaXMucG9zQ29sbGlzaW9uWzBdIC0gdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIDUsIDUpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoIWlzR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45MCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkgJiYgdGhpcy5yb3RhdGVEZWcgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5jb2xsaXNpb25ZKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJlbnQucmVzdGFydFJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgfVxuICAgIGF1dG9QbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gKyAxNV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSB8fCB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWFkQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMucGFyZW50LkdSQVZJVFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnJlc3RhcnRSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSB8fCB0aGlzLmNvbGxpc2lvblgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzR2FtZU92ZXJbJ2InXSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlYWRBbmltYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLnRyZXggPT09IDEgJiYgdGhpcy50cmV4Q29sbGlzaW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuc2V0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5zZXRDYW52YXNTaXplKCk7XG4gICAgfVxuXG4gICAgc2V0Q2FudmFzU2l6ZSgpIHtcbiAgICAgICAgbGV0IHNjYWxlID0gMDtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDAzOTIxNTY5ID49IHdpbmRvdy5pbm5lcldpZHRoICogMC4wMDE2NjY2NjcpIHtcbiAgICAgICAgICAgIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGggKiAwLjAwMTY2NjY2NztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjYWxlID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMDM5MjE1Njk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lID4gZGl2Jyk7XG4gICAgICAgIGdhbWVDYW52YXMuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgfVxuXG4gICAgc2V0RXZlbnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMuc2V0Q2FudmFzU2l6ZSgpKTtcbiAgICB9XG5cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgZGlub3NhdXJlcyBULVJleFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICBNTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICBNTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBpc0dhbWVPdmVyIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJleCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsxOTAsIHRoaXMucGFyZW50LldJRFRIIC0gMjBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Rpbm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gNDM7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gNzU7XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbWdTdGVlcCA8PSAxMSkge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSB8fCB0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy5wYXJlbnQuR1JBVklUWTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ1dpZHRoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdIC0gMTFdW3RoaXMucG9zWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdIC0gMTFdW3RoaXMucG9zQ29sbGlzaW9uWzFdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSAtIDExXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xsaXNpb25YO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nSGVpZ2h0OyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF07IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgfVxuICAgIGp1bXBDb250cm9sKCkge1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSAmJiB0aGlzLnBvc1swXSA+PSB0aGlzLnJvb2ZPZkp1bXApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc1swXSAqIDAuOTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTkwLCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgfVxuICAgIGRlYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnNjb3JlICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDJdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDw9IHRoaXMucGFyZW50LkhFSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICghaXNHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAyO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2woKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV0gLSAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV0gLSAxMF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dLnBsYXllciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IC0yMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICBKSkpKSkpKSkpKSiAgIFNTU1NTU1NTU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgS0tLS0tLS0tLICAgIEtLS0tLS0tcbi8vICAgICAgICAgIEo6Ojo6Ojo6OjpKIFNTOjo6Ojo6Ojo6Ojo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6Ojo6aSBLOjo6Ojo6OksgICAgSzo6Ojo6S1xuLy8gICAgICAgICAgSjo6Ojo6Ojo6OkpTOjo6OjpTU1NTU1M6Ojo6OjpTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlpaWkgIEs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgICAgICAgICBKSjo6Ojo6OjpKSlM6Ojo6OlMgICAgIFNTU1NTU1MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSzo6Ojo6OjpLICAgSzo6Ojo6Oktcbi8vICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcnJycnIgICBycnJycnJycnIgICBhYWFhYWFhYWFhYWFhICAgICAgc3Nzc3Nzc3NzcyAgICAgICBzc3Nzc3Nzc3NzICAgaWlpaWlpaSBLSzo6Ojo6OksgIEs6Ojo6OktLS1xuLy8gICAgICAgICAgICBKOjo6OjpKICBTOjo6OjpTICAgICAgICAgICByOjo6OnJycjo6Ojo6Ojo6OnIgIGE6Ojo6Ojo6Ojo6OjphICAgc3M6Ojo6Ojo6Ojo6cyAgICBzczo6Ojo6Ojo6OjpzICBpOjo6OjppICAgSzo6Ojo6SyBLOjo6OjpLICAgXG4vLyAgICAgICAgICAgIEo6Ojo6OkogICBTOjo6OlNTU1MgICAgICAgIHI6Ojo6Ojo6Ojo6Ojo6Ojo6OnIgYWFhYWFhYWFhOjo6Ojphc3M6Ojo6Ojo6Ojo6Ojo6cyBzczo6Ojo6Ojo6Ojo6OjpzICBpOjo6OmkgICBLOjo6Ojo6Szo6Ojo6SyAgICBcbi8vICAgICAgICAgICAgSjo6Ojo6aiAgICBTUzo6Ojo6OlNTU1NTICAgcnI6Ojo6OjpycnJycjo6Ojo6OnIgICAgICAgICBhOjo6OmFzOjo6Ojo6c3Nzczo6Ojo6c3M6Ojo6Ojpzc3NzOjo6OjpzIGk6Ojo6aSAgIEs6Ojo6Ojo6Ojo6OksgICAgIFxuLy8gICAgICAgICAgICBKOjo6OjpKICAgICAgU1NTOjo6Ojo6OjpTUyAgcjo6Ojo6ciAgICAgcjo6Ojo6ciAgYWFhYWFhYTo6Ojo6YSBzOjo6OjpzICBzc3Nzc3MgIHM6Ojo6OnMgIHNzc3NzcyAgaTo6OjppICAgSzo6Ojo6Ojo6Ojo6SyAgICAgXG4vL0pKSkpKSkogICAgIEo6Ojo6OkogICAgICAgICBTU1NTU1M6Ojo6UyByOjo6OjpyICAgICBycnJycnJyYWE6Ojo6Ojo6Ojo6OjphICAgczo6Ojo6OnMgICAgICAgICBzOjo6Ojo6cyAgICAgICBpOjo6OmkgICBLOjo6Ojo6Szo6Ojo6SyAgICBcbi8vSjo6Ojo6SiAgICAgSjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgIGE6Ojo6YWFhYTo6Ojo6OmEgICAgICBzOjo6Ojo6cyAgICAgICAgIHM6Ojo6OjpzICAgIGk6Ojo6aSAgIEs6Ojo6OksgSzo6Ojo6SyAgIFxuLy9KOjo6Ojo6SiAgIEo6Ojo6OjpKICAgICAgICAgICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OmEgICAgYTo6Ojo6YXNzc3NzcyAgIHM6Ojo6OnMgc3Nzc3NzICAgczo6Ojo6cyAgaTo6OjppIEtLOjo6Ojo6SyAgSzo6Ojo6S0tLXG4vL0o6Ojo6Ojo6SkpKOjo6Ojo6OkogIFNTU1NTU1MgICAgIFM6Ojo6OlNyOjo6OjpyICAgICAgICAgIGE6Ojo6YSAgICBhOjo6Ojphczo6Ojo6c3Nzczo6Ojo6OnNzOjo6Ojpzc3NzOjo6Ojo6c2k6Ojo6OjppSzo6Ojo6OjpLICAgSzo6Ojo6Oktcbi8vIEpKOjo6Ojo6Ojo6Ojo6OkpKICAgUzo6Ojo6OlNTU1NTUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6Ojo6YWFhYTo6Ojo6OmFzOjo6Ojo6Ojo6Ojo6OjpzIHM6Ojo6Ojo6Ojo6Ojo6OnMgaTo6Ojo6OmlLOjo6Ojo6OksgICAgSzo6Ojo6S1xuLy8gICBKSjo6Ojo6Ojo6OkpKICAgICBTOjo6Ojo6Ojo6Ojo6Ojo6U1Mgcjo6Ojo6ciAgICAgICAgICAgYTo6Ojo6Ojo6OjphYTo6OmFzOjo6Ojo6Ojo6OjpzcyAgIHM6Ojo6Ojo6Ojo6OnNzICBpOjo6Ojo6aUs6Ojo6Ojo6SyAgICBLOjo6OjpLXG4vLyAgICAgSkpKSkpKSkpKICAgICAgICBTU1NTU1NTU1NTU1NTU1MgICBycnJycnJyICAgICAgICAgICAgYWFhYWFhYWFhYSAgYWFhYSBzc3Nzc3Nzc3NzcyAgICAgIHNzc3Nzc3Nzc3NzICAgIGlpaWlpaWlpS0tLS0tLS0tLICAgIEtLS0tLS0sgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZS5qcyc7XG5cblxuLy9sZXQgbG9jYWwgPSBsb2NhbFN0b3JhZ2U7XG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbHBoYScsIDEpXG5cbi8vY29uc29sZS5sb2coZ2FtZUNhbnZhcy5zdHlsZSk7XG4vLyBJbXBvcnRhdGlvbiBkZXMgY2xhc3Nlcy5cblxubGV0IGNvcmUgPSBuZXcgQ29yZSgpOyIsImV4cG9ydCBmdW5jdGlvbiBkcmF3SW1hZ2VSb3QoY29udGV4dCxpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIHBvczEsIHBvczAsIGltZ0RlZykge1xuXG4gICAgLy9Db252ZXJzaW9uIGRlIGRlZ3JlIHZlcnMgXG4gICAgbGV0IHJhZGlhbiA9IGltZ0RlZyAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAvL0RlZmluaXRpb24gZGUgbCdvcmlnaW5lIGRlIGwnaW1hZ2UgYSBzb24gY2VudHJlLlxuICAgIGNvbnRleHQudHJhbnNsYXRlKHBvczEgKyBpbWdXaWR0aCAvIDIsIHBvczAgKyBpbWdIZWlnaHQgLyAyKTtcblxuICAgIC8vUm90YXRpb24uXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuKTtcblxuICAgIC8vSW1wcmVzc2lvbiBkZSBsJ2ltYWdlLlxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ0xheW91dCwgaW1nUG9zWCwgaW1nUG9zWSwgaW1nV2lkdGgsIGltZ0hlaWdodCwgaW1nSGVpZ2h0IC8gMiAqICgtMSksIGltZ1dpZHRoIC8gMiAqICgtMSksIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuXG4gICAgLy9SZW1pc2UgYSB6ZXJvIGR1IGNhbnZhcy5cbiAgICBjb250ZXh0LnJvdGF0ZShyYWRpYW4gKiAoLTEpKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgocG9zMSArIGltZ1dpZHRoIC8gMikgKiAoLTEpLCAocG9zMCArIGltZ0hlaWdodCAvIDIpICogKC0xKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlckJldHdlZW4obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufSIsImV4cG9ydCBsZXQgZGVidWdNZXNzYWdlID0geyBiOiAnJyB9O1xuZXhwb3J0IGxldCBpc0dhbWVPdmVyID0geyBiOiBmYWxzZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==