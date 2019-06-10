function mainShow(n) {
  strokeWeight(5);
  noFill();
  if (n > 24) {
    if (timer >= 74000.0 && timer <= 80000.0) {
      var d = map(
        timer,
        74000.0,
        80000.0,
        sin(60) * 25.882 * 4 + 25.882 * 2,
        127
      );
    } else if (timer >= 80000 && timer <= 111000) {
      var d = 127;
    } else if (timer >= 111000 && timer <= 117000) {
      var d = map(
        timer,
        111000.0,
        117000.0,
        127,
        sin(60) * 25.882 * 4 + 25.882 * 2
      );
    } else if (timer >= 117000 && timer <= 123000) {
      var d = sin(60) * 25.882 * 4 + 25.882 * 2;
    }
  } else if (n < 12) {
    if (timer <= 1000.0) {
      var d = sin(60) * 25.882 * 4 + 25.882 * 2 * 2;
    } else if (timer >= 1000.0 && timer <= 20000.0) {
      var d = map(
        timer,
        1000.0,
        20000.0,
        sin(60) * 25.882 * 4 + 25.882 * 2 * 2,
        sin(60) * 25.882 * 4 + 25.882 * 2
      );
    } else if (timer >= 123000 && timer <= 133000) {
      var d = map(
        timer,
        123000,
        133000,
        sin(60) * 25.882 * 4 + 25.882 * 2,
        sin(60) * 25.882 * 4 + 25.882 * 2 * 2
      );
    }
  } else if (n >= 12 && n <= 24) {
    var d = sin(60) * 25.882 * 4 + 25.882 * 2;
  }
  var w = d * sin(60);
  var h = d * sin(30);
  pattern(w, h);
}
