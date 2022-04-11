let angle = 0;

function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(0);
  translate(500,500);
  
  push();
  
  rotate(angle*.5);
  fill(90,20,57);
  rect(0,0,100,100);
  pop();
  
  push();
  rotate(angle*0.5);
  fill(130,60,57);
  rect(-105,0,100,100);
  pop();
  
  push();
  rotate(angle*0.5);
  fill(170,90,57);
  rect(-210,0,100,100);
  pop();
  
  push();
  rotate(angle*0.5);
  fill(200,130,70);
  rect(105,-100,100,100);
  pop();
  
  push();
  rotate(angle*.5);
  fill(20,130,70);
  rect(105,-205,100,100);
  pop();
  
  push();
  rotate(angle*0.25);
  fill(20,130,70);
  rect(-210,-305,100,300);
  pop();
  
  push();
  rotate(angle*.25);
  fill(60,230,200);
  rect(-105,-305,100,100);
  pop();
  
  push();
  rotate(angle*.25);
  fill(60,130,140);
  rect(0,-305,100,100);
  pop();
  
  angle = angle + .05
}