
// VARIABLES
let playerOpacity = 0;
let playerSize = 12;     
let systemMessages = [];
let breakThrough = false;
let presses = 0;
let maxPresses = 20;

let growthPerPress;    
let crowdSound;
let tonePlayed = false;
let playerText = "I am trying to speak.";



// PRELOAD AUDIO
function preload() {
  crowdSound = loadSound("crowd.mp3");
}


// SETUP
function setup() {
  createCanvas(1200, 800);
  textAlign(CENTER, CENTER);
  background(30);


  let padding = 80;
  textSize(1000); 
  let w = textWidth(playerText);
  maxPlayerSize = 1000 * (width - padding * 2) / w;

  maxPlayerSize = min(maxPlayerSize, height / 4);

  growthPerPress = (maxPlayerSize - playerSize) / maxPresses;

  // Start audio
  userStartAudio().then(() => {
    crowdSound.loop();
    crowdSound.setVolume(0.05);
    crowdSound.play(1); 
  });
}


function bgLayer() {
  background(breakThrough ? 220 : 30);
}

function systemLayer() {
  for (let i = 0; i < systemMessages.length; i++) {
    let msg = systemMessages[i];
    if (!breakThrough) {
      fill(255, 0, 0, msg.opacity);
      textStyle(BOLD);
      textSize(msg.size || 32);
      text("I SPEAK LOUDER", msg.x, msg.y);
      if (msg.opacity > 0) msg.opacity -= 2;
    } else {
      fill(255, 0, 0, 60);
      textStyle(BOLD);
      textSize(msg.size || 32);
      text("I SPEAK LOUDER", msg.x, msg.y);
    }
  }
}

function playerLayer() {
  fill(255, playerOpacity);
  textStyle(NORMAL);
  textSize(playerSize);
  text(playerText, width / 2, height - 150);
  if (playerOpacity > 0) playerOpacity -= 10;
}

function effectLayer() {
  if (breakThrough) {
    fill(0);
    textStyle(BOLD);
    let targetText = "I AM SPEAKING.";
    let maxHeight = height / 2;
    let maxWidth = width - 80 * 2;
    textSize(maxHeight);
    let w = textWidth(targetText);
    if (w > maxWidth) textSize(maxHeight * (maxWidth / w));
    text(targetText, width / 2, height / 2);

    if (!tonePlayed) {
      let tone = new p5.Oscillator('sine');
      tone.start();
      tone.freq(500);
      tone.amp(0.3, 0.5);
      tone.amp(0, 2);
      tonePlayed = true;
    }
  }
}


function draw() {
  bgLayer();
  systemLayer();

  if (!breakThrough) {
    playerLayer();

    // gradually increase crowd volume as player grows
    let vol = map(playerSize, 12, maxPlayerSize, 0.05, 0.15);
    crowdSound.setVolume(vol);

    if (presses >= maxPresses || playerSize >= maxPlayerSize) {
      breakThrough = true;
      if (crowdSound.isPlaying()) crowdSound.stop();
    }
  } else {
    effectLayer();
  }
}


// KEY PRESSED
function keyPressed() {
  if (!breakThrough) {
    playerOpacity = 255;
    presses++;

    // Grow player text, capped at maxPlayerSize
    playerSize = min(playerSize + growthPerPress, maxPlayerSize);

    // add suffocating system messages
    for (let i = 0; i < 20; i++) {
      systemMessages.push({
        x: random(0, width),
        y: random(0, height),
        opacity: 255,
        size: 28
      });
    }
  }
}