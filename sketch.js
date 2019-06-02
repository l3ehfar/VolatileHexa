var n = 6;
let noiseMax = 0.001;
var carrier = [];
var amp = [];
var fft = [];
var peakDetect = [];
var vol;
var itsOn;
var c = 1;
var timer;
var last = 0;
EXT = ".mp3";
var z = 20,
  z0 = 60,
  z1 = 20,
  z2 = 60,
  z3 = 10,
  z4 = 60,
  z5 = 10,
  z6 = 60,
  z10,
  z11,
  z12,
  z13,
  z14,
  z15,
  z16,
  z17,
  z18,
  z19,
  z20,
  z21;
var ang1 = 0.0,
  ang2 = 0.0,
  ang3 = 0.0,
  ang4 = 0.0,
  ang5 = 0.0,
  ang6 = 0.0,
  ang7 = 0.0,
  ang8 = 0.0,
  ang9 = 0.0,
  ang10 = 0.0,
  ang11 = 0.0,
  ang12 = 0.0;
var z_ = 8.6,
  z0_ = 200;
(z1_ = 8.6), (z2_ = 200), (z3_ = 8.6), (z4_ = 200), (z5_ = 8.6), (z6_ = 200);
var picked = [];

/*function preload() {
  for (let i = 1; i < 4; ++i) {
    carrier[i] = loadSound(i + EXT);
  }
}*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  /*
  for (let i = 1; i < 4; ++i) {
    carrier[i].play();
    amp[i] = new p5.Amplitude();
    amp[i].setInput(carrier[i]);
    fft[i] = new p5.FFT();
    fft[i].setInput(carrier[i]);
    peakDetect[i] = new p5.PeakDetect(4000, 12000, 0.08);
  }
  */
}
function draw() {
  background(26);
  smooth();
  frameRate(40);
  timer = millis() - last;
  /* vol = amp[3].getLevel();
  for (let i = 1; i < 4; ++i) {
    fft[i].analyze();
    peakDetect[i].update(fft[i]);
  }
  if (peakDetect[1].isDetected) {
    itsOn = 600;
  } else {
    itsOn *= 0.99;
  }*/
  autoTransition();
  mainShow(n);
}
function touchStarted() {
  getAudioContext().resume();
}

function autoTransition() {
  if (timer >= 5000.0 && timer <= 20000.0) {
    n = map(timer, 5000.0, 20000.0, 6, 12);
  } else if (timer >= 20000 && timer <= 35000) {
    n = 12;
  } else if (timer >= 35000.0 && timer <= 42000.0) {
    n = map(timer, 35000.0, 42000.0, 12, 24);
  } else if (timer >= 42000 && timer <= 65000) {
    n = 24;
  } else if (timer >= 70000 && timer <= 74000) {
    n = map(timer, 70000, 74000, 24, 36);
  } else if (timer >= 74000 && timer <= 98000) {
    n = 36;
  } else if (timer >= 98000 && timer <= 100000) {
    n = map(timer, 98000, 100000, 36, 24);
  } else if (timer >= 100000 && timer <= 102000) {
    n = map(timer, 100000, 102000, 24, 12);
  } else if (timer >= 102000 && timer <= 104000) {
    n = map(timer, 102000, 104000, 12, 6);
  } else if (timer >= 104000) {
    last = millis();
    n = 6;
  }
}
