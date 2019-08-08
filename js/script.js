
// Selection du canvas et definition de la taille.
const canvas = document.querySelector("#game-display");
canvas.width = 884;
canvas.height = 356;

// Definition du context.
const context = canvas.getContext("2d");

// Creation de l'oiseau
let bird = new Image();
bird.src = "./layout/dino.png";

// Creation du ciel / fond d'ecran
let background = new Image();
background.src = "./layout/background.png";

// Creation du sol
let ground = new Image();
ground.src = "./layout/ground.png";

let dinoPos = [0, 0];


// Definition des evenents.
document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        dinoPos[1] -= 45;
    }
})


function draw() {

    // Dessin du fond d'ecran.
    context.drawImage(background, 0, 0, 884, 356);

    // Dessin du sol.
    context.drawImage(ground, 0, 296, 884, 60);

    // Mouvenement automatique du joueur.
    dinoPos[1]+=4;
    dinoPos[0]++;


    // Remise a zero quand depassement du cadre.
    if (dinoPos[1] >= 248) {
        dinoPos[1] = 248;
    }
    if (dinoPos[0] > 884) {
        dinoPos[0] = 0;
    }

    // Dessin de joueur.
    context.drawImage(bird, dinoPos[0], dinoPos[1], 43, 48);
    //requestAnimationFrame(draw);   
}
draw();

setInterval(draw, 1000 / 60);
