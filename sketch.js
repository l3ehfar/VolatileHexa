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
var z = 2,
  z0 = 60,
  z1 = 2,
  z2 = 60,
  z3 = 2,
  z4 = 60,
  z5 = 2,
  z6 = 60,
  z10,
  z11,
  z12,
  z13,
  z14,
  z15,
  z16,
  z17;
var ang1 = 0.0,
  ang2 = 0.0,
  ang3 = 0.0,
  ang4 = 0.0,
  ang5 = 0.0,
  ang6 = 0.0,
  ang7 = 0.0,
  ang8 = 0.0;
var z_ = 8.6,
  z0_ = 200;
(z1_ = 8.6), (z2_ = 200), (z3_ = 8.6), (z4_ = 200), (z5_ = 8.6), (z6_ = 200);
var picked = [];

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
  mainShow(n);
}
function touchStarted() {
  getAudioContext().resume();
}
