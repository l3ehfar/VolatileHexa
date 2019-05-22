var n = 6;
let noiseMax = 0.001;

var soundFile;

function preload() {
  soundFile = loadSound("guitar riff.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  soundFile.play();
}
function draw() {
  background(0);
  push();
  keyPressed();
  mainShow(n);
  pop();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    n = 36;
  } else if (keyCode === RIGHT_ARROW) {
    n = 12;
  } else if (keyCode === UP_ARROW) {
    n = 24;
  } else if (keyCode === DOWN_ARROW) {
    n = 6;
  }
}
