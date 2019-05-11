var z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12, z13, z14, z15;

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

  if (dist(mouseX, 0, width / 2, 0) <= 100 * sin(60)) {
    z1 = 200;
    stroke(z1);
  } else {
    if (z1 >= 30) {
      z1 = z1 * 0.995;
      stroke(z1);
    }
  }
  push();
  translate(width / 2, height / 2 - d);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + d);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  push();
  translate(width / 2, height / 2 - 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();
  push();
  translate(width / 2, height / 2 + 4 * h);
  if (n == 24) {
    rotate(15);
  }
  polygon(0, 0, n);
  pop();

  stroke(30);
  if (dist(mouseX, 0, width / 2 + w, 0) <= 100 * sin(60)) {
    z2 = 200;
    stroke(z2);
  } else {
    if (z2 >= 30) {
      z2 = z2 * 0.995;
      stroke(z2);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 + w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - w, 0) <= 100 * sin(60)) {
    z3 = 200;
    stroke(z3);
  } else {
    if (z3 >= 30) {
      z3 = z3 * 0.995;
      stroke(z3);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 - w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 2 * w, 0) <= 100 * sin(60)) {
    z4 = 200;
    stroke(z4);
  } else {
    if (z4 >= 30) {
      z4 = z4 * 0.995;
      stroke(z4);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 + 2 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - 2 * w, 0) <= 100 * sin(60)) {
    z5 = 200;
    stroke(z5);
  } else {
    if (z5 >= 30) {
      z5 = z5 * 0.995;
      stroke(z5);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 - 2 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  //expanding
  stroke(30);
  if (dist(mouseX, 0, width / 2 - 3 * w, 0) <= 100 * sin(60)) {
    z6 = 200;
    stroke(z6);
  } else {
    if (z6 >= 30) {
      z6 = z6 * 0.995;
      stroke(z6);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 - 3 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 3 * w, 0) <= 100 * sin(60)) {
    z7 = 200;
    stroke(z7);
  } else {
    if (z7 >= 30) {
      z7 = z7 * 0.995;
      stroke(z7);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 + 3 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 4 * w, 0) <= 100 * sin(60)) {
    z9 = 200;
    stroke(z9);
  } else {
    if (z9 >= 30) {
      z9 = z9 * 0.995;
      stroke(z9);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 + 4 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - 4 * w, 0) <= 100 * sin(60)) {
    z8 = 200;
    stroke(z8);
  } else {
    if (z8 >= 30) {
      z8 = z8 * 0.995;
      stroke(z8);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 - 4 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - 5 * w, 0) <= 100 * sin(60)) {
    z10 = 200;
    stroke(z10);
  } else {
    if (z10 >= 30) {
      z10 = z10 * 0.995;
      stroke(z10);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 - 5 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 5 * w, 0) <= 100 * sin(60)) {
    z11 = 200;
    stroke(z11);
  } else {
    if (z11 >= 30) {
      z11 = z11 * 0.995;
      stroke(z11);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 + 5 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 6 * w, 0) <= 100 * sin(60)) {
    z12 = 200;
    stroke(z12);
  } else {
    if (z12 >= 30) {
      z12 = z12 * 0.995;
      stroke(z12);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 + 6 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - 6 * w, 0) <= 100 * sin(60)) {
    z13 = 200;
    stroke(z13);
  } else {
    if (z13 >= 30) {
      z13 = z13 * 0.995;
      stroke(z13);
    }
  }
  for (var i = -4; i <= 4; i += 2) {
    push();
    translate(width / 2 - 6 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 + 7 * w, 0) <= 100 * sin(60)) {
    z14 = 200;
    stroke(z14);
  } else {
    if (z14 >= 30) {
      z14 = z14 * 0.995;
      stroke(z14);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 + 7 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }

  stroke(30);
  if (dist(mouseX, 0, width / 2 - 7 * w, 0) <= 100 * sin(60)) {
    z15 = 200;
    stroke(z15);
  } else {
    if (z15 >= 30) {
      z15 = z15 * 0.995;
      stroke(z15);
    }
  }
  for (var i = -5; i <= 5; i += 2) {
    push();
    translate(width / 2 - 7 * w, height / 2 + i * h);
    if (n == 24) {
      rotate(15);
    }
    polygon(0, 0, n);
    pop();
  }
}
