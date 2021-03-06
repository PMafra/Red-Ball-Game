import { IDrawable } from "./IDrawable";

export abstract class Circle implements IDrawable{

    context: CanvasRenderingContext2D;
    radius: number;
    color: string;
    x: number;
    y: number;

    constructor (context: CanvasRenderingContext2D, radius: number, color: string, x: number, y: number) {
        this.context = context;
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;

    }

    draw(x: number,y: number) {
        this.context.beginPath();
        this.context.arc(x,y,this.radius,0,2*Math.PI, true);
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}
