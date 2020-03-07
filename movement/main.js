let box,
    speed = 10;

window.onkeydown = e => {
    box = document.getElementById('box');

    switch(e.code){
        case 'ArrowRight':
            box.style.left = (box.offsetLeft + speed) + 'px';
            break;
        case 'ArrowLeft':
            box.style.left = (parseInt(box.offsetLeft) - speed) + 'px';
            break;
    }
};