function mainShow(n) {
  strokeWeight(5);
  noFill();
  if (n == 36) {
    var d = 127; /*map(vol * 100, 0, 15, 127, 132)*/
  } else if (n < 12) {
    var d = sin(60) * 25.882 * 4 + 25.882 * 2 * 2;
    if (timer >= 5000.0 && timer <= 20000.0) {
      var d = map(
        timer,
        5000.0,
        20000.0,
        sin(60) * 25.882 * 4 + 25.882 * 2 * 2,
        sin(60) * 25.882 * 4 + 25.882 * 2
      );
    } /*map(
      vol * 100,
      0,
      15,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 1.93,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 2
    )*/
  } else if (n >= 12) {
    var d =
      sin(60) * 25.882 * 4 +
      25.882 *
        2; /*map(
      vol * 100,
      0,
      15,
      sin(60) * 25.882 * 4 + 25.882 * 2,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 1.1
    )*/
  }
  var w = d * sin(60);
  var h = d * sin(30);

  push();
  translate(width / 2, height / 2);
  if (n == 24) {
    rotate(15);
  }
  stroke(250);
  polygon(0, 0, n);
  pop();
  pattern(w, h);
}
