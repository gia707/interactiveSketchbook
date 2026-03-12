let playerOpacity = 0;
let playerSize = 16;
let systemMessages = [];
let breakThrough = false;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  background(30); // original background in setup
}

function draw() {

  if (!breakThrough) {

    background(30);

    //SYSTEM MESSAGES FILL SCREEN aka PHASE 1
    for (let i = 0; i < systemMessages.length; i++) {

      fill(255, 0, 0, systemMessages[i].opacity);
      textSize(32);
      text("I SPEAK LOUDER", systemMessages[i].x, systemMessages[i].y);

      // SYSTEM MESSAGES FADE SLOW (opacity goes down by 2 each frame)
      if (systemMessages[i].opacity > 0) {
        systemMessages[i].opacity -= 2;
      }
    }

    // PLAYER MESSAGE GROWS
    fill(255, playerOpacity);
    textSize(playerSize);
    text("I am trying to speak.", width / 2, height - 80);

    // PLAYER MESSAGE FADES FAST (opacity goes down by 10 each frame)
    if (playerOpacity > 0) {
      playerOpacity -= 10;
    }

    // BREAKTHROUGH MOMENT!! WHEN PLAYER SIZE EXCEEDS THRESHOLD (once text grows over 80px)
    if (playerSize > 80) {
      breakThrough = true;
    }

  } else {
    //RUNS ONCE BREAKTHROUGH HAPPENS

    background(220);
     // system still visible but faint (opacity 60)
    for (let i = 0; i < systemMessages.length; i++) {
      fill(255, 0, 0, 60);
      textSize(32);
      text("I SPEAK LOUDER", systemMessages[i].x, systemMessages[i].y);
    }

    // PLAYER VOICE BREAKS THROUGH, BOLD AND LARGE
    fill(0);
    textSize(80);
    text("I AM SPEAKING.", width / 2, height / 2);
  }
}

function keyPressed() {

  if (!breakThrough) {

    playerOpacity = 255;

    // PLAYER GROWS EVERY KEY PRESS (size increases by 3 each key press)
    playerSize += 3;

    // ADD MULTIPLE SYSTEM MESSAGES EACH KEY PRESS RANDOM POSITION
    for (let i = 0; i < 3; i++) {

      let randomX = random(0, width);
      let randomY = random(0, height);

      systemMessages.push({
        x: randomX,
        y: randomY,
        opacity: 255
      });
    }
  }
}