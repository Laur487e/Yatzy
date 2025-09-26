let l = 0;
let h = 0;
let tern = [0, 0, 0, 0, 0];
let tx = 10;
let ty = 10;

function setup() {
  createCanvas(400, 400);

  l = 50;
  h = 50;
}

function draw() {
  background("beige");

  tegntern(tx, ty, 0);
  tegntern(tx, ty + h * 1 + 10, 1);
  tegntern(tx, ty + h * 2 + 10 * 2, 2);
  tegntern(tx, ty + h * 3 + 10 * 3, 3);
  tegntern(tx, ty + h * 4 + 10 * 4, 4);

  rect(300, 10, 60, 20);
}

function slåterning(tal, n) {
  if (mouseX > 300 && mouseX < 300 + 60 && mouseY > 10 && mouseY < 10 + 20) {
    tal = floor(random(1, 7));

    tern[n] = tal;
  }
}

function ternclick(lx, ly) {
  if (mouseX > lx && mouseX < lx + l && mouseY > ly && mouseY < ly + h) {
  }
}

function tegntern(lx, ly, n) {
  rect(lx, ly, l, h);

  textAlign(CENTER, CENTER);
  text(tern[n], lx + l / 2, ly + h / 2);
}

function mouseClicked() {
  slåterning(tern[0], 0);
  slåterning(tern[1], 1);
  slåterning(tern[2], 2);
  slåterning(tern[3], 3);
  slåterning(tern[4], 4);

  console.log(tern);
}
