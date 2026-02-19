var x;
var y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);

  ellipse(x, y, 30, 30);

  let d = dist(mouseX, mouseY, x, y);
// makes ellipse move away from mouse 
  if (d < 100) {
    x = x + (x - mouseX) * 0.05;
    y = y + (y - mouseY) * 0.05;
  }
    
}