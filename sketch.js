var n = 6;
let noiseMax = 0;
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
var z3 = 10;
/*z1 = 0,
  z2 = 0,
  z4 = 0,
  z5 = 0,
  z6 = 0,
  z7 = 0,
  z8 = 0,
  z9 = 0;
var ang1 = 0.0,
  ang2 = 0.0,
  ang3 = 0.0,
  ang4 = 0.0,
  ang5 = 0.0,
  ang6 = 0.0,
  ang7 = 0.0,
  ang8 = 0.0;
function preload() {
  for (let i = 1; i < 9; ++i) {
    carrier[i] = loadSound(i + EXT);
  }
}*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // carrier[1].loop();
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
  timer = int(millis() - last);

  /* for (let i = 1; i < 4; ++i) {
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
  if (timer >= 2000.0 && timer <= 20000.0) {
    n = map(timer, 2000.0, 20000.0, 6, 12);
  } else if (timer >= 20000 && timer <= 35000) {
    n = 12;
  } else if (timer >= 35000.0 && timer <= 37000.0) {
    n = map(timer, 35000.0, 37000.0, 12, 13);
  } else if (timer >= 37000.0 && timer <= 39500.0) {
    n = map(timer, 37000.0, 39500.0, 13, 15);
  } else if (timer >= 39500.0 && timer <= 42000.0) {
    n = map(timer, 39500.0, 42000.0, 15, 18);
  } else if (timer >= 42000.0 && timer <= 46000.0) {
    n = map(timer, 42000.0, 46000.0, 18, 24);
  } else if (timer >= 46000 && timer <= 74000) {
    n = 24;
  } else if (timer >= 74000 && timer <= 80000) {
    n = map(timer, 74000, 80000, 24, 36);
  } else if (timer >= 80000 && timer <= 111000) {
    n = 36;
  } else if (timer >= 111000 && timer <= 117000) {
    n = map(timer, 111000, 117000, 36, 24);
  } else if (timer >= 117000 && timer <= 123000) {
    n = map(timer, 117000, 123000, 24, 12);
  } else if (timer >= 123000 && timer <= 133000) {
    n = map(timer, 123000, 133000, 12, 6);
  } else if (timer >= 133000) {
    last = millis();
    n = 6;
  }
}
