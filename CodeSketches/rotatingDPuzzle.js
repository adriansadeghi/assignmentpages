let angle = 0

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);
  translate(500,500)
  fill("pink");
  
  push();
  rotate(angle);
  rect(-160,0,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(-80,0,75,75);
  pop();
  
  push();
  rotate(angle*3);
  rect(0,0,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(80,0,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(160,-80,75,75);
  pop();
  
  push();
  rotate(angle*3);
  rect(160,-160,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(160,-240,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(80,-320,75,75);
  pop();
  
  push();
  rotate(angle*3);
  rect(0,-320,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(-80,-320,75,75);
  pop();

  push();
  rotate(angle);
  rect(-160,-320,75,75);
  pop();
  
  push();
  rotate(angle);
  rect(-160,-240,75,165);
  pop();
  
  push();
  rotate(angle);
  rect(-160,-80,75,165);
  pop();

  push();
  rotate(angle);
  rect(140,-300,50,50);
  pop();
  
  push();
  rotate(angle);
  rect(140,-20,50,50);
  pop();

angle = angle + 1
}