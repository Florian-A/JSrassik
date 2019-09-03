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
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["clearedCollisionArray"]['buffer'] = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"]['buffer'];
    }

    clearCollision() {
        _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"]['buffer'] = _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["clearedCollisionArray"]['buffer'];

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

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer']) {
            this.breakInterval();
        }

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


        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 50 === 49) {
            trex[0].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 100 === 99) {
            trex[1].enable();
        }
        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["renderedFrame"]['buffer'] % 300 === 299) {
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
        this.pos[1] -= 3;
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
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = true;
        }
        else if (this.collisionX) {
            _sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["gameOver"]['buffer'] = true;
        }

        if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.posCollision[1]].trex === 1 && this.trexCollision === false) {
            this.trexCollision = true;
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
        this.pos = [117, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"] + 30];
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


            if (typeof (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index]) !== "undefined") {

                if (_sharingVariables_js__WEBPACK_IMPORTED_MODULE_1__["collisionArray"][this.posCollision[0]][this.pos[1] + index].cactus === 1) {
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
        this.pos = [160, _sharingConstants_js__WEBPACK_IMPORTED_MODULE_0__["width"]];
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
                this.pos[1] -= 5;
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
let debugLevel = {buffer: 1};
let debugMessage = {buffer: ''};
let intervalStarted = {buffer: false};
let renderedFrame = {buffer: 0};
let gameOver = {buffer: false};
let score = {buffer: 0};
let collisionArray = {buffer: []};
let clearedCollisionArray = {buffer: []};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhY3R1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvdWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHRlcm9kYWN0eWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyaW5nQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyaW5nRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyaW5nVmFyaWFibGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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LGVBQWUsZ0RBQUksRzs7Ozs7Ozs7Ozs7O0FDdEJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQjs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUN5RTtBQUN6STs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0REFBTzs7QUFFWDtBQUNBLElBQUksNERBQU87O0FBRVg7QUFDQSxJQUFJLDREQUFPOztBQUVYO0FBQ0EsSUFBSSw0REFBTztBQUNYLElBQUksNERBQU87QUFDWDs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0Qiw2QkFBNkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBjYWN0dXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU0gICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgICBNTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTSAgICAgICAgICAgICAgIFxuLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgICAgICAgICAgIFxuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjdHVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbMTc3LCB3aWR0aF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvb2JzdGFjbGUucG5nXCI7XG4gICAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMuaW1nV2lkdGggPSAyNTtcbiAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgdGhpcy5pbWdQb3NYID0gMDtcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gMztcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1nTGF5b3V0LCB0aGlzLmltZ1Bvc1gsIHRoaXMuaW1nUG9zWSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSwgdGhpcy5pbWdXaWR0aCwgdGhpcy5pbWdIZWlnaHQpO1xuICAgIH1cbiAgICBsb2NhbENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoeSA+PSB0aGlzLnBvc1swXSAmJiB5IDw9IHRoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgJiYgeCA+PSB0aGlzLnBvc1sxXSAmJiB4IDw9IHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XS5jYWN0dXMgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3ldW3ggKyB0aGlzLm1vdmVtZW50U3BlZWRdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMubW92ZW1lbnRTcGVlZF0uY2FjdHVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IFsxNzcsIHdpZHRoXTtcbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gLT0gMztcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IDAgLSB0aGlzLmltZ1dpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIG51YWdlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgSUkgIElJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vICAgICAgICAgICAgICAgICAgICAgICBJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBcbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gcG9zWzBdIG9yZG9ubsOpZSB5LlxuICAgICAgICAvLyBwb3NbMV0gYWJzY2lzc2UgeC5cbiAgICAgICAgdGhpcy5wb3MgPSBbZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKDIwLCAxNDApLCAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9jbG91ZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQ2O1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gW2dlbmVyYXRlTnVtYmVyQmV0d2VlbigyMCwgMTQwKSwgd2lkdGhdO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAyO1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zWzFdIDwgMCAtIHRoaXMuaW1nV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gXG4vLyAgICAgICAgIC5kODg4OGIuICAgLmQ4ODg4OGIuICA4ODggICAgICA4ODggICAgICA4ODg4ODg4ICAuZDg4ODhiLiA4ODg4ODg4ICAuZDg4ODg4Yi4gIDg4OGIgICAgODg4IFxuLy8gICAgICAgIGQ4OFAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICAgICA4ODggICAgICAgIDg4OCAgIGQ4OFAgIFk4OGIgIDg4OCAgIGQ4OFBcIiBcIlk4OGIgODg4OGIgICA4ODggXG4vLyAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgIFk4OGIuICAgICAgIDg4OCAgIDg4OCAgICAgODg4IDg4ODg4YiAgODg4IFxuLy8gICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ICAgICAgODg4ICAgICAgICA4ODggICAgXCJZODg4Yi4gICAgODg4ICAgODg4ICAgICA4ODggODg4WTg4YiA4ODggXG4vLyAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICAgICA4ODggICAgICAgIDg4OCAgICAgICBcIlk4OGIuICA4ODggICA4ODggICAgIDg4OCA4ODggWTg4Yjg4OCBcbi8vICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgIDg4OCAgICAgICAgODg4ICAgICAgICAgXCI4ODggIDg4OCAgIDg4OCAgICAgODg4IDg4OCAgWTg4ODg4IFxuLy8gICAgICAgIFk4OGIgIGQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICAgICAgODg4ICAgICAgICA4ODggICBZODhiICBkODhQICA4ODggICBZODhiLiAuZDg4UCA4ODggICBZODg4OCBcbi8vICAgICAgICAgXCJZODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODg4ODg4OCA4ODg4ODg4OCA4ODg4ODg4ICBcIlk4ODg4UFwiIDg4ODg4ODggIFwiWTg4ODg4UFwiICA4ODggICAgWTg4OCBcbi8vIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0Q29sbGlzaW9uKCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpc2F0aW9uIGR1IHN5c3TDqG1lIGRlIGNvbGxpc2lvbi5cbiAgICBpbml0Q29sbGlzaW9uKCkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beF0gPSB7IHk6IHksIHg6IHgsIHBsYXllcjogMCwgZ3JvdW5kOiAwLCBjYWN0dXM6IDAsIGxlYWY6IDAsIHRyZXg6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbGVhcmVkQ29sbGlzaW9uQXJyYXlbJ2J1ZmZlciddID0gY29sbGlzaW9uQXJyYXlbJ2J1ZmZlciddO1xuICAgIH1cblxuICAgIGNsZWFyQ29sbGlzaW9uKCkge1xuICAgICAgICBjb2xsaXNpb25BcnJheVsnYnVmZmVyJ10gPSBjbGVhcmVkQ29sbGlzaW9uQXJyYXlbJ2J1ZmZlciddO1xuXG4gICAgfVxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZDg4ODhiLiAgIC5kODg4ODhiLiAgODg4ODg4OGIuICA4ODg4ODg4ODg4IFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkODhQICBZODhiIGQ4OFBcIiBcIlk4OGIgODg4ICAgWTg4YiA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICA4ODggODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgICAgICA4ODggICAgIDg4OCA4ODggICBkODhQIDg4ODg4ODggICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgICA4ODggODg4ODg4OFBcIiAgODg4ICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgIDg4OCA4ODggVDg4YiAgIDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFk4OGIgIGQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICBUODhiICA4ODggICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZODg4OFBcIiAgIFwiWTg4ODg4UFwiICA4ODggICBUODhiIDg4ODg4ODg4ODhcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NhbnZhcyxjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuXG5pbXBvcnQgRGVidWcgZnJvbSAnLi9EZWJ1Zy5qcyc7XG5pbXBvcnQgQ2FjdHVzIGZyb20gJy4vQ2FjdHVzLmpzJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL0Nsb3VkLmpzJztcbmltcG9ydCBHcm91bmQgZnJvbSAnLi9Hcm91bmQuanMnO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbi5qcyc7XG5pbXBvcnQgVHJleCBmcm9tICcuL1RyZXguanMnO1xuaW1wb3J0IFB0ZXJvZGFjdHlsIGZyb20gJy4vUHRlcm9kYWN0eWwuanMnO1xuXG5sZXQgY29sbGlzaW9uID0gbmV3IENvbGxpc2lvbigpO1xubGV0IGdyb3VuZCA9IG5ldyBHcm91bmQoKTtcbmxldCBwbGF5ZXIgPSBuZXcgUHRlcm9kYWN0eWwoKTtcbmxldCBkZWJ1ZyA9IG5ldyBEZWJ1ZygpO1xubGV0IHRyZXggPSBbXTtcbnRyZXhbMF0gPSBuZXcgVHJleCgpO1xudHJleFsxXSA9IG5ldyBUcmV4KCk7XG50cmV4WzJdID0gbmV3IFRyZXgoKTtcbnRyZXhbM10gPSBuZXcgVHJleCgpO1xudHJleFs0XSA9IG5ldyBUcmV4KCk7XG5sZXQgY2xvdWQgPSBbXTtcbmNsb3VkWzBdID0gbmV3IENsb3VkKCk7XG5jbG91ZFsxXSA9IG5ldyBDbG91ZCgpO1xuY2xvdWRbMl0gPSBuZXcgQ2xvdWQoKTtcbmNsb3VkWzNdID0gbmV3IENsb3VkKCk7XG5jbG91ZFs0XSA9IG5ldyBDbG91ZCgpO1xubGV0IGNhY3R1cyA9IFtdO1xuY2FjdHVzWzBdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzFdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzJdID0gbmV3IENhY3R1cygpO1xuY2FjdHVzWzNdID0gbmV3IENhY3R1cygpO1xuLy8gQ3JlYXRpb24gZHUgY2llbCAvIGZvbmQgZCdlY3JhblxubGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2xheW91dC9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc2V0SG90S2V5KCk7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgIH1cbiAgICBzdGFydEludGVydmFsKCkge1xuICAgICAgICBpZiAoIWludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmludGVydmFsTG9vcCwgMTAwMCAvIGZwcyk7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ZWRbJ2J1ZmZlciddID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGJyZWFrSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsU3RhcnRlZFsnYnVmZmVyJ10gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZXh0SW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxMb29wKCk7XG4gICAgfVxuXG4gICAgc2V0SG90S2V5KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJbJ2J1ZmZlciddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmVha0ludGVydmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICBnYW1lT3ZlclsnYnVmZmVyJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbnRlcnZhbExvb3AoKSB7XG4gICAgICAgIGRlYnVnLnN0YXJ0UGVyZk1lYXN1cmVtZW50KCk7XG4gICAgICAgIGNvbGxpc2lvbi5jbGVhckNvbGxpc2lvbigpO1xuICAgICAgICByZW5kZXJlZEZyYW1lWydidWZmZXInXSsrO1xuXG4gICAgICAgIGlmIChnYW1lT3ZlclsnYnVmZmVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtJbnRlcnZhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzc2luIGR1IGZvbmQgZCdlY3Jhbi5cbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgNjAwLCAyNTApO1xuXG4gICAgICAgIGdyb3VuZC5tb3ZlKCk7XG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMjQgPT09IDIzKSB7XG4gICAgICAgICAgICBjbG91ZFsxXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSA2MCA9PT0gNTkpIHtcbiAgICAgICAgICAgIGNsb3VkWzJdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDkwID09PSA4OSkge1xuICAgICAgICAgICAgY2xvdWRbM10uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMTMwID09PSAxMjkpIHtcbiAgICAgICAgICAgIGNsb3VkWzRdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNsb3VkWzBdLm1vdmUoKTtcbiAgICAgICAgY2xvdWRbMV0ubW92ZSgpO1xuICAgICAgICBjbG91ZFsyXS5tb3ZlKCk7XG4gICAgICAgIGNsb3VkWzRdLm1vdmUoKTtcblxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSA1MCA9PT0gNDkpIHtcbiAgICAgICAgICAgIGNhY3R1c1swXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyZWRGcmFtZVsnYnVmZmVyJ10gJSAxMDAgPT09IDk5KSB7XG4gICAgICAgICAgICBjYWN0dXNbMV0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMzAwID09PSAyOTkpIHtcbiAgICAgICAgICAgIGNhY3R1c1syXS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYWN0dXNbMF0ubW92ZSgpO1xuICAgICAgICBjYWN0dXNbMV0ubW92ZSgpO1xuICAgICAgICBjYWN0dXNbMl0ubW92ZSgpO1xuICAgICAgICBjYWN0dXNbM10ubW92ZSgpO1xuXG5cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICB0cmV4WzBdLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJlZEZyYW1lWydidWZmZXInXSAlIDEwMCA9PT0gOTkpIHtcbiAgICAgICAgICAgIHRyZXhbMV0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcmVkRnJhbWVbJ2J1ZmZlciddICUgMzAwID09PSAyOTkpIHtcbiAgICAgICAgICAgIHRyZXhbMl0uZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJleFswXS5tb3ZlKCk7XG4gICAgICAgIHRyZXhbMV0ubW92ZSgpO1xuICAgICAgICB0cmV4WzJdLm1vdmUoKTtcbiAgICAgICAgdHJleFszXS5tb3ZlKCk7XG5cbiAgICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICAgICAgZGVidWcuZHJhdygpO1xuICAgIH1cbn0iLCIvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhbm5lYXUgZGUgZMOpYm9nYWdlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODg4ODg4Yi4gIDg4ODg4ODg4ODggODg4ODg4Yi4gICA4ODggICAgIDg4OCAgLmQ4ODg4Yi4gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICBcIlk4OGIgODg4ICAgICAgICA4ODggIFwiODhiICA4ODggICAgIDg4OCBkODhQICBZODhiIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgICAgIDg4OCAgLjg4UCAgODg4ICAgICA4ODggODg4ICAgIDg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ODg4OCAgICA4ODg4ODg4Sy4gIDg4OCAgICAgODg4IDg4OCAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggICAgODg4IDg4OCAgICAgICAgODg4ICBcIlk4OGIgODg4ICAgICA4ODggODg4ICA4ODg4OCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4ICAgICAgICA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICA4ODggIC5kODhQIDg4OCAgICAgICAgODg4ICAgZDg4UCBZODhiLiAuZDg4UCBZODhiICBkODhQIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgODg4ODg4OFBcIiAgODg4ODg4ODg4OCA4ODg4ODg4UFwiICAgXCJZODg4ODhQXCIgICBcIlk4ODg4UDg4XG4vLyAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmltcG9ydCB7ZHJhd0ltYWdlUm90LGdlbmVyYXRlTnVtYmVyQmV0d2Vlbn0gZnJvbSAnLi9zaGFyaW5nRnVuY3Rpb25zLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZXh0Rm9udCA9IFwiMThweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5wb3MgPSBbMjAsIDIwXTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICB9XG4gICAgLy8gTWVzdXJlIGR1IG5vbWJyZSBkJ2ltYWdlcyBwYXIgc2Vjb25kZXMuXG4gICAgc3RhcnRQZXJmTWVhc3VyZW1lbnQoKSB7XG4gICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5mcHMgPSAnRlBTOicgKyAoKGZwcyAvICh0aW1lIC0gdGhpcy5sYXN0VGltZSkpICogKDEwMDAgLyBmcHMpKS50b0ZpeGVkKDIpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgLy8gQWZmaWNoYWdlIGRlIGxhIGNvbGxpc2lvbiBhdmVjIGxlcyBjYWN0dXMuXG4gICAgZGlzcGxheUNhdHVzQ29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbeV1beF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLDI1NSwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZXMgVC1SZXguXG4gICAgZGlzcGxheVRyZXhDb2xsaXNpb24oKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt5XVt4XS50cmV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBjb2xsaXNpb24gYXZlYyBsZSBqb3VldXIuXG4gICAgZGlzcGxheVBsYXllckNvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldW3hdLnBsYXllciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDI1NSwwLjUpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZmZpY2hhZ2UgZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGUgc29sLlxuICAgIGRpc3BsYXlHcm91bmRDb2xsaXNpb24oKSB7XG5cbiAgICAgICAgbGV0IGdyb3VuZFlTdGFydCA9IDA7XG4gICAgICAgIGxldCBncm91bmRZRW5kID0gaGVpZ2h0O1xuICAgICAgICBsZXQgZ3JvdW5kWFN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyb3VuZFhFbmQgPSB3aWR0aDtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWxbJ2J1ZmZlciddID49IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3ldWzBdLmdyb3VuZCA9PT0gMSAmJiBjb2xsaXNpb25BcnJheVt5IC0gMV1bMF0uZ3JvdW5kID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91bmRZU3RhcnQgPSBjb2xsaXNpb25BcnJheVt5XVswXS55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChncm91bmRYU3RhcnQsIGdyb3VuZFlTdGFydCwgZ3JvdW5kWEVuZCAtIGdyb3VuZFhTdGFydCwgZ3JvdW5kWUVuZCAtIGdyb3VuZFlTdGFydCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmZmljaGFnZSBkZSBsYSBncmlsbGUgZGUgZGVib2d1YWdlLlxuICAgIGRpc3BsYXlHcmlkKCkge1xuXG4gICAgICAgIGxldCBncmlkWVN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGdyaWRZRW5kID0gaGVpZ2h0O1xuICAgICAgICBsZXQgZ3JpZFhTdGFydCA9IDA7XG4gICAgICAgIGxldCBncmlkWEVuZCA9IHdpZHRoO1xuICAgICAgICBpZiAoZGVidWdMZXZlbFsnYnVmZmVyJ10gPj0gMikge1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgICAgIGlmICh5ICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoZ3JpZFhTdGFydCwgeSwgZ3JpZFhFbmQgLSBncmlkWFN0YXJ0LCAxIC0gZ3JpZFlTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoeSArIDEsIGdyaWRYRW5kIC0gNDAsIHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgICAgIGlmICh4ICUgNTAgPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCArIDEsIGdyaWRZU3RhcnQsIDEgLSBncmlkWFN0YXJ0LCBncmlkWUVuZCAtIGdyaWRZU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHggKyAxLCB4LCBncmlkWUVuZCAtIDI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BsYXlEZWJ1Z01lbnUoKSB7XG4gICAgICAgIGlmIChkZWJ1Z0xldmVsWydidWZmZXInXSA+PSAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZvbnQgPSB0aGlzLnRleHRGb250O1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy5mcHMsIHRoaXMucG9zWzFdLCB0aGlzLnBvc1swXSk7XG4gICAgICAgICAgICBpZiAoZGVidWdNZXNzYWdlWydidWZmZXInXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChkZWJ1Z01lc3NhZ2VbJ2J1ZmZlciddLCB0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0gKyAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHVtcENvbGxpc2lvbigpIHtcbiAgICAgICAgbGV0IGR1bXAgPSBgYDtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZHVtcCArPSBjb2xsaXNpb25BcnJheVt5XVt4XS5ncm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkdW1wICs9IGBcbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZHVtcCk7XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDQ5KSB7XG4gICAgICAgICAgICAgICAgZGVidWdMZXZlbFsnYnVmZmVyJ10gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSA1MCkge1xuICAgICAgICAgICAgICAgIGRlYnVnTGV2ZWxbJ2J1ZmZlciddID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xldmVsWydidWZmZXInXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIERlc3NpbiBkYW5zIGxlIGNvbnRleHQuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGVidWdNZW51KCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUNhdHVzQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVRyZXhDb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UGxheWVyQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheUdyb3VuZENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlHcmlkKCk7XG4gICAgfVxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkdSBzb2xcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAuZDg4ODhiLiAgODg4ODg4OGIuICAgLmQ4ODg4OGIuICA4ODggICAgIDg4OCA4ODhiICAgIDg4OCA4ODg4ODg4Yi4gIFxuLy8gICAgICAgICAgICAgICAgICBkODhQICBZODhiIDg4OCAgIFk4OGIgZDg4UFwiIFwiWTg4YiA4ODggICAgIDg4OCA4ODg4YiAgIDg4OCA4ODggIFwiWTg4YiBcbi8vICAgICAgICAgICAgICAgICAgODg4ICAgIDg4OCA4ODggICAgODg4IDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4ODg4YiAgODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICAgICAgODg4ICAgZDg4UCA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODhZODhiIDg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICA4ODggIDg4ODg4IDg4ODg4ODhQXCIgIDg4OCAgICAgODg4IDg4OCAgICAgODg4IDg4OCBZODhiODg4IDg4OCAgICA4ODggXG4vLyAgICAgICAgICAgICAgICAgIDg4OCAgICA4ODggODg4IFQ4OGIgICA4ODggICAgIDg4OCA4ODggICAgIDg4OCA4ODggIFk4ODg4OCA4ODggICAgODg4IFxuLy8gICAgICAgICAgICAgICAgICBZODhiICBkODhQIDg4OCAgVDg4YiAgWTg4Yi4gLmQ4OFAgWTg4Yi4gLmQ4OFAgODg4ICAgWTg4ODggODg4ICAuZDg4UCBcbi8vICAgICAgICAgICAgICAgICAgIFwiWTg4ODhQODggODg4ICAgVDg4YiAgXCJZODg4ODhQXCIgICBcIlk4ODg4OFBcIiAgODg4ICAgIFk4ODggODg4ODg4OFBcIiAgICAgICAgICAgICBcbi8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQge2NvbnRleHQsaGVpZ2h0LHdpZHRoLGZwcyxncmF2aXR5fSBmcm9tICcuL3NoYXJpbmdDb25zdGFudHMuanMnO1xuaW1wb3J0IHtkZWJ1Z0xldmVsLGRlYnVnTWVzc2FnZSxpbnRlcnZhbFN0YXJ0ZWQscmVuZGVyZWRGcmFtZSxnYW1lT3ZlcixzY29yZSxjb2xsaXNpb25BcnJheSxjbGVhcmVkQ29sbGlzaW9uQXJyYXl9IGZyb20gJy4vc2hhcmluZ1ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQge2RyYXdJbWFnZVJvdCxnZW5lcmF0ZU51bWJlckJldHdlZW59IGZyb20gJy4vc2hhcmluZ0Z1bmN0aW9ucy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFsyMjAsIDBdO1xuICAgICAgICB0aGlzLmltZ0xheW91dCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZ0xheW91dC5zcmMgPSBcIi4vbGF5b3V0L2dyb3VuZC5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAxMjtcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDE4MDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgfVxuICAgIC8vIERlZmluaXRpb24gZGUgbGEgY29sbGlzaW9uIGF2ZWMgc29sLlxuICAgIHNldEdyb3VuZENvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gMjIyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3ldW3hdLmdyb3VuZCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0R3JvdW5kQ29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMucG9zWzFdIC09IDM7XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8PSAtMTIwMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxufSIsIi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBkaW5vc2F1cmVzIFB0w6lyb2RhY3R5bGVcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlogICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaICAgIFpaWiAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlogICAgWlpaWlogICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWiAgWlpaWlpaWlpaICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaICBaWlpaWlpaWlpaWiAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWlpaWlpaWlpaWlogIFpaWlpaWlpaWlpaICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaWlpaWlpaWlpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpaWlpaWlpaWlpaWiAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHRlcm9kYWN0eWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBwb3NbMF0gb3Jkb25uw6llIHkuXG4gICAgICAgIC8vIHBvc1sxXSBhYnNjaXNzZSB4LlxuICAgICAgICB0aGlzLnBvcyA9IFs3MCwgMTAwXTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWdMYXlvdXQuc3JjID0gXCIuL2xheW91dC9wdGVyby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSAzNjtcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQyO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgLSAxMywgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoIC0gM107XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb29mT2ZKdW1wID0gNTA7XG4gICAgICAgIHRoaXMucm90YXRlRGVnID0gMDtcbiAgICAgICAgdGhpcy5zZXRIb3RLZXkoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1nU3RlZXAgPD0gNikge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbWdTdGVlcCA8PSAxMSkge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQ2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NZID0gMDtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWCA9IDQ2O1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWdTdGVlcCsrO1xuICAgICAgICBkcmF3SW1hZ2VSb3QodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLnJvdGF0ZURlZylcbiAgICB9XG4gICAgZ3Jhdml0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdICs9IGdyYXZpdHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxDb2xsaXNpb24oKSB7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQgLSAxMywgdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoIC0gM107XG5cbiAgICAgICAgbGV0IGNvbGxpc2lvblk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gdGhpcy5pbWdXaWR0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25ZID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXS5ncm91bmQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sbGlzaW9uWDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ0hlaWdodDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvblggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsaXNpb25YID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHkgPSB0aGlzLnBvc1swXTsgeSA8IHRoaXMucG9zQ29sbGlzaW9uWzBdOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHRoaXMucG9zQ29sbGlzaW9uWzFdOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XS5wbGF5ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgKyAxNF1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5ICsgMTRdW3hdLnBsYXllciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4XSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beF0ucGxheWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgc2hvd0NvbGxpc2lvbigpIHtcbiAgICAgICAgaWYgKGRlYnVnTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zQ29sbGlzaW9uWzFdIC0gdGhpcy5wb3NbMV0sIHRoaXMucG9zQ29sbGlzaW9uWzBdIC0gdGhpcy5wb3NbMF0pO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwxKVwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLnBvc1sxXSwgdGhpcy5wb3NbMF0sIDUsIDUpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLnJvdGF0ZURlZyA9IDA7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAganVtcENvbnRyb2woKSB7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlICYmIHRoaXMucG9zWzBdID49IHRoaXMucm9vZk9mSnVtcCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zWzBdICogMC45MCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmNvbGxpc2lvblkgJiYgdGhpcy5yb3RhdGVEZWcgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5jb2xsaXNpb25ZKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZURlZyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbkZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEZWcgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEhvdEtleSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGF1dG9QbGF5KCkge1xuICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF0gKyAxNV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSB8fCBjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXSArIDE1XVt0aGlzLnBvc0NvbGxpc2lvblsxXV0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyWydidWZmZXInXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb2xsaXNpb25YKSB7XG4gICAgICAgICAgICBnYW1lT3ZlclsnYnVmZmVyJ10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc0NvbGxpc2lvblsxXV0udHJleCA9PT0gMSAmJiB0aGlzLnRyZXhDb2xsaXNpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnRyZXhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmV4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbCgpO1xuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGRpbm9zYXVyZXMgVC1SZXhcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU0gIE1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU0gICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU0gICAgICAgICAgICAgICAgTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgICBNTU1NTU1NTU1NTU1NTU1NTU0gIE1NICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTU1NTU0gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTU1NTU1NTU1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NTU1NTSAgTU1NTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NTU0gIE1NTU0gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1NICAgICAgICBNTSAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNTU1NICAgICAgTU1NTSAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTU1NTSAgICAgIE1NTU0gICAgICAgICAgICAgICAgXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHtjb250ZXh0LGhlaWdodCx3aWR0aCxmcHMsZ3Jhdml0eX0gZnJvbSAnLi9zaGFyaW5nQ29uc3RhbnRzLmpzJztcbmltcG9ydCB7ZGVidWdMZXZlbCxkZWJ1Z01lc3NhZ2UsaW50ZXJ2YWxTdGFydGVkLHJlbmRlcmVkRnJhbWUsZ2FtZU92ZXIsc2NvcmUsY29sbGlzaW9uQXJyYXksY2xlYXJlZENvbGxpc2lvbkFycmF5fSBmcm9tICcuL3NoYXJpbmdWYXJpYWJsZXMuanMnO1xuaW1wb3J0IHtkcmF3SW1hZ2VSb3QsZ2VuZXJhdGVOdW1iZXJCZXR3ZWVufSBmcm9tICcuL3NoYXJpbmdGdW5jdGlvbnMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHBvc1swXSBvcmRvbm7DqWUgeS5cbiAgICAgICAgLy8gcG9zWzFdIGFic2Npc3NlIHguXG4gICAgICAgIHRoaXMucG9zID0gWzExNywgd2lkdGggKyAzMF07XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nTGF5b3V0LnNyYyA9IFwiLi9sYXlvdXQvZGluby5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWdIZWlnaHQgPSA0MztcbiAgICAgICAgdGhpcy5pbWdXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIHRoaXMucG9zQ29sbGlzaW9uID0gW3RoaXMucG9zWzBdICsgdGhpcy5pbWdIZWlnaHQsIHRoaXMucG9zWzFdICsgdGhpcy5pbWdXaWR0aF07XG4gICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1wSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb2ZPZkp1bXAgPSA3MDtcbiAgICAgICAgdGhpcy5pc0RlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDYpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSA4MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmltZ1N0ZWVwIDw9IDExKSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1kgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdQb3NYID0gNDE7XG4gICAgICAgICAgICB0aGlzLmltZ1N0ZWVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltZ1N0ZWVwKys7XG4gICAgICAgIGlmICh0aGlzLmp1bXBJblByb2dyZXNzID09PSB0cnVlIHx8IHRoaXMuY29sbGlzaW9uWSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW1nUG9zWSA9IDA7XG4gICAgICAgICAgICB0aGlzLmltZ1Bvc1ggPSAwO1xuICAgICAgICAgICAgdGhpcy5pbWdTdGVlcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWdMYXlvdXQsIHRoaXMuaW1nUG9zWCwgdGhpcy5pbWdQb3NZLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCwgdGhpcy5wb3NbMV0sIHRoaXMucG9zWzBdLCB0aGlzLmltZ1dpZHRoLCB0aGlzLmltZ0hlaWdodCk7XG4gICAgfVxuICAgIGdyYXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSBncmF2aXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsQ29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc0NvbGxpc2lvbiA9IFt0aGlzLnBvc1swXSArIHRoaXMuaW1nSGVpZ2h0LCB0aGlzLnBvc1sxXSArIHRoaXMuaW1nV2lkdGhdO1xuXG4gICAgICAgIGxldCBjb2xsaXNpb25ZO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IHRoaXMuaW1nV2lkdGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zWzFdICsgaW5kZXhdLmNhY3R1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sbGlzaW9uWSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NDb2xsaXNpb25bMF1dW3RoaXMucG9zQ29sbGlzaW9uWzFdXSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NDb2xsaXNpb25bMV1dLmdyb3VuZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sbGlzaW9uWDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSB0aGlzLmltZ0hlaWdodDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc0NvbGxpc2lvblswXV1bdGhpcy5wb3NbMV0gKyBpbmRleF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zQ29sbGlzaW9uWzBdXVt0aGlzLnBvc1sxXSArIGluZGV4XS5jYWN0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbGxpc2lvblggPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHdpZHRoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XS50cmV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDVdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyA1XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5ICsgMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSArIDEwXVt4ICsgNV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSArIDEwXVt4ICsgNV0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4ICsgMTBdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4ICsgMTBdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAganVtcCgpIHtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIH1cbiAgICBqdW1wQ29udHJvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuanVtcEluUHJvZ3Jlc3MgPT09IHRydWUgJiYgdGhpcy5wb3NbMF0gPj0gdGhpcy5yb29mT2ZKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IE1hdGgucm91bmQodGhpcy5wb3NbMF0gKiAwLjkyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuanVtcEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRIb3RLZXkoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gWzE2MCwgd2lkdGhdO1xuICAgICAgICB0aGlzLmlzRGVhZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkZWFkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZWFkKSB7XG4gICAgICAgICAgICBzY29yZVsnYnVmZmVyJ10gKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgICAgIGRlYnVnTWVzc2FnZVsnYnVmZmVyJ10gPSBzY29yZVsnYnVmZmVyJ107XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IHRoaXMucG9zWzBdOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSB0aGlzLnBvc1sxXTsgeCA8IHdpZHRoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmICh5ID49IHRoaXMucG9zWzBdICYmIHkgPD0gdGhpcy5wb3NbMF0gKyB0aGlzLmltZ0hlaWdodCAmJiB4ID49IHRoaXMucG9zWzFdICYmIHggPD0gdGhpcy5wb3NbMV0gKyB0aGlzLmltZ1dpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbeV1beF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5XVt4XS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5XVt4ICsgdGhpcy5pbWdXaWR0aCArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeV1beCArIHRoaXMuaW1nV2lkdGggKyAyXS50cmV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt5ICsgMl0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BcnJheVt5ICsgMl1beCArIDJdLnRyZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3kgLSB0aGlzLmltZ0hlaWdodF1beCArIDJdKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQXJyYXlbeSAtIHRoaXMuaW1nSGVpZ2h0XVt4ICsgMl0udHJleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBkZWFkQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NbMF0gPD0gaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSAzO1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2woKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV0gLSAxMF0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV0gLSAxMF0uY2FjdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29sbGlzaW9uQXJyYXlbdGhpcy5wb3NbMF1dKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNvbGxpc2lvbkFycmF5W3RoaXMucG9zWzBdXVt0aGlzLnBvc1sxXV0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb25BcnJheVt0aGlzLnBvc1swXV1bdGhpcy5wb3NbMV1dLnBsYXllciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc1sxXSA8IC0yMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgSkpKSkpKSkpKSkogICBTU1NTU1NTU1NTU1NTU1MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpaWlpICBra2tra2trayAgICAgICAgICAgXG4vLyAgICAgICAgICAgSjo6Ojo6Ojo6OkogU1M6Ojo6Ojo6Ojo6Ojo6OjpTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6Ojo6aSBrOjo6Ojo6ayAgICAgICAgICAgXG4vLyAgICAgICAgICAgSjo6Ojo6Ojo6OkpTOjo6OjpTU1NTU1M6Ojo6OjpTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpaWlpICBrOjo6Ojo6ayAgICAgICAgICAgXG4vLyAgICAgICAgICAgSko6Ojo6Ojo6SkpTOjo6OjpTICAgICBTU1NTU1NTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrOjo6Ojo6ayAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBKOjo6OjpKICBTOjo6OjpTICAgICAgICAgICBycnJyciAgIHJycnJycnJyciAgIGFhYWFhYWFhYWFhYWEgICAgICBzc3Nzc3Nzc3NzICAgaWlpaWlpaSAgazo6Ojo6ayAgICBra2tra2trXG4vLyAgICAgICAgICAgICBKOjo6OjpKICBTOjo6OjpTICAgICAgICAgICByOjo6OnJycjo6Ojo6Ojo6OnIgIGE6Ojo6Ojo6Ojo6OjphICAgc3M6Ojo6Ojo6Ojo6cyAgaTo6Ojo6aSAgazo6Ojo6ayAgIGs6Ojo6OmsgXG4vLyAgICAgICAgICAgICBKOjo6OjpKICAgUzo6OjpTU1NTICAgICAgICByOjo6Ojo6Ojo6Ojo6Ojo6OjpyIGFhYWFhYWFhYTo6Ojo6YXNzOjo6Ojo6Ojo6Ojo6OnMgIGk6Ojo6aSAgazo6Ojo6ayAgazo6Ojo6ayAgXG4vLyAgICAgICAgICAgICBKOjo6OjpqICAgIFNTOjo6Ojo6U1NTU1MgICBycjo6Ojo6OnJycnJyOjo6Ojo6ciAgICAgICAgIGE6Ojo6YXM6Ojo6Ojpzc3NzOjo6OjpzIGk6Ojo6aSAgazo6Ojo6ayBrOjo6OjprICAgXG4vLyAgICAgICAgICAgICBKOjo6OjpKICAgICAgU1NTOjo6Ojo6OjpTUyAgcjo6Ojo6ciAgICAgcjo6Ojo6ciAgYWFhYWFhYTo6Ojo6YSBzOjo6OjpzICBzc3Nzc3MgIGk6Ojo6aSAgazo6Ojo6Oms6Ojo6OmsgICAgXG4vLyBKSkpKSkpKICAgICBKOjo6OjpKICAgICAgICAgU1NTU1NTOjo6OlMgcjo6Ojo6ciAgICAgcnJycnJycmFhOjo6Ojo6Ojo6Ojo6YSAgIHM6Ojo6OjpzICAgICAgIGk6Ojo6aSAgazo6Ojo6Ojo6Ojo6ayAgICAgXG4vLyBKOjo6OjpKICAgICBKOjo6OjpKICAgICAgICAgICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICAgYTo6OjphYWFhOjo6Ojo6YSAgICAgIHM6Ojo6OjpzICAgIGk6Ojo6aSAgazo6Ojo6Ojo6Ojo6ayAgICAgXG4vLyBKOjo6Ojo6SiAgIEo6Ojo6OjpKICAgICAgICAgICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OmEgICAgYTo6Ojo6YXNzc3NzcyAgIHM6Ojo6OnMgIGk6Ojo6aSAgazo6Ojo6Oms6Ojo6OmsgICAgXG4vLyBKOjo6Ojo6OkpKSjo6Ojo6OjpKICBTU1NTU1NTICAgICBTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OmEgICAgYTo6Ojo6YXM6Ojo6OnNzc3M6Ojo6OjpzaTo6Ojo6OmlrOjo6Ojo6ayBrOjo6OjprICAgXG4vLyAgSko6Ojo6Ojo6Ojo6Ojo6SkogICBTOjo6Ojo6U1NTU1NTOjo6OjpTcjo6Ojo6ciAgICAgICAgICBhOjo6OjphYWFhOjo6Ojo6YXM6Ojo6Ojo6Ojo6Ojo6OnMgaTo6Ojo6OmlrOjo6Ojo6ayAgazo6Ojo6ayAgXG4vLyAgICBKSjo6Ojo6Ojo6OkpKICAgICBTOjo6Ojo6Ojo6Ojo6Ojo6U1Mgcjo6Ojo6ciAgICAgICAgICAgYTo6Ojo6Ojo6OjphYTo6OmFzOjo6Ojo6Ojo6OjpzcyAgaTo6Ojo6OmlrOjo6Ojo6ayAgIGs6Ojo6OmsgXG4vLyAgICAgIEpKSkpKSkpKSiAgICAgICAgU1NTU1NTU1NTU1NTU1NTICAgcnJycnJyciAgICAgICAgICAgIGFhYWFhYWFhYWEgIGFhYWEgc3Nzc3Nzc3Nzc3MgICAgaWlpaWlpaWlra2tra2trayAgICBra2tra2trXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIEltcG9ydGF0aW9uIGRlcyBjbGFzc2VzLlxuaW1wb3J0IENvcmUgZnJvbSAnLi9Db3JlLmpzJztcbmxldCBjb3JlID0gbmV3IENvcmUoKTsiLCIvLyBTZWxlY3Rpb24gZHUgY2FudmFzIGV0IGRlZmluaXRpb24gZGUgc2EgdGFpbGxlLlxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1kaXNwbGF5XCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gMjUwO1xuZXhwb3J0IGNvbnN0IHdpZHRoID0gNjAwO1xuZXhwb3J0IGNvbnN0IGZwcyA9IDU4O1xuZXhwb3J0IGNvbnN0IGdyYXZpdHkgPSA0OyIsImltcG9ydCB7Y29udGV4dCxoZWlnaHQsd2lkdGgsZnBzLGdyYXZpdHl9IGZyb20gJy4vc2hhcmluZ0NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2RlYnVnTGV2ZWwsZGVidWdNZXNzYWdlLGludGVydmFsU3RhcnRlZCxyZW5kZXJlZEZyYW1lLGdhbWVPdmVyLHNjb3JlLGNvbGxpc2lvbkFycmF5LGNsZWFyZWRDb2xsaXNpb25BcnJheX0gZnJvbSAnLi9zaGFyaW5nVmFyaWFibGVzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBkcmF3SW1hZ2VSb3QoaW1nTGF5b3V0LCBpbWdQb3NYLCBpbWdQb3NZLCBpbWdXaWR0aCwgaW1nSGVpZ2h0LCBwb3MxLCBwb3MwLCBpbWdEZWcpIHtcblxuICAgIC8vQ29udmVyc2lvbiBkZSBkZWdyZSB2ZXJzIFxuICAgIGxldCByYWRpYW4gPSBpbWdEZWcgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgLy9EZWZpbml0aW9uIGRlIGwnb3JpZ2luZSBkZSBsJ2ltYWdlIGEgc29uIGNlbnRyZS5cbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3MxICsgaW1nV2lkdGggLyAyLCBwb3MwICsgaW1nSGVpZ2h0IC8gMik7XG5cbiAgICAvL1JvdGF0aW9uLlxuICAgIGNvbnRleHQucm90YXRlKHJhZGlhbik7XG5cbiAgICAvL0ltcHJlc3Npb24gZGUgbCdpbWFnZS5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWdMYXlvdXQsIGltZ1Bvc1gsIGltZ1Bvc1ksIGltZ1dpZHRoLCBpbWdIZWlnaHQsIGltZ0hlaWdodCAvIDIgKiAoLTEpLCBpbWdXaWR0aCAvIDIgKiAoLTEpLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcblxuICAgIC8vUmVtaXNlIGEgemVybyBkdSBjYW52YXMuXG4gICAgY29udGV4dC5yb3RhdGUocmFkaWFuICogKC0xKSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoKHBvczEgKyBpbWdXaWR0aCAvIDIpICogKC0xKSwgKHBvczAgKyBpbWdIZWlnaHQgLyAyKSAqICgtMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJCZXR3ZWVuKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn0iLCJleHBvcnQgbGV0IGRlYnVnTGV2ZWwgPSB7YnVmZmVyOiAxfTtcbmV4cG9ydCBsZXQgZGVidWdNZXNzYWdlID0ge2J1ZmZlcjogJyd9O1xuZXhwb3J0IGxldCBpbnRlcnZhbFN0YXJ0ZWQgPSB7YnVmZmVyOiBmYWxzZX07XG5leHBvcnQgbGV0IHJlbmRlcmVkRnJhbWUgPSB7YnVmZmVyOiAwfTtcbmV4cG9ydCBsZXQgZ2FtZU92ZXIgPSB7YnVmZmVyOiBmYWxzZX07XG5leHBvcnQgbGV0IHNjb3JlID0ge2J1ZmZlcjogMH07XG5leHBvcnQgbGV0IGNvbGxpc2lvbkFycmF5ID0ge2J1ZmZlcjogW119O1xuZXhwb3J0IGxldCBjbGVhcmVkQ29sbGlzaW9uQXJyYXkgPSB7YnVmZmVyOiBbXX07XG4iXSwic291cmNlUm9vdCI6IiJ9