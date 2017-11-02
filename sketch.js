function setup() {
  // put setup code here
  createCanvas(800, 600);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    color(0, 100, 200);
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
