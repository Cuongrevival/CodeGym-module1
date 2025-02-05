function upArrow() {
    let elements = document.getElementById('nobita');
    elements.style.top = parseInt(elements.style.top) - 10 + 'px';
}

function downArrow() {
    let elements = document.getElementById('nobita');
    elements.style.top = parseInt(elements.style.top) + 10 + 'px';
}

function rightArrow() {
    let elements = document.getElementById('nobita');
    elements.style.left = parseInt(elements.style.left) + 10 + 'px';
}

function leftArrow() {
    let elements = document.getElementById('nobita');
    elements.style.left = parseInt(elements.style.left) - 10 + 'px';
}

function moveImg(evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 38:
            upArrow();
            break;
        case 40:
            downArrow();
            break;
        case 39:
            rightArrow();
            break;
        case 37:
            leftArrow();
            break;
    }
}
function ready(){
    let elements = document.getElementById('nobita');
    setInterval(() => {
        if (parseInt(elements.style.left) >= window.innerWidth) {
            elements.style.left = '0px';
        }
        rightArrow();
    }, 100);
    window.addEventListener('keydown', moveImg);
}