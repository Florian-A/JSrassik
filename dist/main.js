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
            this.pos[1] -= 3;
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
            this.pos[1] -= 2;
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
            for (let x = 0; x < _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]; x++) {
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x] = { y: y, x: x, player: 0, ground: 0, cactus: 0, leaf: 0, trex: 0 };
            }
        }
        clearedCollisionArray = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"];
    }

    clearCollision() {
        collisionArray = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["clearedCollisionArray"];

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
/* harmony import */ var _Collision_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Collision.js */ "./src/Collision.js");
/* harmony import */ var _Trex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Trex.js */ "./src/Trex.js");
/* harmony import */ var _Pterodactyl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pterodactyl.js */ "./src/Pterodactyl.js");
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











let collision = new _Collision_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
let ground = new Ground();
let player = new _Pterodactyl_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
let debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
let trex = [];
trex[0] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
trex[1] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
trex[2] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
trex[3] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
trex[4] = new _Trex_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
let cloud = [];
cloud[0] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
cloud[1] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
cloud[2] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
cloud[3] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
cloud[4] = new _Cloud_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
let cactus = [];
cactus[0] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
cactus[1] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
cactus[2] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
cactus[3] = new _Cactus_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
// Creation du ciel / fond d'ecran
let background = new Image();
background.src = "./layout/background.png";

class Core {
    constructor() {
        canvas.width = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"];
        canvas.height = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"];
        this.interval;
        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["intervalStarted"]) {
            this.interval = setInterval(this.intervalLoop, 1000 / _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["fps"]);
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
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]++;

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]) {
            this.breakInterval();
        }

        // Dessin du fond d'ecran.
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(background, 0, 0, 600, 250);

        ground.move();

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 24 === 23) {
            cloud[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 60 === 59) {
            cloud[2].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 90 === 89) {
            cloud[3].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 130 === 129) {
            cloud[4].enable();
        }
        cloud[0].move();
        cloud[1].move();
        cloud[2].move();
        cloud[4].move();

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 50 === 49) {
            cactus[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 100 === 99) {
            cactus[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 300 === 299) {
            cactus[2].enable();
        }
        cactus[0].move();
        cactus[1].move();
        cactus[2].move();
        cactus[3].move();


        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 50 === 49) {
            trex[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 100 === 99) {
            trex[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"] % 300 === 299) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 2) {

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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugLevel"] >= 1) {
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].font = this.textFont;
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = "rgba(0,0,0,1)";
            _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(this.fps, this.pos[1], this.pos[0]);
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugMessage"] !== undefined) {
                _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].fillText(_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["debugMessage"], this.pos[1], this.pos[0] + 20);
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
                debugLevel = 1;
            }
            if (event.which === 50) {
                debugLevel = 2;
            }
            if (event.which === 48) {
                debugLevel = 0;
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
    constructor() {
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
        this.imgSteep++;
        Object(_sharingFunctions_js__WEBPACK_IMPORTED_MODULE_2__["drawImageRot"])(this.imgLayout, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.pos[1], this.pos[0], this.rotateDeg)
    }
    gravity() {
        if (this.collisionY === false) {
            this.pos[0] += _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["gravity"];
        }
    }
    localCollision() {
        this.posCollision = [this.pos[0] + this.imgHeight - 13, this.pos[1] + this.imgWidth - 3];

        let collisionY;
        for (let index = 0; index <= this.imgWidth; index++) {

            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                collisionY = true;
            }
        }
        if (collisionY == true) {
            this.collisionY = true;
        }
        else {
            this.collisionY = false;
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].ground === 1) {
            this.collisionY = true;
        }

        let collisionX;
        for (let index = 0; index <= this.imgHeight; index++) {

            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
                collisionX = true;
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

                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y][x].player = 1;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 14][x]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y + 14][x].player = 0;
                    }
                    if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x]) !== "undefined") {
                        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][y - this.imgHeight][x].player = 0;
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
        this.rotateDeg = 0;
        this.collisionY = false;
        this.jumpInProgress = true;
        this.inFalling = false;
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
    }
    autoPlay() {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0] + 15][this.posCollision[1]].ground === 1 || _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0] + 15][this.posCollision[1]].cactus === 1) {
            this.jump();
        }
    }
    move() {

        if (this.collisionY) {
            gameOver = true;
        }
        else if (this.collisionX) {
            gameOver = true;
        }

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].trex === 1 && this.trexCollision === false) {
            this.trexCollision = true;
            score += 1;
        }
        else {
            this.trexCollision = false;
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
            score += 1;
        }
        this.isDead = true;
        debugMessage = score;

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

// Importation des classes.

let core = new _Core_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/sharingConstants.js":
/*!*********************************!*\
  !*** ./src/sharingConstants.js ***!
  \*********************************/
/*! exports provided: context, height, width, fps, gravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fps", function() { return fps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
// Selection du canvas et definition de sa taille.
const canvas = document.querySelector("#game-display");
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
function drawImageRot(imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, pos1, pos0, imgDeg) {

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
/*! exports provided: debugLevel, debugMessage, intervalStarted, renderedFrame, gameOver, score, collisionArray, clearedCollisionArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugLevel", function() { return debugLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugMessage", function() { return debugMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervalStarted", function() { return intervalStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderedFrame", function() { return renderedFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOver", function() { return gameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "score", function() { return score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionArray", function() { return collisionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearedCollisionArray", function() { return clearedCollisionArray; });
let debugLevel = 1;
let debugMessage;
let intervalStarted = false;
let renderedFrame = 0;
let gameOver = false;
let score = 0;
let collisionArray = [];
let clearedCollisionArray = [];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ1ZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGNhY3R1c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTSAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICAgIE1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU0gICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICBNTU1NTU1NTSAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgICAgICAgICAgICAgICAgXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWN0dXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsxNzcsIHdpZHRoXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9vYnN0YWNsZS5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDI1O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSAzO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMubW92ZW1lbnRTcGVlZF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkXS5jYWN0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gWzE3Nywgd2lkdGhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAzO1xuICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgMCAtIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgbnVhZ2VzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUkgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBJSSAgSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy8gICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIFxuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFtnZW5lcmF0ZU51bWJlckJldHdlZW4oMjAsIDE0MCksIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Nsb3VkLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEzO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDY7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCB3aWR0aF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDI7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAwIC0gdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBcbi8vICAgICAgICAgLmQ4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgIDg4OCAgICAgIDg4ODg4ODggIC5kODg4OGIuIDg4ODg4ODggIC5kODg4ODhiLiAgODg4YiAgICA4ODggXG4vLyAgICAgICAgZDg4UCAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCAgWTg4YiAgODg4ICAgZDg4UFwiIFwiWTg4YiA4ODg4YiAgIDg4OCBcbi8vICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4Yi4gICAgICAgODg4ICAgODg4ICAgICA4ODggODg4ODhiICA4ODggXG4vLyAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICBcIlk4ODhiLiAgICA4ODggICA4ODggICAgIDg4OCA4ODhZODhiIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgICAgIFwiWTg4Yi4gIDg4OCAgIDg4OCAgICAgODg4IDg4OCBZODhiODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgICBcIjg4OCAgODg4ICAgODg4ICAgICA4ODggODg4ICBZODg4ODggXG4vLyAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggICAgICA4ODggICAgICAgIDg4OCAgIFk4OGIgIGQ4OFAgIDg4OCAgIFk4OGIuIC5kODhQIDg4OCAgIFk4ODg4IFxuLy8gICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4ODg4ODg4IDg4ODg4ODg4IDg4ODg4ODggIFwiWTg4ODhQXCIgODg4ODg4OCAgXCJZODg4ODhQXCIgIDg4OCAgICBZODg4IFxuLy8gXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbGxpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSBjb2xsaXNpb24uXG4gICAgaW5pdENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdID0geyB5OiB5LCB4OiB4LCBwbGF5ZXI6IDAsIGdyb3VuZDogMCwgY2FjdHVzOiAwLCBsZWFmOiAwLCB0cmV4OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJlZENvbGxpc2lvbkFycmF5ID0gY29sbGlzaW9uQXJyYXk7XG4gICAgfVxuXG4gICAgY2xlYXJDb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbGxpc2lvbkFycmF5ID0gY2xlYXJlZENvbGxpc2lvbkFycmF5O1xuXG4gICAgfVxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZDg4ODhiLiAgIC5kODg4ODhiLiAgODg4ODg4OGIuICA4ODg4ODg4ODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkODhQICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgWTg4YiA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICA4ODggODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICBkODhQIDg4ODg4ODggICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ODg4OFBcIiAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggVDg4YiAgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFk4OGIgIGQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICBUODhiICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODggICBUODhiIDg4ODg4ODg4ODhcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5cbmltcG9ydCBEZWJ1ZyBmcm9tICcuL0RlYnVnLmpzJztcbmltcG9ydCBDYWN0dXMgZnJvbSAnLi9DYWN0dXMuanMnO1xuaW1wb3J0IENsb3VkIGZyb20gJy4vQ2xvdWQuanMnO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbi5qcyc7XG5pbXBvcnQgVHJleCBmcm9tICcuL1RyZXguanMnO1xuaW1wb3J0IFB0ZXJvZGFjdHlsIGZyb20gJy4vUHRlcm9kYWN0eWwuanMnO1xuXG5sZXQgY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbigpO1xubGV0IGdyb3VuZCA9IG5ldyBHcm91bmQoKTtcbmxldCBwbGF5ZXIgPSBuZXcgUHRlcm9kYWN0eWwoKTtcbmxldCBkZWJ1ZyA9IG5ldyBEZWJ1ZygpO1xubGV0IHRyZXggPSBbXTtcbnRyZXhbMF0gPSBuZXcgVHJleCgpO1xudHJleFsxXSA9IG5ldyBUcmV4KCk7XG50cmV4WzJdID0gbmV3IFRyZXgoKTtcbnRyZXhbM10gPSBuZXcgVHJleCgpO1xudHJleFs0XSA9IG5ldyBUcmV4KCk7XG5sZXQgY2xvdWQgPSBbXTtcbmNsb3VkWzBdID0gbmV3IENsb3VkKCk7XG5jbG91ZFsxXSA9IG5ldyBDbG91ZCgpO1xuY2xvdWRbMl0gPSBuZXcgQ2xvdWQoKTtcbmNsb3VkWzNdID0gbmV3IENsb3VkKCk7XG5jbG91ZFs0XSA9IG5ldyBDbG91ZCgpO1xubGV0IGNhY3R1cyA9IFtdO1xuY2FjdHVzWzBdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzFdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzJdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzNdID0gbmV3IENhY3R1cygpO1xuLy8gQ3JlYXRpb24gZHUgY2llbCAvIGZvbmQgZCdlY3JhblxubGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgIH1cbiAgICBzdGFydEludGVydmFsKCkge1xuICAgICAgICBpZiAoIWludGVydmFsU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuaW50ZXJ2YWxMb29wLCAxMDAwIC8gZnBzKTtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBicmVha0ludGVydmFsKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFrSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW50ZXJ2YWxMb29wKCkge1xuICAgICAgICBkZWJ1Zy5zdGFydFBlcmZNZWFzdXJlbWVudCgpO1xuICAgICAgICBjb2xsaXNpb24uY2xlYXJDb2xsaXNpb24oKTtcbiAgICAgICAgcmVuZGVyZWRGcmFtZSsrO1xuXG4gICAgICAgIGlmIChnYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5icmVha0ludGVydmFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNzaW4gZHUgZm9uZCBkJ2VjcmFuLlxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCA2MDAsIDI1MCk7XG5cbiAgICAgICAgZ3JvdW5kLm1vdmUoKTtcblxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZSAlIDI0ID09PSAyMykge1xuICAgICAgICAgICAgY2xvdWRbMV0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWUgJSA2MCA9PT0gNTkpIHtcbiAgICAgICAgICAgIGNsb3VkWzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lICUgOTAgPT09IDg5KSB7XG4gICAgICAgICAgICBjbG91ZFszXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZSAlIDEzMCA9PT0gMTI5KSB7XG4gICAgICAgICAgICBjbG91ZFs0XS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjbG91ZFswXS5tb3ZlKCk7XG4gICAgICAgIGNsb3VkWzFdLm1vdmUoKTtcbiAgICAgICAgY2xvdWRbMl0ubW92ZSgpO1xuICAgICAgICBjbG91ZFs0XS5tb3ZlKCk7XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWUgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgIGNhY3R1c1swXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgIGNhY3R1c1sxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZSAlIDMwMCA9PT0gMjk5KSB7XG4gICAgICAgICAgICBjYWN0dXNbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FjdHVzWzBdLm1vdmUoKTtcbiAgICAgICAgY2FjdHVzWzFdLm1vdmUoKTtcbiAgICAgICAgY2FjdHVzWzJdLm1vdmUoKTtcbiAgICAgICAgY2FjdHVzWzNdLm1vdmUoKTtcblxuXG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICB0cmV4WzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lICUgMTAwID09PSA5OSkge1xuICAgICAgICAgICAgdHJleFsxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZSAlIDMwMCA9PT0gMjk5KSB7XG4gICAgICAgICAgICB0cmV4WzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyZXhbMF0ubW92ZSgpO1xuICAgICAgICB0cmV4WzFdLm1vdmUoKTtcbiAgICAgICAgdHJleFsyXS5tb3ZlKCk7XG4gICAgICAgIHRyZXhbM10ubW92ZSgpO1xuXG4gICAgICAgIHBsYXllci5tb3ZlKCk7XG4gICAgICAgIGRlYnVnLmRyYXcoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYW5uZWF1IGRlIGTDqWJvZ2FnZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OGIuICA4ODg4ODg4ODg4IDg4ODg4OGIuICAgODg4ICAgICA4ODggIC5kODg4OGIuICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgICAgODg4ICBcIjg4YiAgODg4ICAgICA4ODggZDg4UCAgWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIC44OFAgIDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4ODg4ODggICAgODg4ODg4OEsuICA4ODggICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgODg4IDg4OCAgODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAuZDg4UCA4ODggICAgICAgIDg4OCAgIGQ4OFAgWTg4Yi4gLmQ4OFAgWTg4YiAgZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhQXCIgIDg4ODg4ODg4ODggODg4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICAgXCJZODg4OFA4OFxuLy8gICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMucG9zID0gWzIwLCAyMF07XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIC8vIE1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgIHN0YXJ0UGVyZk1lYXN1cmVtZW50KCkge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gJ0ZQUzonICsgKChmcHMgLyAodGltZSAtIHRoaXMubGFzdFRpbWUpKSAqICgxMDAwIC8gZnBzKSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgY2FjdHVzLlxuICAgIGRpc3BsYXlDYXR1c0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLDI1NSwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgVC1SZXguXG4gICAgZGlzcGxheVRyZXhDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIGpvdWV1ci5cbiAgICBkaXNwbGF5UGxheWVyQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIHNvbC5cbiAgICBkaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIGxldCBncm91bmRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWUVuZCA9IGhlaWdodDtcbiAgICAgICAgbGV0IGdyb3VuZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRYRW5kID0gd2lkdGg7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldWzBdLmdyb3VuZCA9PT0gMSAmJiBjb2xsaXNpb25BcnJheVt5IC0gMV1bMF0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91bmRZU3RhcnQgPSBjb2xsaXNpb25BcnJheVt5XVswXS55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChncm91bmRYU3RhcnQsIGdyb3VuZFlTdGFydCwgZ3JvdW5kWEVuZCAtIGdyb3VuZFhTdGFydCwgZ3JvdW5kWUVuZCAtIGdyb3VuZFlTdGFydCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBncmlsbGUgZGUgZGVib2d1YWdlLlxuICAgIGRpc3BsYXlHcmlkKCkge1xuXG4gICAgICAgIGxldCBncmlkWVN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyaWRZRW5kID0gaGVpZ2h0O1xuICAgICAgICBsZXQgZ3JpZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWEVuZCA9IHdpZHRoO1xuICAgICAgICBpZiAoZGVidWdMZXZlbCA+PSAyKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHkgJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChncmlkWFN0YXJ0LCB5LCBncmlkWEVuZCAtIGdyaWRYU3RhcnQsIDEgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dCh5ICsgMSwgZ3JpZFhFbmQgLSA0MCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICAgICAgaWYgKHggJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4ICsgMSwgZ3JpZFlTdGFydCwgMSAtIGdyaWRYU3RhcnQsIGdyaWRZRW5kIC0gZ3JpZFlTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoeCArIDEsIHgsIGdyaWRZRW5kIC0gMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheURlYnVnTWVudSgpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWwgPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMuZnBzLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgaWYgKGRlYnVnTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChkZWJ1Z01lc3NhZ2UsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSArIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkdW1wQ29sbGlzaW9uKCkge1xuICAgICAgICBsZXQgZHVtcCA9IGBgO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBkdW1wICs9IGNvbGxpc2lvbkFycmF5W3ldW3hdLmdyb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR1bXAgKz0gYFxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkdW1wKTtcbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNTApIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gRGVzc2luIGRhbnMgbGUgY29udGV4dC5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlEZWJ1Z01lbnUoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q2F0dXNDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VHJleENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQbGF5ZXJDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUdyaWQoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgUHTDqXJvZGFjdHlsZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlogICAgWlpaICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWiAgICBaWlpaWiAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaICBaWlpaWlpaWlogICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdGVyb2RhY3R5bCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzcwLCAxMDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L3B0ZXJvLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDM2O1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gNDI7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDgyO1xuICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA1MDtcbiAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB0aGlzLnNldEhvdEtleSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDY7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGRyYXdJbWFnZVJvdCh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucm90YXRlRGVnKVxuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gZ3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAtIDEzLCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGggLSAzXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ1dpZHRoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xsaXNpb25YO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nSGVpZ2h0OyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblggPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgdGhpcy5wb3NDb2xsaXNpb25bMF07IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgdGhpcy5wb3NDb2xsaXNpb25bMV07IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDE0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgKyAxNF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4XS5wbGF5ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBzaG93Q29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NDb2xsaXNpb25bMV0gLSB0aGlzLnBvc1sxXSwgdGhpcy5wb3NDb2xsaXNpb25bMF0gLSB0aGlzLnBvc1swXSk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgNSwgNSk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGp1bXAoKSB7XG4gICAgICAgIHRoaXMucm90YXRlRGVnID0gMDtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmluRmFsbGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29sbGlzaW9uWSAmJiB0aGlzLnJvdGF0ZURlZyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXV0b1BsYXkoKSB7XG4gICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxIHx8IGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdICsgMTVdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSkge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0udHJleCA9PT0gMSAmJiB0aGlzLnRyZXhDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgc2NvcmUgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuanVtcENvbnRyb2woKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBkaW5vc2F1cmVzIFQtUmV4XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICBNTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gICAgTU1NTU1NTU1NTU1NTU1NTU1NICBNTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICBNTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTU1NICAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZXgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsxMTcsIHdpZHRoICsgMzBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Rpbm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gNDM7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gNzA7XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbWdTdGVlcCA8PSAxMSkge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSB8fCB0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gZ3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ1dpZHRoOyBpbmRleCsrKSB7XG5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB3aWR0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgKyAxMF1beCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDEwXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGp1bXAoKSB7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45Mik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IFsxNjAsIHdpZHRoXTtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZGVhZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgc2NvcmUgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgIGRlYnVnTWVzc2FnZSA9IHNjb3JlO1xuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB3aWR0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSArIDJdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDw9IGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAtMjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKSkpKSkpKSkpKICAgU1NTU1NTU1NTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAga2tra2tra2sgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKIFNTOjo6Ojo6Ojo6Ojo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOjo6Omkgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKUzo6Ojo6U1NTU1NTOjo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKOjo6Ojo6OkpKUzo6Ojo6UyAgICAgU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcnJycnIgICBycnJycnJycnIgICBhYWFhYWFhYWFhYWFhICAgICAgc3Nzc3Nzc3NzcyAgIGlpaWlpaWkgIGs6Ojo6OmsgICAga2tra2tra1xuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcjo6OjpycnI6Ojo6Ojo6OjpyICBhOjo6Ojo6Ojo6Ojo6YSAgIHNzOjo6Ojo6Ojo6OnMgIGk6Ojo6OmkgIGs6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgIFM6Ojo6U1NTUyAgICAgICAgcjo6Ojo6Ojo6Ojo6Ojo6Ojo6ciBhYWFhYWFhYWE6Ojo6OmFzczo6Ojo6Ojo6Ojo6OjpzICBpOjo6OmkgIGs6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6aiAgICBTUzo6Ojo6OlNTU1NTICAgcnI6Ojo6OjpycnJycjo6Ojo6OnIgICAgICAgICBhOjo6OmFzOjo6Ojo6c3Nzczo6Ojo6cyBpOjo6OmkgIGs6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgICAgIFNTUzo6Ojo6Ojo6U1MgIHI6Ojo6OnIgICAgIHI6Ojo6OnIgIGFhYWFhYWE6Ojo6OmEgczo6Ojo6cyAgc3Nzc3NzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSkpKSkpKSiAgICAgSjo6Ojo6SiAgICAgICAgIFNTU1NTUzo6OjpTIHI6Ojo6OnIgICAgIHJycnJycnJhYTo6Ojo6Ojo6Ojo6OmEgICBzOjo6Ojo6cyAgICAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6SiAgICAgSjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgIGE6Ojo6YWFhYTo6Ojo6OmEgICAgICBzOjo6Ojo6cyAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6OkogICBKOjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzc3Nzc3MgICBzOjo6OjpzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSjo6Ojo6OjpKSko6Ojo6Ojo6SiAgU1NTU1NTUyAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzOjo6Ojpzc3NzOjo6Ojo6c2k6Ojo6Ojppazo6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gIEpKOjo6Ojo6Ojo6Ojo6OkpKICAgUzo6Ojo6OlNTU1NTUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6Ojo6YWFhYTo6Ojo6OmFzOjo6Ojo6Ojo6Ojo6OjpzIGk6Ojo6Ojppazo6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgSko6Ojo6Ojo6OjpKSiAgICAgUzo6Ojo6Ojo6Ojo6Ojo6OlNTIHI6Ojo6OnIgICAgICAgICAgIGE6Ojo6Ojo6Ojo6YWE6Ojphczo6Ojo6Ojo6Ojo6c3MgIGk6Ojo6Ojppazo6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICBKSkpKSkpKSkogICAgICAgIFNTU1NTU1NTU1NTU1NTUyAgIHJycnJycnIgICAgICAgICAgICBhYWFhYWFhYWFhICBhYWFhIHNzc3Nzc3Nzc3NzICAgIGlpaWlpaWlpa2tra2tra2sgICAga2tra2tra1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBJbXBvcnRhdGlvbiBkZXMgY2xhc3Nlcy5cbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZS5qcyc7XG5sZXQgY29yZSA9IG5ldyBDb3JlKCk7IiwiLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1kaXNwbGF5XCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gMjUwO1xuZXhwb3J0IGNvbnN0IHdpZHRoID0gNjAwO1xuZXhwb3J0IGNvbnN0IGZwcyA9IDU4O1xuZXhwb3J0IGNvbnN0IGdyYXZpdHkgPSA0OyIsImV4cG9ydCBmdW5jdGlvbiBkcmF3SW1hZ2VSb3QoaW1nTGF5b3V0LCBpbWdQb3NYLCBpbWdQb3NZLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCBwb3MxLCBwb3MwLCBpbWdEZWcpIHtcblxuICAgIC8vQ29udmVyc2lvbiBkZSBkZWdyZSB2ZXJzIFxuICAgIGxldCByYWRpYW4gPSBpbWdEZWcgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgLy9EZWZpbml0aW9uIGRlIGwnb3JpZ2luZSBkZSBsJ2ltYWdlIGEgc29uIGNlbnRyZS5cbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3MxICsgaW1nV2lkdGggLyAyLCBwb3MwICsgaW1nSGVpZ2h0IC8gMik7XG5cbiAgICAvL1JvdGF0aW9uLlxuICAgIGNvbnRleHQucm90YXRlKHJhZGlhbik7XG5cbiAgICAvL0ltcHJlc3Npb24gZGUgbCdpbWFnZS5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIGltZ0hlaWdodCAvIDIgKiAoLTEpLCBpbWdXaWR0aCAvIDIgKiAoLTEpLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcblxuICAgIC8vUmVtaXNlIGEgemVybyBkdSBjYW52YXMuXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuICogKC0xKSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoKHBvczEgKyBpbWdXaWR0aCAvIDIpICogKC0xKSwgKHBvczAgKyBpbWdIZWlnaHQgLyAyKSAqICgtMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn0iLCJleHBvcnQgbGV0IGRlYnVnTGV2ZWwgPSAxO1xuZXhwb3J0IGxldCBkZWJ1Z01lc3NhZ2U7XG5leHBvcnQgbGV0IGludGVydmFsU3RhcnRlZCA9IGZhbHNlO1xuZXhwb3J0IGxldCByZW5kZXJlZEZyYW1lID0gMDtcbmV4cG9ydCBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbmV4cG9ydCBsZXQgc2NvcmUgPSAwO1xuZXhwb3J0IGxldCBjb2xsaXNpb25BcnJheSA9IFtdO1xuZXhwb3J0IGxldCBjbGVhcmVkQ29sbGlzaW9uQXJyYXkgPSBbXTsiXSwic291cmNlUm9vdCI6IiJ9