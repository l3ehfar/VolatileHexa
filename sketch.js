let cirPath = [];
let triPath = [];
let spacing = 30;
let theta = 0;
var morph;
var r = 100;
function polarToCartesian(r, angle) {
  return createVector(r * cos(angle), r * sin(angle));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  morph = new Morph(r);
  morph.morphDo();
}

function draw() {
  background(0);
  mainShow();
}
