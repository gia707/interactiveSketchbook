 function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  
  fill('white');
 square(100, 100, 200);

  
  constrainedMouseX = constrain(mouseX, 110, 290);
  constrainedMouseY = constrain(mouseY, 110, 290);
  
  
fill('blue');
  circle(constrainedMouseX, constrainedMouseY, 20)
}
