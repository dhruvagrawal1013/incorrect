var ship=ship,ship2,ship3,ship4;
var sea= sea ;


function preload(){
shipImg = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
sea=createSprite(300,300);
sea.addImage("sea",seaImg);
sea.scale=0.5;



}

function draw() {
  background("pink");
 
}