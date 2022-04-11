let angle = 0;
let r1 = 255;
let g1 = 255;
let b1 = 255;
let r2 = 0;
let g2 = 0;
let g3 = 0;

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  
  
}

function draw() {
  background(0);
  
  if(mouseIsPressed){
    r1 = random(0,256);
    g1 = random(0,256);
    b1 = random(0,256);
  }
  
  translate(500,500);
  
  push();
  fill(r1, g1, b1);
  rotate(angle);
  rect(-300,0,350,80);
  rect(-300,-300,350,80);
  rect(-300,-300,100,380);
  rect(30,-250,100,300);
  pop();
  
  push();
  fill(r1, g1, b1);
  rotate(angle*3);
  rect(-700,0,350,80);
  rect(-700,-300,350,80);
  rect(-700,-300,100,380);
  rect(-420,-250,100,300);
  pop();
  
  push();
  fill(r1, g1, b1);
  rotate(angle*.5);
  rect(400,0,350,80);
  rect(400,-300,350,80);
  rect(400,-300,100,380);
  pop();
  

  angle = angle + .02
}