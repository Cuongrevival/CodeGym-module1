var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext("2d");
let isGameOver = false;
let car = {
    x: 150,
    y: 400,
    width: 40,
    height: 100,
    image: new Image()
}
car.image.src = 'car1.jpg';
let obstacles = [
    {x: 150, y: 100, height: 20, width: 20},
    {x: 100, y: 150, height: 20, width: 20},
];



let score = 0;
let coins = Array(5).fill().map(() => respawnCoin());

setInterval(start, 100);

function start() {
    if (isGameOver) {
        return;
    }
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.drawImage(car.image, car.x, car.y, car.width, car.height);
    touchCanvas();
    ctx.fillStyle = "green";
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    });
    touchObstacle();
    ctx.fillStyle = "yellow";
    coins.forEach(coin => {
        ctx.fillRect(coin.x, coin.y, coin.width, coin.height);
    });
    getCoins();

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}

document.addEventListener('keydown', key => {
    switch (key.keyCode) {
        case 37:
            if (car.x >= 0)
                car.x -= 5;
            break;
        case 38:
            if (car.y >= 0)
                car.y -= 5;
            break;
        case 39:
            if (car.x + car.width < myCanvas.width) {
                car.x += 5;
            }
            break;

        case 40:
            if (car.y + car.height < myCanvas.height) {
                car.y += 5;
            }
            break;
    }
});

function touchCanvas() {
    if (car.x <= 0 ||
        car.x + car.width >= myCanvas.width ||
        car.y + car.height >= myCanvas.height ||
        car.y <= 0) {
        isGameOver = true;
        alert('Bạn thua')
    }
}

function touchObstacle() {
    obstacles.forEach(obstacle => {
        if (car.x < obstacle.x + obstacle.width &&
            car.x + car.width > obstacle.x &&
            car.y < obstacle.y + obstacle.height &&
            car.y + car.height > obstacle.y) {
            isGameOver = true;
            alert('Bạn thua')
        }

    });
}

function getCoins() {

    coins.filter(coin => {
        if (car.x < coin.x + coin.width &&
            car.x + car.width > coin.x &&
            car.y < coin.y + coin.height &&
            car.y + car.height > coin.y) {
            score++;
            console.log('Coin collected');
            return false;
        }
        return true;
    })
}
function respawnCoin() {
    return {
        x: Math.random() * (myCanvas.width - 20),
        y: Math.random() * (myCanvas.height - 20),
        width: 20,
        height: 20
    };

}
function restartGame() {
    car.x = 150;
    car.y = 400;
    isGameOver = false;
    coins = Array(5).fill().map(() => respawnCoin());
    score = 0;
}
