function mainShow(n) {
  strokeWeight(5);
  noFill();
  if (timer >= 98000 && timer <= 102000) {
    var d = map(
      timer,
      98000,
      102000,
      sin(60) * 25.882 * 4 + 25.882 * 2,
      sin(60) * 25.882 * 4 + 25.882 * 2 * 2
    );
  }
  if (n > 24) {
    if (timer >= 70000.0 && timer <= 74000.0) {
      var d = map(
        timer,
        70000.0,
        74000.0,
        sin(60) * 25.882 * 4 + 25.882 * 2,
        127
      );
    } else if (timer >= 74000 && timer <= 96000) {
      var d = 127;
    } else if (timer >= 96000 && timer <= 98000) {
      var d = map(
        timer,
        96000.0,
        98000.0,
        127,
        sin(60) * 25.882 * 4 + 25.882 * 2
      );
    } else if (timer >= 98000) {
      var d = sin(60) * 25.882 * 4 + 25.882 * 2;
    }
  } else if (n < 12) {
    if (timer <= 5000.0) {
      var d = sin(60) * 25.882 * 4 + 25.882 * 2 * 2;
    } else if (timer >= 5000.0 && timer <= 20000.0) {
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
  } else if (n >= 12 && n <= 24) {
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
  stroke(255);
  polygon(0, 0, n);
  pop();
  pattern(w, h);
}
