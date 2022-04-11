
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(0);
  translate(500,500);
  
  if(mouseIsPressed){ 
  fill("pink");
  rotate(340);
  } else{
    fill("green");
  }

push();
rect(0,0,100,100)
rect(100,0,100,100)
rect(150,0,120,100)
rect(200,-100,100,100)
rect(200,-200,100,100)
rect(150,-300,120,100)
rect(100,-300,100,100)
rect(0,-300,100,100)
rect(-100,-300,100,400)
pop();

angle = angle + 2
  
}