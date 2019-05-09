let cirPath = [];
let triPath = [];
var spacing = 15;
let theta = 0;
var morph;
function polarToCartesian(r, angle) {
  return createVector(r * cos(angle), r * sin(angle));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  morph = new Morph();
  morph.morphDo();
}

function draw() {
  background(0);
  mainShow();
}
