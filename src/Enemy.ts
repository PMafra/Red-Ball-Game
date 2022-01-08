import { Circle } from "./Circle";

export class Enemy extends Circle {

    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    
    constructor (context: any, radius:number, color:string, x: number, y: number, xSpeed: number, ySpeed: number) {
        super({context, radius, color});
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw (x: number, y: number) {
        super.draw(x, y);
    }

    checkEnemyOutOfScreen (screenWidth: number, screenHeight: number) {
        if (this.x > screenWidth || this.x < 0) {
            this.xSpeed *= -1;
        }
        if (this.y > screenHeight || this.y < 0) {
            this.ySpeed *= -1;
        }   
    }
}