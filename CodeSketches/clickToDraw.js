function setup() {
  createCanvas(400, 400);
  fill(250,170,120);
  background(250,30,120);
}

function draw() {
  if (mouseIsPressed) {
      stroke(255);
  fill(128);
  ellipse(mouseX, mouseY, 100, 100);
  }
}

