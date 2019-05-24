var n = 6;
let noiseMax = 0.001;
var carrier = [];
var amp = [];
var fft = [];
var peakDetect = [];
var vol;
var itsOn;

EXT = ".mp3";

function preload() {
  for (let i = 1; i < 4; ++i) {
    carrier[i] = loadSound(i + EXT);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 1; i < 4; ++i) {
    carrier[i].play();
    amp[i] = new p5.Amplitude();
    amp[i].setInput(carrier[i]);
    fft[i] = new p5.FFT();
    fft[i].setInput(carrier[i]);
    peakDetect[i] = new p5.PeakDetect(4000, 12000, 0.08);
  }
}
function draw() {
  background(0);
  smooth();
  frameRate(40);
  for (let i = 1; i < 4; ++i) {
    fft[i].analyze();
    peakDetect[i].update(fft[i]);
  }
  if (peakDetect[1].isDetected) {
    itsOn = 600;
  } else {
    itsOn *= 0.99;
  }
  vol = amp[3].getLevel();
  push();
  keyPressed();
  mainShow(n);
  pop();
  console.log(vol);
}
function touchStarted() {
  getAudioContext().resume();
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
