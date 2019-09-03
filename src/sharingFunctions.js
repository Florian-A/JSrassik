import {context,height,width,fps,gravity} from './sharingConstants.js';
import {debugLevel,debugMessage,intervalStarted,renderedFrame,gameOver,score,collisionArray,clearedCollisionArray} from './sharingVariables.js';
export function drawImageRot(imgLayout, imgPosX, imgPosY, imgWidth, imgHeight, pos1, pos0, imgDeg) {

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

export function generateNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}