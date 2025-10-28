
class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 8);
    this.vel = createVector(5, 0);
    this.w = 20;
    this.d = 8;
    this.r = 0;
    this.l = 0;
    this.t = random();
    this.k = 0;
  }

  move() {
    this.pos.add(this.vel);
  }

  topmove() {
    if (this.pos.x > width - 50) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.x < 50) {
      this.vel.x = this.vel.x * -1;
    }
  }

  show() {
    if (this.t < 0.5) {
      fill(255,255,255);
      stroke(0);
      circle(this.pos.x, this.pos.y, this.w);
    } else {
      fill(255,255,255);
      stroke(0);
      rect(this.pos.x, this.pos.y, this.w);
    }
  }

  gravity() {
    let g = createVector(0, 0.5);
    this.vel.add(g);
  }
  reset() {
    this.pos = createVector(width / 2, height / 8);
    this.vel = createVector(2, 0);
    this.w = 20;
    this.d = 8;
    this.r = 0;
    this.l = 0;
    this.t = random();
  }
  meetBox() {
    this.vel.y = this.vel.y * -0.4;
  }
  splitBall() {
    this.w = this.d;
    if (this.r < 35) {
      this.r = this.r + random(0.7, 0.9);
    }
    if (this.l > -45) {
      this.l = this.l - random(0.9, 1.2);
    }
    if (this.d > 0) {
      this.d = this.d - 0.2;
    }
    if (this.t < 0.5) {
      circle(this.pos.x + this.r, this.pos.y, this.d);
      circle(this.pos.x + this.l, this.pos.y, this.d);
    } else {
      rect(this.pos.x + this.r, this.pos.y, this.d);
      rect(this.pos.x + this.l, this.pos.y, this.d);
    }
  }

  bouncethewall() {
    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -0.8;
    }
    if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -0.8;
    }
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.4;
      this.k++;
    }
  }

}
