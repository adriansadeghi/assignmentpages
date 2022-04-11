function setup() {
  createCanvas(400, 400);
  background(40,40,40);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  
fill(220);
rect(80,100,50,140);
rect(80,93,227,50);
  
  rect(290,133,50,117);
  rect(80,200,210,50);
  
  translate(50);
  rotate(50);
  rect(270,-175,50,50);
}