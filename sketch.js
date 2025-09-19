let l = 0;
let h = 0;
let tern = [0, 0, 0, 0, 0];

function setup() {
  //Lav canvas
  createCanvas(400, 400);

  l = width / 3;
  h = height / 3;
}

function draw() {
  //Baggrundsfarve
  background("beige");

  rect(width / 3, height / 3, width / 3, height / 3);
}

function terning(tal) {
  tal = random(1, 7);
  console.log(tal);

  textAlign(CENTER, CENTER);
  text(tal, width / 3, height / 3);
}

function ternclick(lx, ly) {
  //Hvis man har råd til upgraden sker dette
  if (mouseX > lx && mouseX < lx + l && mouseY > ly && mouseY < ly + h) {
    terning(tern[0]);
  }
}

function mouseClicked() {
  ternclick(width / 3, height / 3);
}
