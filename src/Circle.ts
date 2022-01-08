export abstract class Circle {

    context: any;
    radius: number;
    color: string;

    constructor ({context, radius, color}: CircleInterface) {
        this.context = context;
        this.radius = radius;
        this.color = color;
    }

    draw = (x: number,y: number) => {
        this.context.beginPath();
        this.context.arc(x,y,this.radius,0,2*Math.PI, true);
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}

interface CircleInterface {
    color: string;
    radius: number;
    context: any;
}