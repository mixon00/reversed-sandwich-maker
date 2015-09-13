//get canvas canvas
var canvas = document.querySelector('#game');
canvas.width = 800;
canvas.height = 480;

//set ctx
var ctx = canvas.getContext('2d');

//run game when all is loaded
document.addEventListener('DOMContentLoaded', function(){
    State.set(Menu);
    Game.run();
}, false);
