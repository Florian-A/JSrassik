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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'])
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
            if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
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
/* harmony import */ var _Pterodactyl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pterodactyl.js */ "./src/Pterodactyl.js");
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













let collision = new _Collision_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
let ground = new _Ground_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
let player = new _Pterodactyl_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
let gameOverO = new _GameOver_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
let debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
let trex = [];
trex[0] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
trex[1] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
trex[2] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
trex[3] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
trex[4] = new _Trex_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
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
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"];
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["height"];
        this.interval;
        this.setHotKey();
        this.startInterval();
    }
    startInterval() {
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["intervalStarted"]['buffer']) {
            this.interval = setInterval(this.intervalLoop, 1000 / _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["fps"]);
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
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = false;
            }
            if (event.which === 35) {
                this.breakInterval();
            }
            if (event.which === 45) {
                this.nextInterval();
                _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = false;
            }
        })
    }
    intervalLoop() {
        debug.startPerfMeasurement();
        collision.clearCollision();
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer']++;

        // Dessin du fond d'ecran.
        _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(background, 0, 0, 600, 250);

        ground.move();

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 24 === 23) {
            cloud[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 60 === 59) {
            cloud[2].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 90 === 89) {
            cloud[3].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 130 === 129) {
            cloud[4].enable();
        }
        cloud[0].move();
        cloud[1].move();
        cloud[2].move();
        cloud[4].move();

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 50 === 49) {
            cactus[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 100 === 99) {
            cactus[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 300 === 299) {
            cactus[2].enable();
        }
        cactus[0].move();
        cactus[1].move();
        cactus[2].move();
        cactus[3].move();

        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 50 === 49) {
                trex[0].enable();
            }
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 100 === 99) {
                trex[1].enable();
            }
            if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 300 === 299) {
                trex[2].enable();
            }
        }
        trex[0].move();
        trex[1].move();
        trex[2].move();
        trex[3].move();
        player.move();
        gameOverO.check();
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
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
            this.draw();
            this.setHotKey();
        }
    }

    restart(event) {
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["restartRequested"]['buffer'] = true;
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = false;
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
        if(!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'])
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
            this.imgSteep++;
        }
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
                    if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
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
        if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
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
            this.pos[0] += _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["gravity"];
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
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = true;
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

                if (!_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
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

console.log((window.innerHeight*0.003921569).toFixed(2));
console.log((window.innerWidth*0.001666667).toFixed(2));

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
    
    let gameCanvas = document.querySelector('.game-canvas');
    gameCanvas.style.transform = `scale(${scale})`;
}

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

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
/*! exports provided: debugLevel, debugMessage, intervalStarted, renderedFrame, gameOver, score, collisionArray, clearedCollisionArray, restartRequested */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartRequested", function() { return restartRequested; });
let debugLevel = {buffer: 1};
let debugMessage = {buffer: ''};
let intervalStarted = {buffer: false};
let renderedFrame = {buffer: 0};
let gameOver = {buffer: false};
let score = {buffer: 0};
let collisionArray = {buffer: []};
let clearedCollisionArray = {buffer: []};
let restartRequested = {buffer: false};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Hcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B0ZXJvZGFjdHlsLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmluZ1ZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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QTtBQUM2QjtBQUM3QixlQUFlLGdEQUFJLEc7Ozs7Ozs7Ozs7OztBQzdDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0I7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDeUU7QUFDekk7O0FBRVA7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQU87O0FBRVg7QUFDQSxJQUFJLDREQUFPOztBQUVYO0FBQ0EsSUFBSSw0REFBTzs7QUFFWDtBQUNBLElBQUksNERBQU87QUFDWCxJQUFJLDREQUFPO0FBQ1g7O0FBRU87QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0Isd0JBQXdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgY2FjdHVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgICAgTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTSAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgIE1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU0gICAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgICAgICAgICAgICAgICBcbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY3R1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzE3Nywgd2lkdGhdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L29ic3RhY2xlLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMjU7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDM7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5tb3ZlbWVudFNwZWVkXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLm1vdmVtZW50U3BlZWRdLmNhY3R1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTc3LCB3aWR0aF07XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmKCFnYW1lT3ZlclsnYnVmZmVyJ10pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIG51YWdlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgSUkgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBcbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9jbG91ZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQ2O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gW2dlbmVyYXRlTnVtYmVyQmV0d2VlbigyMCwgMTQwKSwgd2lkdGhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZighZ2FtZU92ZXJbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFxuLy8gICAgICAgICAuZDg4ODhiLiAgIC5kODg4ODhiLiAgODg4ICAgICAgODg4ICAgICAgODg4ODg4OCAgLmQ4ODg4Yi4gODg4ODg4OCAgLmQ4ODg4OGIuICA4ODhiICAgIDg4OCBcbi8vICAgICAgICBkODhQICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgICAgODg4ICAgICAgICA4ODggICBkODhQICBZODhiICA4ODggICBkODhQXCIgXCJZODhiIDg4ODhiICAgODg4IFxuLy8gICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICBZODhiLiAgICAgICA4ODggICA4ODggICAgIDg4OCA4ODg4OGIgIDg4OCBcbi8vICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgIFwiWTg4OGIuICAgIDg4OCAgIDg4OCAgICAgODg4IDg4OFk4OGIgODg4IFxuLy8gICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgICAgXCJZODhiLiAgODg4ICAgODg4ICAgICA4ODggODg4IFk4OGI4ODggXG4vLyAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICAgICAgIFwiODg4ICA4ODggICA4ODggICAgIDg4OCA4ODggIFk4ODg4OCBcbi8vICAgICAgICBZODhiICBkODhQIFk4OGIuIC5kODhQIDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgWTg4YiAgZDg4UCAgODg4ICAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggXG4vLyAgICAgICAgIFwiWTg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ODg4ODggODg4ODg4ODggODg4ODg4OCAgXCJZODg4OFBcIiA4ODg4ODg4ICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggXG4vLyBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbGxpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBzeXN0w6htZSBkZSBjb2xsaXNpb24uXG4gICAgaW5pdENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGgrMTAwOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XSA9IHsgeTogeSwgeDogeCwgcGxheWVyOiAwLCBncm91bmQ6IDAsIGNhY3R1czogMCwgbGVhZjogMCwgdHJleDogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJDb2xsaXNpb24oKSB7XG5cbiAgICB9XG59IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICAgLmQ4ODg4OGIuICA4ODg4ODg4Yi4gIDg4ODg4ODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICBZODhiIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgICAgIDg4OCAgICAgODg4IDg4OCAgIGQ4OFAgODg4ODg4OCAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODg4ODg4UFwiICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCBUODhiICAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWTg4YiAgZDg4UCBZODhiLiAuZDg4UCA4ODggIFQ4OGIgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlk4ODg4UFwiICAgXCJZODg4ODhQXCIgIDg4OCAgIFQ4OGIgODg4ODg4ODg4OFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGNhbnZhcywgY29udGV4dCwgaGVpZ2h0LCB3aWR0aCwgZnBzLCBncmF2aXR5IH0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGRlYnVnTGV2ZWwsIGRlYnVnTWVzc2FnZSwgaW50ZXJ2YWxTdGFydGVkLCByZW5kZXJlZEZyYW1lLCBnYW1lT3Zlciwgc2NvcmUsIGNvbGxpc2lvbkFycmF5LCBjbGVhcmVkQ29sbGlzaW9uQXJyYXkgfSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlUm90LCBnZW5lcmF0ZU51bWJlckJldHdlZW4gfSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuXG5pbXBvcnQgRGVidWcgZnJvbSAnLi9EZWJ1Zy5qcyc7XG5pbXBvcnQgQ2FjdHVzIGZyb20gJy4vQ2FjdHVzLmpzJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL0Nsb3VkLmpzJztcbmltcG9ydCBHcm91bmQgZnJvbSAnLi9Hcm91bmQuanMnO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbi5qcyc7XG5pbXBvcnQgVHJleCBmcm9tICcuL1RyZXguanMnO1xuaW1wb3J0IFB0ZXJvZGFjdHlsIGZyb20gJy4vUHRlcm9kYWN0eWwuanMnO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR2FtZU92ZXIuanMnO1xuXG5sZXQgY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbigpO1xubGV0IGdyb3VuZCA9IG5ldyBHcm91bmQoKTtcbmxldCBwbGF5ZXIgPSBuZXcgUHRlcm9kYWN0eWwoKTtcbmxldCBnYW1lT3Zlck8gPSBuZXcgR2FtZU92ZXIoKTtcbmxldCBkZWJ1ZyA9IG5ldyBEZWJ1ZygpO1xubGV0IHRyZXggPSBbXTtcbnRyZXhbMF0gPSBuZXcgVHJleCgpO1xudHJleFsxXSA9IG5ldyBUcmV4KCk7XG50cmV4WzJdID0gbmV3IFRyZXgoKTtcbnRyZXhbM10gPSBuZXcgVHJleCgpO1xudHJleFs0XSA9IG5ldyBUcmV4KCk7XG5sZXQgY2xvdWQgPSBbXTtcbmNsb3VkWzBdID0gbmV3IENsb3VkKCk7XG5jbG91ZFsxXSA9IG5ldyBDbG91ZCgpO1xuY2xvdWRbMl0gPSBuZXcgQ2xvdWQoKTtcbmNsb3VkWzNdID0gbmV3IENsb3VkKCk7XG5jbG91ZFs0XSA9IG5ldyBDbG91ZCgpO1xubGV0IGNhY3R1cyA9IFtdO1xuY2FjdHVzWzBdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzFdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzJdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzNdID0gbmV3IENhY3R1cygpO1xuLy8gQ3JlYXRpb24gZHUgY2llbCAvIGZvbmQgZCdlY3JhblxubGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgIH1cbiAgICBzdGFydEludGVydmFsKCkge1xuICAgICAgICBpZiAoIWludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsTG9vcCwgMTAwMCAvIGZwcyk7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ZWRbJ2J1ZmZlciddID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGJyZWFrSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJbJ2J1ZmZlciddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmVha0ludGVydmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICBnYW1lT3ZlclsnYnVmZmVyJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgaW50ZXJ2YWxMb29wKCkge1xuICAgICAgICBkZWJ1Zy5zdGFydFBlcmZNZWFzdXJlbWVudCgpO1xuICAgICAgICBjb2xsaXNpb24uY2xlYXJDb2xsaXNpb24oKTtcbiAgICAgICAgcmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10rKztcblxuICAgICAgICAvLyBEZXNzaW4gZHUgZm9uZCBkJ2VjcmFuLlxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCA2MDAsIDI1MCk7XG5cbiAgICAgICAgZ3JvdW5kLm1vdmUoKTtcblxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAyNCA9PT0gMjMpIHtcbiAgICAgICAgICAgIGNsb3VkWzFdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDYwID09PSA1OSkge1xuICAgICAgICAgICAgY2xvdWRbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgOTAgPT09IDg5KSB7XG4gICAgICAgICAgICBjbG91ZFszXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAxMzAgPT09IDEyOSkge1xuICAgICAgICAgICAgY2xvdWRbNF0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xvdWRbMF0ubW92ZSgpO1xuICAgICAgICBjbG91ZFsxXS5tb3ZlKCk7XG4gICAgICAgIGNsb3VkWzJdLm1vdmUoKTtcbiAgICAgICAgY2xvdWRbNF0ubW92ZSgpO1xuXG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgY2FjdHVzWzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgIGNhY3R1c1sxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAzMDAgPT09IDI5OSkge1xuICAgICAgICAgICAgY2FjdHVzWzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhY3R1c1swXS5tb3ZlKCk7XG4gICAgICAgIGNhY3R1c1sxXS5tb3ZlKCk7XG4gICAgICAgIGNhY3R1c1syXS5tb3ZlKCk7XG4gICAgICAgIGNhY3R1c1szXS5tb3ZlKCk7XG5cbiAgICAgICAgaWYgKCFnYW1lT3ZlclsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgIHRyZXhbMF0uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAxMDAgPT09IDk5KSB7XG4gICAgICAgICAgICAgICAgdHJleFsxXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDMwMCA9PT0gMjk5KSB7XG4gICAgICAgICAgICAgICAgdHJleFsyXS5lbmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmV4WzBdLm1vdmUoKTtcbiAgICAgICAgdHJleFsxXS5tb3ZlKCk7XG4gICAgICAgIHRyZXhbMl0ubW92ZSgpO1xuICAgICAgICB0cmV4WzNdLm1vdmUoKTtcbiAgICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICAgICAgZ2FtZU92ZXJPLmNoZWNrKCk7XG4gICAgICAgIGRlYnVnLmRyYXcoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYW5uZWF1IGRlIGTDqWJvZ2FnZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OGIuICA4ODg4ODg4ODg4IDg4ODg4OGIuICAgODg4ICAgICA4ODggIC5kODg4OGIuICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgICAgODg4ICBcIjg4YiAgODg4ICAgICA4ODggZDg4UCAgWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggIC44OFAgIDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4ODg4ODggICAgODg4ODg4OEsuICA4ODggICAgIDg4OCA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgXCJZODhiIDg4OCAgICAgODg4IDg4OCAgODg4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAuZDg4UCA4ODggICAgICAgIDg4OCAgIGQ4OFAgWTg4Yi4gLmQ4OFAgWTg4YiAgZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4ODg4ODhQXCIgIDg4ODg4ODg4ODggODg4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICAgXCJZODg4OFA4OFxuLy8gICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGV4dEZvbnQgPSBcIjE4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMucG9zID0gWzIwLCAyMF07XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmZwcyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIC8vIE1lc3VyZSBkdSBub21icmUgZCdpbWFnZXMgcGFyIHNlY29uZGVzLlxuICAgIHN0YXJ0UGVyZk1lYXN1cmVtZW50KCkge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZnBzID0gJ0ZQUzonICsgKChmcHMgLyAodGltZSAtIHRoaXMubGFzdFRpbWUpKSAqICgxMDAwIC8gZnBzKSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgY2FjdHVzLlxuICAgIGRpc3BsYXlDYXR1c0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldW3hdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwyNTUsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGVzIFQtUmV4LlxuICAgIGRpc3BsYXlUcmV4Q29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbeV1beF0udHJleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGUgam91ZXVyLlxuICAgIGRpc3BsYXlQbGF5ZXJDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwyNTUsMC41KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlIHNvbC5cbiAgICBkaXNwbGF5R3JvdW5kQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIGxldCBncm91bmRZU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JvdW5kWUVuZCA9IGhlaWdodDtcbiAgICAgICAgbGV0IGdyb3VuZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRYRW5kID0gd2lkdGg7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVswXS5ncm91bmQgPT09IDEgJiYgY29sbGlzaW9uQXJyYXlbeSAtIDFdWzBdLmdyb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdW5kWVN0YXJ0ID0gY29sbGlzaW9uQXJyYXlbeV1bMF0ueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoZ3JvdW5kWFN0YXJ0LCBncm91bmRZU3RhcnQsIGdyb3VuZFhFbmQgLSBncm91bmRYU3RhcnQsIGdyb3VuZFlFbmQgLSBncm91bmRZU3RhcnQpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgZ3JpbGxlIGRlIGRlYm9ndWFnZS5cbiAgICBkaXNwbGF5R3JpZCgpIHtcblxuICAgICAgICBsZXQgZ3JpZFlTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWUVuZCA9IGhlaWdodDtcbiAgICAgICAgbGV0IGdyaWRYU3RhcnQgPSAwO1xuICAgICAgICBsZXQgZ3JpZFhFbmQgPSB3aWR0aDtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeSAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGdyaWRYU3RhcnQsIHksIGdyaWRYRW5kIC0gZ3JpZFhTdGFydCwgMSAtIGdyaWRZU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHkgKyAxLCBncmlkWEVuZCAtIDQwLCB5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsMSlcIjtcbiAgICAgICAgICAgICAgICBpZiAoeCAlIDUwID09PSA0OSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggKyAxLCBncmlkWVN0YXJ0LCAxIC0gZ3JpZFhTdGFydCwgZ3JpZFlFbmQgLSBncmlkWVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dCh4ICsgMSwgeCwgZ3JpZFlFbmQgLSAyNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5RGVidWdNZW51KCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy50ZXh0Rm9udDtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMuZnBzLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgaWYgKGRlYnVnTWVzc2FnZVsnYnVmZmVyJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoZGVidWdNZXNzYWdlWydidWZmZXInXSwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdICsgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGR1bXBDb2xsaXNpb24oKSB7XG4gICAgICAgIGxldCBkdW1wID0gYGA7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGR1bXAgKz0gY29sbGlzaW9uQXJyYXlbeV1beF0uZ3JvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHVtcCArPSBgXG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGR1bXApO1xuICAgIH1cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA0OSkge1xuICAgICAgICAgICAgICAgIGRlYnVnTGV2ZWxbJ2J1ZmZlciddID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNTApIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsWydidWZmZXInXSA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ4KSB7XG4gICAgICAgICAgICAgICAgZGVidWdMZXZlbFsnYnVmZmVyJ10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyBEZXNzaW4gZGFucyBsZSBjb250ZXh0LlxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheURlYnVnTWVudSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDYXR1c0NvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlUcmV4Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVBsYXllckNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcm91bmRDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5R3JpZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCBmcHMsIGdyYXZpdHkgfSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZGVidWdMZXZlbCwgZGVidWdNZXNzYWdlLCBpbnRlcnZhbFN0YXJ0ZWQsIHJlbmRlcmVkRnJhbWUsIGdhbWVPdmVyLCBzY29yZSwgY29sbGlzaW9uQXJyYXksIGNsZWFyZWRDb2xsaXNpb25BcnJheSwgcmVzdGFydFJlcXVlc3RlZCB9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgeyBkcmF3SW1hZ2VSb3QsIGdlbmVyYXRlTnVtYmVyQmV0d2VlbiB9IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgLy8gQ3JlYXRpb24gZHUgbWVzc2FnZSBkZSBmaW4gZHUgamV1LlxuICAgICAgICB0aGlzLmdhbWVPdmVyTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJMYXlvdXQuc3JjID0gXCIuL2xheW91dC9nYW1lb3Zlci5wbmdcIjtcbiAgICB9XG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmIChnYW1lT3ZlclsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGdhbWVPdmVyWydidWZmZXInXSkge1xuICAgICAgICAgICAgcmVzdGFydFJlcXVlc3RlZFsnYnVmZmVyJ10gPSB0cnVlO1xuICAgICAgICAgICAgZ2FtZU92ZXJbJ2J1ZmZlciddID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMucmVzdGFydCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5yZXN0YXJ0KTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdhbWVPdmVyTGF5b3V0LCBNYXRoLnJvdW5kKHdpZHRoIC8gMiAtIHRoaXMuZ2FtZU92ZXJMYXlvdXQud2lkdGggLyAyKSwgTWF0aC5yb3VuZChoZWlnaHQgLyAyIC0gdGhpcy5nYW1lT3ZlckxheW91dC5oZWlnaHQgLyAyKSwgMjUzLCA3MSk7XG4gICAgfVxuXG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGR1IHNvbFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgIC5kODg4OGIuICA4ODg4ODg4Yi4gICAuZDg4ODg4Yi4gIDg4OCAgICAgODg4IDg4OGIgICAgODg4IDg4ODg4ODhiLiAgXG4vLyAgICAgICAgICAgICAgICAgIGQ4OFAgIFk4OGIgODg4ICAgWTg4YiBkODhQXCIgXCJZODhiIDg4OCAgICAgODg4IDg4ODhiICAgODg4IDg4OCAgXCJZODhiIFxuLy8gICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICA4ODggODg4ICAgICA4ODggODg4ICAgICA4ODggODg4ODhiICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICBkODhQIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OFk4OGIgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgODg4ODggODg4ODg4OFBcIiAgODg4ICAgICA4ODggODg4ICAgICA4ODggODg4IFk4OGI4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggVDg4YiAgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCAgWTg4ODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIFk4OGIgIGQ4OFAgODg4ICBUODhiICBZODhiLiAuZDg4UCBZODhiLiAuZDg4UCA4ODggICBZODg4OCA4ODggIC5kODhQIFxuLy8gICAgICAgICAgICAgICAgICAgXCJZODg4OFA4OCA4ODggICBUODhiICBcIlk4ODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODggICAgWTg4OCA4ODg4ODg4UFwiICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzIyMCwgMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZ3JvdW5kLnBuZ1wiO1xuICAgICAgICB0aGlzLmltZ0hlaWdodCA9IDEyO1xuICAgICAgICB0aGlzLmltZ1dpZHRoID0gMTgwMDtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICB9XG4gICAgLy8gRGVmaW5pdGlvbiBkZSBsYSBjb2xsaXNpb24gYXZlYyBzb2wuXG4gICAgc2V0R3JvdW5kQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeSA+PSAyMjIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0uZ3JvdW5kID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZ0xheW91dCwgdGhpcy5pbWdQb3NYLCB0aGlzLmltZ1Bvc1ksIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMuaW1nV2lkdGgsIHRoaXMuaW1nSGVpZ2h0KTtcbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRHcm91bmRDb2xsaXNpb24oKTtcbiAgICAgICAgaWYoIWdhbWVPdmVyWydidWZmZXInXSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPD0gLTEyMDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgZGlub3NhdXJlcyBQdMOpcm9kYWN0eWxlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWiAgICBaWlogICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaICAgIFpaWlpaICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlogIFpaWlpaWlpaWiAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWiAgWlpaWlpaWlpaWlogIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaICBaWlpaWlpaWlpaWiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlpaWlpaWlpaWlogICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlogICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGNvbnRleHQsIGhlaWdodCwgd2lkdGgsIGZwcywgZ3Jhdml0eSB9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xldmVsLCBkZWJ1Z01lc3NhZ2UsIGludGVydmFsU3RhcnRlZCwgcmVuZGVyZWRGcmFtZSwgZ2FtZU92ZXIsIHNjb3JlLCBjb2xsaXNpb25BcnJheSwgY2xlYXJlZENvbGxpc2lvbkFycmF5LCByZXN0YXJ0UmVxdWVzdGVkIH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7IGRyYXdJbWFnZVJvdCwgZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuIH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB0ZXJvZGFjdHlsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvcHRlcm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gMzY7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MjtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0IC0gMTMsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCAtIDNdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5GYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9vZk9mSnVtcCA9IDUwO1xuICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW1nU3RlZXAgPD0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA0NjtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2FtZU92ZXJbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIH1cbiAgICAgICAgZHJhd0ltYWdlUm90KHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5yb3RhdGVEZWcpXG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSBncmF2aXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuXG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgLSAxMywgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoIC0gM107XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblk7XG4gICAgICAgIGlmIChjb2xsaXNpb25ZID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblg7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdIZWlnaHQ7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF07IHkgPCB0aGlzLnBvc0NvbGxpc2lvblswXTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5wb3NbMV07IHggPCB0aGlzLnBvc0NvbGxpc2lvblsxXTsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVPdmVyWydidWZmZXInXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxNF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5ICsgMTRdW3hdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgKyAxNF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4XS5wbGF5ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBzaG93Q29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NDb2xsaXNpb25bMV0gLSB0aGlzLnBvc1sxXSwgdGhpcy5wb3NDb2xsaXNpb25bMF0gLSB0aGlzLnBvc1swXSk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDEpXCI7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgNSwgNSk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGp1bXAoKSB7XG4gICAgICAgIGlmICghZ2FtZU92ZXJbJ2J1ZmZlciddKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29sbGlzaW9uWSAmJiB0aGlzLnJvdGF0ZURlZyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5GYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlRGVnICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbNzAsIDEwMF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgcmVzdGFydFJlcXVlc3RlZFsnYnVmZmVyJ10gPSBmYWxzZTtcblxuICAgIH1cbiAgICBhdXRvUGxheSgpIHtcbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdICsgMTVdW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEgfHwgY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gKyAxNV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVhZEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSBncmF2aXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChyZXN0YXJ0UmVxdWVzdGVkWydidWZmZXInXSkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZIHx8IHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZU92ZXJbJ2J1ZmZlciddID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVhZEFuaW1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0udHJleCA9PT0gMSAmJiB0aGlzLnRyZXhDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJleENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuanVtcENvbnRyb2woKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBkaW5vc2F1cmVzIFQtUmV4XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICBNTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgICAgIE1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gICAgTU1NTU1NTU1NTU1NTU1NTU1NICBNTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NICBNTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTSAgICAgICAgTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gICAgICBNTU1NICAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7IGNvbnRleHQsIGhlaWdodCwgd2lkdGgsIGZwcywgZ3Jhdml0eSB9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xldmVsLCBkZWJ1Z01lc3NhZ2UsIGludGVydmFsU3RhcnRlZCwgcmVuZGVyZWRGcmFtZSwgZ2FtZU92ZXIsIHNjb3JlLCBjb2xsaXNpb25BcnJheSwgY2xlYXJlZENvbGxpc2lvbkFycmF5IH0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7IGRyYXdJbWFnZVJvdCwgZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuIH0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZXgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsxNTAsIHdpZHRoIC0gMjBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2Rpbm8ucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gNDM7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gNzA7XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pbWdTdGVlcCA8PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gODI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbWdTdGVlcCA8PSAxMSkge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQxO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSB8fCB0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nU3RlZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gZ3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NDb2xsaXNpb24gPSBbdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoXTtcblxuICAgICAgICBsZXQgY29sbGlzaW9uWTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ1dpZHRoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXV0uZ3JvdW5kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uZ3JvdW5kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xsaXNpb25YO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nSGVpZ2h0OyBpbmRleCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF07IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgNV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDVdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5ICsgMTBdW3ggKyA1XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAxMF0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgfVxuICAgIGp1bXBDb250cm9sKCkge1xuICAgICAgICBpZiAodGhpcy5qdW1wSW5Qcm9ncmVzcyA9PT0gdHJ1ZSAmJiB0aGlzLnBvc1swXSA+PSB0aGlzLnJvb2ZPZkp1bXApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc1swXSAqIDAuOTIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBbMTUwLCB3aWR0aF07XG4gICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XG4gICAgfVxuICAgIGRlYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHNjb3JlWydidWZmZXInXSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcbiAgICAgICAgZGVidWdNZXNzYWdlWydidWZmZXInXSA9IHNjb3JlWydidWZmZXInXTtcblxuICAgICAgICBmb3IgKGxldCB5ID0gdGhpcy5wb3NbMF07IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMucG9zWzFdOyB4IDwgd2lkdGg7IHgrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5wb3NbMF0gJiYgeSA8PSB0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0ICYmIHggPj0gdGhpcy5wb3NbMV0gJiYgeCA8PSB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLmltZ1dpZHRoICsgMl0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAyXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgKyAyXVt4ICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4ICsgMl0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5IC0gdGhpcy5pbWdIZWlnaHRdW3ggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGRlYWRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc1swXSA8PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDM7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVhZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhZEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWdhbWVPdmVyWydidWZmZXInXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMjtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdIC0gMTBdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dW3RoaXMucG9zWzFdXS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3NbMV0gPCAtMjApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKSkpKSkpKSkpKICAgU1NTU1NTU1NTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAga2tra2tra2sgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKIFNTOjo6Ojo6Ojo6Ojo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOjo6Omkgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEo6Ojo6Ojo6OjpKUzo6Ojo6U1NTU1NTOjo6Ojo6UyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWlpaSAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgIEpKOjo6Ojo6OkpKUzo6Ojo6UyAgICAgU1NTU1NTUyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgazo6Ojo6OmsgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcnJycnIgICBycnJycnJycnIgICBhYWFhYWFhYWFhYWFhICAgICAgc3Nzc3Nzc3NzcyAgIGlpaWlpaWkgIGs6Ojo6OmsgICAga2tra2tra1xuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgUzo6Ojo6UyAgICAgICAgICAgcjo6OjpycnI6Ojo6Ojo6OjpyICBhOjo6Ojo6Ojo6Ojo6YSAgIHNzOjo6Ojo6Ojo6OnMgIGk6Ojo6OmkgIGs6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgIFM6Ojo6U1NTUyAgICAgICAgcjo6Ojo6Ojo6Ojo6Ojo6Ojo6ciBhYWFhYWFhYWE6Ojo6OmFzczo6Ojo6Ojo6Ojo6OjpzICBpOjo6OmkgIGs6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6aiAgICBTUzo6Ojo6OlNTU1NTICAgcnI6Ojo6OjpycnJycjo6Ojo6OnIgICAgICAgICBhOjo6OmFzOjo6Ojo6c3Nzczo6Ojo6cyBpOjo6OmkgIGs6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gICAgICAgICAgICAgSjo6Ojo6SiAgICAgIFNTUzo6Ojo6Ojo6U1MgIHI6Ojo6OnIgICAgIHI6Ojo6OnIgIGFhYWFhYWE6Ojo6OmEgczo6Ojo6cyAgc3Nzc3NzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSkpKSkpKSiAgICAgSjo6Ojo6SiAgICAgICAgIFNTU1NTUzo6OjpTIHI6Ojo6OnIgICAgIHJycnJycnJhYTo6Ojo6Ojo6Ojo6OmEgICBzOjo6Ojo6cyAgICAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6SiAgICAgSjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgIGE6Ojo6YWFhYTo6Ojo6OmEgICAgICBzOjo6Ojo6cyAgICBpOjo6OmkgIGs6Ojo6Ojo6Ojo6OmsgICAgIFxuLy8gSjo6Ojo6OkogICBKOjo6Ojo6SiAgICAgICAgICAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzc3Nzc3MgICBzOjo6OjpzICBpOjo6OmkgIGs6Ojo6OjprOjo6OjprICAgIFxuLy8gSjo6Ojo6OjpKSko6Ojo6Ojo6SiAgU1NTU1NTUyAgICAgUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6OjphICAgIGE6Ojo6OmFzOjo6Ojpzc3NzOjo6Ojo6c2k6Ojo6Ojppazo6Ojo6Omsgazo6Ojo6ayAgIFxuLy8gIEpKOjo6Ojo6Ojo6Ojo6OkpKICAgUzo6Ojo6OlNTU1NTUzo6Ojo6U3I6Ojo6OnIgICAgICAgICAgYTo6Ojo6YWFhYTo6Ojo6OmFzOjo6Ojo6Ojo6Ojo6OjpzIGk6Ojo6Ojppazo6Ojo6OmsgIGs6Ojo6OmsgIFxuLy8gICAgSko6Ojo6Ojo6OjpKSiAgICAgUzo6Ojo6Ojo6Ojo6Ojo6OlNTIHI6Ojo6OnIgICAgICAgICAgIGE6Ojo6Ojo6Ojo6YWE6Ojphczo6Ojo6Ojo6Ojo6c3MgIGk6Ojo6Ojppazo6Ojo6OmsgICBrOjo6OjprIFxuLy8gICAgICBKSkpKSkpKSkogICAgICAgIFNTU1NTU1NTU1NTU1NTUyAgIHJycnJycnIgICAgICAgICAgICBhYWFhYWFhYWFhICBhYWFhIHNzc3Nzc3Nzc3NzICAgIGlpaWlpaWlpa2tra2tra2sgICAga2tra2tra1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zb2xlLmxvZygod2luZG93LmlubmVySGVpZ2h0KjAuMDAzOTIxNTY5KS50b0ZpeGVkKDIpKTtcbmNvbnNvbGUubG9nKCh3aW5kb3cuaW5uZXJXaWR0aCowLjAwMTY2NjY2NykudG9GaXhlZCgyKSk7XG5cbmZ1bmN0aW9uIHNldENhbnZhc1NpemUoKVxue1xuICAgIGxldCBzY2FsZSA9IDA7XG4gICAgaWYoIHdpbmRvdy5pbm5lckhlaWdodCowLjAwMzkyMTU2OSA+PSB3aW5kb3cuaW5uZXJXaWR0aCowLjAwMTY2NjY2NylcbiAgICB7XG4gICAgICAgIHNjYWxlPXdpbmRvdy5pbm5lcldpZHRoKjAuMDAxNjY2NjY3O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2NhbGU9d2luZG93LmlubmVySGVpZ2h0KjAuMDAzOTIxNTY5O1xuICAgIH1cbiAgICBsZXQgbWlkZGxlV2lkdGggPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgIFxuICAgIGxldCBnYW1lQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY2FudmFzJyk7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcbn1cblxuc2V0Q2FudmFzU2l6ZSgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2V0Q2FudmFzU2l6ZSk7XG5cbi8vY29uc29sZS5sb2coZ2FtZUNhbnZhcy5zdHlsZSk7XG4vLyBJbXBvcnRhdGlvbiBkZXMgY2xhc3Nlcy5cbmltcG9ydCBDb3JlIGZyb20gJy4vQ29yZS5qcyc7XG5sZXQgY29yZSA9IG5ldyBDb3JlKCk7IiwiLy8gU2VsZWN0aW9uIGR1IGNhbnZhcyBldCBkZWZpbml0aW9uIGRlIHNhIHRhaWxsZS5cbmV4cG9ydCBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtZGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuZXhwb3J0IGNvbnN0IGhlaWdodCA9IDI1MDtcbmV4cG9ydCBjb25zdCB3aWR0aCA9IDYwMDtcbmV4cG9ydCBjb25zdCBmcHMgPSA1ODtcbmV4cG9ydCBjb25zdCBncmF2aXR5ID0gNDsiLCJpbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlUm90KGltZ0xheW91dCwgaW1nUG9zWCwgaW1nUG9zWSwgaW1nV2lkdGgsIGltZ0hlaWdodCwgcG9zMSwgcG9zMCwgaW1nRGVnKSB7XG5cbiAgICAvL0NvbnZlcnNpb24gZGUgZGVncmUgdmVycyBcbiAgICBsZXQgcmFkaWFuID0gaW1nRGVnICogTWF0aC5QSSAvIDE4MDtcblxuICAgIC8vRGVmaW5pdGlvbiBkZSBsJ29yaWdpbmUgZGUgbCdpbWFnZSBhIHNvbiBjZW50cmUuXG4gICAgY29udGV4dC50cmFuc2xhdGUocG9zMSArIGltZ1dpZHRoIC8gMiwgcG9zMCArIGltZ0hlaWdodCAvIDIpO1xuXG4gICAgLy9Sb3RhdGlvbi5cbiAgICBjb250ZXh0LnJvdGF0ZShyYWRpYW4pO1xuXG4gICAgLy9JbXByZXNzaW9uIGRlIGwnaW1hZ2UuXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nTGF5b3V0LCBpbWdQb3NYLCBpbWdQb3NZLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCBpbWdIZWlnaHQgLyAyICogKC0xKSwgaW1nV2lkdGggLyAyICogKC0xKSwgaW1nV2lkdGgsIGltZ0hlaWdodCk7XG5cbiAgICAvL1JlbWlzZSBhIHplcm8gZHUgY2FudmFzLlxuICAgIGNvbnRleHQucm90YXRlKHJhZGlhbiAqICgtMSkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKChwb3MxICsgaW1nV2lkdGggLyAyKSAqICgtMSksIChwb3MwICsgaW1nSGVpZ2h0IC8gMikgKiAoLTEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyQmV0d2VlbihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59IiwiZXhwb3J0IGxldCBkZWJ1Z0xldmVsID0ge2J1ZmZlcjogMX07XG5leHBvcnQgbGV0IGRlYnVnTWVzc2FnZSA9IHtidWZmZXI6ICcnfTtcbmV4cG9ydCBsZXQgaW50ZXJ2YWxTdGFydGVkID0ge2J1ZmZlcjogZmFsc2V9O1xuZXhwb3J0IGxldCByZW5kZXJlZEZyYW1lID0ge2J1ZmZlcjogMH07XG5leHBvcnQgbGV0IGdhbWVPdmVyID0ge2J1ZmZlcjogZmFsc2V9O1xuZXhwb3J0IGxldCBzY29yZSA9IHtidWZmZXI6IDB9O1xuZXhwb3J0IGxldCBjb2xsaXNpb25BcnJheSA9IHtidWZmZXI6IFtdfTtcbmV4cG9ydCBsZXQgY2xlYXJlZENvbGxpc2lvbkFycmF5ID0ge2J1ZmZlcjogW119O1xuZXhwb3J0IGxldCByZXN0YXJ0UmVxdWVzdGVkID0ge2J1ZmZlcjogZmFsc2V9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==