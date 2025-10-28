let ball;
let bx;
let f = 0;
let e = 0;

function setup() {
  createCanvas(400, 400);
  ball = new Walker();
  bx = new Box();
}

function draw() {
  background(220);
  ball.move();
  ball.bouncethewall();
  ball.show();
  if (e === 1) {
    ball.gravity();
  } else {
    ball.topmove();
  }
  if (ball.t < 0.5) {
    if (ball.pos.y > bx.pos.y - bx.w / 2) {
      if (ball.pos.x < bx.pos.x + bx.w / 2) {
        ball.meetBox();
        f = 1;
      }else{
        bx.colorgreen();
        
      }
    }
  }
  if (ball.t > 0.5) {
    if (ball.pos.y > bx.pos.y - bx.w / 2) {
      if (ball.pos.x > bx.pos.x - bx.w / 2) {
        ball.meetBox();
        f = 1;
      }else{
        bx.colorgreen();
        
      
      }
    }
  }
  if (f === 1) {
    ball.splitBall();
    bx.redline();
    
  }
  if (f === 0&&ball.pos.y < bx.pos.y - bx.w / 2) {
    bx.see();
  }
  if (ball.w <= 1 || ball.k > 30) {
    ball.reset();
    f = 0;
    e = 0;
    p=0;
    ball.k = 0;
  }
 

}
function mouseClicked() {
  if (e === 0) {
    e = 1;
  }
}
