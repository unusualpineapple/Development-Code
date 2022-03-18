console.log("00hello");

// ALERT
function linuxsupport(pengu){
    alert("This game is supported on Linux");
}


var games = 0;
var shoppingCart = document.querySelector("#count");

// BOUGHT ONE
function boughtone() {
    games++;
    shoppingCart.innerText = games;
    console.log (games);
    console.log (shoppingCart);
}


var gameImage = document.querySelector("#changeimage");

console.log(gameImage);

// CHANGE PIC
function pickStone() {
    gameImage.src = "images/stonepunk.png";
}

function pickNinjas() {
    gameImage.src = "images/pixel-ninjas-2.png";
}