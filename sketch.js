let ball;

function setup() {
  new Canvas(500, 500);

  ball = new Sprite();
  ball.diameter = 50;
}

function draw() {
  0.2;

  background("skyblue");

  if (mouse.presses()) {
    ball.speed = 10;
    ball.moveTo(mouse);
  }
}
