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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [177, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]];
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
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    localCollision() {
        for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {
                    _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].cactus = 1;

                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.movementSpeed]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.movementSpeed].cactus = 0;
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
        this.pos = [177, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]];
    }
    move() {
        if (this.enabled === true) {
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'])
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__["generateNumberBetween"])(20, 140), 0];
        this.imgLayout = new Image();
        this.imgLayout.src = "./layout/cloud.png";
        this.imgHeight = 13;
        this.imgWidth = 46;
        this.imgPosY = 0;
        this.imgPosX = 0;
        this.enabled = false;
    }
    draw() {
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
        this.pos = [Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__["generateNumberBetween"])(20, 140), _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]];
    }
    move() {
        if (this.enabled === true) {
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor() {
        this.initCollision();
    }
    // Initialisation du système de collision.
    initCollision() {
        for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y] = [];
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]+100; x++) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x] = { y: y, x: x, player: 0, ground: 0, cactus: 0, leaf: 0, trex: 0 };
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Debug.js */ "./src/Debug.js");
/* harmony import */ var _Cactus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cactus.js */ "./src/Cactus.js");
/* harmony import */ var _Cloud_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cloud.js */ "./src/Cloud.js");
/* harmony import */ var _Ground_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Ground.js */ "./src/Ground.js");
/* harmony import */ var _Collision_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Collision.js */ "./src/Collision.js");
/* harmony import */ var _Trex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Trex.js */ "./src/Trex.js");
/* harmony import */ var _Pterodactyl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pterodactyl */ "./src/Pterodactyl.js");
/* harmony import */ var _GameOver_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GameOver.js */ "./src/GameOver.js");
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

        // Definition de la taille du canvas.
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"];
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"];

        // Definition des constantes.
        this.GRAVITY = 4;

        this.interval;

        // Ajout de l'obtion Debug.
        this.debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

        // Ajout de l'objet Collision.
        this.collision = new _Collision_js__WEBPACK_IMPORTED_MODULE_7__["default"]();

        // Creation du ciel.
        this.background = new Image();
        this.background.src = "./layout/background.png";

        // Ajout de l'objet Ground.
        this.ground = new _Ground_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

        // Ajout des objets Cloud.
        this.cloud = [];
        this.cloud[0] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.cloud[1] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.cloud[2] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.cloud[3] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

        // Ajout des objets Cactus.
        this.cactus = [];
        this.cactus[0] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.cactus[1] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.cactus[2] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.cactus[3] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

        // Ajout des objets Trex.
        this.trex = [];
        this.trex[0] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.trex[1] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.trex[2] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.trex[3] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.trex[4] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();

        // Ajout de l'objet player.
        this.player = new _Pterodactyl__WEBPACK_IMPORTED_MODULE_9__["default"](this);

        // Ajout de l'objet Gameover.
        this.gameOver = new _GameOver_js__WEBPACK_IMPORTED_MODULE_10__["default"]();

        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["intervalStarted"]['buffer']) {
            this.interval = setInterval(() => { this.intervalLoop() }, 1000 / _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["fps"]);
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["intervalStarted"]['buffer'] = true;
        }
    }
    breakInterval() {
        clearInterval(this.interval);
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["intervalStarted"]['buffer'] = false;
    }

    nextInterval() {
        this.intervalLoop();
    }

    setHotKey() {
        document.addEventListener('keydown', (event) => {
            if (event.which === 36) {
                this.startInterval();
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'] = false;
            }
        })
    }
    intervalLoop() {

        // Debut du mesure du nombre d'images par secondes.
        this.debug.startPerfMeasurement();

        // Compteur du nombre de frames totales.
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer']++;

        this.collision.clearCollision();

        // Dessin du fond d'ecran.
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.background, 0, 0, 600, 250);

        // Animation du sol.
        this.ground.move();

        // Activation et animation des nuages.
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 24 === 23) {
            this.cloud[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 60 === 59) {
            this.cloud[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 90 === 89) {
            this.cloud[2].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 130 === 129) {
            this.cloud[3].enable();
        }
        this.cloud[0].move();
        this.cloud[1].move();
        this.cloud[2].move();
        this.cloud[3].move();

        // Activation et animation des cactus.
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 50 === 49) {
            this.cactus[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 100 === 99) {
            this.cactus[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 300 === 299) {
            this.cactus[2].enable();
        }
        this.cactus[0].move();
        this.cactus[1].move();
        this.cactus[2].move();

        // Activation et animation des cactus.
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 50 === 49) {
                this.trex[0].enable();
            }
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 100 === 99) {
                this.trex[1].enable();
            }
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 300 === 299) {
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
        this.fps = 'FPS:' + ((_sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["fps"] / (time - this.lastTime)) * (1000 / _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["fps"])).toFixed(2);
        this.lastTime = time;
    }
    // Affichage de la collision avec les cactus.
    displayCatusCollision() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 2) {
            for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
                for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].cactus === 1) {
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,255,0,0.5)";
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(x, y, 1, 1);
                    }
                }
            }
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    // Affichage de la collision avec les T-Rex.
    displayTrexCollision() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 2) {
            for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
                for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].trex === 1) {
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(255,0,0,0.5)";
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(x, y, 1, 1);
                    }
                }
            }
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    // Affichage de la collision avec le joueur.
    displayPlayerCollision() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 2) {
            for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
                for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].player === 1) {
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,0,255,0.5)";
                        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(x, y, 1, 1);
                    }
                }
            }
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    // Affichage de la collision avec le sol.
    displayGroundCollision() {

        let groundYStart = 0;
        let groundYEnd = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"];
        let groundXStart = 0;
        let groundXEnd = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"];
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 2) {
            for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
                for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][0].ground === 1 && _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - 1][0].ground === 0) {
                        groundYStart = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][0].y;
                    }
                }
            }
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,0,0,0.5)";
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(groundXStart, groundYStart, groundXEnd - groundXStart, groundYEnd - groundYStart);
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    // Affichage de la grille de deboguage.
    displayGrid() {

        let gridYStart = 0;
        let gridYEnd = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"];
        let gridXStart = 0;
        let gridXEnd = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"];
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 2) {

            for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
                _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(255,0,0,1)";
                if (y % 50 === 49) {
                    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(gridXStart, y, gridXEnd - gridXStart, 1 - gridYStart);
                    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(y + 1, gridXEnd - 40, y);
                }

            }
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(255,0,0,1)";
                if (x % 50 === 49) {
                    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(x + 1, gridYStart, 1 - gridXStart, gridYEnd - gridYStart);
                    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(x + 1, x, gridYEnd - 25);
                }
            }
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    displayDebugMenu() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] >= 1) {
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].font = this.textFont;
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,0,0,1)";
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(this.fps, this.pos[1], this.pos[0]);
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugMessage"]['buffer'] !== undefined) {
                _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugMessage"]['buffer'], this.pos[1], this.pos[0] + 20);
            }
        }
    }
    dumpCollision() {
        let dump = ``;
        for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                dump += _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].ground;
            }
            dump += `
            `;
        }
        console.log(dump);
    }
    setHotKey() {
        document.addEventListener("keydown", function (event) {
            if (event.which === 49) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] = 1;
            }
            if (event.which === 50) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] = 2;
            }
            if (event.which === 48) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"]['buffer'] = 0;
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");



class GameOver {
    constructor() {
        this.gameOver = false;
        // Creation du message de fin du jeu.
        this.gameOverLayout = new Image();
        this.gameOverLayout.src = "./layout/gameover.png";
    }
    check() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
            this.draw();
            this.setHotKey();
        }
    }

    restart(event) {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["restartRequested"]['buffer'] = true;
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'] = false;
        }
    }

    setHotKey() {
        document.addEventListener("keydown", this.restart);
        document.addEventListener("touchstart",this.restart);
    }

    draw() {
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.gameOverLayout, Math.round(_sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"] / 2 - this.gameOverLayout.width / 2), Math.round(_sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"] / 2 - this.gameOverLayout.height / 2), 253, 71);
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor() {
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
        for (let y = 0; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                if (y >= 222) {
                    _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].ground = 1;
                }

            }
        }
    }
    draw() {
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    move() {
        this.setGroundCollision();
        if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'])
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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
            this.imgSteep++;
        }
        Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__["drawImageRot"])(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.rotateDeg)
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
        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]]) !== "undefined") {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].ground === 1) {
                this.collisionY = true;
            }
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]]) !== "undefined") {
                if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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
                    if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
                        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y]) !== "undefined") {
                            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x]) !== "undefined") {
                                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].player = 1;
                            }
                        }
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 14]) !== "undefined") {
                        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 14][x]) !== "undefined") {
                            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 14][x].player = 0;
                        }
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y]) !== "undefined") {
                        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x]) !== "undefined") {
                            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x].player = 0;
                        }
                    }
                }
            }
        }


    }
    showCollision() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,0,0,0.5)";
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(this.pos[1], this.pos[0], this.posCollision[1] - this.pos[1], this.posCollision[0] - this.pos[0]);
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(255,0,0,1)";
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillRect(this.pos[1], this.pos[0], 5, 5);
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].stroke();
        }
    }
    jump() {
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
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
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["restartRequested"]['buffer'] = false;

    }
    autoPlay() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0] + 15][this.posCollision[1]].ground === 1 || _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0] + 15][this.posCollision[1]].cactus === 1) {
            this.jump();
        }
    }
    deadAnimation() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].ground === 0) {
            this.pos[0] += this.parent.GRAVITY;
        }
    }
    move() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["restartRequested"]['buffer']) {
            this.restart();
        }

        if (this.collisionY || this.collisionX) {
            if (this.collisionX) {
                this.jump();
            }
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer'] = true;
            this.deadAnimation();
        }

        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]]) !== "undefined") {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].trex === 1 && this.trexCollision === false) {
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

/***/ "./src/Trex.js":
/*!*********************!*\
  !*** ./src/Trex.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trex; });
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");
/* harmony import */ var _sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharingFunctions.js */ "./src/sharingFunctions.js");
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
    constructor() {
        // pos[0] ordonnée y.
        // pos[1] abscisse x.
        this.pos = [150, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"] - 20];
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
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.imgWidth, this.imgHeight);
    }
    gravity() {
        if (this.collisionY === false) {
            this.pos[0] += _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["gravity"];
        }
    }
    localCollision() {
        this.posCollision = [this.pos[0] + this.imgHeight, this.pos[1] + this.imgWidth];

        let collisionY;
        for (let index = 0; index <= this.imgWidth; index++) {

            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]]) !== "undefined") {
                if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index]) !== "undefined") {

                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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

        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1]]) !== "undefined") {

            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1]].ground === 1) {
                this.collisionY = true;
            }
        }
        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]]) !== "undefined") {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].ground === 1) {
                this.collisionY = true;
            }
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index]) !== "undefined") {
                if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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

        for (let y = this.pos[0]; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            for (let x = this.pos[1]; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].trex = 1;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.imgWidth + 5]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.imgWidth + 5].trex = 0;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 10]) !== "undefined") {
                        if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 10][x + 5]) !== "undefined") {
                            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 10][x + 5].trex = 0;
                        }
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x + 10]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x + 10].trex = 0;
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
        this.pos = [150, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]];
        this.isDead = false;
    }
    dead() {
        if (!this.isDead) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["score"]['buffer'] += 1;
        }
        this.isDead = true;
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugMessage"]['buffer'] = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["score"]['buffer'];

        for (let y = this.pos[0]; y < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]; y++) {
            for (let x = this.pos[1]; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {

                if (y >= this.pos[0] && y <= this.pos[0] + this.imgHeight && x >= this.pos[1] && x <= this.pos[1] + this.imgWidth) {

                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].trex = 0;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.imgWidth + 2]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x + this.imgWidth + 2].trex = 0;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 2]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 2][x + 2].trex = 0;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x + 2]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x + 2].trex = 0;
                    }
                }
            }
        }

    }
    deadAnimation() {
        if (this.pos[0] <= _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"]) {
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

                if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOverd"]['buffer']) {
                    this.pos[1] -= 5;
                }
                else {
                    this.pos[1] -= 2;
                }


                this.localCollision();
                this.gravity();
                this.jumpControl();
                if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.pos[0]][this.pos[1] - 10]) !== "undefined") {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.pos[0]][this.pos[1] - 10].cactus === 1) {
                        this.jump();
                    }
                }
            }

            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.pos[0]]) !== "undefined") {
                if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.pos[0]][this.pos[1]]) !== "undefined") {
                    if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.pos[0]][this.pos[1]].player === 1) {
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
//           JJJJJJJJJJJ   SSSSSSSSSSSSSSS                                                      iiii  kkkkkkkk           
//           J:::::::::J SS:::::::::::::::S                                                    i::::i k::::::k           
//           J:::::::::JS:::::SSSSSS::::::S                                                     iiii  k::::::k           
//           JJ:::::::JJS:::::S     SSSSSSS                                                           k::::::k           
//             J:::::J  S:::::S           rrrrr   rrrrrrrrr   aaaaaaaaaaaaa      ssssssssss   iiiiiii  k:::::k    kkkkkkk
//             J:::::J  S:::::S           r::::rrr:::::::::r  a::::::::::::a   ss::::::::::s  i:::::i  k:::::k   k:::::k 
//             J:::::J   S::::SSSS        r:::::::::::::::::r aaaaaaaaa:::::ass:::::::::::::s  i::::i  k:::::k  k:::::k  
//             J:::::j    SS::::::SSSSS   rr::::::rrrrr::::::r         a::::as::::::ssss:::::s i::::i  k:::::k k:::::k   
//             J:::::J      SSS::::::::SS  r:::::r     r:::::r  aaaaaaa:::::a s:::::s  ssssss  i::::i  k::::::k:::::k    
// JJJJJJJ     J:::::J         SSSSSS::::S r:::::r     rrrrrrraa::::::::::::a   s::::::s       i::::i  k:::::::::::k     
// J:::::J     J:::::J              S:::::Sr:::::r           a::::aaaa::::::a      s::::::s    i::::i  k:::::::::::k     
// J::::::J   J::::::J              S:::::Sr:::::r          a::::a    a:::::assssss   s:::::s  i::::i  k::::::k:::::k    
// J:::::::JJJ:::::::J  SSSSSSS     S:::::Sr:::::r          a::::a    a:::::as:::::ssss::::::si::::::ik::::::k k:::::k   
//  JJ:::::::::::::JJ   S::::::SSSSSS:::::Sr:::::r          a:::::aaaa::::::as::::::::::::::s i::::::ik::::::k  k:::::k  
//    JJ:::::::::JJ     S:::::::::::::::SS r:::::r           a::::::::::aa:::as:::::::::::ss  i::::::ik::::::k   k:::::k 
//      JJJJJJJJJ        SSSSSSSSSSSSSSS   rrrrrrr            aaaaaaaaaa  aaaa sssssssssss    iiiiiiiikkkkkkkk    kkkkkkk
//                                                                                                                      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function setCanvasSize()
{
    let scale = 0;
    if( window.innerHeight*0.003921569 >= window.innerWidth*0.001666667)
    {
        scale=window.innerWidth*0.001666667;
    }
    else {
        scale=window.innerHeight*0.003921569;
    }
    let middleWidth = window.innerHeight / 2;
    
    let gameCanvas = document.querySelector('.game > div');
    gameCanvas.style.transform = `scale(${scale})`;
}

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

let local = localStorage;
console.log(local);
//localStorage.setItem('alpha', 1)

//console.log(gameCanvas.style);
// Importation des classes.

let core = new _Core_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/sharingConstants.js":
/*!*********************************!*\
  !*** ./src/sharingConstants.js ***!
  \*********************************/
/*! exports provided: canvas, context, height, width, fps, gravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fps", function() { return fps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
// Selection du canvas et definition de sa taille.
const canvas = document.querySelector(".game > div > canvas");
const context = canvas.getContext("2d");

const height = 250;
const width = 600;
const fps = 58;
const gravity = 4;

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
/* harmony import */ var _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharingConstants.js */ "./src/sharingConstants.js");
/* harmony import */ var _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharingVariables.js */ "./src/sharingVariables.js");


function drawImageRot(imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, pos1, pos0, imgDeg) {

    //Conversion de degre vers 
    let radian = imgDeg * Math.PI / 180;

    //Definition de l'origine de l'image a son centre.
    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].translate(pos1 + imgWidth / 2, pos0 + imgHeight / 2);

    //Rotation.
    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].rotate(radian);

    //Impression de l'image.
    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, imgHeight / 2 * (-1), imgWidth / 2 * (-1), imgWidth, imgHeight);

    //Remise a zero du canvas.
    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].rotate(radian * (-1));
    _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].translate((pos1 + imgWidth / 2) * (-1), (pos0 + imgHeight / 2) * (-1));
}

function generateNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/***/ }),

/***/ "./src/sharingVariables.js":
/*!*********************************!*\
  !*** ./src/sharingVariables.js ***!
  \*********************************/
/*! exports provided: debugLevel, debugMessage, intervalStarted, renderedFrame, gameOverd, score, collisionArray, clearedCollisionArray, restartRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugLevel", function() { return debugLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugMessage", function() { return debugMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervalStarted", function() { return intervalStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderedFrame", function() { return renderedFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverd", function() { return gameOverd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "score", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionArray", function() { return collisionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearedCollisionArray", function() { return clearedCollisionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartRequested", function() { return restartRequested; });
let debugLevel = {buffer: 1};
let debugMessage = {buffer: ''};
let intervalStarted = {buffer: false};
let renderedFrame = {buffer: 0};
let gameOverd = {buffer: false};
let score = {buffer: 0};
let collisionArray = {buffer: []};
let clearedCollisionArray = {buffer: []};
let restartRequested = {buffer: false};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ1ZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsZ0RBQUksRzs7Ozs7Ozs7Ozs7O0FDaERuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQjs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUN5RTtBQUN6STs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0REFBTzs7QUFFWDtBQUNBLElBQUksNERBQU87O0FBRVg7QUFDQSxJQUFJLDREQUFPOztBQUVYO0FBQ0EsSUFBSSw0REFBTztBQUNYLElBQUksNERBQU87QUFDWDs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLDZCQUE2QjtBQUM3Qix3QkFBd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBjYWN0dXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU0gICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICBNTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgICAgICAgICAgIFxuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXJkLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY3R1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE3Nywgd2lkdGhdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L29ic3RhY2xlLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMjU7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDM7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLm1vdmVtZW50U3BlZWRdLmNhY3R1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTc3LCB3aWR0aF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFnYW1lT3ZlcmRbJ2J1ZmZlciddKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAwIC0gdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBudWFnZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIElJICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vLyAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcmQsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFtnZW5lcmF0ZU51bWJlckJldHdlZW4oMjAsIDE0MCksIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Nsb3VkLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEzO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDY7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCB3aWR0aF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFnYW1lT3ZlcmRbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFxuLy8gICAgICAgICAuZDg4ODhiLiAgIC5kODg4ODhiLiAgODg4ICAgICAgODg4ICAgICAgODg4ODg4OCAgLmQ4ODg4Yi4gODg4ODg4OCAgLmQ4ODg4OGIuICA4ODhiICAgIDg4OCBcbi8vICAgICAgICBkODhQICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgICAgODg4ICAgICAgICA4ODggICBkODhQICBZODhiICA4ODggICBkODhQXCIgXCJZODhiIDg4ODhiICAgODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICBZODhiLiAgICAgICA4ODggICA4ODggICAgIDg4OCA4ODg4OGIgIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgIFwiWTg4OGIuICAgIDg4OCAgIDg4OCAgICAgODg4IDg4OFk4OGIgODg4IFxuLy8gICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgXCJZODhiLiAgODg4ICAgODg4ICAgICA4ODggODg4IFk4OGI4ODggXG4vLyAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICAgICAgIFwiODg4ICA4ODggICA4ODggICAgIDg4OCA4ODggIFk4ODg4OCBcbi8vICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4YiAgZDg4UCAgODg4ICAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggXG4vLyAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ODg4ODggODg4ODg4ODggODg4ODg4OCAgXCJZODg4OFBcIiA4ODg4ODg4ICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggXG4vLyBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbGxpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSBjb2xsaXNpb24uXG4gICAgaW5pdENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGgrMTAwOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XSA9IHsgeTogeSwgeDogeCwgcGxheWVyOiAwLCBncm91bmQ6IDAsIGNhY3R1czogMCwgbGVhZjogMCwgdHJleDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJDb2xsaXNpb24oKSB7XG5cbiAgICB9XG59IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICAgLmQ4ODg4OGIuICA4ODg4ODg4Yi4gIDg4ODg4ODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICBZODhiIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgIGQ4OFAgODg4ODg4OCAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODg4ODg4UFwiICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCBUODhiICAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggIFQ4OGIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4OCAgIFQ4OGIgODg4ODg4ODg4OFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGNhbnZhcywgY29udGV4dCwgaGVpZ2h0LCB3aWR0aCwgZnBzLCBncmF2aXR5IH0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGRlYnVnTGV2ZWwsIGRlYnVnTWVzc2FnZSwgaW50ZXJ2YWxTdGFydGVkLCByZW5kZXJlZEZyYW1lLCBnYW1lT3ZlcmQsIHNjb3JlLCBjb2xsaXNpb25BcnJheSwgY2xlYXJlZENvbGxpc2lvbkFycmF5IH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7IGRyYXdJbWFnZVJvdCwgZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuIH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuaW1wb3J0IERlYnVnIGZyb20gJy4vRGVidWcuanMnO1xuaW1wb3J0IENhY3R1cyBmcm9tICcuL0NhY3R1cy5qcyc7XG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9DbG91ZC5qcyc7XG5pbXBvcnQgR3JvdW5kIGZyb20gJy4vR3JvdW5kLmpzJztcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24uanMnO1xuaW1wb3J0IFRyZXggZnJvbSAnLi9UcmV4LmpzJztcbmltcG9ydCBQdGVyb2RhY3R5bCBmcm9tICcuL1B0ZXJvZGFjdHlsJztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgLy8gRGVmaW5pdGlvbiBkZSBsYSB0YWlsbGUgZHUgY2FudmFzLlxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAvLyBEZWZpbml0aW9uIGRlcyBjb25zdGFudGVzLlxuICAgICAgICB0aGlzLkdSQVZJVFkgPSA0O1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYnRpb24gRGVidWcuXG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgRGVidWcoKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IENvbGxpc2lvbi5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBuZXcgQ29sbGlzaW9uKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRpb24gZHUgY2llbC5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vbGF5b3V0L2JhY2tncm91bmQucG5nXCI7XG5cbiAgICAgICAgLy8gQWpvdXQgZGUgbCdvYmpldCBHcm91bmQuXG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IEdyb3VuZCgpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2xvdWQuXG4gICAgICAgIHRoaXMuY2xvdWQgPSBbXTtcbiAgICAgICAgdGhpcy5jbG91ZFswXSA9IG5ldyBDbG91ZCgpO1xuICAgICAgICB0aGlzLmNsb3VkWzFdID0gbmV3IENsb3VkKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbMl0gPSBuZXcgQ2xvdWQoKTtcbiAgICAgICAgdGhpcy5jbG91ZFszXSA9IG5ldyBDbG91ZCgpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlcyBvYmpldHMgQ2FjdHVzLlxuICAgICAgICB0aGlzLmNhY3R1cyA9IFtdO1xuICAgICAgICB0aGlzLmNhY3R1c1swXSA9IG5ldyBDYWN0dXMoKTtcbiAgICAgICAgdGhpcy5jYWN0dXNbMV0gPSBuZXcgQ2FjdHVzKCk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzJdID0gbmV3IENhY3R1cygpO1xuICAgICAgICB0aGlzLmNhY3R1c1szXSA9IG5ldyBDYWN0dXMoKTtcblxuICAgICAgICAvLyBBam91dCBkZXMgb2JqZXRzIFRyZXguXG4gICAgICAgIHRoaXMudHJleCA9IFtdO1xuICAgICAgICB0aGlzLnRyZXhbMF0gPSBuZXcgVHJleCgpO1xuICAgICAgICB0aGlzLnRyZXhbMV0gPSBuZXcgVHJleCgpO1xuICAgICAgICB0aGlzLnRyZXhbMl0gPSBuZXcgVHJleCgpO1xuICAgICAgICB0aGlzLnRyZXhbM10gPSBuZXcgVHJleCgpO1xuICAgICAgICB0aGlzLnRyZXhbNF0gPSBuZXcgVHJleCgpO1xuXG4gICAgICAgIC8vIEFqb3V0IGRlIGwnb2JqZXQgcGxheWVyLlxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQdGVyb2RhY3R5bCh0aGlzKTtcblxuICAgICAgICAvLyBBam91dCBkZSBsJ29iamV0IEdhbWVvdmVyLlxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gbmV3IEdhbWVPdmVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgfVxuICAgIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICghaW50ZXJ2YWxTdGFydGVkWydidWZmZXInXSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHsgdGhpcy5pbnRlcnZhbExvb3AoKSB9LCAxMDAwIC8gZnBzKTtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJyZWFrSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJkWydidWZmZXInXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJlYWtJbnRlcnZhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0NSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJkWydidWZmZXInXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpbnRlcnZhbExvb3AoKSB7XG5cbiAgICAgICAgLy8gRGVidXQgZHUgbWVzdXJlIGR1IG5vbWJyZSBkJ2ltYWdlcyBwYXIgc2Vjb25kZXMuXG4gICAgICAgIHRoaXMuZGVidWcuc3RhcnRQZXJmTWVhc3VyZW1lbnQoKTtcblxuICAgICAgICAvLyBDb21wdGV1ciBkdSBub21icmUgZGUgZnJhbWVzIHRvdGFsZXMuXG4gICAgICAgIHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddKys7XG5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24uY2xlYXJDb2xsaXNpb24oKTtcblxuICAgICAgICAvLyBEZXNzaW4gZHUgZm9uZCBkJ2VjcmFuLlxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDAsIDYwMCwgMjUwKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gZHUgc29sLlxuICAgICAgICB0aGlzLmdyb3VuZC5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIG51YWdlcy5cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMjQgPT09IDIzKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3VkWzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDYwID09PSA1OSkge1xuICAgICAgICAgICAgdGhpcy5jbG91ZFsxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSA5MCA9PT0gODkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMTMwID09PSAxMjkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvdWRbM10uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG91ZFswXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvdWRbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3VkWzJdLm1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG91ZFszXS5tb3ZlKCk7XG5cbiAgICAgICAgLy8gQWN0aXZhdGlvbiBldCBhbmltYXRpb24gZGVzIGNhY3R1cy5cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICB0aGlzLmNhY3R1c1swXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAxMDAgPT09IDk5KSB7XG4gICAgICAgICAgICB0aGlzLmNhY3R1c1sxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAzMDAgPT09IDI5OSkge1xuICAgICAgICAgICAgdGhpcy5jYWN0dXNbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWN0dXNbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLmNhY3R1c1sxXS5tb3ZlKCk7XG4gICAgICAgIHRoaXMuY2FjdHVzWzJdLm1vdmUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0aW9uIGV0IGFuaW1hdGlvbiBkZXMgY2FjdHVzLlxuICAgICAgICBpZiAoIWdhbWVPdmVyZFsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleFswXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhbMV0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAzMDAgPT09IDI5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleFsyXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZXhbMF0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMV0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbMl0ubW92ZSgpO1xuICAgICAgICB0aGlzLnRyZXhbM10ubW92ZSgpO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBldCBnZXN0aW9uIGR1IHBlcnNvbm5hZ2UgcHJpbmNpcGFsXG4gICAgICAgIHRoaXMucGxheWVyLm1vdmUoKTtcblxuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIuY2hlY2soKTtcbiAgICAgICAgXG4gICAgICAgIC8vIERlc3NpbiBkdSBtZW51IGRlYm9nYWdlLlxuICAgICAgICB0aGlzLmRlYnVnLmRyYXcoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYW5uZWF1IGRlIGTDqWJvZ2FnZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OGIuICA4ODg4ODg4ODg4IDg4ODg4OGIuICAgODg4ICAgICA4ODggIC5kODg4OGIuICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgICAgODg4ICBcIjg4YiAgODg4ICAgICA4ODggZDg4UCAgWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIC44OFAgIDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4ODg4ODggICAgODg4ODg4OEsuICA4ODggICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgODg4IDg4OCAgODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAuZDg4UCA4ODggICAgICAgIDg4OCAgIGQ4OFAgWTg4Yi4gLmQ4OFAgWTg4YiAgZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhQXCIgIDg4ODg4ODg4ODggODg4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICAgXCJZODg4OFA4OFxuLy8gICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMucG9zID0gWzIwLCAyMF07XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIC8vIE1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgIHN0YXJ0UGVyZk1lYXN1cmVtZW50KCkge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gJ0ZQUzonICsgKChmcHMgLyAodGltZSAtIHRoaXMubGFzdFRpbWUpKSAqICgxMDAwIC8gZnBzKSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgY2FjdHVzLlxuICAgIGRpc3BsYXlDYXR1c0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwyNTUsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGVzIFQtUmV4LlxuICAgIGRpc3BsYXlUcmV4Q29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGUgam91ZXVyLlxuICAgIGRpc3BsYXlQbGF5ZXJDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIHNvbC5cbiAgICBkaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIGxldCBncm91bmRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWUVuZCA9IGhlaWdodDtcbiAgICAgICAgbGV0IGdyb3VuZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRYRW5kID0gd2lkdGg7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVswXS5ncm91bmQgPT09IDEgJiYgY29sbGlzaW9uQXJyYXlbeSAtIDFdWzBdLmdyb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdW5kWVN0YXJ0ID0gY29sbGlzaW9uQXJyYXlbeV1bMF0ueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoZ3JvdW5kWFN0YXJ0LCBncm91bmRZU3RhcnQsIGdyb3VuZFhFbmQgLSBncm91bmRYU3RhcnQsIGdyb3VuZFlFbmQgLSBncm91bmRZU3RhcnQpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgZ3JpbGxlIGRlIGRlYm9ndWFnZS5cbiAgICBkaXNwbGF5R3JpZCgpIHtcblxuICAgICAgICBsZXQgZ3JpZFlTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWUVuZCA9IGhlaWdodDtcbiAgICAgICAgbGV0IGdyaWRYU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JpZFhFbmQgPSB3aWR0aDtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGdyaWRYU3RhcnQsIHksIGdyaWRYRW5kIC0gZ3JpZFhTdGFydCwgMSAtIGdyaWRZU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHkgKyAxLCBncmlkWEVuZCAtIDQwLCB5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeCAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggKyAxLCBncmlkWVN0YXJ0LCAxIC0gZ3JpZFhTdGFydCwgZ3JpZFlFbmQgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dCh4ICsgMSwgeCwgZ3JpZFlFbmQgLSAyNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5RGVidWdNZW51KCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMuZnBzLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgaWYgKGRlYnVnTWVzc2FnZVsnYnVmZmVyJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoZGVidWdNZXNzYWdlWydidWZmZXInXSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdICsgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGR1bXBDb2xsaXNpb24oKSB7XG4gICAgICAgIGxldCBkdW1wID0gYGA7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGR1bXAgKz0gY29sbGlzaW9uQXJyYXlbeV1beF0uZ3JvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHVtcCArPSBgXG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGR1bXApO1xuICAgIH1cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0OSkge1xuICAgICAgICAgICAgICAgIGRlYnVnTGV2ZWxbJ2J1ZmZlciddID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNTApIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsWydidWZmZXInXSA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ4KSB7XG4gICAgICAgICAgICAgICAgZGVidWdMZXZlbFsnYnVmZmVyJ10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyBEZXNzaW4gZGFucyBsZSBjb250ZXh0LlxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheURlYnVnTWVudSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDYXR1c0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUcmV4Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVBsYXllckNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcm91bmRDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5R3JpZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCBmcHMsIGdyYXZpdHkgfSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZGVidWdMZXZlbCwgZGVidWdNZXNzYWdlLCBpbnRlcnZhbFN0YXJ0ZWQsIHJlbmRlcmVkRnJhbWUsIGdhbWVPdmVyZCwgc2NvcmUsIGNvbGxpc2lvbkFycmF5LCBjbGVhcmVkQ29sbGlzaW9uQXJyYXksIHJlc3RhcnRSZXF1ZXN0ZWQgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlUm90LCBnZW5lcmF0ZU51bWJlckJldHdlZW4gfSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIC8vIENyZWF0aW9uIGR1IG1lc3NhZ2UgZGUgZmluIGR1IGpldS5cbiAgICAgICAgdGhpcy5nYW1lT3ZlckxheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZ2FtZW92ZXIucG5nXCI7XG4gICAgfVxuICAgIGNoZWNrKCkge1xuICAgICAgICBpZiAoZ2FtZU92ZXJkWydidWZmZXInXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdGFydChldmVudCkge1xuICAgICAgICBpZiAoZ2FtZU92ZXJkWydidWZmZXInXSkge1xuICAgICAgICAgICAgcmVzdGFydFJlcXVlc3RlZFsnYnVmZmVyJ10gPSB0cnVlO1xuICAgICAgICAgICAgZ2FtZU92ZXJkWydidWZmZXInXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnJlc3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMucmVzdGFydCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5nYW1lT3ZlckxheW91dCwgTWF0aC5yb3VuZCh3aWR0aCAvIDIgLSB0aGlzLmdhbWVPdmVyTGF5b3V0LndpZHRoIC8gMiksIE1hdGgucm91bmQoaGVpZ2h0IC8gMiAtIHRoaXMuZ2FtZU92ZXJMYXlvdXQuaGVpZ2h0IC8gMiksIDI1MywgNzEpO1xuICAgIH1cblxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkdSBzb2xcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAuZDg4ODhiLiAgODg4ODg4OGIuICAgLmQ4ODg4OGIuICA4ODggICAgIDg4OCA4ODhiICAgIDg4OCA4ODg4ODg4Yi4gIFxuLy8gICAgICAgICAgICAgICAgICBkODhQICBZODhiIDg4OCAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICAgIDg4OCA4ODg4YiAgIDg4OCA4ODggIFwiWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4ODg4YiAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODhZODhiIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICA4ODggIDg4ODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCBZODhiODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4IFQ4OGIgICA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODggIFk4ODg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICBZODhiICBkODhQIDg4OCAgVDg4YiAgWTg4Yi4gLmQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggODg4ICAuZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQODggODg4ICAgVDg4YiAgXCJZODg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggODg4ODg4OFBcIiAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcmQsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbMjIwLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9ncm91bmQucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMTI7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSAxODAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgIH1cbiAgICAvLyBEZWZpbml0aW9uIGRlIGxhIGNvbGxpc2lvbiBhdmVjIHNvbC5cbiAgICBzZXRHcm91bmRDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh5ID49IDIyMikge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnNldEdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICBpZighZ2FtZU92ZXJkWydidWZmZXInXSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPD0gLTEyMDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgZGlub3NhdXJlcyBQdMOpcm9kYWN0eWxlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWiAgICBaWlogICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaICAgIFpaWlpaICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlogIFpaWlpaWlpaWiAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaICBaWlpaWlpaWlpaWiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlogICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGNvbnRleHQsIGhlaWdodCwgd2lkdGgsIGZwcywgZ3Jhdml0eSB9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xldmVsLCBkZWJ1Z01lc3NhZ2UsIGludGVydmFsU3RhcnRlZCwgcmVuZGVyZWRGcmFtZSwgZ2FtZU92ZXJkLCBzY29yZSwgY29sbGlzaW9uQXJyYXksIGNsZWFyZWRDb2xsaXNpb25BcnJheSwgcmVzdGFydFJlcXVlc3RlZCB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgeyBkcmF3SW1hZ2VSb3QsIGdlbmVyYXRlTnVtYmVyQmV0d2VlbiB9IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHRlcm9kYWN0eWwge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvcHRlcm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMzY7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MjtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDUwO1xuICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW1nU3RlZXAgPD0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2FtZU92ZXJkWydidWZmZXInXSkge1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICB9XG4gICAgICAgIGRyYXdJbWFnZVJvdCh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucm90YXRlRGVnKVxuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy5wYXJlbnQuR1JBVklUWTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcblxuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xsaXNpb25YO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nSGVpZ2h0OyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblggPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgdGhpcy5wb3NDb2xsaXNpb25bMF07IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgdGhpcy5wb3NDb2xsaXNpb25bMV07IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lT3ZlcmRbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0ucGxheWVyID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDE0XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxNF1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XS5wbGF5ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHNob3dDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLnBvc0NvbGxpc2lvblsxXSAtIHRoaXMucG9zWzFdLCB0aGlzLnBvc0NvbGxpc2lvblswXSAtIHRoaXMucG9zWzBdKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCA1LCA1KTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcCgpIHtcbiAgICAgICAgaWYgKCFnYW1lT3ZlcmRbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29sbGlzaW9uWSAmJiB0aGlzLnJvdGF0ZURlZyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgcmVzdGFydFJlcXVlc3RlZFsnYnVmZmVyJ10gPSBmYWxzZTtcblxuICAgIH1cbiAgICBhdXRvUGxheSgpIHtcbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdICsgMTVdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEgfHwgY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gKyAxNV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnBhcmVudC5HUkFWSVRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChyZXN0YXJ0UmVxdWVzdGVkWydidWZmZXInXSkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZIHx8IHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZU92ZXJkWydidWZmZXInXSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlYWRBbmltYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLnRyZXggPT09IDEgJiYgdGhpcy50cmV4Q29sbGlzaW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgZGlub3NhdXJlcyBULVJleFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICBNTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICBNTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCBmcHMsIGdyYXZpdHkgfSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZGVidWdMZXZlbCwgZGVidWdNZXNzYWdlLCBpbnRlcnZhbFN0YXJ0ZWQsIHJlbmRlcmVkRnJhbWUsIGdhbWVPdmVyZCwgc2NvcmUsIGNvbGxpc2lvbkFycmF5LCBjbGVhcmVkQ29sbGlzaW9uQXJyYXkgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlUm90LCBnZW5lcmF0ZU51bWJlckJldHdlZW4gfSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE1MCwgd2lkdGggLSAyMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZGluby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA0MztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA3MDtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlIHx8IHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSBncmF2aXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nV2lkdGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB3aWR0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGp1bXAoKSB7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45Mik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IFsxNTAsIHdpZHRoXTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZGVhZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgc2NvcmVbJ2J1ZmZlciddICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgICAgICBkZWJ1Z01lc3NhZ2VbJ2J1ZmZlciddID0gc2NvcmVbJ2J1ZmZlciddO1xuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB3aWR0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSArIDJdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDw9IGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGlmICghZ2FtZU92ZXJkWydidWZmZXInXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAtMjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKSkpKSkpKSkpKICAgU1NTU1NTU1NTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAga2tra2tra2sgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKIFNTOjo6Ojo6Ojo6Ojo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOjo6Omkgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKUzo6Ojo6U1NTU1NTOjo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKOjo6Ojo6OkpKUzo6Ojo6UyAgICAgU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcnJycnIgICBycnJycnJycnIgICBhYWFhYWFhYWFhYWFhICAgICAgc3Nzc3Nzc3NzcyAgIGlpaWlpaWkgIGs6Ojo6OmsgICAga2tra2tra1xuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcjo6OjpycnI6Ojo6Ojo6OjpyICBhOjo6Ojo6Ojo6Ojo6YSAgIHNzOjo6Ojo6Ojo6OnMgIGk6Ojo6OmkgIGs6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgIFM6Ojo6U1NTUyAgICAgICAgcjo6Ojo6Ojo6Ojo6Ojo6Ojo6ciBhYWFhYWFhYWE6Ojo6OmFzczo6Ojo6Ojo6Ojo6OjpzICBpOjo6OmkgIGs6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6aiAgICBTUzo6Ojo6OlNTU1NTICAgcnI6Ojo6OjpycnJycjo6Ojo6OnIgICAgICAgICBhOjo6OmFzOjo6Ojo6c3Nzczo6Ojo6cyBpOjo6OmkgIGs6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgICAgIFNTUzo6Ojo6Ojo6U1MgIHI6Ojo6OnIgICAgIHI6Ojo6OnIgIGFhYWFhYWE6Ojo6OmEgczo6Ojo6cyAgc3Nzc3NzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSkpKSkpKSiAgICAgSjo6Ojo6SiAgICAgICAgIFNTU1NTUzo6OjpTIHI6Ojo6OnIgICAgIHJycnJycnJhYTo6Ojo6Ojo6Ojo6OmEgICBzOjo6Ojo6cyAgICAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6SiAgICAgSjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgIGE6Ojo6YWFhYTo6Ojo6OmEgICAgICBzOjo6Ojo6cyAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6OkogICBKOjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzc3Nzc3MgICBzOjo6OjpzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSjo6Ojo6OjpKSko6Ojo6Ojo6SiAgU1NTU1NTUyAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzOjo6Ojpzc3NzOjo6Ojo6c2k6Ojo6Ojppazo6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gIEpKOjo6Ojo6Ojo6Ojo6OkpKICAgUzo6Ojo6OlNTU1NTUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6Ojo6YWFhYTo6Ojo6OmFzOjo6Ojo6Ojo6Ojo6OjpzIGk6Ojo6Ojppazo6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgSko6Ojo6Ojo6OjpKSiAgICAgUzo6Ojo6Ojo6Ojo6Ojo6OlNTIHI6Ojo6OnIgICAgICAgICAgIGE6Ojo6Ojo6Ojo6YWE6Ojphczo6Ojo6Ojo6Ojo6c3MgIGk6Ojo6Ojppazo6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICBKSkpKSkpKSkogICAgICAgIFNTU1NTU1NTU1NTU1NTUyAgIHJycnJycnIgICAgICAgICAgICBhYWFhYWFhYWFhICBhYWFhIHNzc3Nzc3Nzc3NzICAgIGlpaWlpaWlpa2tra2tra2sgICAga2tra2tra1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL0NvcmUuanMnO1xuXG5mdW5jdGlvbiBzZXRDYW52YXNTaXplKClcbntcbiAgICBsZXQgc2NhbGUgPSAwO1xuICAgIGlmKCB3aW5kb3cuaW5uZXJIZWlnaHQqMC4wMDM5MjE1NjkgPj0gd2luZG93LmlubmVyV2lkdGgqMC4wMDE2NjY2NjcpXG4gICAge1xuICAgICAgICBzY2FsZT13aW5kb3cuaW5uZXJXaWR0aCowLjAwMTY2NjY2NztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNjYWxlPXdpbmRvdy5pbm5lckhlaWdodCowLjAwMzkyMTU2OTtcbiAgICB9XG4gICAgbGV0IG1pZGRsZVdpZHRoID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICBcbiAgICBsZXQgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lID4gZGl2Jyk7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcbn1cblxuc2V0Q2FudmFzU2l6ZSgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2V0Q2FudmFzU2l6ZSk7XG5cbmxldCBsb2NhbCA9IGxvY2FsU3RvcmFnZTtcbmNvbnNvbGUubG9nKGxvY2FsKTtcbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FscGhhJywgMSlcblxuLy9jb25zb2xlLmxvZyhnYW1lQ2FudmFzLnN0eWxlKTtcbi8vIEltcG9ydGF0aW9uIGRlcyBjbGFzc2VzLlxuXG5sZXQgY29yZSA9IG5ldyBDb3JlKCk7IiwiLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUgPiBkaXYgPiBjYW52YXNcIik7XG5leHBvcnQgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmV4cG9ydCBjb25zdCBoZWlnaHQgPSAyNTA7XG5leHBvcnQgY29uc3Qgd2lkdGggPSA2MDA7XG5leHBvcnQgY29uc3QgZnBzID0gNTg7XG5leHBvcnQgY29uc3QgZ3Jhdml0eSA9IDQ7IiwiaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZVJvdChpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIHBvczEsIHBvczAsIGltZ0RlZykge1xuXG4gICAgLy9Db252ZXJzaW9uIGRlIGRlZ3JlIHZlcnMgXG4gICAgbGV0IHJhZGlhbiA9IGltZ0RlZyAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAvL0RlZmluaXRpb24gZGUgbCdvcmlnaW5lIGRlIGwnaW1hZ2UgYSBzb24gY2VudHJlLlxuICAgIGNvbnRleHQudHJhbnNsYXRlKHBvczEgKyBpbWdXaWR0aCAvIDIsIHBvczAgKyBpbWdIZWlnaHQgLyAyKTtcblxuICAgIC8vUm90YXRpb24uXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuKTtcblxuICAgIC8vSW1wcmVzc2lvbiBkZSBsJ2ltYWdlLlxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZ0xheW91dCwgaW1nUG9zWCwgaW1nUG9zWSwgaW1nV2lkdGgsIGltZ0hlaWdodCwgaW1nSGVpZ2h0IC8gMiAqICgtMSksIGltZ1dpZHRoIC8gMiAqICgtMSksIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuXG4gICAgLy9SZW1pc2UgYSB6ZXJvIGR1IGNhbnZhcy5cbiAgICBjb250ZXh0LnJvdGF0ZShyYWRpYW4gKiAoLTEpKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgocG9zMSArIGltZ1dpZHRoIC8gMikgKiAoLTEpLCAocG9zMCArIGltZ0hlaWdodCAvIDIpICogKC0xKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlckJldHdlZW4obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufSIsImV4cG9ydCBsZXQgZGVidWdMZXZlbCA9IHtidWZmZXI6IDF9O1xuZXhwb3J0IGxldCBkZWJ1Z01lc3NhZ2UgPSB7YnVmZmVyOiAnJ307XG5leHBvcnQgbGV0IGludGVydmFsU3RhcnRlZCA9IHtidWZmZXI6IGZhbHNlfTtcbmV4cG9ydCBsZXQgcmVuZGVyZWRGcmFtZSA9IHtidWZmZXI6IDB9O1xuZXhwb3J0IGxldCBnYW1lT3ZlcmQgPSB7YnVmZmVyOiBmYWxzZX07XG5leHBvcnQgbGV0IHNjb3JlID0ge2J1ZmZlcjogMH07XG5leHBvcnQgbGV0IGNvbGxpc2lvbkFycmF5ID0ge2J1ZmZlcjogW119O1xuZXhwb3J0IGxldCBjbGVhcmVkQ29sbGlzaW9uQXJyYXkgPSB7YnVmZmVyOiBbXX07XG5leHBvcnQgbGV0IHJlc3RhcnRSZXF1ZXN0ZWQgPSB7YnVmZmVyOiBmYWxzZX07XG4iXSwic291cmNlUm9vdCI6IiJ9