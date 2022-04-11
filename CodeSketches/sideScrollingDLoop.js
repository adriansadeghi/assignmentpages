var x = 0;
function setup() {
  createCanvas(1000, 1000);
  frameRate(30);
  strokeWeight(4)
}

function draw() {
  background(45);
  
  fill("lime");
  if(x <= 1000){
  ellipse(x-10, 120,16, 120);
  ellipse(x-20, 120,16, 120);
  ellipse(x-30, 120,16, 120);
  ellipse(x-40, 120,16, 120);
  ellipse(x-50, 120,16, 120);
  ellipse(x-60, 120,16, 120);
  ellipse(x-70, 120, 16, 120);
  ellipse(x-80, 120, 16, 120);
  ellipse(x-90, 120, 16, 120);
  ellipse(x-100,120, 16, 120);
  ellipse(x,-110,120, 16, 120);
  ellipse(x-120, 120,16, 120);
  ellipse(x-130, 120,16, 120);
  ellipse(x-140, 120,16, 120);
  ellipse(x-150, 120,16, 120);
  ellipse(x-160, 120,16, 120);
  ellipse(x-170, 120,16, 120);
  ellipse(x-180, 120,16, 120);
  ellipse(x-190, 120,16, 120);
  ellipse(x-200, 120,16, 120);
  ellipse(x-210, 120,16, 120);
  ellipse(x-220, 120,16, 120);
  ellipse(x-230, 120,16, 120);
  ellipse(x-240, 120,16, 120);
  ellipse(x-250, 120,16, 120);
  ellipse(x-260, 120,16, 120);
  ellipse(x-270, 120, 16, 120);
  ellipse(x-280, 120, 16, 120);
  ellipse(x-290, 120, 16, 120);
  ellipse(x-300,120, 16, 120);
  ellipse(x,-310,120, 16, 120);
 
    
    
    
  ellipse(x-10, 420,16, 120);
  ellipse(x-20, 420,16, 120);
  ellipse(x-30, 420,16, 120);
  ellipse(x-40, 420,16, 120);
  ellipse(x-50, 420,16, 120);
  ellipse(x-60, 420,16, 120);
  ellipse(x-70, 420, 16, 120);
  ellipse(x-80, 420, 16, 120);
  ellipse(x-90, 420, 16, 120);
  ellipse(x-100,420, 16, 120);
  ellipse(x,-110,420, 16, 120);
  ellipse(x-120, 420,16, 120);
  ellipse(x-130, 420,16, 120);
  ellipse(x-140, 420,16, 120);
  ellipse(x-150, 420,16, 120);
  ellipse(x-160, 420,16, 120);
  ellipse(x-170, 420,16, 120);
  ellipse(x-180, 420,16, 120);
  ellipse(x-190, 420,16, 120);
  ellipse(x-200, 420,16, 120);
  ellipse(x-210, 420,16, 120);
  ellipse(x-220, 420,16, 120);
  ellipse(x-230, 420,16, 120);
  ellipse(x-240, 420,16, 120);
  ellipse(x-250, 420,16, 120);
  ellipse(x-260, 420,16, 120);
  ellipse(x-270, 420, 16, 120);
  ellipse(x-280, 420, 16, 120);
  ellipse(x-290, 420, 16, 120);
  ellipse(x-300,420, 16, 120);
  ellipse(x,-310,420, 16, 120);
    
  ellipse(x-300,270, 16, 420);
  ellipse(x-5,380,16,200);
  ellipse(x-5,160,16,200);
  ellipse(x+5,380,16,200);
  ellipse(x+5,160,16,200);
  ellipse(x+10,260,16,200);
  ellipse(x+15,260,16,200);

  x = x + 3
  } else{
    x = 0;
    ellipse(x, 120,16, 120);
    x = x + 3
  }
  
}