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
    {x: 100, y: 200, width: 20, height: 20},
    {x: 200, y: 100, width: 20, height: 20},
]

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
                break;
            }
    }
});

function touchCanvas() {
    if ( car.x <= 0 ||
        car.x + car.width >= myCanvas.width ||
        car.y + car.height >= myCanvas.height ||
        car.y <= 0) {
        isGameOver = true;
        alert('Bạn thua')
    }
}

function touchObstacle() {
    obstacles.forEach(obstacle => {
        if (car.x <obstacle.x + obstacle.width &&
            car.x + car.width > obstacle.x &&
            car.y < obstacle.y + obstacle.height &&
            car.y + car.height > obstacle.y) {
            isGameOver = true;
            alert('Bạn thua')
        }

    });
}
