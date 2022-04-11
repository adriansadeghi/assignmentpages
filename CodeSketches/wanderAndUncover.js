function setup() {
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
  background(0);
  
  push();
  fill("green");
  translate(500,500);
  rect(-190,100,400,100);
  ellipse(200, 150,100,100);
  rect(150,-150,100,300);
  rect(-190,-200,400,100);
  ellipse(200, -150,100,100);
  rect(-200,-200,100,400);
  pop();
  
  push();
  translate(50,50);
  rect(mouseX*2,mouseY*3,300,300);
  pop();
  
  push();
  translate(-50,-50);
  rect(mouseX*3,mouseY*5,300,300);
  pop();
  
  push();
  translate(-1000,-500);
  rect(mouseX*3,mouseY*5,300,300);
  pop();
  
  push();
  translate(-800,-600);
  rect(mouseX*5,mouseY*2,300,300);
  pop();
  
  push();
  translate(800,600);
  rect(mouseX,mouseY,300,300);
  pop();
  
  push();
  translate(100,600);
  rect(mouseX,mouseY,300,300);
  pop();
  
  push();
  translate(200,600);
  rect(mouseX*3,mouseY*4,300,300);
  pop();
}