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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'])
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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
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
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Debug.js */ "./src/Debug.js");
/* harmony import */ var _Cactus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cactus.js */ "./src/Cactus.js");
/* harmony import */ var _Cloud_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cloud.js */ "./src/Cloud.js");
/* harmony import */ var _Ground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ground.js */ "./src/Ground.js");
/* harmony import */ var _Collision_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collision.js */ "./src/Collision.js");
/* harmony import */ var _Trex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trex.js */ "./src/Trex.js");
/* harmony import */ var _Pterodactyl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pterodactyl */ "./src/Pterodactyl.js");
/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Score.js */ "./src/Score.js");
/* harmony import */ var _GameOver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GameOver.js */ "./src/GameOver.js");
/* harmony import */ var _Responsive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Responsive.js */ "./src/Responsive.js");
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
        this.responsive = new _Responsive_js__WEBPACK_IMPORTED_MODULE_10__["default"](this);

        // Ajout de l'objet Score.
        this.score = new _Score_js__WEBPACK_IMPORTED_MODULE_8__["default"](this);
        
        // Enregistrement du meilleur score dans le local storage.
        this.local = localStorage;

        // Ajout de l'objet Gameover.
        this.gameOver = new _GameOver_js__WEBPACK_IMPORTED_MODULE_9__["default"](this);

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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
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
        if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b'])
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
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingScore"]['b'] += 1;
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

                if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_0__["sharingGameOver"]['b']) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJpbmdWYXJpYWJsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsb0VBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QjtBQUM3QixlQUFlLGdEQUFJLEc7Ozs7Ozs7Ozs7OztBQ3BCbkI7QUFBQTtBQUFBO0FBQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQU8sb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixvQkFBb0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBjYWN0dXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU0gICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICBNTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgICAgICAgICAgIFxuaW1wb3J0IHtzaGFyaW5nR2FtZU92ZXJ9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY3R1cyB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsxODUsIHRoaXMucGFyZW50LldJRFRIXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9vYnN0YWNsZS5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDI1O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSAzO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMubW92ZW1lbnRTcGVlZF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkXS5jYWN0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gWzE4NSwgdGhpcy5wYXJlbnQuV0lEVEhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZighc2hhcmluZ0dhbWVPdmVyWydiJ10pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIG51YWdlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgSUkgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBcbmltcG9ydCB7c2hhcmluZ0dhbWVPdmVyfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFtnZW5lcmF0ZU51bWJlckJldHdlZW4oMjAsIDE0MCksIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Nsb3VkLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEzO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDY7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCB0aGlzLnBhcmVudC5XSURUSF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAwLjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAwIC0gdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBcbi8vICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgIDg4OCAgICAgIDg4ODg4ODggIC5kODg4OGIuIDg4ODg4ODggIC5kODg4ODhiLiAgODg4YiAgICA4ODggXG4vLyAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCAgWTg4YiAgODg4ICAgZDg4UFwiIFwiWTg4YiA4ODg4YiAgIDg4OCBcbi8vICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4Yi4gICAgICAgODg4ICAgODg4ICAgICA4ODggODg4ODhiICA4ODggXG4vLyAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICBcIlk4ODhiLiAgICA4ODggICA4ODggICAgIDg4OCA4ODhZODhiIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgICAgIFwiWTg4Yi4gIDg4OCAgIDg4OCAgICAgODg4IDg4OCBZODhiODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgICBcIjg4OCAgODg4ICAgODg4ICAgICA4ODggODg4ICBZODg4ODggXG4vLyAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggICAgICA4ODggICAgICAgIDg4OCAgIFk4OGIgIGQ4OFAgIDg4OCAgIFk4OGIuIC5kODhQIDg4OCAgIFk4ODg4IFxuLy8gICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4ODg4ODg4IDg4ODg4ODg4IDg4ODg4ODggIFwiWTg4ODhQXCIgODg4ODg4OCAgXCJZODg4ODhQXCIgIDg4OCAgICBZODg4IFxuLy8gXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJsYW5rQ29sbGlzaW9uID0gW107XG4gICAgICAgIHRoaXMuaW5pdENvbGxpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSBjb2xsaXNpb24uXG4gICAgaW5pdENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEgrMTAwOyB4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XSA9IHsgeTogeSwgeDogeCwgcGxheWVyOiAwLCBncm91bmQ6IDAsIGNhY3R1czogMCwgbGVhZjogMCwgdHJleDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5ibGFua0NvbGxpc2lvblt5XSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSCsxMDA7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxhbmtDb2xsaXNpb25beV1beF0gPSB7IHk6IHksIHg6IHgsIHBsYXllcjogMCwgZ3JvdW5kOiAwLCBjYWN0dXM6IDAsIGxlYWY6IDAsIHRyZXg6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4ODg4ODhiLiAgODg4ODg4ODg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgIFk4OGIgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgZDg4UCA4ODg4ODg4ICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4IFQ4OGIgICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgVDg4YiAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgVDg4YiA4ODg4ODg4ODg4XG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgZGVidWdNZXNzYWdlLCBzaGFyaW5nR2FtZU92ZXIsIHNoYXJpbmdTY29yZSB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5cbmltcG9ydCBEZWJ1ZyBmcm9tICcuL0RlYnVnLmpzJztcbmltcG9ydCBDYWN0dXMgZnJvbSAnLi9DYWN0dXMuanMnO1xuaW1wb3J0IENsb3VkIGZyb20gJy4vQ2xvdWQuanMnO1xuaW1wb3J0IEdyb3VuZCBmcm9tICcuL0dyb3VuZC5qcyc7XG5pbXBvcnQgQ29sbGlzaW9uIGZyb20gJy4vQ29sbGlzaW9uLmpzJztcbmltcG9ydCBUcmV4IGZyb20gJy4vVHJleC5qcyc7XG5pbXBvcnQgUHRlcm9kYWN0eWwgZnJvbSAnLi9QdGVyb2RhY3R5bCc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlci5qcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZSBmcm9tICcuL1Jlc3BvbnNpdmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGRlcyBjb25zdGFudGVzLlxuICAgICAgICB0aGlzLkdSQVZJVFkgPSA0O1xuICAgICAgICB0aGlzLkZQUyA9IDU4O1xuXG4gICAgICAgIC8vIFNlbGVjdGlvbiBkdSBjYW52YXMgZXQgZGVmaW5pdGlvbiBkZSBzYSB0YWlsbGUuXG4gICAgICAgIHRoaXMuQ0FOVkFTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lID4gZGl2ID4gY2FudmFzXCIpO1xuICAgICAgICB0aGlzLkNPTlRFWFQgPSB0aGlzLkNBTlZBUy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuSEVJR0hUID0gMjUwO1xuICAgICAgICB0aGlzLldJRFRIID0gNjAwO1xuXG4gICAgICAgIC8vIERlZmluaXRpb24gZGUgbGEgdGFpbGxlIGR1IGNhbnZhcy5cbiAgICAgICAgdGhpcy5DQU5WQVMuaGVpZ2h0ID0gdGhpcy5IRUlHSFQ7XG4gICAgICAgIHRoaXMuQ0FOVkFTLndpZHRoID0gdGhpcy5XSURUSDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGR1IG5vbWJyZSBkJ2ltYWdlcyByZW5kdXMuXG4gICAgICAgIHRoaXMucmVuZGVyZWRGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkdSB0YWJsZWF1IGRlcyBjb2xsaXNpb25zLlxuICAgICAgICB0aGlzLmNvbGxpc2lvbkFycmF5ID0gW107XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZXMgaW50ZXJ2YWxzLlxuICAgICAgICB0aGlzLmludGVydmFsO1xuICAgICAgICB0aGlzLmludGVydmFsU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIERlbWFuZGUgZGUgcmVkZW1hcnJhZ2UuXG4gICAgICAgIHRoaXMucmVzdGFydFJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEdlc3Rpb24gZHUgZGVidWcuXG4gICAgICAgIHRoaXMuZGVidWdMZXZlbCA9IDA7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYnRpb24gRGVidWcuXG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgRGVidWcodGhpcyk7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBDb2xsaXNpb24uXG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbih0aGlzKTtcblxuICAgICAgICAvLyBDcmVhdGlvbiBkdSBjaWVsLlxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9sYXlvdXQvYmFja2dyb3VuZC5wbmdcIjtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IEdyb3VuZC5cbiAgICAgICAgdGhpcy5ncm91bmQgPSBuZXcgR3JvdW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2xvdWQuXG4gICAgICAgIHRoaXMuY2xvdWQgPSBbXTtcbiAgICAgICAgdGhpcy5jbG91ZFswXSA9IG5ldyBDbG91ZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG91ZFsxXSA9IG5ldyBDbG91ZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG91ZFsyXSA9IG5ldyBDbG91ZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG91ZFszXSA9IG5ldyBDbG91ZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbG91ZFs0XSA9IG5ldyBDbG91ZCh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZXMgb2JqZXRzIENhY3R1cy5cbiAgICAgICAgdGhpcy5jYWN0dXMgPSBbXTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMF0gPSBuZXcgQ2FjdHVzKHRoaXMpO1xuICAgICAgICB0aGlzLmNhY3R1c1sxXSA9IG5ldyBDYWN0dXModGhpcyk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzJdID0gbmV3IENhY3R1cyh0aGlzKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbM10gPSBuZXcgQ2FjdHVzKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgVHJleC5cbiAgICAgICAgdGhpcy50cmV4ID0gW107XG4gICAgICAgIHRoaXMudHJleFswXSA9IG5ldyBUcmV4KHRoaXMpO1xuICAgICAgICB0aGlzLnRyZXhbMV0gPSBuZXcgVHJleCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmV4WzJdID0gbmV3IFRyZXgodGhpcyk7XG4gICAgICAgIHRoaXMudHJleFszXSA9IG5ldyBUcmV4KHRoaXMpO1xuICAgICAgICB0aGlzLnRyZXhbNF0gPSBuZXcgVHJleCh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IFB0ZXJvZGFjdHlsLlxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQdGVyb2RhY3R5bCh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IFJlc3BvbnNpdmUuXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZSA9IG5ldyBSZXNwb25zaXZlKHRoaXMpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgU2NvcmUuXG4gICAgICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUodGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnJlZ2lzdHJlbWVudCBkdSBtZWlsbGV1ciBzY29yZSBkYW5zIGxlIGxvY2FsIHN0b3JhZ2UuXG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbFN0b3JhZ2U7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBHYW1lb3Zlci5cbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IG5ldyBHYW1lT3Zlcih0aGlzKTtcblxuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBEZWZpbml0aW9uIGRlIGwnaW50ZXJ2YWwgZHUgbGFuY2VtZW50IGRlIGxhIGJvdWNsZSBnZW5lcmFsZSBkdSBqZXUuXG4gICAgICAgICAgICAvLyBMJ2ludGVydmFsIGRvaXQgQUJTT0xVTUVOVCBldHJlIGRlZmluaSBwYXIgdW5lIGZvbmN0aW9uIGZsw6ljaMOpZSBhZmluIGRlIHBhc3NlciBjb3JyZWN0ZW1lbnQgbGUgdGhpcyBkZSBjZXQgb2JqZXQuXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4geyB0aGlzLmludGVydmFsTG9vcCgpIH0sIDEwMDAgLyB0aGlzLkZQUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnJlYWtJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgc2hhcmluZ0dhbWVPdmVyWydiJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHNoYXJpbmdHYW1lT3ZlclsnYiddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGludGVydmFsTG9vcCgpIHtcblxuICAgICAgICBkZWJ1Z01lc3NhZ2VbJ2InXSA9IHNoYXJpbmdTY29yZVsnYiddO1xuXG4gICAgICAgIC8vIERlYnV0IGR1IG1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgICAgICB0aGlzLmRlYnVnLnN0YXJ0UGVyZk1lYXN1cmVtZW50KCk7XG5cbiAgICAgICAgLy8gQ29tcHRldXIgZHUgbm9tYnJlIGRlIGZyYW1lcyB0b3RhbGVzLlxuICAgICAgICB0aGlzLnJlbmRlcmVkRnJhbWUrKztcblxuICAgICAgICAvLyBEZXNzaW4gZHUgZm9uZCBkJ2VjcmFuLlxuICAgICAgICB0aGlzLkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCwgNjAwLCAyNTApO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkdSBzb2wuXG4gICAgICAgIHRoaXMuZ3JvdW5kLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgbnVhZ2VzLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMjQgPT09IDIzKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3VkWzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSA2MCA9PT0gNTkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRbMV0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDkwID09PSAxMTApIHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDEzMCA9PT0gMTYwKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3VkWzNdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAxMzAgPT09IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5jbG91ZFs0XS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3VkWzBdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFsxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbMl0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzNdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFs0XS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIGNhY3R1cy5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgdGhpcy5jYWN0dXNbMF0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjdHVzWzFdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRnJhbWUgJSAzMDAgPT09IDI5OSkge1xuICAgICAgICAgICAgdGhpcy5jYWN0dXNbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWN0dXNbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNhY3R1c1sxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzJdLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgY2FjdHVzLlxuICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmV4WzBdLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRGcmFtZSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMV0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlZEZyYW1lICUgMzAwID09PSAyOTkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMl0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmV4WzBdLm1vdmUoKTtcbiAgICAgICAgdGhpcy50cmV4WzFdLm1vdmUoKTtcbiAgICAgICAgdGhpcy50cmV4WzJdLm1vdmUoKTtcbiAgICAgICAgdGhpcy50cmV4WzNdLm1vdmUoKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gZXQgZ2VzdGlvbiBkdSBwZXJzb25uYWdlIHByaW5jaXBhbFxuICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWZmaWNoYWdlIGR1IHNjb3JlLlxuICAgICAgICB0aGlzLnNjb3JlLmRyYXcoKTtcbiAgICAgICAgaWYgKHNoYXJpbmdTY29yZVsnYiddID4gdGhpcy5sb2NhbC5zY29yZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgc2hhcmluZ1Njb3JlWydiJ10pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVPdmVyLmNoZWNrKCk7XG5cbiAgICAgICAgLy8gRGVzc2luIGR1IG1lbnUgZGVib2dhZ2UuXG4gICAgICAgIHRoaXMuZGVidWcuZHJhdygpO1xuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhbm5lYXUgZGUgZMOpYm9nYWdlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODg4ODg4Yi4gIDg4ODg4ODg4ODggODg4ODg4Yi4gICA4ODggICAgIDg4OCAgLmQ4ODg4Yi4gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICBcIlk4OGIgODg4ICAgICAgICA4ODggIFwiODhiICA4ODggICAgIDg4OCBkODhQICBZODhiIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgLjg4UCAgODg4ICAgICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ODg4OCAgICA4ODg4ODg4Sy4gIDg4OCAgICAgODg4IDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICBcIlk4OGIgODg4ICAgICA4ODggODg4ICA4ODg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggIC5kODhQIDg4OCAgICAgICAgODg4ICAgZDg4UCBZODhiLiAuZDg4UCBZODhiICBkODhQIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OFBcIiAgODg4ODg4ODg4OCA4ODg4ODg4UFwiICAgXCJZODg4ODhQXCIgICBcIlk4ODg4UDg4XG4vLyAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGRlYnVnTWVzc2FnZSB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnRleHRGb250ID0gXCIxOHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLnBvcyA9IFsyMCwgMjBdO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgIH1cbiAgICAvLyBNZXN1cmUgZHUgbm9tYnJlIGQnaW1hZ2VzIHBhciBzZWNvbmRlcy5cbiAgICBzdGFydFBlcmZNZWFzdXJlbWVudCgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmZwcyA9ICdGUFM6JyArICgodGhpcy5wYXJlbnQuRlBTIC8gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSkgKiAoMTAwMCAvIHRoaXMucGFyZW50LkZQUykpLnRvRml4ZWQoMik7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGVzIGNhY3R1cy5cbiAgICBkaXNwbGF5Q2F0dXNDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwyNTUsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGVzIFQtUmV4LlxuICAgIGRpc3BsYXlUcmV4Q29sbGlzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS50cmV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZSBqb3VldXIuXG4gICAgZGlzcGxheVBsYXllckNvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnBhcmVudC5IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0ucGxheWVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMjU1LDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZSBzb2wuXG4gICAgZGlzcGxheUdyb3VuZENvbGxpc2lvbigpIHtcblxuICAgICAgICBsZXQgZ3JvdW5kWVN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyb3VuZFlFbmQgPSB0aGlzLnBhcmVudC5IRUlHSFQ7XG4gICAgICAgIGxldCBncm91bmRYU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWEVuZCA9IHRoaXMucGFyZW50LldJRFRIO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVswXS5ncm91bmQgPT09IDEgJiYgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSAtIDFdWzBdLmdyb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdW5kWVN0YXJ0ID0gdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1bMF0ueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoZ3JvdW5kWFN0YXJ0LCBncm91bmRZU3RhcnQsIGdyb3VuZFhFbmQgLSBncm91bmRYU3RhcnQsIGdyb3VuZFlFbmQgLSBncm91bmRZU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgZ3JpbGxlIGRlIGRlYm9ndWFnZS5cbiAgICBkaXNwbGF5R3JpZCgpIHtcblxuICAgICAgICBsZXQgZ3JpZFlTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWUVuZCA9IHRoaXMucGFyZW50LkhFSUdIVDtcbiAgICAgICAgbGV0IGdyaWRYU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JpZFhFbmQgPSB0aGlzLnBhcmVudC5XSURUSDtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgICAgIGlmICh5ICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoZ3JpZFhTdGFydCwgeSwgZ3JpZFhFbmQgLSBncmlkWFN0YXJ0LCAxIC0gZ3JpZFlTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFRleHQoeSArIDEsIGdyaWRYRW5kIC0gNDAsIHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgICAgIGlmICh4ICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoeCArIDEsIGdyaWRZU3RhcnQsIDEgLSBncmlkWFN0YXJ0LCBncmlkWUVuZCAtIGdyaWRZU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHggKyAxLCB4LCBncmlkWUVuZCAtIDI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BsYXlEZWJ1Z01lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5kZWJ1Z0xldmVsID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZm9udCA9IHRoaXMudGV4dEZvbnQ7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsVGV4dCh0aGlzLmZwcywgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdKTtcbiAgICAgICAgICAgIGlmIChkZWJ1Z01lc3NhZ2VbJ2InXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsVGV4dChkZWJ1Z01lc3NhZ2VbJ2InXSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdICsgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGR1bXBDb2xsaXNpb24oKSB7XG4gICAgICAgIGxldCBkdW1wID0gYGA7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgIGR1bXAgKz0gdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0uZ3JvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHVtcCArPSBgXG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGR1bXApO1xuICAgIH1cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0OSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0OCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyBEZXNzaW4gZGFucyBsZSBjb250ZXh0LlxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheURlYnVnTWVudSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDYXR1c0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUcmV4Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVBsYXllckNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcm91bmRDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5R3JpZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBzaGFyaW5nR2FtZU92ZXIsIHNoYXJpbmdTY29yZSB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gQ3JlYXRpb24gZHUgbWVzc2FnZSBkZSBmaW4gZHUgamV1LlxuICAgICAgICB0aGlzLmdhbWVPdmVyTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYXlvdXQuc3JjID0gXCIuL2xheW91dC9nYW1lb3Zlci5wbmdcIjtcbiAgICAgICAgLy8gQWZmaWNoYWdlIGRlIGxhIGZpbiBkdSBqZXUuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXN0YXJkQXV0aG9yaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5yZW5kZXJlZEZyYW1lICUgMTUwID09PSAxNDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPdmVyRGlzcGxheWVkKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydChldmVudCkge1xuXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIlNwYWNlXCIgfHwgZXZlbnQudG91Y2hlcykge1xuICAgICAgICAgICAgaWYgKHNoYXJpbmdHYW1lT3ZlclsnYiddICYmIHRoaXMuZ2FtZU92ZXJEaXNwbGF5ZWQgJiYgdGhpcy5yZXN0YXJkQXV0aG9yaXplZCkge1xuICAgICAgICAgICAgICAgIHNoYXJpbmdTY29yZVsnYiddID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZXN0YXJ0UmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJkQXV0aG9yaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNoYXJpbmdHYW1lT3ZlclsnYiddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5yZW5kZXJlZEZyYW1lICUgMTUwID09PSAxNDkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFyZEF1dGhvcml6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHRoaXMucmVzdGFydChldmVudCkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB0aGlzLnJlc3RhcnQoZXZlbnQpKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxTdHlsZSA9IFwicmdiYSgyNDcsMjQ3LDI0NywwLjkpXCI7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZmlsbFJlY3QoMCwgMCwgdGhpcy5wYXJlbnQuV0lEVEgsIHRoaXMucGFyZW50LkhFSUdIVCk7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuZ2FtZU92ZXJMYXlvdXQsIE1hdGgucm91bmQodGhpcy5wYXJlbnQuV0lEVEggLyAyIC0gdGhpcy5nYW1lT3ZlckxheW91dC53aWR0aCAvIDIpLCBNYXRoLnJvdW5kKHRoaXMucGFyZW50LkhFSUdIVCAvIDIgLSB0aGlzLmdhbWVPdmVyTGF5b3V0LmhlaWdodCAvIDIpIC0gMjAsIDMwNSwgMTgwKTtcbiAgICB9XG5cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZHUgc29sXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgLmQ4ODg4Yi4gIDg4ODg4ODhiLiAgIC5kODg4ODhiLiAgODg4ICAgICA4ODggODg4YiAgICA4ODggODg4ODg4OGIuICBcbi8vICAgICAgICAgICAgICAgICAgZDg4UCAgWTg4YiA4ODggICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgICA4ODggODg4OGIgICA4ODggODg4ICBcIlk4OGIgXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODg4OGIgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgIGQ4OFAgODg4ICAgICA4ODggODg4ICAgICA4ODggODg4WTg4YiA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICA4ODg4OCA4ODg4ODg4UFwiICA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODggWTg4Yjg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCBUODhiICAgODg4ICAgICA4ODggODg4ICAgICA4ODggODg4ICBZODg4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgWTg4YiAgZDg4UCA4ODggIFQ4OGIgIFk4OGIuIC5kODhQIFk4OGIuIC5kODhQIDg4OCAgIFk4ODg4IDg4OCAgLmQ4OFAgXG4vLyAgICAgICAgICAgICAgICAgICBcIlk4ODg4UDg4IDg4OCAgIFQ4OGIgIFwiWTg4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4OCAgICBZODg4IDg4ODg4ODhQXCIgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHtzaGFyaW5nR2FtZU92ZXJ9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbMjIwLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9ncm91bmQucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMTI7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSAxODAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgIH1cbiAgICAvLyBEZWZpbml0aW9uIGRlIGxhIGNvbGxpc2lvbiBhdmVjIHNvbC5cbiAgICBzZXRHcm91bmRDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5wYXJlbnQuV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh5ID49IDIyMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LkNPTlRFWFQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnNldEdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICBpZighc2hhcmluZ0dhbWVPdmVyWydiJ10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDw9IC0xMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgUHTDqXJvZGFjdHlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlogICAgWlpaICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWiAgICBaWlpaWiAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaICBaWlpaWlpaWlogICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBzaGFyaW5nR2FtZU92ZXIgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlUm90IH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHRlcm9kYWN0eWwge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvcHRlcm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMzY7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MjtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDUwO1xuICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW1nU3RlZXAgPD0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXArKztcbiAgICAgICAgfVxuICAgICAgICBkcmF3SW1hZ2VSb3QodGhpcy5wYXJlbnQuQ09OVEVYVCwgdGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLnJvdGF0ZURlZylcbiAgICB9XG4gICAgZ3Jhdml0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMucGFyZW50LkdSQVZJVFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG5cbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sbGlzaW9uWDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ0hlaWdodDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucG9zQ29sbGlzaW9uWzBdOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucG9zQ29sbGlzaW9uWzFdOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmluZ0dhbWVPdmVyWydiJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMTRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgc2hvd0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zQ29sbGlzaW9uWzFdIC0gdGhpcy5wb3NbMV0sIHRoaXMucG9zQ29sbGlzaW9uWzBdIC0gdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIDUsIDUpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAoIXNoYXJpbmdHYW1lT3ZlclsnYiddKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29sbGlzaW9uWSAmJiB0aGlzLnJvdGF0ZURlZyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcblxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBvcyA9IFs3MCwgMTAwXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhcmVudC5yZXN0YXJ0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICB9XG4gICAgYXV0b1BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxIHx8IHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdICsgMTVdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlYWRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy5wYXJlbnQuR1JBVklUWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXS0yMDsgeSA8IHRoaXMucG9zQ29sbGlzaW9uWzBdOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucG9zQ29sbGlzaW9uWzFdOyB4KyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQucmVzdGFydFJlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZIHx8IHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcmluZ0dhbWVPdmVyWydiJ10gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS50cmV4ID09PSAxICYmIHRoaXMudHJleENvbGxpc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbCgpO1xuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnNldEV2ZW50KCk7XG4gICAgICAgIHRoaXMuc2V0Q2FudmFzU2l6ZSgpO1xuICAgIH1cblxuICAgIHNldENhbnZhc1NpemUoKSB7XG4gICAgICAgIGxldCBzY2FsZSA9IDA7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAwMzkyMTU2OSA+PSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDAxNjY2NjY3KSB7XG4gICAgICAgICAgICBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoICogMC4wMDE2NjY2Njc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2FsZSA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDAzOTIxNTY5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZSA+IGRpdicpO1xuICAgICAgICBnYW1lQ2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgO1xuICAgIH1cblxuICAgIHNldEV2ZW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnNldENhbnZhc1NpemUoKSk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgc2hhcmluZ1Njb3JlIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE1cHggam95c3RpeFwiO1xuICAgICAgICB0aGlzLnBvcyA9IFs0MCwgdGhpcy5wYXJlbnQuV0lEVEgtMjQwXTtcbiAgICB9XG4gICAgLy8gRGVzc2luIGRhbnMgbGUgY29udGV4dC5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgaGl0U2NvcmUgPSAoJzAwMDAnICsgdGhpcy5wYXJlbnQubG9jYWwuc2NvcmUpLnNsaWNlKC00KTtcbiAgICAgICAgbGV0IHNjb3JlID0gKCcwMDAwJyArIHNoYXJpbmdTY29yZVsnYiddKS5zbGljZSgtNCk7XG4gICAgICAgIGxldCBzY29yZU1lc3NhZ2UgPSBgSElUOiR7aGl0U2NvcmV9IFNDT1JFOiR7c2NvcmV9YDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC43KVwiO1xuICAgICAgICB0aGlzLnBhcmVudC5DT05URVhULmZpbGxUZXh0KHNjb3JlTWVzc2FnZSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgVC1SZXhcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgICBNTU1NTU1NTU1NTU1NTU1NTU0gIE1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgc2hhcmluZ0dhbWVPdmVyLCBzaGFyaW5nU2NvcmUgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmV4IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE5MCwgdGhpcy5wYXJlbnQuV0lEVEggLSAyMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZGluby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA0MztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA3NTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlIHx8IHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJlbnQuQ09OVEVYVC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnBhcmVudC5HUkFWSVRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nV2lkdGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSAtIDExXVt0aGlzLnBvc1sxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NbMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gLSAxMV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdIC0gMTFdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucGFyZW50LkhFSUdIVDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBhcmVudC5XSURUSDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGp1bXAoKSB7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45Mik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IFsxOTAsIHRoaXMucGFyZW50LldJRFRIXTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZGVhZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgc2hhcmluZ1Njb3JlWydiJ10gKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgdGhpcy5wYXJlbnQuSEVJR0hUOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucGFyZW50LldJRFRIOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMl0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt5ICsgMl1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4ICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBkZWFkQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NbMF0gPD0gdGhpcy5wYXJlbnQuSEVJR0hUKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAzO1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzaGFyaW5nR2FtZU92ZXJbJ2InXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucGFyZW50LmNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnBhcmVudC5jb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAtMjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgSkpKSkpKSkpKSkogICBTU1NTU1NTU1NTU1NTU1MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlpaWkgIEtLS0tLS0tLSyAgICBLS0tLS0tLXG4vLyAgICAgICAgICBKOjo6Ojo6Ojo6SiBTUzo6Ojo6Ojo6Ojo6Ojo6OlMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOjo6OmkgSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgICAgICAgIEo6Ojo6Ojo6OjpKUzo6Ojo6U1NTU1NTOjo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpaWlpICBLOjo6Ojo6OksgICAgSzo6Ojo6S1xuLy8gICAgICAgICAgSko6Ojo6Ojo6SkpTOjo6OjpTICAgICBTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEs6Ojo6Ojo6SyAgIEs6Ojo6OjpLXG4vLyAgICAgICAgICAgIEo6Ojo6OkogIFM6Ojo6OlMgICAgICAgICAgIHJycnJyICAgcnJycnJycnJyICAgYWFhYWFhYWFhYWFhYSAgICAgIHNzc3Nzc3Nzc3MgICAgICAgc3Nzc3Nzc3NzcyAgIGlpaWlpaWkgS0s6Ojo6OjpLICBLOjo6OjpLS0tcbi8vICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcjo6OjpycnI6Ojo6Ojo6OjpyICBhOjo6Ojo6Ojo6Ojo6YSAgIHNzOjo6Ojo6Ojo6OnMgICAgc3M6Ojo6Ojo6Ojo6cyAgaTo6Ojo6aSAgIEs6Ojo6OksgSzo6Ojo6SyAgIFxuLy8gICAgICAgICAgICBKOjo6OjpKICAgUzo6OjpTU1NTICAgICAgICByOjo6Ojo6Ojo6Ojo6Ojo6OjpyIGFhYWFhYWFhYTo6Ojo6YXNzOjo6Ojo6Ojo6Ojo6OnMgc3M6Ojo6Ojo6Ojo6Ojo6cyAgaTo6OjppICAgSzo6Ojo6Oks6Ojo6OksgICAgXG4vLyAgICAgICAgICAgIEo6Ojo6OmogICAgU1M6Ojo6OjpTU1NTUyAgIHJyOjo6Ojo6cnJycnI6Ojo6OjpyICAgICAgICAgYTo6Ojphczo6Ojo6OnNzc3M6Ojo6OnNzOjo6Ojo6c3Nzczo6Ojo6cyBpOjo6OmkgICBLOjo6Ojo6Ojo6OjpLICAgICBcbi8vICAgICAgICAgICAgSjo6Ojo6SiAgICAgIFNTUzo6Ojo6Ojo6U1MgIHI6Ojo6OnIgICAgIHI6Ojo6OnIgIGFhYWFhYWE6Ojo6OmEgczo6Ojo6cyAgc3Nzc3NzICBzOjo6OjpzICBzc3Nzc3MgIGk6Ojo6aSAgIEs6Ojo6Ojo6Ojo6OksgICAgIFxuLy9KSkpKSkpKICAgICBKOjo6OjpKICAgICAgICAgU1NTU1NTOjo6OlMgcjo6Ojo6ciAgICAgcnJycnJycmFhOjo6Ojo6Ojo6Ojo6YSAgIHM6Ojo6OjpzICAgICAgICAgczo6Ojo6OnMgICAgICAgaTo6OjppICAgSzo6Ojo6Oks6Ojo6OksgICAgXG4vL0o6Ojo6OkogICAgIEo6Ojo6OkogICAgICAgICAgICAgIFM6Ojo6OlNyOjo6OjpyICAgICAgICAgICBhOjo6OmFhYWE6Ojo6OjphICAgICAgczo6Ojo6OnMgICAgICAgICBzOjo6Ojo6cyAgICBpOjo6OmkgICBLOjo6OjpLIEs6Ojo6OksgICBcbi8vSjo6Ojo6OkogICBKOjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzc3Nzc3MgICBzOjo6OjpzIHNzc3NzcyAgIHM6Ojo6OnMgIGk6Ojo6aSBLSzo6Ojo6OksgIEs6Ojo6OktLS1xuLy9KOjo6Ojo6OkpKSjo6Ojo6OjpKICBTU1NTU1NTICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OmEgICAgYTo6Ojo6YXM6Ojo6OnNzc3M6Ojo6Ojpzczo6Ojo6c3Nzczo6Ojo6OnNpOjo6Ojo6aUs6Ojo6Ojo6SyAgIEs6Ojo6OjpLXG4vLyBKSjo6Ojo6Ojo6Ojo6OjpKSiAgIFM6Ojo6OjpTU1NTU1M6Ojo6OlNyOjo6OjpyICAgICAgICAgIGE6Ojo6OmFhYWE6Ojo6Ojphczo6Ojo6Ojo6Ojo6Ojo6cyBzOjo6Ojo6Ojo6Ojo6OjpzIGk6Ojo6OjppSzo6Ojo6OjpLICAgIEs6Ojo6Oktcbi8vICAgSko6Ojo6Ojo6OjpKSiAgICAgUzo6Ojo6Ojo6Ojo6Ojo6OlNTIHI6Ojo6OnIgICAgICAgICAgIGE6Ojo6Ojo6Ojo6YWE6Ojphczo6Ojo6Ojo6Ojo6c3MgICBzOjo6Ojo6Ojo6OjpzcyAgaTo6Ojo6OmlLOjo6Ojo6OksgICAgSzo6Ojo6S1xuLy8gICAgIEpKSkpKSkpKSiAgICAgICAgU1NTU1NTU1NTU1NTU1NTICAgcnJycnJyciAgICAgICAgICAgIGFhYWFhYWFhYWEgIGFhYWEgc3Nzc3Nzc3Nzc3MgICAgICBzc3Nzc3Nzc3NzcyAgICBpaWlpaWlpaUtLS0tLS0tLSyAgICBLS0tLS0tLIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUuanMnO1xubGV0IGNvcmUgPSBuZXcgQ29yZSgpOyIsImV4cG9ydCBmdW5jdGlvbiBkcmF3SW1hZ2VSb3QoY29udGV4dCxpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIHBvczEsIHBvczAsIGltZ0RlZykge1xuXG4gICAgLy9Db252ZXJzaW9uIGRlIGRlZ3JlIHZlcnMgXG4gICAgbGV0IHJhZGlhbiA9IGltZ0RlZyAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAvL0RlZmluaXRpb24gZGUgbCdvcmlnaW5lIGRlIGwnaW1hZ2UgYSBzb24gY2VudHJlLlxuICAgIGNvbnRleHQudHJhbnNsYXRlKHBvczEgKyBpbWdXaWR0aCAvIDIsIHBvczAgKyBpbWdIZWlnaHQgLyAyKTtcblxuICAgIC8vUm90YXRpb24uXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuKTtcblxuICAgIC8vSW1wcmVzc2lvbiBkZSBsJ2ltYWdlLlxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ0xheW91dCwgaW1nUG9zWCwgaW1nUG9zWSwgaW1nV2lkdGgsIGltZ0hlaWdodCwgaW1nSGVpZ2h0IC8gMiAqICgtMSksIGltZ1dpZHRoIC8gMiAqICgtMSksIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuXG4gICAgLy9SZW1pc2UgYSB6ZXJvIGR1IGNhbnZhcy5cbiAgICBjb250ZXh0LnJvdGF0ZShyYWRpYW4gKiAoLTEpKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgocG9zMSArIGltZ1dpZHRoIC8gMikgKiAoLTEpLCAocG9zMCArIGltZ0hlaWdodCAvIDIpICogKC0xKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlckJldHdlZW4obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufSIsImV4cG9ydCBsZXQgZGVidWdNZXNzYWdlID0geyBiOiAnJyB9O1xuZXhwb3J0IGxldCBzaGFyaW5nR2FtZU92ZXIgPSB7IGI6IGZhbHNlIH07XG5leHBvcnQgbGV0IHNoYXJpbmdTY29yZSA9IHsgYjogMCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==