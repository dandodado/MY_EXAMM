let ball;
let ball2;

function setup() {
  createCanvas(800, 800);
  ball = new Walker();
  ball2 = new Walker2();
}

function draw() {
  background(220, 5);
  ball.move();
  //ball.show();
  ball.pass();
  ball.tomouse();
  ball2.move();
  ball2.pass();
  //ball2.show();
  ball2.tomouse();
  if (dist(ball.pos.x, ball.pos.y, ball2.pos.x, ball2.pos.y) < 30) {
    stroke(240,128,128);
    strokeWeight(2);
  } else {
    stroke('LimeGreen');
    strokeWeight(1);
  }
  if (dist(ball.pos.x, ball.pos.y, ball2.pos.x, ball2.pos.y) > 150) {
    stroke(240,128,128);
    strokeWeight(2);
  }

  line(ball.pos.x, ball.pos.y, ball2.pos.x, ball2.pos.y);
}
