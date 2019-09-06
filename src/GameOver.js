import { context, height, width, fps, gravity } from './sharingConstants.js';
import { debugLevel, debugMessage, intervalStarted, renderedFrame, gameOverd, score, collisionArray, clearedCollisionArray, restartRequested } from './sharingVariables.js';
import { drawImageRot, generateNumberBetween } from './sharingFunctions.js';
export default class GameOver {
    constructor() {
        this.gameOver = false;
        // Creation du message de fin du jeu.
        this.gameOverLayout = new Image();
        this.gameOverLayout.src = "./layout/gameover.png";
    }
    check() {
        if (gameOverd['buffer']) {
            this.draw();
            this.setHotKey();
        }
    }

    restart(event) {
        if (gameOverd['buffer']) {
            restartRequested['buffer'] = true;
            gameOverd['buffer'] = false;
        }
    }

    setHotKey() {
        document.addEventListener("keydown", this.restart);
        document.addEventListener("touchstart",this.restart);
    }

    draw() {
        context.drawImage(this.gameOverLayout, Math.round(width / 2 - this.gameOverLayout.width / 2), Math.round(height / 2 - this.gameOverLayout.height / 2), 253, 71);
    }

}