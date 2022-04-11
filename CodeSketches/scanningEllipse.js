var x = 0;
var y = 100;
function setup() {
  createCanvas(1000, 1000);
  frameRate(30);
}

function draw() {
  background(0);
  
  if(x <= 1000){
  ellipse(x, 120,16, y);
  y = y - 1
  x = x + 1
  } else{
    x = 0;
    y = 100;
    ellipse(x, 120,16, y);
    y = y - 1
    x = x + 1
  }
  
}