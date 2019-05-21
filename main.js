var z1, z2, z3, z4, z5, z6;

function mainShow(n) {
  stroke(200);
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
  } else if (n == 6) {
    var d = map(
      mouseY,
      20,
      height - 20,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 2,
      200 * sin(60)
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
  stroke(30);
  first(w, h);
  third(w, h);
  forth(w, h);
  fifth(w, h);
  sixth(w, h);
}
