let imgs = [];
let currentIndex = 0;

// let message ="";
// let messageTimer = 0; //frames remaining to show message

function preload() {
imgs [0]= loadImage("imgs/image1.jpeg");
imgs [1]= loadImage("imgs/image2.jpeg");
imgs [2]= loadImage("imgs/image3.jpeg");
imgs [3]= loadImage("imgs/image4.jpeg");
imgs [4]= loadImage("imgs/image5.jpeg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

}

function draw(){
    background(0);
    displayImage();
    displayState();
   
}

function displayImage() {
    let img = imgs[currentIndex];
    image(img,windowWidth/2,windowHeight/2);
}

function displayState(){
    fill(255);
    textAlign(CENTER,TOP);
    textSize(24);
    text("State" + (currentIndex +1)+ "/" + imgs.length, width/2,20);
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW) {
       currentIndex++;
       if(currentIndex>=imgs.length){
        currentIndex=0;
       }
    }

    if(keyCode === LEFT_ARROW) {
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = imgs.length-1;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}