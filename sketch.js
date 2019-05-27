var n = 6;
let noiseMax = 0.001;
var carrier = [];
var amp = [];
var fft = [];
var peakDetect = [];
var vol;
var itsOn;
var c = 1;
EXT = ".mp3";
var z = 4,
  z0 = 60,
  z1 = 4,
  z2 = 60,
  z3 = 4,
  z4 = 60,
  z5 = 4,
  z6 = 60;
var z_ = 15.2,
  z0_ = 200;
(z1_ = 15.2), (z2_ = 200), (z3_ = 15.2), (z4_ = 200), (z5_ = 15.2), (z6_ = 200);

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
  vol = amp[3].getLevel();
  background(c);
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
  push();
  mainShow(n);
  pop();
}
function touchStarted() {
  getAudioContext().resume();
}
