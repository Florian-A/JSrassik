import { sharingGameOver, sharingScore } from './sharingVariables.js';

export default class GameOver {
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
        if (sharingGameOver['b']) {

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
            if (sharingGameOver['b'] && this.gameOverDisplayed && this.restardAuthorized) {
                sharingScore['b'] = 0;
                this.parent.restartRequested = true;
                this.gameOverDisplayed = false;
                this.restardAuthorized = false;
                sharingGameOver['b'] = false;
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