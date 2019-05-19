function sixth(w, h) {
  stroke(30);
  if (
    dist(mouseX, mouseY, width / 2, height / 2) <= 1300 * sin(60) &&
    dist(mouseX, mouseY, width / 2, height / 2) >= 1000 * sin(60)
  ) {
    z6 = 200;
    stroke(z6);
  } else {
    if (z6 >= 30) {
      z6 = z6 * 0.995;
      stroke(z6);
    }
  }
  push();
  translate(width / 2 - 5 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 + 5 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 - 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 + 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 - 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 + 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 - 3 * w, height / 2 - 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 3 * w, height / 2 + 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 3 * w, height / 2 - 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 3 * w, height / 2 + 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * w, height / 2 + 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * w, height / 2 - 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 + 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 - 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 - 11 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 + 11 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 - 11 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 + 11 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 12 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 12 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 - 6 * w, height / 2);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 + 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 - 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 + 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 - 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
}
