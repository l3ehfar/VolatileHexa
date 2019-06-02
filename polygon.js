function polygon(x, y, npoints) {
  let radius;
  let angle = 360 / npoints;
  if (n != 6) {
    if (timer <= 20000.0) {
      rotate(0);
    } else if (timer >= 20000.0 && timer <= 27500.0) {
      rotate(map(timer, 20000.0, 27500.0, 0, 45));
    } else if (timer >= 27500.0 && timer <= 35000.0) {
      rotate(map(timer, 27500.0, 35000.0, 45, 0));
    } else if (timer >= 47000 && timer <= 55000) {
      rotate(map(timer, 47000.0, 55000.0, 0, 45));
    } else if (timer >= 55000) {
      rotate(45);
    }
  }
  beginShape();
  noiseMax = map(mouseX, 0, width, 0, 10);
  for (let a = 0; a < 360; a += angle) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    if (2 * angle == 30) {
      if (a % 30 == 0) {
        if (timer >= 42000.0 && timer <= 45000.0) {
          radius = map(timer, 42000.0, 45000.0, 100, 89.658);
        } else if (timer >= 45000.0 && timer <= 47000.0) {
          radius = 89.658;
        } else if (timer >= 47000.0 && timer <= 55000.0) {
          radius = map(timer, 47000.0, 55000.0, 89.658, 110.342);
        } else if (timer >= 55000) {
          radius = 110.342;
        }
      } else {
        radius = 100;
      }
    } else if (2 * angle == 60) {
      if (a % 60 == 0) {
        radius = map(mouseX, 0, width, 100, 100);
      } else {
        radius = 100;
      }
    } else if (2 * angle == 20) {
      if (a % 60 == 0) {
        radius = map(mouseX, 0, width, 87, 113);
      } else if (a % 30 == 0) {
        radius = 100;
      } else {
        radius = 98;
      }
    } else {
      radius = 100;
    }
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
