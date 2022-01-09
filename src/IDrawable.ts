export interface IDrawable {
    context: any;
    radius: number;
    color: string;
    x: number;
    y: number;

    draw(x: number, y: number): void;
}