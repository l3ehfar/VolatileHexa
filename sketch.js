var n = 24;
let noiseMax = 0.001;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw() {
  background(51);
  push();
  keyPressed();
  mainShow(n);
  pop();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    n = 36;
  } else if (keyCode === RIGHT_ARROW) {
    n = 12;
  } else if (keyCode === UP_ARROW) {
    n = 24;
  }
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
    if (2 * angle == 30) {
      if (a % 30 == 0) {
        radius = map(mouseX, 0, width, 89.658, 110.342);
      } else {
        radius = 100;
      }
    } else if (2 * angle == 60) {
      if (a % 60 == 0) {
        radius = map(mouseX, 0, width, 100, 100);
      } else {
        radius = 100;
      }
    } else if (2 * angle == 20) {
      if (a % 60 == 0) {
        radius = map(mouseX, 0, width, 87, 113);
      } else if (a % 30 == 0) {
        radius = 100;
      } else {
        radius = 98;
      }
    }
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    zoff += 0.001;
  }
  endShape(CLOSE);
}
