import { Game } from "./Game";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight; 
const context: CanvasRenderingContext2D = canvas.getContext('2d');
const game = new Game(canvas, screenWidth, screenHeight, context);

canvas.addEventListener('mousemove', (event) => {
    game.updatePlayerPosition(event);
})
window.addEventListener('resize', ():void => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight; 
    game.updateScreenSize(screenWidth, screenHeight);
})
game.start();
