function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);

  ellipse(x, y, 30, 30);

  let d = dist(mouseX, mouseY, x, y);

  if (d < 100) {
   
    x += (x - mouseX) * 0.05;
    y += (y - mouseY) * 0.05;
  } else {
    //return to center 
    x += (width / 2 - x) * 0.05;
    y += (height / 2 - y) * 0.05;
  }
}