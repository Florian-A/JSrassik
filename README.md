# JSrassiK ([jsrassik.xyz](http://localhost/))

Enfant, j'aimais les dinosaures (comme beaucoup d'enfants), d'ailleurs qui n'aime pas les dinosaures ?

En attendant les progrès en clonage d’animaux préhistoriques, je propose un petit jeu dont le but est d'incarner un ptérodactyle qui chasse des tyrannosaures.

Je me suis inspiré des mécaniques de [Flappy Bird](https://flappybird.io/) et des textures ainsi que de certaines mécaniques de [Google T-rex-runner](chrome://dino/) pour imaginer ce jeu.

J'ai décidé d'utiliser les [canvas HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element/canvas) pour réalise ce projet, aucun framework n'a été utilisé.

  ![](./conception/mockup/trex.png)+ ![](./conception/mockup/flapybird.png) = ![](./conception/mockup/pterodactyl.gif)  

---

### Diagramme de structure :

![](./conception/uml/structure.png)


### Transpilation :

La commande pour transpiler l'ensemble du projet :

```
npm run build
```

### 🕹️ Commandes en jeu :

* Pression n'importe où sur l'écran (si ce dernier est tactile).
  * Via l'évènement [`touchstart`](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Touch_events).
* Pression sur la <kbd>barre d'espace</kbd>.
  * Via l'évènement [`keydown`](https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent) .

* Pression sur la touche <kbd>1</kbd> pour afficher le nombre d'images par secondes.

* Pression sur la touche <kbd>2</kbd> pour afficher le nombre d'images par secondes + l'affichage des zones de collisions.

* Pression sur la touche <kbd>0</kbd> pour cacher toutes les informations de débogages.

### Capture d'écran du jeu :

![](./conception/readme/demo.gif)

