import {isGameOver} from './sharingVariables.js';

export default class GameOver {
    constructor(parent) {
        this.parent = parent;
        this.gameOver = false;
        // Creation du message de fin du jeu.
        this.gameOverLayout = new Image();
        this.gameOverLayout.src = "./layout/gameover.png";
    }
    check() {
        if (isGameOver['b']) {
            this.draw();
            this.setHotKey();
        }
    }

    restart(event) {
        if (isGameOver['b']) {
            this.parent.score = 0;
            this.parent.restartRequested = true;
            isGameOver['b'] = false;
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