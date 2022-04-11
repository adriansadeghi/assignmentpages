function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(70,40,60);
  
  translate(50,50);
  rotate(50);
  
  fill(60,90)
  rect(70,0,80,100);
  rect(150,30,140,100);
  rect(190,-40,120,100);
  rect(20,-40,120,100);
  rect(250,-40,100,100);
  rect(250,-120,100,100);
  rect(40,-40,120,160);
}