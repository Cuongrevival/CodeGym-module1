function upArrow() {
    let elements = document.getElementById('nobita');
    elements.style.top = parseInt(elements.style.top) + 10 + 'px';
}

function downArrow() {
    let elements = document.getElementById('nobita');
    elements.style.top = parseInt(elements.style.top) - 10 + 'px';
}

function rightArrow() {
    let elements = document.getElementById('nobita');
    elements.style.left = parseInt(elements.style.left) - 10 + 'px';
}

function leftArrow() {
    let elements = document.getElementById('nobita');
    elements.style.left = parseInt(elements.style.left) + 10 + 'px';
}

function moveImg(evt) {
    switch (evt.keyCode) {
        case 39:
            upArrow();
            break;
        case 37:
            downArrow();
            break;
        case 38:
            rightArrow();
            break;
        case 40:
            leftArrow();
            break;
    }
}
function Ready(){
    window.addEventListener('keydown', moveImg);
}