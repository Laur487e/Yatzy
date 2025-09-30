//Variabler for terningerne
let tern = [0, 0, 0, 0, 0];
let etern = [0, 0, 0, 0, 0];

//Variabler for terningens størrelse
let tx = 10;
let ty1 = 10;
let ty2 = 0;
let ty3 = 0;
let ty4 = 0;
let ty5 = 0;
let l = 0;
let h = 0;

//Variable for status på antal slag hver spiller har slået
let slag = 0;

function setup() {
  createCanvas(400, 400);

  l = 50;
  h = 50;

  ty2 = ty1 + h + 10;
  ty3 = ty1 + h * 2 + 10 * 2;
  ty4 = ty1 + h * 3 + 10 * 3;
  ty5 = ty1 + h * 4 + 10 * 4;
}

function draw() {
  background("beige");

  tegntern(ty1, 0);
  tegntern(ty2, 1);
  tegntern(ty3, 2);
  tegntern(ty4, 3);
  tegntern(ty5, 4);

  rect(300, 10, 60, 20);
  console.log(slag);
}

function slåterning(tal, n) {
  if (mouseX > 300 && mouseX < 300 + 60 && mouseY > 10 && mouseY < 10 + 20) {
    if (etern[n] == 0) {
      tal = floor(random(1, 7));

      tern[n] = tal;
    }
  }
}

function antalslag() {
  if (mouseX > 300 && mouseX < 300 + 60 && mouseY > 10 && mouseY < 10 + 20) {
    if (slag < 3) {
      slag = slag + 1;
    } else {
      etern = [0, 0, 0, 0, 0];
      slag = 0;
    }
  }
}

function ternclick(ly, n) {
  if (mouseX > tx && mouseX < tx + l && mouseY > ly && mouseY < ly + h) {
    etern[n] = tern[n];
  }
}

function tegntern(ly, n) {
  rect(tx, ly, l, h);

  textAlign(CENTER, CENTER);
  text(tern[n], tx + l / 2, ly + h / 2);
}

function mouseClicked() {
  slåterning(tern[0], 0);
  slåterning(tern[1], 1);
  slåterning(tern[2], 2);
  slåterning(tern[3], 3);
  slåterning(tern[4], 4);

  ternclick(ty1, 0);
  ternclick(ty2, 1);
  ternclick(ty3, 2);
  ternclick(ty4, 3);
  ternclick(ty5, 4);

  antalslag();

  console.log(etern);
}
