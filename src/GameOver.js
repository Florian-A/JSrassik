import { context, height, width, fps, gravity } from './sharingConstants.js';
import { debugLevel, debugMessage, intervalStarted, renderedFrame, gameOver, score, collisionArray, clearedCollisionArray, restartRequested } from './sharingVariables.js';
import { drawImageRot, generateNumberBetween } from './sharingFunctions.js';
export default class GameOver {
    constructor() {
        this.gameOver = false;
        // Creation du message de fin du jeu.
        this.gameOverLayout = new Image();
        this.gameOverLayout.src = "./layout/gameover.png";
    }
    check() {
        if (gameOver['buffer']) {
            this.draw();
            this.setHotKey();
        }
    }
    
    restart(event) {
        if (event.which === 32 && gameOver['buffer']) {
            restartRequested['buffer'] = true;
            gameOver['buffer'] = false;
        }
        
    }


    setHotKey() {
        document.addEventListener("keydown", this.restart);
    }

    draw() {
        context.drawImage(this.gameOverLayout, Math.round(width / 2 - this.gameOverLayout.width / 2), Math.round(height / 2 - this.gameOverLayout.height / 2), 253, 71);
    }

}