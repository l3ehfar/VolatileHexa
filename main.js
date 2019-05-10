function mainShow(n) {
  stroke(100);
  strokeWeight(5);
  noFill();
  if (n == 36) {
    var d = map(
      mouseY,
      20,
      height - 20,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 2,
      127
    );
  } else {
    var d = map(
      mouseY,
      20,
      height - 20,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 2,
      sin(60) * 25.882 * 4 + 25.882 * 2
    );
  }
  var w = d * sin(60);
  var h = d * sin(30);

  push();
  translate(width / 2, height / 2);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - d);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + d);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 + h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 + h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 - h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 - h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 + 2 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 - w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 + 2 * w, height / 2);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
}
