let imgObj = null;
imgObj = document.getElementById('image');

function imgLoad() {
    imgObj = document.getElementById('image');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';

}

function imgLoad2() {

    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = imgLoad;