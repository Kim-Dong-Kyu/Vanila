const body = document.querySelector("body");

function paintImage(imgNumber){
    const image = new Image();
    img.src =
    body.appendChild(image);
}

function genRandom (){
    const number = Math.floor(Math.random()* 3);
    return number;

}

function init () {
    const randomNumber = genRandom();
}

init();