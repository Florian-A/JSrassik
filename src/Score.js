import { sharingScore } from './sharingVariables.js';
export default class Score {
    constructor(parent) {
        this.parent = parent;
        this.textFont = "15px joystix";
        this.pos = [40, this.parent.WIDTH-240];
    }
    // Dessin dans le context.
    draw() {
        let hitScore = ('0000' + this.parent.local.score).slice(-4);
        let score = ('0000' + sharingScore['b']).slice(-4);
        let scoreMessage = `HIT:${hitScore} SCORE:${score}`;
        this.parent.CONTEXT.font = this.textFont;
        this.parent.CONTEXT.fillStyle = "rgba(0,0,0,0.7)";
        this.parent.CONTEXT.fillText(scoreMessage, this.pos[1], this.pos[0]);
    }
}