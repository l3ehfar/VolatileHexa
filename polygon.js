function polygon(x, y, npoints) {
  let radius;
  let angle = 360 / npoints;
  if (n != 6) {
    if (timer <= 20000.0) {
      rotate(0);
    } else if (timer >= 20000.0 && timer <= 25000.0) {
      rotate(map(timer, 20000.0, 25000.0, 0, 35));
    } else if (timer >= 25000.0 && timer <= 27000.0) {
      rotate(map(timer, 25000.0, 27000.0, 35, 45));
    } else if (timer >= 27000.0 && timer <= 29000.0) {
      rotate(map(timer, 27000.0, 29000.0, 45, 35));
    } else if (timer >= 29000.0 && timer <= 32500.0) {
      rotate(map(timer, 29000.0, 32500.0, 35, 10));
    } else if (timer >= 32500.0 && timer <= 35000.0) {
      rotate(map(timer, 32500.0, 35000.0, 10, 0));
    }

    if (timer >= 51500 && timer <= 59500) {
      rotate(map(timer, 51500.0, 59500.0, 0, 45));
    }
    if (timer >= 59500 && timer <= 61500) {
      rotate(45);
    } else if (timer >= 61500 && timer <= 69500) {
      rotate(map(timer, 61500.0, 69500.0, 45, 0));
    } else if (timer >= 89000.0 && timer <= 98000.0) {
      rotate(map(timer, 89000.0, 98000.0, 0, 45));
    } else if (timer >= 98000.0 && timer <= 103000.0) {
      rotate(map(timer, 98000.0, 103000.0, 45, 0));
    } else if (timer >= 103000.0) {
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
        if (timer >= 46000.0 && timer <= 49000.0) {
          radius = map(timer, 46000.0, 49000.0, 100, 93.658);
        }
        if (timer >= 49000.0 && timer <= 50500.0) {
          radius = map(timer, 49000.0, 50500.0, 93.658, 89.658);
        } else if (timer >= 50500.0 && timer <= 52000.0) {
          radius = map(timer, 50500.0, 52000.0, 89.658, 93.658);
        } else if (timer >= 52000.0 && timer <= 59000.0) {
          radius = map(timer, 52000.0, 59000.0, 93.658, 106.342);
        } else if (timer >= 59000.0 && timer <= 60500.0) {
          radius = map(timer, 59000.0, 60500.0, 106.342, 110.342);
        } else if (timer >= 60500.0 && timer <= 62000.0) {
          radius = map(timer, 60500.0, 62000.0, 110.342, 106.342);
        } else if (timer >= 62000.0 && timer <= 69000.0) {
          radius = map(timer, 62000.0, 69000.0, 106.342, 93.658);
        } else if (timer >= 69000.0 && timer <= 70500.0) {
          radius = map(timer, 69000.0, 70500.0, 93.658, 89.658);
        } else if (timer >= 70500 && timer <= 72000) {
          radius = map(timer, 70500, 72000, 89.658, 93.658);
        } else if (timer >= 72000 && timer <= 74000) {
          radius = map(timer, 72000, 74000, 93.658, 100);
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
        if (timer >= 80000.0 && timer <= 85000.0) {
          radius = map(timer, 80000.0, 85000.0, 100, 87);
        } else if (timer >= 85000.0 && timer <= 93000.0) {
          radius = map(timer, 85000.0, 93000.0, 87, 100);
        } else if (timer >= 93000.0 && timer <= 98000.0) {
          radius = map(timer, 93000.0, 98000.0, 100, 113);
        } else if (timer >= 98000.0 && timer <= 103000.0) {
          radius = map(timer, 98000.0, 103000.0, 113, 93);
        } else if (timer >= 103000.0 && timer <= 106000.0) {
          radius = map(timer, 103000.0, 106000.0, 93, 87);
        } else if (timer >= 106000.0 && timer <= 111000.0) {
          radius = map(timer, 106000.0, 111000.0, 87, 100);
        } else if (timer >= 111000) {
          radius = 100;
        }
      } else if (a % 30 == 0) {
        radius = 100;
      } else {
        if (timer >= 80000.0 && timer <= 85000.0) {
          radius = map(timer, 80000.0, 85000.0, 100, 98);
        } else if (timer >= 85000 && timer <= 106000) {
          radius = 98;
        } else if (timer >= 106000 && timer <= 111000) {
          radius = map(timer, 106000, 111000, 98, 100);
        }
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
