import { Enemy } from "./Enemy";
import { Player } from "./Player";

export class Game {
    
    canvas: any;
    screenWidth: number;
    screenHeight: number;
    context: any;

    gameLoopInterval: any;
    turnInterval: any;

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
        this.turnInterval;

        this.score = 0;
        this.FPS = 60;

        this.player;
        this.enemies;

        this.setupGame();
        this.setupPlayer();
        this.setupFirstEnemy();
    }

    private setupGame () {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    private setupPlayer () {
        this.player = new Player(this.context, 25, 'blue', this.screenWidth/2, this.screenHeight/2);
    }
    private setupFirstEnemy () {
        this.enemies = [new Enemy(this.context, 15, 'red', 0, 0, 5, 5)];
    }

    reset () {
        this.turnInterval = '';
        this.score = 0;
        document.querySelector('.score').innerHTML = String(this.score);
        this.setupFirstEnemy();
        this.start();
    }

    end () {
        clearInterval(this.gameLoopInterval);
        clearInterval(this.turnInterval);
        this.clearScreen();
        const isAgain = confirm(`You lost. \nScore: ${this.score} \nAgain?`);
        if (isAgain) {
            this.reset();
        }
    }

    checkForColision (enemyInArr: Enemy) {
        const distance = Math.sqrt(Math.pow(this.player.x - enemyInArr.x, 2) + Math.pow(this.player.y - enemyInArr.y, 2));
        if (distance <= (enemyInArr.radius + this.player.radius)) {
            this.end();
        }
    }

    moveEnemy () {
        this.enemies.forEach((enemyInArr) => {
            enemyInArr.draw(enemyInArr.x, enemyInArr.y);
            enemyInArr.x += enemyInArr.xSpeed;
            enemyInArr.y += enemyInArr.ySpeed;
            this.checkForColision(enemyInArr);
            enemyInArr.checkEnemyOutOfScreen(this.screenWidth, this.screenHeight);
        })
    }

    increaseScore () {
        this.score += 5;
        document.querySelector('.score').innerHTML = String(this.score);
    }

    turn () {
        if (!this.turnInterval) {
            this.turnInterval = setInterval(() => {
                this.player.increasePlayerSize();
                this.increaseScore();
                this.addNewEnemy();
            }, 3000)
        }
    }

    getRandomInt (max: number, min: number) {
        const n = Math.ceil(Math.random() * max);
        if (n < min) return min;
        return n;
    }

    addNewEnemy () {
        this.enemies.push(new Enemy(this.context, this.getRandomInt(20, 5), 'red', 0, 0, this.getRandomInt(5, 1), this.getRandomInt(5, 1)));
    }

    gameLoop () {
        this.clearScreen();
        this.player.draw(this.player.x, this.player.y)
        this.moveEnemy();
        this.turn();
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