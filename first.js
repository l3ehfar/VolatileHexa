function first(w, h) {
  if (
    dist(mouseX, mouseY, width / 2, height / 2) <= 300 * sin(60) &&
    dist(mouseX, mouseY, width / 2, height / 2) >= 100 * sin(60)
  ) {
    z1 = 200;
    stroke(z1);
  } else {
    if (z1 >= 30) {
      z1 = z1 * 0.995;
      stroke(z1);
    }
  }
  push();
  translate(width / 2, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 + 1 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + w, height / 2 - 1 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 - 1 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - w, height / 2 + 1 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  stroke(30);
  if (
    dist(mouseX, mouseY, width / 2, height / 2) <= 500 * sin(60) &&
    dist(mouseX, mouseY, width / 2, height / 2) >= 300 * sin(60)
  ) {
    z2 = 200;
    stroke(z2);
  } else {
    if (z2 >= 30) {
      z2 = z2 * 0.995;
      stroke(z2);
    }
  }
  push();
  translate(width / 2 - 2 * w, height / 2);
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
  translate(width / 2 - 2 * w, height / 2 - 2 * h);
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
  translate(width / 2 + w, height / 2 - 3 * h);
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
  translate(width / 2 - w, height / 2 + 3 * h);
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
