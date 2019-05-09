function mainShow(n) {
  stroke(100);
  strokeWeight(1);
  noFill();
  push();
  translate(width / 2, height / 2);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 - 133.4);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 133.4);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 116, height / 2 + 66.66);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 116, height / 2 + 66.6);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 116, height / 2 - 66.6);

  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 116, height / 2 - 66.6);

  polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2,
    height / 2 - 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
  push();
  translate(
    width / 2,
    height / 2 + 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );

  //polygon(0, 0, n);
  pop();
}
