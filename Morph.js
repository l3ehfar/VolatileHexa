let radius;
class Morph {
  constructor(r_) {
    radius = r_;
  }
  morphDo() {
    let startA = 0;
    let endA = 120;
    let start = polarToCartesian(radius, startA);
    let end = polarToCartesian(radius, endA);
    for (let a = startA; a < 360; a += spacing) {
      if (a % 2 == 0) {
        var a_ = a * 4;
        let cv = polarToCartesian(radius, a_);
        cirPath.push(cv);
        let amt = (a_ % 120) / (endA - startA);
        let tv = p5.Vector.lerp(start, end, amt);
        triPath.push(tv);

        if (a_ % 120 === 0) {
          startA = startA + 120;
          endA = endA + 120;
          start = polarToCartesian(radius, startA);
          end = polarToCartesian(radius, endA);
        }
      } else {
        let cv = polarToCartesian(radius, a);
        cirPath.push(cv);
        let amt = (a % 120) / (endA - startA);
        let tv = p5.Vector.lerp(start, end, amt);
        triPath.push(tv);

        if (a % 120 === 0) {
          startA = startA + 120;
          endA = endA + 120;
          start = polarToCartesian(radius, startA);
          end = polarToCartesian(radius, endA);
        }
      }
    }
  }

  morphShow() {
    rotate(map(mouseX, 0, width, 0, 45));
    let amt = 0; //(sin(theta) + 1) / 3.5
    theta += 0.1;
    beginShape();
    for (let i = 0; i < cirPath.length; i++) {
      let cv = cirPath[i];
      let tv = triPath[i];
      let x = lerp(cv.x, tv.x, amt);
      let y = lerp(cv.y, tv.y, amt);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
