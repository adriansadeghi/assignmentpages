let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
}

function draw() {
  background(0);
  translate(200,-300);
  fill(70,100,80);
  
  push();
  translate(50, 50);
  rotate(angle*.01);
  rect(0,0,800,800);
  pop();
  
  push();
  translate(125,125);
  rotate(angle*.01);
  rect(850,0,800,800);
  pop();
  
  push();
  translate(50, 150);
  rotate(angle*.01);
  rect(0,520,800,200);
  pop();
  
  push();
  rotate(angle*.01);
  rect(850,575,800,300);
  pop();
  
  push();
  rotate(angle*.01);
  rect(0,800,800,300);
  pop();
  
  push();
  rotate(angle*.01);
  rect(850,900,800,300);
  pop();
  
  angle = angle + 1;
  
  
  


}



  
  