import { Circle } from "./Circle";

export class Player extends Circle {

    constructor (context: any, radius:number, color:string) {
        super({context, radius, color})
    }

    draw = (x: number, y: number) => {
        this.draw(x, y);
    }
}