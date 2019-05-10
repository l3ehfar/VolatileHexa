var n = 36;
let noiseMax = 0.001;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw() {
  background(51);
  push();
  mainShow(n);
  pop();
}

function polygon(x, y, npoints) {
  let radius;
  let angle = 360 / npoints;
  rotate(map(mouseX, 0, width, 0, 45));
  beginShape();
  noiseMax = map(mouseX, 0, width, 0, 10);
  for (let a = 0; a < 360; a += angle) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    if (a % 60 == 0) {
      radius = map(mouseX, 0, width, 87, 113);
    } else if (a % 30 == 0) {
      radius = 100;
    } else {
      radius = 98;
    }
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    zoff += 0.001;
  }
  endShape(CLOSE);
}
