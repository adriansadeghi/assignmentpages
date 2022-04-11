let angle = 0;

function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  background(20);
  translate(500,500);
  

  rotate(angle*1.5);
  ellipse(20,0,50,50);
  ellipse(40,-10,50,50);
  ellipse(60,-20,50,50);
  ellipse(80,-30,50,50);
  
  ellipse (100,-100,50,50);
  ellipse(120,-90,50,50);
  ellipse(140,-80,50,50);
  
  angle = angle + .01;
  
}
