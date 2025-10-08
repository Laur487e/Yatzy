let players = ["Spiller 1", "Spiller 2"];
let currentPlayer = 0; // 0 = spiller 1, 1 = spiller 2

//Variabler for terningerne
let tern = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
let etern = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

//Variabler for terningens størrelse
let tx = 10;
let ty1 = 10;
let ty2 = 0;
let ty3 = 0;
let ty4 = 0;
let ty5 = 0;
let l = 0;
let h = 0;

//Variabler for knappens størrelse
let kx = 240;
let ky = 10;
let kl = 140;
let kh = 20;

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

  textAlign(LEFT, TOP);
  fill(0);
  text(players[currentPlayer] + "s tur", 100, 10);

  tegntern(ty1, 0);
  tegntern(ty2, 1);
  tegntern(ty3, 2);
  tegntern(ty4, 3);
  tegntern(ty5, 4);

  knap();
  console.log(slag);
}

function knap() {
  fill(255);
  rect(kx, ky, kl, kh);
  if (slag < 3) {
    fill(0);
    text("Slå med terningerne", kx + kl / 2, ky + kh / 2);
  }
  if (slag == 3) {
    fill(0);
    text("Tryk for at skifte spiller", kx + kl / 2, ky + kh / 2);
    console.log(slag);
  }
  fill(0);
  text("Antal slag brugt: " + slag, kx + kl / 2, ky + kh * 2);
}

function slåterning(tal, n) {
  if (mouseX > kx && mouseX < kx + kl && mouseY > ky && mouseY < ky + kh) {
    if (etern[currentPlayer][n] == 0) {
      tal = floor(random(1, 7));

      tern[currentPlayer][n] = tal;
    }
  }
}

function antalslag() {
  if (mouseX > kx && mouseX < kx + kl && mouseY > ky && mouseY < ky + kh) {
    if (slag < 3) {
      slag = slag + 1;
    } else {
      tern = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      etern = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      slag = 0;
    }
  }
}

function ternclick(ly, n) {
  if (mouseX > tx && mouseX < tx + l && mouseY > ly && mouseY < ly + h) {
    if (etern[currentPlayer][n] == 0) {
      etern[currentPlayer][n] = tern[currentPlayer][n];
    } else {
      etern[currentPlayer][n] = 0;
    }
  }
}

function tegntern(ly, n) {
  if (etern[currentPlayer][n] > 0) {
    fill("limeGreen");
  } else {
    fill(255);
  }
  rect(tx, ly, l, h);

  fill(0);
  textAlign(CENTER, CENTER);
  text(tern[currentPlayer][n], tx + l / 2, ly + h / 2);
}

function mouseClicked() {
  slåterning(tern[currentPlayer][0], 0);
  slåterning(tern[currentPlayer][1], 1);
  slåterning(tern[currentPlayer][2], 2);
  slåterning(tern[currentPlayer][3], 3);
  slåterning(tern[currentPlayer][4], 4);

  ternclick(ty1, 0);
  ternclick(ty2, 1);
  ternclick(ty3, 2);
  ternclick(ty4, 3);
  ternclick(ty5, 4);

  antalslag();

  if (slag == 0) {
    if (currentPlayer == 1) {
      currentPlayer = 0;
    } else {
      currentPlayer = 1;
    }
    console.log("Nu er det " + players[currentPlayer] + "s tur");
  }

  console.log(etern);
}
