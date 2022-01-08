import { Game } from "./Game";

const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight; 
const context = canvas.getContext('2d');
const game = new Game(canvas, screenWidth, screenHeight, context);

canvas.addEventListener('mousemove', (event) => {
    game.updatePlayerPosition(event);
})
game.start();

