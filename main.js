function mainShow() {
  stroke(100);
  strokeWeight(1);
  noFill();
  push();
  translate(width / 2, height / 2);
  morph.morphShow();
  pop();
  push();
  translate(width / 2, height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2));
  morph.morphShow();
  pop();
  push();
  translate(width / 2, height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2));
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();

  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 + 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 + (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2 - 3 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();

  push();
  translate(
    width / 2 + 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2 - 2 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(60),
    height / 2
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2,
    height / 2 - 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
  push();
  translate(
    width / 2,
    height / 2 + 4 * (sin(60) * 25.882 * 4 + 25.882 * 2) * sin(30)
  );
  morph.morphShow();
  pop();
}
