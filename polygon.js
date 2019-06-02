function polygon(x, y, npoints) {
  let radius;
  let angle = 360 / npoints;
  if (n != 6) {
    if (timer <= 20000.0) {
      rotate(0);
    } else if (timer >= 20000.0 && timer <= 27000.0) {
      rotate(map(timer, 20000.0, 27000.0, 0, 45));
    } else if (timer >= 27000.0 && timer <= 28000.0) {
      rotate(45);
    } else if (timer >= 28000.0 && timer <= 34000.0) {
      rotate(map(timer, 28000.0, 34000.0, 45, 0));
    } else if (timer >= 34000.0 && timer <= 35000.0) {
      rotate(0);
    } else if (timer >= 47000 && timer <= 55000) {
      rotate(map(timer, 47000.0, 55000.0, 0, 45));
    } else if (timer >= 55000 && timer <= 57000) {
      rotate(45);
    } else if (timer >= 57000 && timer <= 65000) {
      rotate(map(timer, 57000.0, 65000.0, 45, 0));
    } else if (timer >= 65000 && timer <= 83000) {
      rotate(0);
    } else if (timer >= 83000.0 && timer <= 88000.0) {
      rotate(map(timer, 83000.0, 88000.0, 0, 45));
    } else if (timer >= 88000.0 && timer <= 93000.0) {
      rotate(map(timer, 88000.0, 93000.0, 45, 0));
    } else if (timer >= 93000.0) {
      rotate(0);
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
        } else if (timer >= 55000 && timer <= 57000) {
          radius = 110.342;
        } else if (timer >= 57000 && timer <= 65000) {
          radius = map(timer, 57000.0, 65000.0, 110.342, 89.658);
        } else if (timer >= 65000 && timer <= 67000) {
          radius = 89.658;
        } else if (timer >= 67000 && timer <= 70000) {
          radius = map(timer, 67000, 70000, 89.658, 100);
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
        if (timer >= 74000.0 && timer <= 80000.0) {
          radius = map(timer, 74000.0, 80000.0, 100, 87);
        } else if (timer >= 80000.0 && timer <= 83000.0) {
          radius = 87;
        } else if (timer >= 83000.0 && timer <= 88000.0) {
          radius = map(timer, 83000.0, 88000.0, 87, 113);
        } else if (timer >= 88000.0 && timer <= 93000.0) {
          radius = map(timer, 88000.0, 93000.0, 113, 87);
        } else if (timer >= 93000.0 && timer <= 96000.0) {
          radius = 87;
        } else if (timer >= 96000.0 && timer <= 98000.0) {
          radius = map(timer, 96000.0, 98000.0, 87, 100);
        } else if (timer >= 98000) {
          radius = 100;
        }
      } else if (a % 30 == 0) {
        radius = 100;
      } else {
        radius = 100;
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
