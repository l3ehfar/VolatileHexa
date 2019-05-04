let noiseMax = 0.5;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw() {
  background(51);
  push();
  mainShow(24);
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
    if (a % 30 == 0) {
      radius = 92.5285101664;
    } else {
      radius = 100;
    }
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    console.log(a);
  }
  endShape(CLOSE);
}
