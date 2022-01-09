import { Circle } from "./Circle";

export class Player extends Circle {

    constructor (context: any, radius:number, color:string, x: number, y: number) {
        super(context, radius, color, x, y);
    }

    draw(x: number, y: number){
        super.draw(x, y);
    }

    increasePlayerSize () {
        this.radius += 1;
    }
}