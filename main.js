function mainShow(n) {
  strokeWeight(5);
  noFill();
  var d = sin(60) * 25.882 * 4 + 25.882 * 2 * 2;
  if (timer <= 3000) {
    d = sin(60) * 25.882 * 4 + 25.882 * 2 * 2;
  } else {
    if (n < 12) {
      d = d * 0.5;
    }
  }
  var w = d * sin(60);
  var h = d * sin(30);

  push();
  translate(width / 2, height / 2);
  if (n == 24) {
    rotate(15);
  }
  stroke(255);
  polygon(0, 0, n);
  pop();
  pattern(w, h);
}
