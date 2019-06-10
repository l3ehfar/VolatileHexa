function pattern(w, h) {
  for (var i = -10; i <= 10; i++) {
    if (i % 2 == 0) {
      for (j = -16; j <= 16; j += 2) {
        if (
          (i != 4 || j != -4) &&
          (i != 4 || j != -2) &&
          (i != 6 || j != -2) &&
          (i != 6 || j != -4) &&
          (i != -4 || j != 4) &&
          (i != -4 || j != 2) &&
          (i != -6 || j != 2) &&
          (i != -6 || j != 4) &&
          (i != 4 || j != 4) &&
          (i != 4 || j != 2) &&
          (i != 6 || j != 2) &&
          (i != 6 || j != 4) &&
          (i != -4 || j != -4) &&
          (i != -4 || j != -2) &&
          (i != -6 || j != -2) &&
          (i != -6 || j != -4)
        ) {
          if (i == 0 && j == 0) {
            stroke(255);
          } else if ((i == 0 && j == 2) || (i == 0 && j == -2)) {
            stroke(160);
          } else if (
            (i == -2 && j == 0) ||
            (i == +2 && j == 0) ||
            (i == -2 && j == 2) ||
            (i == +2 && j == 2) ||
            (i == -2 && j == -2) ||
            (i == +2 && j == -2) ||
            (i == 0 && j == -4) ||
            (i == 0 && j == +4)
          ) {
            stroke(100);
          } else if (
            (i == -2 && j == 4) ||
            (i == +2 && j == 4) ||
            (i == -2 && j == -4) ||
            (i == +2 && j == -4) ||
            (i == 0 && j == -6) ||
            (i == 0 && j == 6)
          ) {
            stroke(65);
          } else {
            stroke(40);
          }

          push();
          translate(width / 2 + i * w, height / 2 + j * h);
          if (n == 24) {
            rotate(15);
          }
          polygon(0, 0, n);
          pop();
        }
      }
    } else {
      for (j = -15; j <= 15; j += 2) {
        if (
          (i != 5 || j != -3) &&
          (i != -5 || j != 3) &&
          (i != 5 || j != -1) &&
          (i != 5 || j != -5) &&
          (i != -5 || j != 1) &&
          (i != -5 || j != 5) &&
          (i != 5 || j != 3) &&
          (i != 5 || j != 5) &&
          (i != 5 || j != 1) &&
          (i != -5 || j != -3) &&
          (i != -5 || j != -5) &&
          (i != -5 || j != -1)
        ) {
          if (
            (i == 1 && j == 1) ||
            (i == 1 && j == -1) ||
            (i == -1 && j == 1) ||
            (i == -1 && j == -1)
          ) {
            stroke(160);
          } else if (
            (i == 1 && j == 3) ||
            (i == 1 && j == -3) ||
            (i == -1 && j == 3) ||
            (i == -1 && j == -3)
          ) {
            stroke(100);
          } else if (
            (i == 3 && j == 1) ||
            (i == 3 && j == -1) ||
            (i == 3 && j == 3) ||
            (i == 3 && j == -3) ||
            (i == -3 && j == 1) ||
            (i == -3 && j == -1) ||
            (i == -3 && j == 3) ||
            (i == -3 && j == -3) ||
            (i == 1 && j == 5) ||
            (i == 1 && j == -5) ||
            (i == -1 && j == 5) ||
            (i == -1 && j == -5)
          ) {
            stroke(65);
          } else {
            stroke(40);
          }
          push();
          translate(width / 2 + i * w, height / 2 + j * h);
          if (n == 24) {
            rotate(15);
          }
          polygon(0, 0, n);
          pop();
        }
      }
    }
  }

  push();
  push();
  if (timer % 411 == 0) {
    frameRate(30);
    z1 = random(120, 170);
    stroke(z1);
    ang1 = random(-40, 40);
    carrier[int(random(2, 9))].play();
  } else {
    if (z1 >= 40) {
      z1 = z1 * 0.99;
      stroke(z1);
    }
    ang1 = ang1 * 0.96;
  }
  translate(width / 2 + 5 * w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang1);
  polygon(0, 0, n);
  pop();

  if (timer % 411 == 0) {
    z2 = random(60, 100);
    stroke(z2);
    ang2 = random(-20, 20);
  } else {
    if (z2 >= 40) {
      z2 = z2 * 0.992;
      stroke(z2);
    }
    ang2 = ang2 * 0.91;
  }
  push();
  translate(width / 2 + 4 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 - 1 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang2);
  polygon(0, 0, n);
  pop();
  pop();

  push();
  push();
  if (timer % 419 == 0) {
    frameRate(30);
    z4 = random(120, 170);
    stroke(z4);
    ang3 = random(-40, 40);
    carrier[int(random(2, 9))].play();
  } else {
    if (z4 >= 40) {
      z4 = z4 * 0.99;
      stroke(z4);
    }
    ang3 = ang3 * 0.96;
  }
  translate(width / 2 - 5 * w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang3);
  polygon(0, 0, n);
  pop();
  if (timer % 419 == 0) {
    z5 = random(60, 100);
    stroke(z5);
    ang4 = random(-20, 20);
  } else {
    if (z5 >= 40) {
      z5 = z5 * 0.992;
      stroke(z5);
    }
    ang4 = ang4 * 0.91;
  }
  push();
  translate(width / 2 - 4 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 + 1 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang4);
  polygon(0, 0, n);
  pop();
  pop();

  push();
  push();
  if (timer % 425 == 0) {
    frameRate(30);
    z6 = random(120, 170);
    stroke(z6);
    ang5 = random(-40, 40);
    carrier[int(random(2, 9))].play();
  } else {
    if (z6 >= 40) {
      z6 = z6 * 0.99;
      stroke(z6);
    }
    ang5 = ang5 * 0.96;
  }
  translate(width / 2 + 5 * w, height / 2 + 3 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang5);
  polygon(0, 0, n);
  pop();
  if (timer % 425 == 0) {
    z7 = random(60, 100);
    stroke(z7);
    ang6 = random(-20, 20);
  } else {
    if (z7 >= 40) {
      z7 = z7 * 0.992;
      stroke(z7);
    }
    ang6 = ang6 * 0.91;
  }
  push();
  translate(width / 2 + 6 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 6 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 + 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 4 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 5 * w, height / 2 + 1 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang6);
  polygon(0, 0, n);
  pop();
  pop();

  push();
  push();
  if (timer % 431 == 0) {
    frameRate(30);
    z8 = random(120, 170);
    stroke(z8);
    ang7 = random(-40, 40);
    carrier[int(random(2, 9))].play();
  } else {
    if (z8 >= 40) {
      z8 = z8 * 0.99;
      stroke(z8);
    }
    ang7 = ang7 * 0.96;
  }
  translate(width / 2 - 5 * w, height / 2 - 3 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang7);
  polygon(0, 0, n);
  pop();
  if (timer % 431 == 0) {
    z9 = random(60, 100);
    stroke(z9);
    ang8 = random(-20, 20);
  } else {
    if (z9 >= 40) {
      z9 = z9 * 0.992;
      stroke(z9);
    }
    ang8 = ang8 * 0.91;
  }
  push();
  translate(width / 2 - 6 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 6 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 - 2 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 4 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 5 * w, height / 2 - 1 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang8);
  polygon(0, 0, n);
  pop();
  pop();
  /*
  push();
  push();
  if (z2 >= 25.8 && z2 <= 25.9) {
    frameRate(30);
    z18 = random(60, 70);
    stroke(z18);
    ang9 = random(-40, 40);
  } else {
    if (z18 >= 13) {
      z18 = z18 * 0.995;
      stroke(z18);
    }
    ang9 = ang9 * 0.96;
  }
  translate(width / 2 - 0 * w, height / 2 - 6 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang9);
  polygon(0, 0, n);
  pop();
  if (z2 >= 25.8 && z2 <= 25.9) {
    z19 = random(60, 70);
    stroke(z19);
    ang10 = random(-20 ,20);
  } else {
    if (z19 >= 13) {
      z19 = z19 * 0.995;
      stroke(z19);
    }
    ang10 = ang10 * 0.91;
  }
  push();
  translate(width / 2 - 1 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 1 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 1 * w, height / 2 - 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 1 * w, height / 2 - 7 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 0 * w, height / 2 - 8 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 0 * w, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang10);
  polygon(0, 0, n);
  pop();
  pop();

  push();
  push();
  if (z4 >= 25.8 && z4 <= 25.9) {
    frameRate(30);
    z20 = random(40, 50);
    stroke(z20);
    ang11 = random(-40, 40);
  } else {
    if (z20 >= 13) {
      z20 = z20 * 0.995;
      stroke(z20);
    }
    ang11 = ang11 * 0.96;
  }
  translate(width / 2 - 0 * w, height / 2 + 6 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang11);
  polygon(0, 0, n);
  pop();
  if (z4 >= 25.8 && z4 <= 25.9) {
    z21 = random(40, 50);
    stroke(z21);
    ang12 = random(-20 ,20);
  } else {
    if (z21 >= 13) {
      z21 = z21 * 0.995;
      stroke(z21);
    }
    ang12 = ang12 * 0.91;
  }
  push();
  translate(width / 2 - 1 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 1 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 1 * w, height / 2 + 5 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 + 1 * w, height / 2 + 7 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 0 * w, height / 2 + 8 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2 - 0 * w, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  rotate(ang12);
  polygon(0, 0, n);
  pop();
  pop();
  */
}
