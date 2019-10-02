function glitch() {
  for (let i = 0; i < img[0].height / 60; i++) {
    //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
    drawStreak();
  }
  for (let i = 0; i < img[1].height / 60; i++) {
    //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
    drawStreak();
  }
}

function drawStreak() {
  let y = floor(random(height));
  let h = floor(random(20, 30)); //floor(random(1, 100));
  let xChange = floor(
    map(
      noise(y * yNoiseChange, (vol * 0.3 + frameCount) * timeNoiseChange),
      0.06,
      0.94,
      -maxXChange,
      maxXChange
    )
  ); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(
    xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1
  );

  if (
    random() <
    (dist(pmouseX, pmouseY, mouseX, mouseY) / width) * 0.3 + 0.0015
  )
    filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false;
  }

  //if(random()<0.03)tint(random(255), random(255), random(255));

  //copy(img, 0, y, img.width, h, xChange - maxXChange, -maxYChange + y + yChange, img.width, h);
  image(
    buffer,
    xChange - maxXChange,
    -maxYChange + y + yChange,
    buffer.width,
    h,
    0,
    y,
    buffer.width,
    h
  );
  image(
    img[1],
    xChange - maxXChange,
    -maxYChange + y + yChange,
    img[1].width,
    h,
    0,
    y,
    img[1].width,
    h
  );
}
/*
function glitch2() {
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
function Drop() {
  this.x = random(-500, height);
  this.y = random(-500, width);
  this.y2 = random(width + 500, width / 2);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.y2 = this.y2 - this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > width / 2 - 400) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
    if (this.y2 < width / 2 + 300) {
      this.y2 = random(width + 200, width + 100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 4, 6);
    strokeWeight(thick);
    stroke(random(0, 100));
    line(this.y2, this.x, this.y2 + this.len * 10, this.x);
    line(this.y, this.x, this.y + this.len * 10, this.x);
  };
}
/*
function glitch() {
  var total = 5;
  var count = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}
function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 2;
    }
    if (this.r >= 30) {
      this.r = 5;
    }
  };

  this.show = function() {
    noStroke();
    fill(random(50, 255), 100);
    rectMode(CENTER);
    rect(this.x, this.y, this.r * 2, this.r * 1.5);
    rect(this.y * 2, this.x, this.r * 1.5, this.r * 2);
    rect(this.x * 2, this.y, this.r * 2, this.r);
  };

  this.edges = function() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    );
  };
}
function newCircle() {
  var x = random(width);
  var y = random(height);
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}*/
