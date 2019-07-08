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
var step1 = 160;
var step2 = 100;
var step3 = 65;
var step4 = 40;
var note_i = -10,
  note_j = -10,
  note_i_2 = -10,
  note_j_2 = -10,
  note_i_3 = -10,
  note_j_3 = -10;
var noteColor = 40.0,
  noteColor2 = 100.0,
  noteColor3 = 40.0,
  noteColor4 = 100.0,
  noteColor5 = 40.0,
  noteColor6 = 100.0;
let mic;
var hit = false,
  hit2 = false,
  hit3 = false;
var col = 255;
function preload() {
  for (let i = 1; i < 82; ++i) {
    carrier[i] = loadSound("/music/" + i + EXT);
  }
}
function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  carrier[1].loop();
  mic = new p5.AudioIn();

  mic.start();
}
function draw() {
  background(26);
  frameRate(40);
  timer = int(millis() - last);
  vol = mic.getLevel();
  autoTransition();
  mainShow(n);
}

function autoTransition() {
  if (timer >= 0.0 && timer <= 20000.0) {
    n = map(timer, 0.0, 20000.0, 6, 12);
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
