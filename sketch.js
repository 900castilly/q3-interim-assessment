var x = 300;
var y = 275;
var speed = 8;

function setup() {
  createCanvas(547,370);
  background(0);
}
function draw(){
background(0);
display();
move();
bounce();

}

function display(){
    fill(47,240,40)
    ellipse(x,200,50,50)
}
function move(){
    x = x + speed;
}

function bounce(){
    if(x > 540 || x < 0){
    speedx = -speedx;
}
}