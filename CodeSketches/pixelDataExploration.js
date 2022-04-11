function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);

  img = createImage(25, 10);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let c = color(random(0,140), random(0,100), random(0,85));
      img.set(x, y, c);
    }
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}