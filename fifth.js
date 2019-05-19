function fifth(w, h) {
  stroke(30);
  if (
    dist(mouseX, mouseY, width / 2, height / 2) <= 1100 * sin(60) &&
    dist(mouseX, mouseY, width / 2, height / 2) >= 900 * sin(60)
  ) {
    z5 = 200;
    stroke(z5);
  } else {
    if (z5 >= 30) {
      z5 = z5 * 0.995;
      stroke(z5);
    }
  }
  push();
  translate(width / 2 - 5 * w, height / 2 + h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 - h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 - 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 + 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 - 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 + 6 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 - 3 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 3 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 3 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 3 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * w, height / 2 + 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * w, height / 2 - 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 + 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * w, height / 2 - 8 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 - 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 + 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 - 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 + 9 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 10 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
}
