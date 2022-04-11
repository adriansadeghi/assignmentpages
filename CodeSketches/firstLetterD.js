function setup() {
  createCanvas(400, 400);
  background(40,40,40);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  
fill(220);
rect(100,100,50,200);
rect(100,100,168,50);
  
  rect(250,140,50,160);
  rect(100,285,200,50);
  
  translate(50);
  rotate(50);
  rect(250,-140,50,50);
    
}