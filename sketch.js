var n = 6;
let noiseMax = 0;
var carrier = [];
var amp = [];
var fft = [];
var peakDetect = [];
var vol;
var itsOn;
var c = 1;
var timer;
var last = 0;
EXT = ".mp3";
var step1 = 160;
var step2 = 100;
var step3 = 65;
var step4 = 40;
var note_i = -10,
  note_j = -10,
  note_i_2 = -10,
  note_j_2 = -10,
  note_i_3 = -10,
  note_j_3 = -10;
var noteColor = 40.0,
  noteColor2 = 100.0,
  noteColor3 = 40.0,
  noteColor4 = 100.0,
  noteColor5 = 40.0,
  noteColor6 = 100.0;
let mic;
var hit = false,
  hit2 = false,
  hit3 = false;
var frames;
var col = 255;
var circles;
function preload() {
  for (let i = 1; i < 82; ++i) {
    carrier[i] = loadSound("music/" + i + EXT);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  carrier[1].loop();
  circles = [];
  /*
  for (let i = 1; i < 4; ++i) {
    carrier[i].play();
    amp[i] = new p5.Amplitude();
    amp[i].setInput(carrier[i]);
    fft[i] = new p5.FFT();
    fft[i].setInput(carrier[i]);
    peakDetect[i] = new p5.PeakDetect(4000, 12000, 0.08);
  }
  */
  mic = new p5.AudioIn();

  mic.start();
}
function draw() {
  background(26);
  frameRate(40);
  timer = int(millis() - last);
  vol = mic.getLevel();
  if (vol >= 0.35 && vol <= 0.9) {
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
  /* vol = amp[3].getLevel();
  for (let i = 1; i < 4; ++i) {
    fft[i].analyze();
    peakDetect[i].update(fft[i]);
  }
  if (peakDetect[1].isDetected) {
    itsOn = 600;
  } else {
    itsOn *= 0.99;
  }*/
  autoTransition();
  mainShow(n);
}
function touchStarted() {
  getAudioContext().resume();
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
      this.r = 10;
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
}

function autoTransition() {
  if (timer >= 0.0 && timer <= 20000.0) {
    n = map(timer, 0.0, 20000.0, 6, 12);
  } else if (timer >= 20000 && timer <= 35000) {
    n = 12;
  } else if (timer >= 35000.0 && timer <= 37000.0) {
    n = map(timer, 35000.0, 37000.0, 12, 13);
  } else if (timer >= 37000.0 && timer <= 39500.0) {
    n = map(timer, 37000.0, 39500.0, 13, 15);
  } else if (timer >= 39500.0 && timer <= 42000.0) {
    n = map(timer, 39500.0, 42000.0, 15, 18);
  } else if (timer >= 42000.0 && timer <= 46000.0) {
    n = map(timer, 42000.0, 46000.0, 18, 24);
  } else if (timer >= 46000 && timer <= 74000) {
    n = 24;
  } else if (timer >= 74000 && timer <= 80000) {
    n = map(timer, 74000, 80000, 24, 36);
  } else if (timer >= 80000 && timer <= 111000) {
    n = 36;
  } else if (timer >= 111000 && timer <= 117000) {
    n = map(timer, 111000, 117000, 36, 24);
  } else if (timer >= 117000 && timer <= 123000) {
    n = map(timer, 117000, 123000, 24, 12);
  } else if (timer >= 123000 && timer <= 133000) {
    n = map(timer, 123000, 133000, 12, 6);
  } else if (timer >= 133000) {
    last = millis();
    n = 6;
  }
}
