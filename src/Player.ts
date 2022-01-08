import { Circle } from "./Circle";

export class Player extends Circle {

    x: number;
    y: number;

    constructor (context: any, radius:number, color:string, x: number, y: number) {
        super({context, radius, color});
        this.x = x;
        this.y = y;
    }

    draw(x: number, y: number){
        super.draw(x, y);
    }
}