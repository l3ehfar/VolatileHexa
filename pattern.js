function pattern(w, h) {
  first(w, h);
  third(w, h);
  stroke(30);
  for (var i = -8; i <= 8; i++) {
    if (i % 2 == 0) {
      for (j = -14; j <= 14; j += 2) {
        if (
          (i != 0 || j != 0) &&
          (i != 0 || j != 2) &&
          (i != 0 || j != -2) &&
          (i != 0 || j != -4) &&
          (i != 0 || j != 4) &&
          (i != 0 || j != 6) &&
          (i != 0 || j != -6) &&
          (i != 2 || j != 0) &&
          (i != 2 || j != 2) &&
          (i != 2 || j != -2) &&
          (i != 2 || j != -4) &&
          (i != 2 || j != 4) &&
          (i != -2 || j != 0) &&
          (i != -2 || j != 2) &&
          (i != -2 || j != -2) &&
          (i != -2 || j != -4) &&
          (i != -2 || j != 4)
        ) {
          /*if (
          (i != 0 || j != 0) &&
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
        ) {*/
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
      for (j = -13; j <= 13; j += 2) {
        if (
          (i != 1 || j != 1) &&
          (i != 1 || j != -1) &&
          (i != 1 || j != 3) &&
          (i != 1 || j != -3) &&
          (i != 1 || j != -5) &&
          (i != 1 || j != 5) &&
          (i != -1 || j != 1) &&
          (i != -1 || j != -1) &&
          (i != -1 || j != 3) &&
          (i != -1 || j != -3) &&
          (i != -1 || j != -5) &&
          (i != -1 || j != 5) &&
          (i != 3 || j != 1) &&
          (i != 3 || j != -1) &&
          (i != 3 || j != 3) &&
          (i != 3 || j != -3) &&
          (i != -3 || j != 1) &&
          (i != -3 || j != -1) &&
          (i != -3 || j != 3) &&
          (i != -3 || j != -3)
        ) {
          /*if (
          (i != 5 || j != -3) &&
          (i != 5 || j != -1) &&
          (i != 5 || j != -5) &&
          (i != -5 || j != 3) &&
          (i != -5 || j != 1) &&
          (i != -5 || j != 5) &&
          (i != 5 || j != 3) &&
          (i != 5 || j != 5) &&
          (i != 5 || j != 1) &&
          (i != -5 || j != -3) &&
          (i != -5 || j != -5) &&
          (i != -5 || j != -1)
        ) {*/
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
  /*
  push();
  push();
  if ((z >= 18.3 && z <= 18.4) || (z2 >= 59.8 && z2 <= 59.9)) {
    frameRate(30);
    z10 = random(140, 150);
    stroke(z10);
    ang1 = random(-360, 360);
  } else {
    if (z10 >= 38) {
      z10 = z10 * 0.995;
      stroke(z10);
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
  if ((z >= 18.3 && z <= 18.4) || (z2 >= 59.8 && z2 <= 59.9)) {
    z11 = random(140, 150);
    stroke(z11);
    ang2 = random(-240, 240);
  } else {
    if (z11 >= 37) {
      z11 = z11 * 0.995;
      stroke(z11);
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
  if ((z5 >= 18.3 && z5 <= 18.4) || (z0 >= 59.8 && z0 <= 59.9)) {
    frameRate(30);
    z12 = random(140, 150);
    stroke(z12);
    ang3 = random(-360, 360);
  } else {
    if (z12 >= 38) {
      z12 = z12 * 0.995;
      stroke(z12);
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
  if ((z5 >= 18.3 && z5 <= 18.4) || (z0 >= 59.8 && z0 <= 59.9)) {
    z13 = random(140, 150);
    stroke(z13);
    ang4 = random(-240, 240);
  } else {
    if (z13 >= 37) {
      z13 = z13 * 0.995;
      stroke(z13);
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
  if ((z1 >= 18.3 && z1 <= 18.4) || (z4 >= 59.8 && z4 <= 59.9)) {
    frameRate(30);
    z14 = random(140, 150);
    stroke(z14);
    ang5 = random(-360, 360);
  } else {
    if (z14 >= 38) {
      z14 = z14 * 0.995;
      stroke(z14);
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
  if ((z1 >= 18.3 && z1 <= 18.4) || (z4 >= 59.8 && z4 <= 59.9)) {
    z15 = random(140, 150);
    stroke(z15);
    ang6 = random(-240, 240);
  } else {
    if (z15 >= 37) {
      z15 = z15 * 0.995;
      stroke(z15);
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
  if ((z3 >= 18.3 && z3 <= 18.4) || (z6 >= 59.8 && z6 <= 59.9)) {
    frameRate(30);
    z16 = random(140, 150);
    stroke(z16);
    ang7 = random(-360, 360);
  } else {
    if (z16 >= 38) {
      z16 = z16 * 0.995;
      stroke(z16);
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
  if ((z3 >= 18.3 && z3 <= 18.4) || (z6 >= 59.8 && z6 <= 59.9)) {
    z17 = random(140, 150);
    stroke(z17);
    ang8 = random(-240, 240);
  } else {
    if (z17 >= 37) {
      z17 = z17 * 0.995;
      stroke(z17);
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

  push();
  push();
  if (z2 >= 25.8 && z2 <= 25.9) {
    frameRate(30);
    z18 = random(60, 70);
    stroke(z18);
    ang9 = random(-360, 360);
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
    ang10 = random(-240, 240);
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
    ang11 = random(-360, 360);
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
    ang12 = random(-240, 240);
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
