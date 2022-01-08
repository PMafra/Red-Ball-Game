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

        this.setupGame();
        this.setupPlayer();
    }

    setupGame () {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    setupPlayer () {
        this.player = new Player(this.context, 25, 'blue', this.screenWidth/2, this.screenHeight/2);
    }

    drawPlayer () {

    }

    gameLoop () {
        this.clearScreen();
        //addNewEnemy();
        this.player.draw(this.player.x, this.player.y)
        //increasePlayerSize();
        //moveEnemy();
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