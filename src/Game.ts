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

    setupGame = () => {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    setupPlayer = () => {
        this.player = new Player(this.context, 25, 'blue');
    }

    gameLoop = () => {
        console.log('oi')
    }

    start = () => {
        this.gameLoopInterval = setInterval(() => {
            this.gameLoop();
        }, 1000/this.FPS);
    }
    
}