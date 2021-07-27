# JSrassiK ([jsrassik.xyz](http://www.jsrassik.xyz/))

Enfant, j'aimais les dinosaures (comme beaucoup d'enfants), d'ailleurs qui n'aime pas les dinosaures ?

![](./conception/readme/kindtrex.jpg)

En attendant les progrès en clonage d’animaux préhistoriques, je propose un petit jeu dont le but est d'incarner un ptérodactyle qui chasse des tyrannosaures.

Je me suis inspiré des mécaniques de [Flappy Bird](https://flappybird.io/) et des textures ainsi que de certaines mécaniques de [Google T-rex-runner](chrome://dino/) pour imaginer ce jeu.

J'ai décidé d'utiliser les [canvas HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element/canvas) pour réalise ce projet, aucun framework n'a été utilisé.

  ![](./conception/mockup/trex.png)+ ![](./conception/mockup/flapybird.png) = ![](./conception/mockup/pterodactyl.gif)  

## Diagrammes des cas d'utilisation et de structure :

![](./conception/uml/usecase.png)

![](./conception/uml/structure.png)

## 🕹️ Commandes en jeu :

* Pression n'importe où sur l'écran (si ce dernier est tactile).
  * Via l'évènement [`touchstart`](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Touch_events).
* Pression sur la barre d'espace.
  * Via l'évènement [`keydown`](https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent) .


## Capture d'écran du jeu :

![](./conception/readme/demo.gif)

