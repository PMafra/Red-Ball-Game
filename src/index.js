const canvas = document.querySelector('#canvas');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        canvas.width = screenWidth;
        canvas.height = screenHeight;
        const context = canvas.getContext('2d');
        let gameLoopInterval;
        let ballSizeInterval;
        let enemyInterval;
        let scoreInterval;
        let score = 0;

        const FPS = 60;

        let player = {
            name: 'blue ball',
            x: screenWidth / 2,
            y: screenHeight / 2,
            color: 'blue',
            radius: 25,
        }
        let enemy = {
            name: 'red ball',
            x: 0,
            y: 0,
            color: 'red',
            radius: 15,
            xSpeed: 5,
            ySpeed: 5,
        }
        let enemies = [enemy];

        const drawCircle = ({context, color,x,y,radius,startAngle,endAngle}) => {
            context.beginPath();
            context.arc(x,y,radius,startAngle,endAngle, true);
            context.fillStyle = color;
            context.fill();
        }

        const clearScreen = () => {
            context.clearRect(0,0,canvas.width,canvas.height);
        }

        const updatePlayerPosition = (event) => {
            player.x = event.clientX;
            player.y = event.clientY;
        }

        const drawPlayer = () => {
            drawCircle({context,color: player.color, x: player.x - 10,y: player.y - 10,radius: player.radius,startAngle: 0, endAngle: 2*Math.PI});
        }

        const increasePlayerSize = () => {
            if (!ballSizeInterval) {
                ballSizeInterval = setInterval(() => {
                    player.radius += 1
                },3000)
            }
        }

        const drawEnemy = (enemyInArr) => {
                drawCircle({context,color: enemyInArr.color, x: enemyInArr.x - 10,y: enemyInArr.y - 10,radius: enemyInArr.radius,startAngle: 0, endAngle: 2*Math.PI});
        }
        const moveEnemy = () => {
            enemies.forEach((enemyInArr) => {
                drawEnemy(enemyInArr);
                updateEnemyPosition(enemyInArr);
                checkForColision(enemyInArr);
                checkEnemyOutOfScreen(enemyInArr);
            })
        }

        const updateEnemyPosition = (enemyInArr) => {
                enemyInArr.x += enemyInArr.xSpeed;
                enemyInArr.y += enemyInArr.ySpeed;
        }

        const checkForColision = (enemyInArr) => {
                const distance = Math.sqrt(Math.pow(player.x - enemyInArr.x, 2) + Math.pow(player.y - enemyInArr.y, 2));
                if (distance <= (enemyInArr.radius + player.radius)) {
                    endGame();
                }
        }

        const checkEnemyOutOfScreen = (enemyInArr) => {
                if (enemyInArr.x > screenWidth || enemyInArr.x < 0) {
                    enemyInArr.xSpeed *= -1;
                }
                if (enemyInArr.y > screenHeight || enemyInArr.y < 0) {
                    enemyInArr.ySpeed *= -1;
                }   
        }

        const getRandomInt = (max, min) => {
            const n = Math.ceil(Math.random() * max);
            if (n < min) return min;
            return n;
        }

        const addNewEnemy = () => {
            if (!enemyInterval) {
                enemyInterval = setInterval(() => {
                    enemies.push({
                        name: 'red ball',
                        x: 0,
                        y: 0,
                        color: 'red',
                        radius: getRandomInt(20, 5),
                        xSpeed: getRandomInt(5, 1),
                        ySpeed: getRandomInt(5, 1),
                     });
                }, 3000)
            }
        }

        const increaseScore = () => {
            if (!scoreInterval) {
                scoreInterval = setInterval(() => {
                    score += 5;
                    document.querySelector('.score').innerHTML = score;
                }, 3000)
            }
        }

        const gameLoop = () => {
            clearScreen();
            addNewEnemy();
            drawPlayer();
            increasePlayerSize();
            moveEnemy();
            increaseScore();
        }

        const resetGame = () => {
            scoreInterval = '';
            enemyInterval = '';
            ballSizeInterval = '';
            score = 0;
            document.querySelector('.score').innerHTML = score;
            enemies = [];
            enemies.push({
                name: 'red ball',
                x: 0,
                y: 0,
                color: 'red',
                radius: getRandomInt(20, 5),
                xSpeed: getRandomInt(5, 1),
                ySpeed: getRandomInt(5, 1),
            });
            startGame();
        }

        const endGame = () => {
            clearInterval(gameLoopInterval);
            clearInterval(scoreInterval);
            clearInterval(enemyInterval);
            clearInterval(ballSizeInterval);
            clearScreen();
            const isAgain = confirm(`You lost. \nScore: ${score} \nAgain?`);
            if (isAgain) {
                resetGame();
            }
        }

        const startGame = () => {
            gameLoopInterval = setInterval(() => {
                gameLoop();
            }, 1000/FPS);
        }

        startGame();