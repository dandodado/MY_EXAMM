class Box {
  constructor() {
    this.pos = createVector(width / 2, height - 50);
    this.vel = createVector();
    this.w = 200;

  }

  see() {
    
    fill(250, 250, 250);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w);

    circle(width - 50, height - 75, 30);
    rect(50, height - 75, 30);
    stroke(0);
    line(0, this.pos.y - this.w / 2, width, this.pos.y - this.w / 2);
  }
  colorgreen() {
    fill(250, 250, 250);
     stroke(0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w);

    fill(0, 250, 0);
    rect(this.pos.x, this.pos.y, this.w);
   
    circle(width - 50, height - 75, 30);
    rect(50, height - 75, 30);
     stroke(0, 250, 0);
    line(0, this.pos.y - this.w / 2, width, this.pos.y - this.w / 2);
  }
  redline() {
    fill(250, 250, 250);
     stroke(0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w);

    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, this.w);
   
    circle(width - 50, height - 75, 30);
    rect(50, height - 75, 30);
     stroke(250, 0, 0);
    line(0, this.pos.y - this.w / 2, width, this.pos.y - this.w / 2);
  }
}
