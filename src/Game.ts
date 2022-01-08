import { Enemy } from "./Enemy";
import { Player } from "./Player";

export class Game {
    
    canvas: any;
    screenWidth: number;
    screenHeight: number;
    context: any;

    gameLoopInterval: any;
    ballSizeInterval: any;
    enemyInterval: any;
    scoreInterval: any;

    score: number;
    FPS: number;

    player: Player;
    enemies: Enemy[];

    constructor (canvas: any, screenWidth: number, screenHeight: number, context: any) {
        this.canvas = canvas;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.context = context;

        this.gameLoopInterval;
        this.ballSizeInterval;
        this.enemyInterval;
        this.scoreInterval;

        this.score = 0;
        this.FPS = 60;

        this.player;
        this.enemies;

        this.setupGame();
        this.setupPlayer();
        this.setupFirstEnemy();
    }

    setupGame () {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    setupPlayer () {
        this.player = new Player(this.context, 25, 'blue', this.screenWidth/2, this.screenHeight/2);
    }
    setupFirstEnemy () {
        this.enemies = [new Enemy(this.context, 15, 'red', 10, 10, 5, 5)];
    }

    moveEnemy () {
        this.enemies.forEach((enemyInArr) => {
            enemyInArr.draw(enemyInArr.x, enemyInArr.y);
            enemyInArr.x += enemyInArr.xSpeed;
            enemyInArr.y += enemyInArr.ySpeed;
            //checkForColision(enemyInArr);
            enemyInArr.checkEnemyOutOfScreen(this.screenWidth, this.screenHeight);
        })
    }

    gameLoop () {
        this.clearScreen();
        //addNewEnemy();
        this.player.draw(this.player.x, this.player.y)
        //increasePlayerSize();
        this.moveEnemy();
        //increaseScore();
    }

    updatePlayerPosition (event: any) {
        this.player.x = event.clientX;
        this.player.y = event.clientY;
    }

    clearScreen () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    start () {
        this.gameLoopInterval = setInterval(() => {
            this.gameLoop();
        }, 1000/this.FPS);
    }
    
}