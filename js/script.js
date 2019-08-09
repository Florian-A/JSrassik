// Doccumentation sur les Canvas
// https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Utilisation_d'images


// Selection du canvas et definition de la taille.
const canvas = document.querySelector("#game-display");
canvas.width = 600;
canvas.height = 250;

// Definition du context.
const context = canvas.getContext("2d");

// Creation du T-rex
let dino = new Image();
dino.src = "./layout/dino.png";

// Creation d'un obstacle
let obstacle = new Image();
obstacle.src = "./layout/obstacle.png";

// Creation du ciel / fond d'ecran
let background = new Image();
background.src = "./layout/background.png";

// Creation du sol
let ground = new Image();
ground.src = "./layout/ground.png";

// Game Over
let lGameOver = new Image();
lGameOver.src = "./layout/gameover.png";

let dinoPos = [0, 0];
let dinoAnimationLoop = 0
let dinoOnTheAir = false;
let gameOver = false;

// Definition des evenents.
document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        dinoPos[1] -= 60;
    }
})



function draw() {

    // Debug
    console.log(dinoPos[0] + ' ' + dinoPos[1])

    // Dessin du fond d'ecran.
    context.drawImage(background, 0, 0, 600, 250);

    // Dessin du sol.
    context.drawImage(ground, 0, 200, 884, 50);

    // Obstacle
    context.drawImage(obstacle, 0, 0, 25, 50, 400, 160, 25, 50);
    if (dinoPos[1] >= 135 && dinoPos[0] > 360 && dinoPos[0] < 380) {
        gameOver = true;
    }

    // Arret du jeu en cas de game over.
    if (!gameOver) {

        // Mouvenement automatique du joueur.
        dinoPos[1] += 2;
        dinoPos[0]++;

        // Saut du T-rex.
        if (dinoPos[1] < 160) {
            context.drawImage(dino, 0, 0, 40, 43, dinoPos[0], dinoPos[1], 43, 40);
        }
        else {
            // Course du T-rex.
            if (dinoAnimationLoop <= 4) {
                context.drawImage(dino, 41, 0, 40, 43, dinoPos[0], dinoPos[1], 43, 40);
                dinoAnimationLoop++
            }
            else if (dinoAnimationLoop <= 9) {
                context.drawImage(dino, 82, 0, 40, 43, dinoPos[0], dinoPos[1], 43, 40);
                dinoAnimationLoop++
            }
            else {
                context.drawImage(dino, 82, 0, 40, 43, dinoPos[0], dinoPos[1], 43, 40);
                dinoAnimationLoop = 0;
            }
        }
    }
    else {
        context.drawImage(dino, 41, 0, 40, 43, dinoPos[0], dinoPos[1], 43, 40);
        dinoAnimationLoop++

        context.drawImage(lGameOver, 0, 0, 191, 11, 200, 100, 191, 11);
        dinoAnimationLoop++
    }

    // Remise a zero quand depassement du cadre.
    if (dinoPos[1] >= 160) {
        dinoPos[1] = 160;
    }
    if (dinoPos[0] > 620) {
        dinoPos[0] = 0;
    }

    if (dinoPos[1] <= 90) {
        dinoPos[1] = 90;
    }

}
draw();

setInterval(draw, 1000 / 60);
