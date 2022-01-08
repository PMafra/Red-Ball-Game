export class Circle {

    context: any;
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor ({context, x, y, radius, color}: CircleInterface) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw = ({color,x,y,radius,startAngle,endAngle}: ArcInterface) => {
        this.context.beginPath();
        this.context.arc(x,y,radius,startAngle,endAngle, true);
        this.context.fillStyle = color;
        this.context.fill();
    }
}

interface CircleInterface {
    color: string;
    x: number;
    y: number;
    radius: number;
    context: any;
}

interface ArcInterface extends CircleInterface {
    startAngle: number;
    endAngle: number;
}