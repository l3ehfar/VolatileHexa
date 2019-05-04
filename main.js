function mainShow(n) {
  stroke(100);
  strokeWeight(10);
  noFill();
  push();
  translate(width / 2, height / 2);
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2));
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2));
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2,
    height / 2 - 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2,
    height / 2 + 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  rotate(15);
  polygon(0, 0, n);
  pop();
}
