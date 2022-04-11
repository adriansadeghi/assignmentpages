function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES)
  noStroke()
}

function draw() {
  background(220);
  push(); //start translate!
  translate(100,50);
  rect(0,0,100,300);
  pop(); //stops translation process
  
  translate(100,50);
  rect(0,0,200,80);
  
  translate(0,50);
  rect(0,70,200,60);
  
  translate(0,50);
  rect(0,120,200,80);

}