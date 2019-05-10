function mainShow(n) {
  stroke(100);
  strokeWeight(1);
  noFill();
  push();
  translate(width / 2, height / 2);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 127);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 127);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 109, height / 2 + 64);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 109, height / 2 + 64);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 109, height / 2 - 64);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 109, height / 2 - 64);

  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 + 2 * 127 * sin(60), height / 2 - 2 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * 127 * sin(60), height / 2 - 2 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 2 * 127 * sin(60), height / 2 + 2 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * 127 * sin(60), height / 2 + 2 * 127 * sin(30));

  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 - 127 * sin(60), height / 2 + 3 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 127 * sin(60), height / 2 + 3 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 127 * sin(60), height / 2 - 3 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 127 * sin(60), height / 2 - 3 * 127 * sin(30));

  polygon(0, 0, n);
  pop();

  push();
  translate(width / 2 + 2 * 127 * sin(60), height / 2);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 2 * 127 * sin(60), height / 2);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 4 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 4 * 127 * sin(30));

  polygon(0, 0, n);
  pop();
}
