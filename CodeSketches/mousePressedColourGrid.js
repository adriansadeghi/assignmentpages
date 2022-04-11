let r1 = 255;
let g1 = 255;
let b1 = 255;

let r2 = 255;
let g2 = 255;
let b2 = 255;

let r3 = 255;
let g3 = 255;
let b3 = 255;

let r4 = 255;
let g4 = 255;
let b4 = 255;

let r5 = 255;
let g5 = 255;
let b5 = 255;

let r6 = 255;
let g6 = 255;
let b6 = 255;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
}

function draw() {
  background(0);
  translate(500, 500);
  
    if(mouseIsPressed){
    r1 = random(0,256);
    g1 = random(0,256);
    b1 = random(0,256);
  }
  
  push();
  fill(r1, g1, b1);
  rect(-420,0,200,200);
  rect(-210,0,200,200);
  rect(0,0,200,200);
  rect(210,0,200,200);
  rect(420,0,200,200);
  pop();
  
      if(mouseIsPressed){
    r2 = random(0,256);
    g2 = random(0,256);
    b2 = random(0,256);
  }
  
  push();
  fill(r2, g2, b2);
  rect(-420,210,200,200);
  rect(-210,210,200,200);
  rect(0,210,200,200);
  rect(210,210,200,200);
  rect(420,210,200,200);
  pop();
  
      if(mouseIsPressed){
    r3 = random(0,256);
    g3 = random(0,256);
    b3 = random(0,256);
  }
  
  push();
  fill(r3, g3, b3);
  rect(-420,210,200,200);
  rect(-210,210,200,200);
  rect(0,210,200,200);
  rect(210,210,200,200);
  rect(420,210,200,200);
  pop();
  
        if(mouseIsPressed){
    r4 = random(0,256);
    g4 = random(0,256);
    b4 = random(0,256);
  }
  
  push();
  fill(r4, g4, b4);
  rect(-420,-210,200,200);
  rect(-210,-210,200,200);
  rect(0,-210,200,200);
  rect(210,-210,200,200);
  rect(420,-210,200,200);
  pop();
  
        if(mouseIsPressed){
    r4 = random(0,256);
    g4 = random(0,256);
    b4 = random(0,256);
  }
  
  push();
  fill(r5, g5, b5);
  rect(-420,-420,200,200);
  rect(-210,-420,200,200);
  rect(0,-420,200,200);
  rect(210,-420,200,200);
  rect(420,-420,200,200);
  pop();
  
        if(mouseIsPressed){
    r5 = random(0,256);
    g5 = random(0,256);
    b5 = random(0,256);
  }
  
  push();
  fill(r6, g6, b6);
  rect(-420,420,200,200);
  rect(-210,420,200,200);
  rect(0,420,200,200);
  rect(210,420,200,200);
  rect(420,420,200,200);
  pop();
  
          if(mouseIsPressed){
    r6 = random(0,256);
    g6 = random(0,256);
    b6 = random(0,256);
  }

}