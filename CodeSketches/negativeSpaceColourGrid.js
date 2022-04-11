let r1 = 200;
let g1 = 200;
let b1 = 200;

let r2 = 200;
let g2 = 200;
let b2 = 200;

let r3 = 200;
let g3 = 200;
let b3 = 200;

let r4 = 200;
let g4 = 200;
let b4= 200;

let r5 = 200;
let g5 = 200;
let b5 = 200;

let r6 = 200;
let g6 = 200;
let b6 = 200;

let r7 = 200;
let g7 = 200;
let b7 = 200;



function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(20);
  
      if(mouseIsPressed){
    r1 = random(0,200);
    g1 = random(0,200);
    b1 = random(0,200);
  }
  
  fill(r1,g1,b1);
  rect(0,0,150,150);
  rect(150,0,150,150);
  rect(300,0,150,150);
  rect(450,0,150,150);
  rect(600,0,150,150);
  rect(750,0,150,150);
  rect(900,0,150,150);
  
  if(mouseIsPressed){
    r2 = random(0,200);
    g2 = random(0,200);
    b2 = random(0,200);
  }
  
  fill(r2,g2,b2);
  rect(0,150,150,150);
  rect(750,150,150,150);
  rect(900,150,150,150);
  
  if(mouseIsPressed){
    r3 = random(0,200);
    g3 = random(0,200);
    b3 = random(0,200);
  }
  
  fill(r3,g3,b3);
  rect(0,300,150,150);
  rect(300,300,150,150);
  rect(450,300,150,150);
  rect(600,300,150,150);
  rect(900,300,150,150);
  
  if(mouseIsPressed){
    r4 = random(0,200);
    g4 = random(0,200);
    b4 = random(0,200);
  }
  
  fill(r4,g4,b4);
  rect(0,450,150,150);
  rect(300,450,150,150);
  rect(450,450,150,150);
  rect(600,450,150,150);
  rect(900,450,150,150);
  
  if(mouseIsPressed){
    r5 = random(0,200);
    g5 = random(0,200);
    b5 = random(0,200);
  }
  
  fill(r5,g5,b5);
  rect(0,600,150,150);
  rect(150,600,150,150);
  rect(300,600,150,150);
  rect(450,600,150,150);
  rect(600,600,150,150);
  rect(900,600,150,150);
  
  if(mouseIsPressed){
    r6 = random(0,200);
    g6 = random(0,200);
    b6 = random(0,200);
  }
  
  fill(r6,g6,b6);
  rect(0,750,150,150);
  rect(750,750,150,150);
  rect(900,750,150,150);
  
  if(mouseIsPressed){
    r7 = random(0,200);
    g7 = random(0,200);
    b7 = random(0,200);
  }
  
  fill(r7,g7,b7);
  rect(0,900,150,150);
  rect(150,900,150,150);
  rect(300,900,150,150);
  rect(450,900,150,150);
  rect(600,900,150,150);
  rect(750,900,150,150);
  rect(900,900,150,150);
}