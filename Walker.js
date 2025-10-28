class Walker {
  
  constructor() {
    this.pos = createVector(width/10, height/2);
    this.vel = createVector(0);
    this.acc = createVector();
  	this.w = 10;
  }
  
  move() {
    // 새로운 속도 만들기
    // this.vel = createVector(random..., random..)
   
     this.pos.add(this.vel);
    this.vel.limit(3);
    
  }
  
//   show() {
//     circle(this.pos.x, this.pos.y, this.w);
//   }
  
  
  pass() {
    if (this.pos.x > width) {
      this.pos.x = 0
    }
    if (this.pos.x < 0) {
      this.pos.x = width
    }
     if (this.pos.y > height) {
      this.pos.y = 0
    }
    if (this.pos.y < 0) {
      this.pos.y = height
    }
    
  }
  tomouse() {
     let mouse = createVector(mouseX, mouseY);
let dir = p5.Vector.sub(mouse, this.pos);
dir.mult(0.0018);
this.acc = dir;
    this.vel.add(this.acc);
 this.pos.add(this.vel);

    
    
    
  }
  
  
}