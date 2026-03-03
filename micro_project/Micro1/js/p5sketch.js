let playerOpacity = 0;
let systemOpacity = 0;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30);

  // Player message
  push();
  translate(width / 2, height - 150);
  fill(255, playerOpacity);
  textSize(16);
  text("I am trying to speak.", 0, 0);
  pop();

  if (playerOpacity > 0) {
    playerOpacity -= 12;  // fades fast
  }

  // System message
  push();
  translate(width / 2, 150);
  scale(2);
  fill(255, 0, 0, systemOpacity);
  textSize(32);
  text("I SPEAK LOUDER", 0, 0);
  pop();

  if (systemOpacity > 0) {
    systemOpacity -= 4;  // fades slower
  }
}

function keyPressed() {
  playerOpacity = 255;
  systemOpacity = 255;
}