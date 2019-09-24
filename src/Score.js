import { sharingScore } from './sharingVariables.js';
export default class Score {
    constructor(parent) {
        this.parent = parent;
        // Changement de police.
        this.textFont = "15px joystix";
        this.pos = [45, this.parent.WIDTH-260];
    }
    // Dessin dans le context.
    draw() {
        // Assignation du meilleur socre
        let hitScore = ('0000' + this.parent.local.score).slice(-4);
        let score = ('0000' + sharingScore['b']).slice(-4);
        // Assignation et construction du message de score.
        let scoreMessage = `HIT:${hitScore} SCORE:${score}`;
        this.parent.CONTEXT.font = this.textFont;
        this.parent.CONTEXT.fillStyle = "rgba(0,0,0,0.7)";
        this.parent.CONTEXT.fillText(scoreMessage, this.pos[1], this.pos[0]);
    }
}