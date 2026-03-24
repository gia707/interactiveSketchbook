let effort = [0,0];
let priviledged = [true,false];
let maxEffort = 22;
// above line are universal variables

function setup() {
createCanvas(600, 200);
textSize (16);
//text align ()

}

function draw() {
background(230);

let barWidth = width/2;

for (let i = 0; i < effort.length; i++) {
if (priviledged[i]) {
    fill (60, 160, 80);}
else {
    fill (180, 80, 80);
}
      // h will be a variable specific to draw
let h = map(effort[i], 0, maxEffort, 0, height-60);
rect(i*barWidth +40, height-h - 30, barWidth - 80, h);
fill (0);
if(effort[i] >= maxEffort) {
    text("DONE", i*barWidth + 40, 25);
} else {
text("Effort:" + effort[i], i*barWidth + 40, 25);
}
text("same input, different outcomes", 10, height-10);
}
}

function mousePressed() {
    for (let i = 0; i < 2; i++) {
        if (effort[i] < maxEffort) {
            if (priviledged[i]) {
                effort[i] = effort[i] + 1;
            }else {
                if (random() < 0.4) {
                    effort[i] = effort[i] + 1;
                }
            }
        }
    }
}