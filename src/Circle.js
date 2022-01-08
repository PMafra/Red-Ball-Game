export default class Circle {
    constructor (context, x, y, radius, color) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw = ({color,x,y,radius,startAngle,endAngle}) => {
        this.context.beginPath();
        this.context.arc(x,y,radius,startAngle,endAngle, true);
        this.context.fillStyle = color;
        this.context.fill();
    }
}