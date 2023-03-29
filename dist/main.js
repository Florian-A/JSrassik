(()=>{"use strict";let t={b:""},i={b:!1},s={b:0};function e(t,i){return Math.floor(Math.random()*(i-t+1))+t}class h{constructor(t){this.parent=t,this.textFont="18px monospace",this.pos=[20,20],this.lastTime=0,this.fps=0,this.setHotKey()}startPerfMeasurement(){let t=Date.now();this.fps="FPS:"+(this.parent.FPS/(t-this.lastTime)*(1e3/this.parent.FPS)).toFixed(2),this.lastTime=t}displayCatusCollision(){if(this.parent.debugLevel>=2){for(let t=0;t<this.parent.HEIGHT;t++)for(let i=0;i<this.parent.WIDTH;i++)1===this.parent.collisionArray[t][i].cactus&&(this.parent.CONTEXT.fillStyle="rgba(0,255,0,0.5)",this.parent.CONTEXT.fillRect(i,t,1,1));this.parent.CONTEXT.stroke()}}displayTrexCollision(){if(this.parent.debugLevel>=2){for(let t=0;t<this.parent.HEIGHT;t++)for(let i=0;i<this.parent.WIDTH;i++)1===this.parent.collisionArray[t][i].trex&&(this.parent.CONTEXT.fillStyle="rgba(255,0,0,0.5)",this.parent.CONTEXT.fillRect(i,t,1,1));this.parent.CONTEXT.stroke()}}displayPlayerCollision(){if(this.parent.debugLevel>=2){for(let t=0;t<this.parent.HEIGHT;t++)for(let i=0;i<this.parent.WIDTH;i++)1===this.parent.collisionArray[t][i].player&&(this.parent.CONTEXT.fillStyle="rgba(0,0,255,0.5)",this.parent.CONTEXT.fillRect(i,t,1,1));this.parent.CONTEXT.stroke()}}displayGroundCollision(){let t=0,i=this.parent.HEIGHT,s=this.parent.WIDTH;if(this.parent.debugLevel>=2){for(let i=0;i<this.parent.HEIGHT;i++)for(let s=0;s<this.parent.WIDTH;s++)1===this.parent.collisionArray[i][0].ground&&0===this.parent.collisionArray[i-1][0].ground&&(t=this.parent.collisionArray[i][0].y);this.parent.CONTEXT.fillStyle="rgba(0,0,0,0.5)",this.parent.CONTEXT.fillRect(0,t,s-0,i-t),this.parent.CONTEXT.stroke()}}displayGrid(){let t=this.parent.HEIGHT,i=this.parent.WIDTH;if(this.parent.debugLevel>=2){for(let t=0;t<this.parent.HEIGHT;t++)this.parent.CONTEXT.fillStyle="rgba(255,0,0,1)",t%50==49&&(this.parent.CONTEXT.fillRect(0,t,i-0,1),this.parent.CONTEXT.fillText(t+1,i-40,t));for(let i=0;i<this.parent.WIDTH;i++)this.parent.CONTEXT.fillStyle="rgba(255,0,0,1)",i%50==49&&(this.parent.CONTEXT.fillRect(i+1,0,1,t-0),this.parent.CONTEXT.fillText(i+1,i,t-25));this.parent.CONTEXT.stroke()}}displayDebugMenu(){this.parent.debugLevel>=1&&(this.parent.CONTEXT.font=this.textFont,this.parent.CONTEXT.fillStyle="rgba(0,0,0,1)",this.parent.CONTEXT.fillText(this.fps,this.pos[1],this.pos[0]),void 0!==t.b&&this.parent.CONTEXT.fillText(t.b,this.pos[1],this.pos[0]+20))}dumpCollision(){let t="";for(let i=0;i<this.parent.HEIGHT;i++){for(let s=0;s<this.parent.WIDTH;s++)t+=this.parent.collisionArray[i][s].ground;t+="\n            "}console.log(t)}setHotKey(){document.addEventListener("keydown",(t=>{49===t.which&&(this.parent.debugLevel=1),50===t.which&&(this.parent.debugLevel=2),48===t.which&&(this.parent.debugLevel=0)}))}draw(){this.displayDebugMenu(),this.displayCatusCollision(),this.displayTrexCollision(),this.displayPlayerCollision(),this.displayGroundCollision(),this.displayGrid()}}class o{constructor(t){this.parent=t,this.pos=[185,this.parent.WIDTH],this.imgLayout=new Image,this.imgLayout.src="./layout/obstacle.png",this.imgHeight=50,this.imgWidth=25,this.imgPosY=0,this.imgPosX=0,this.movementSpeed=3,this.enabled=!1}draw(){this.parent.CONTEXT.drawImage(this.imgLayout,this.imgPosX,this.imgPosY,this.imgWidth,this.imgHeight,this.pos[1],this.pos[0],this.imgWidth,this.imgHeight)}localCollision(){for(let t=185;t<this.parent.HEIGHT;t++)for(let i=0;i<this.parent.WIDTH;i++)t>=this.pos[0]&&t<=this.pos[0]+this.imgHeight&&i>=this.pos[1]&&i<=this.pos[1]+this.imgWidth&&(this.parent.collisionArray[t][i].cactus=1,void 0!==this.parent.collisionArray[t][i+this.movementSpeed+Math.floor(s.b/this.parent.DIFFICULTY)]&&(this.parent.collisionArray[t][i+this.movementSpeed+Math.floor(s.b/this.parent.DIFFICULTY)].cactus=0))}enable(){this.enabled=!0}disable(){this.enabled=!1,this.pos=[185,this.parent.WIDTH]}move(){!0===this.enabled&&(i.b||(this.pos[1]-=3+Math.floor(s.b/this.parent.DIFFICULTY)),this.localCollision(),this.draw()),this.pos[1]<0-this.imgWidth&&this.disable()}}class r{constructor(t){this.parent=t,this.pos=[e(20,140),0],this.imgLayout=new Image,this.imgLayout.src="./layout/cloud.png",this.imgHeight=13,this.imgWidth=46,this.imgPosY=0,this.imgPosX=0,this.enabled=!1}draw(){this.parent.CONTEXT.drawImage(this.imgLayout,this.imgPosX,this.imgPosY,this.imgWidth,this.imgHeight,this.pos[1],this.pos[0],this.imgWidth,this.imgHeight)}enable(){this.enabled=!0}disable(){this.enabled=!1,this.pos=[e(20,140),this.parent.WIDTH]}move(){!0===this.enabled&&(i.b?this.pos[1]-=.1:this.pos[1]-=2+Math.floor(s.b/this.parent.DIFFICULTY),this.draw()),this.pos[1]<0-this.imgWidth&&this.disable()}}class a{constructor(t){this.parent=t,this.pos=[220,0],this.imgLayout=new Image,this.imgLayout.src="./layout/ground.png",this.imgHeight=12,this.imgWidth=1800,this.imgPosY=0,this.imgPosX=0}setGroundCollision(){for(let t=0;t<this.parent.HEIGHT;t++)for(let i=0;i<this.parent.WIDTH;i++)t>=222&&(this.parent.collisionArray[t][i].ground=1)}draw(){this.parent.CONTEXT.drawImage(this.imgLayout,this.imgPosX,this.imgPosY,this.imgWidth,this.imgHeight,this.pos[1],this.pos[0],this.imgWidth,this.imgHeight)}move(){this.setGroundCollision(),i.b||(this.pos[1]-=3+Math.floor(s.b/this.parent.DIFFICULTY)),this.pos[1]<=-1200&&(this.pos[1]=0),this.draw()}}class n{constructor(t){this.parent=t,this.blankCollision=[],this.initCollision()}initCollision(){for(let t=0;t<this.parent.HEIGHT;t++){this.parent.collisionArray[t]=[];for(let i=0;i<this.parent.WIDTH+100;i++)this.parent.collisionArray[t][i]={y:t,x:i,player:0,ground:0,cactus:0,leaf:0,trex:0}}for(let t=0;t<this.parent.HEIGHT;t++){this.blankCollision[t]=[];for(let i=0;i<this.parent.WIDTH+100;i++)this.blankCollision[t][i]={y:t,x:i,player:0,ground:0,cactus:0,leaf:0,trex:0}}}}class l{constructor(t){this.parent=t,this.pos=[190,this.parent.WIDTH-20],this.imgLayout=new Image,this.imgLayout.src="./layout/dino.png",this.imgHeight=43,this.imgWidth=40,this.imgPosY=0,this.imgPosX=82,this.imgSteep=0,this.posCollision=[this.pos[0]+this.imgHeight,this.pos[1]+this.imgWidth],this.collisionY=!1,this.collisionX=!1,this.jumpInProgress=!1,this.roofOfJump=75,this.isDead=!1,this.enabled=!1}draw(){this.imgSteep<=6?(this.imgPosY=0,this.imgPosX=82):this.imgSteep<=11?(this.imgPosY=0,this.imgPosX=41):(this.imgPosY=0,this.imgPosX=41,this.imgSteep=0),this.imgSteep++,!0!==this.jumpInProgress&&!1!==this.collisionY||(this.imgPosY=0,this.imgPosX=0,this.imgSteep=0),this.parent.CONTEXT.drawImage(this.imgLayout,this.imgPosX,this.imgPosY,this.imgWidth,this.imgHeight,this.pos[1],this.pos[0],this.imgWidth,this.imgHeight)}gravity(){!1===this.collisionY&&(this.pos[0]+=this.parent.GRAVITY)}localCollision(){let t,i;this.posCollision=[this.pos[0]+this.imgHeight,this.pos[1]+this.imgWidth];for(let i=0;i<=this.imgWidth;i++)void 0!==this.parent.collisionArray[this.posCollision[0]]&&void 0!==this.parent.collisionArray[this.posCollision[0]][this.pos[1]+i]&&1===this.parent.collisionArray[this.posCollision[0]][this.pos[1]+i].cactus&&(t=!0);this.collisionY=1==t,void 0!==this.parent.collisionArray[this.posCollision[0]-11][this.pos[1]]&&1===this.parent.collisionArray[this.posCollision[0]-11][this.pos[1]].ground&&(this.collisionY=!0),void 0!==this.parent.collisionArray[this.posCollision[0]-11][this.posCollision[1]]&&1===this.parent.collisionArray[this.posCollision[0]-11][this.posCollision[1]].ground&&(this.collisionY=!0);for(let t=0;t<=this.imgHeight;t++)void 0!==this.parent.collisionArray[this.posCollision[0]][this.pos[1]+t]&&1===this.parent.collisionArray[this.posCollision[0]][this.pos[1]+t].cactus&&(i=!0);this.collisionX=1==i;for(let t=this.pos[0];t<this.parent.HEIGHT;t++)for(let i=this.pos[1];i<200;i++)t>=this.pos[0]&&t<=this.pos[0]+this.imgHeight&&i>=this.pos[1]&&i<=this.pos[1]+this.imgWidth&&(void 0!==this.parent.collisionArray[t][i]&&(this.parent.collisionArray[t][i].trex=1),void 0!==this.parent.collisionArray[t][i+this.imgWidth+5]&&(this.parent.collisionArray[t][i+this.imgWidth+5].trex=0),void 0!==this.parent.collisionArray[t+10]&&void 0!==this.parent.collisionArray[t+10][i+5]&&(this.parent.collisionArray[t+10][i+5].trex=0),void 0!==this.parent.collisionArray[t-this.imgHeight][i+10]&&(this.parent.collisionArray[t-this.imgHeight][i+10].trex=0))}jump(){s.b>=this.parent.DIFFICULTY?this.roofOfJump=85:s.b>=2*this.parent.DIFFICULTY?this.roofOfJump=95:s.b>=3*this.parent.DIFFICULTY?this.roofOfJump=105:s.b>=4*this.parent.DIFFICULTY?this.roofOfJump=115:s.b>=5*this.parent.DIFFICULTY?this.roofOfJump=125:s.b>=6*this.parent.DIFFICULTY&&(this.roofOfJump=135),this.collisionY=!1,this.jumpInProgress=!0}jumpControl(){!0===this.jumpInProgress&&this.pos[0]>=this.roofOfJump?this.pos[0]=Math.round(.92*this.pos[0]):this.jumpInProgress=!1}setHotKey(){document.addEventListener("keydown",(t=>{32===t.which&&this.jump()}))}enable(){this.isDead||(this.enabled=!0)}disable(){this.enabled=!1,this.pos=[190,this.parent.WIDTH],this.isDead=!1}dead(){this.isDead||(s.b+=1),this.isDead=!0;for(let t=this.pos[0];t<this.parent.HEIGHT;t++)for(let i=this.pos[1];i<this.parent.WIDTH+Math.floor(s.b/this.parent.DIFFICULTY);i++)t>=this.pos[0]&&t<=this.pos[0]+this.imgHeight&&i>=this.pos[1]&&i<=this.pos[1]+this.imgWidth&&(void 0!==this.parent.collisionArray[t][i]&&(this.parent.collisionArray[t][i].trex=0),void 0!==this.parent.collisionArray[t][i+this.imgWidth+2]&&(this.parent.collisionArray[t][i+this.imgWidth+2].trex=0),void 0!==this.parent.collisionArray[t+2]&&(this.parent.collisionArray[t+2][i+2].trex=0),void 0!==this.parent.collisionArray[t-this.imgHeight][i+2]&&(this.parent.collisionArray[t-this.imgHeight][i+2].trex=0))}deadAnimation(){this.pos[0]<=this.parent.HEIGHT?(this.pos[1]-=3+Math.floor(s.b/this.parent.DIFFICULTY),this.pos[0]+=2):this.disable()}move(){!0===this.enabled&&(this.isDead?this.deadAnimation():(i.b?this.pos[1]-=2:this.pos[1]-=5+Math.floor(s.b/this.parent.DIFFICULTY),this.localCollision(),this.gravity(),this.jumpControl(),void 0!==this.parent.collisionArray[this.pos[0]][this.pos[1]-10]&&1===this.parent.collisionArray[this.pos[0]][this.pos[1]-10].cactus&&this.jump()),void 0!==this.parent.collisionArray[this.pos[0]]&&void 0!==this.parent.collisionArray[this.pos[0]][this.pos[1]]&&1===this.parent.collisionArray[this.pos[0]][this.pos[1]].player&&this.dead(),this.draw()),this.pos[1]<-20&&this.disable()}}class p{constructor(t){this.parent=t,this.pos=[70,100],this.imgLayout=new Image,this.imgLayout.src="./layout/ptero.png",this.imgHeight=36,this.imgWidth=42,this.imgPosY=0,this.imgPosX=82,this.imgSteep=0,this.posCollision=[this.pos[0]+this.imgHeight-13,this.pos[1]+this.imgWidth-3],this.collisionY=!1,this.collisionX=!1,this.trexCollision=!1,this.jumpInProgress=!1,this.inFalling=!1,this.roofOfJump=50,this.rotateDeg=0,this.setHotKey()}draw(){this.imgSteep<=6?(this.imgPosY=0,this.imgPosX=0):this.imgSteep<=11?(this.imgPosY=0,this.imgPosX=46):(this.imgPosY=0,this.imgPosX=46,this.imgSteep=0),i.b||this.imgSteep++,function(t,i,s,e,h,o,r,a,n){let l=n*Math.PI/180;t.translate(r+h/2,a+o/2),t.rotate(l),t.drawImage(i,s,e,h,o,o/2*-1,h/2*-1,h,o),t.rotate(-1*l),t.translate(-1*(r+h/2),-1*(a+o/2))}(this.parent.CONTEXT,this.imgLayout,this.imgPosX,this.imgPosY,this.imgWidth,this.imgHeight,this.pos[1],this.pos[0],this.rotateDeg)}gravity(){!1===this.collisionY&&(this.pos[0]+=this.parent.GRAVITY)}localCollision(){let t;this.posCollision=[this.pos[0]+this.imgHeight-13,this.pos[1]+this.imgWidth-3],this.collisionY=!1,void 0!==this.parent.collisionArray[this.posCollision[0]]&&1===this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].ground&&(this.collisionY=!0);for(let i=0;i<=this.imgHeight;i++)void 0!==this.parent.collisionArray[this.posCollision[0]]&&1===this.parent.collisionArray[this.posCollision[0]][this.pos[1]+i].cactus&&(t=!0);this.collisionX=1==t;for(let t=this.pos[0];t<this.posCollision[0];t++)for(let s=this.pos[1];s<this.posCollision[1];s++)t>=this.pos[0]&&t<=this.pos[0]+this.imgHeight&&s>=this.pos[1]&&s<=this.pos[1]+this.imgWidth&&(i.b||void 0!==this.parent.collisionArray[t]&&void 0!==this.parent.collisionArray[t][s]&&(this.parent.collisionArray[t][s].player=1),void 0!==this.parent.collisionArray[t+14]&&void 0!==this.parent.collisionArray[t+14][s]&&(this.parent.collisionArray[t+14][s].player=0),void 0!==this.parent.collisionArray[t]&&void 0!==this.parent.collisionArray[t-this.imgHeight][s]&&(this.parent.collisionArray[t-this.imgHeight][s].player=0))}showCollision(){this.parent.debugLevel>=2&&(this.parent.CONTEXT.fillStyle="rgba(0,0,0,0.5)",this.parent.CONTEXT.fillRect(this.pos[1],this.pos[0],this.posCollision[1]-this.pos[1],this.posCollision[0]-this.pos[0]),this.parent.CONTEXT.fillStyle="rgba(255,0,0,1)",this.parent.CONTEXT.fillRect(this.pos[1],this.pos[0],5,5),this.parent.CONTEXT.stroke())}jump(){i.b||(this.rotateDeg=0,this.collisionY=!1,this.jumpInProgress=!0,this.inFalling=!1)}jumpControl(){!0===this.jumpInProgress&&this.pos[0]>=this.roofOfJump?(this.pos[0]=Math.round(.9*this.pos[0]),this.rotateDeg-=1):!this.collisionY&&this.rotateDeg<=0?(this.jumpInProgress=!1,this.inFalling=!0,this.rotateDeg+=4):this.collisionY?(this.jumpInProgress=!1,this.inFalling=!0,this.rotateDeg=0):(this.jumpInProgress=!1,this.inFalling=!0,this.rotateDeg+=1)}setHotKey(){document.addEventListener("keydown",(t=>{32===t.which&&this.jump()})),document.addEventListener("touchstart",(t=>{this.jump()}))}restart(){this.pos=[70,100],this.collisionY=!1,this.collisionX=!1,this.parent.restartRequested=!1}autoPlay(){1!==this.parent.collisionArray[this.posCollision[0]+15][this.posCollision[1]].ground&&1!==this.parent.collisionArray[this.posCollision[0]+15][this.posCollision[1]].cactus||this.jump()}deadAnimation(){0===this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].ground&&(this.pos[0]+=this.parent.GRAVITY);for(let t=this.pos[0]-20;t<this.posCollision[0];t++)for(let i=this.pos[1];i<this.posCollision[1];i++)this.parent.collisionArray[t][i].player=0}move(){this.parent.restartRequested&&this.restart(),(this.collisionY||this.collisionX)&&(this.collisionX&&this.jump(),i.b=!0,this.deadAnimation()),void 0!==this.parent.collisionArray[this.posCollision[0]]&&(1===this.parent.collisionArray[this.posCollision[0]][this.posCollision[1]].trex&&!1===this.trexCollision?this.trexCollision=!0:this.trexCollision=!1),this.jumpControl(),this.gravity(),this.localCollision(),this.draw()}}class d{constructor(t){this.parent=t,this.textFont="15px joystix",this.pos=[45,this.parent.WIDTH-260]}draw(){let t=`HIT:${("0000"+this.parent.local.score).slice(-4)} SCORE:${("0000"+s.b).slice(-4)}`;this.parent.CONTEXT.font=this.textFont,this.parent.CONTEXT.fillStyle="rgba(0,0,0,0.7)",this.parent.CONTEXT.fillText(t,this.pos[1],this.pos[0])}}class g{constructor(t){this.parent=t,this.gameOver=!1,this.gameOverLayout=new Image,this.gameOverLayout.src="./layout/gameover.png",this.gameOverDisplayed=!1,this.restardAuthorized=!1,this.animationSwitch=!1}check(){i.b&&(this.parent.renderedFrame%150==149&&(this.gameOverDisplayed=!0),this.gameOverDisplayed&&(this.draw(),this.setHotKey()))}restart(t){("Space"===t.code||t.touches)&&i.b&&this.gameOverDisplayed&&this.restardAuthorized&&(s.b=0,this.parent.restartRequested=!0,this.gameOverDisplayed=!1,this.restardAuthorized=!1,i.b=!1)}setHotKey(){this.parent.renderedFrame%150==149&&(this.restardAuthorized=!0),document.addEventListener("keydown",(()=>this.restart(event))),document.addEventListener("touchstart",(()=>this.restart(event)))}draw(){this.parent.CONTEXT.fillStyle="rgba(247,247,247,0.9)",this.parent.CONTEXT.fillRect(0,0,this.parent.WIDTH,this.parent.HEIGHT),this.parent.renderedFrame%65==64&&(this.animationSwitch=!this.animationSwitch),this.animationSwitch?this.parent.CONTEXT.drawImage(this.gameOverLayout,0,0,305,180,Math.round(this.parent.WIDTH/2-this.gameOverLayout.width/2),Math.round(this.parent.HEIGHT/2-this.gameOverLayout.height/2),305,180):this.parent.CONTEXT.drawImage(this.gameOverLayout,0,0,305,40,Math.round(this.parent.WIDTH/2-this.gameOverLayout.width/2),80,305,40)}}class c{constructor(t){this.parent=t,this.setEvent(),this.setCanvasSize()}setCanvasSize(){let t=0;t=.003921569*window.innerHeight>=.001666667*window.innerWidth?.001666667*window.innerWidth:.003921569*window.innerHeight,document.querySelector(".game > div").style.transform=`scale(${t})`}setEvent(){window.addEventListener("resize",(()=>this.setCanvasSize()))}}new class{constructor(){this.GRAVITY=4,this.FPS=58,this.DIFFICULTY=7,this.CANVAS=document.querySelector(".game > div > canvas"),this.CONTEXT=this.CANVAS.getContext("2d"),this.HEIGHT=250,this.WIDTH=600,this.CANVAS.height=this.HEIGHT,this.CANVAS.width=this.WIDTH,this.renderedFrame=0,this.collisionArray=[],this.interval,this.intervalStarted=!1,this.restartRequested=!1,this.debugLevel=0,this.debug=new h(this),this.collision=new n(this),this.background=new Image,this.background.src="./layout/background.png",this.ground=new a(this),this.cloud=[],this.cloud[0]=new r(this),this.cloud[1]=new r(this),this.cloud[2]=new r(this),this.cloud[3]=new r(this),this.cloud[4]=new r(this),this.cactus=[],this.cactus[0]=new o(this),this.cactus[1]=new o(this),this.cactus[2]=new o(this),this.cactus[3]=new o(this),this.trex=[],this.trex[0]=new l(this),this.trex[1]=new l(this),this.trex[2]=new l(this),this.trex[3]=new l(this),this.trex[4]=new l(this),this.player=new p(this),this.responsive=new c(this),this.score=new d(this),this.local=localStorage,this.gameOver=new g(this),this.setHotKey(),this.startInterval()}startInterval(){this.intervalStarted||(this.intervalStarted=!0,this.interval=setInterval((()=>{this.intervalLoop()}),1e3/this.FPS))}breakInterval(){clearInterval(this.interval),this.intervalStarted=!1}nextInterval(){this.intervalLoop()}setHotKey(){document.addEventListener("keydown",(t=>{36===t.which&&(this.startInterval(),i.b=!1),35===t.which&&this.breakInterval(),45===t.which&&(this.nextInterval(),i.b=!1)}))}intervalLoop(){t.b=s.b,this.debug.startPerfMeasurement(),this.renderedFrame++,this.CONTEXT.drawImage(this.background,0,0,600,250),this.ground.move(),this.renderedFrame%24==23?e(0,1)&&this.cloud[0].enable():this.renderedFrame%87==86?e(0,1)&&this.cloud[1].enable():this.renderedFrame%174==173?e(0,1)&&this.cloud[2].enable():this.renderedFrame%297==296?e(0,1)&&this.cloud[3].enable():this.renderedFrame%400==399&&e(0,1)&&this.cloud[4].enable(),this.cloud[0].move(),this.cloud[1].move(),this.cloud[2].move(),this.cloud[3].move(),this.cloud[4].move(),this.renderedFrame%49==48&&e(0,1)&&s.b>1&&this.cactus[0].enable(),this.renderedFrame%237==236&&e(0,1)&&s.b>1&&this.cactus[1].enable(),this.renderedFrame%463==462&&e(0,1)&&s.b>1&&this.cactus[2].enable(),this.cactus[0].move(),this.cactus[1].move(),this.cactus[2].move(),i.b||(this.renderedFrame%87==86?e(0,1)&&this.trex[0].enable():this.renderedFrame%163==162?e(0,1)&&this.trex[1].enable():this.renderedFrame%255==254?e(0,1)&&this.trex[2].enable():this.renderedFrame%578==577&&e(0,1)&&this.trex[3].enable()),this.trex[0].move(),this.trex[1].move(),this.trex[2].move(),this.trex[3].move(),this.player.move(),this.score.draw(),(s.b>this.local.score||!this.local.score)&&localStorage.setItem("score",s.b),this.gameOver.check(),this.debug.draw()}}})();