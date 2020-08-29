const startScreen = document.querySelector(".startScreen");
const gameAreaLeft = document.querySelector(".gameAreaLeft");
const gameAreaRight = document.querySelector(".gameAreaRight");

//Creating player object
let player1 = { speed: 5 };
let player2 = { speed: 5 };

//Creating keys object to map keys pressed
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  s: false,
  a: false,
  d: false,
  W: false,
  S: false,
  A: false,
  D: false,
};

//EventListeners
startScreen.addEventListener("click", start);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

//Functions
function start() {
  // start() fxn willcreate playing area and then calls gameplay() fxn

  startScreen.classList.add("hide");
  gameAreaRight.classList.remove("hide");
  gameAreaLeft.classList.remove("hide");

  player1.ready = true;
  player2.ready = true;
  window.requestAnimationFrame(gamePlay);

  //Generating stripes on road
  for (x = 0; x < 5; x++) {
    let roadLineLeft1 = document.createElement("div");
    roadLineLeft1.setAttribute("class", "roadLineLeft1");
    roadLineLeft1.y = x * 150;
    roadLineLeft1.style.top = roadLineLeft1.y + "px";
    gameAreaLeft.appendChild(roadLineLeft1);

    let roadLineLeft2 = document.createElement("div");
    roadLineLeft2.setAttribute("class", "roadLineLeft2");
    roadLineLeft2.y = x * 150;
    roadLineLeft2.style.top = roadLineLeft2.y + "px";
    gameAreaLeft.appendChild(roadLineLeft2);

    let roadLineRight1 = document.createElement("div");
    roadLineRight1.setAttribute("class", "roadLineRight1");
    roadLineRight1.y = x * 150;
    roadLineRight1.style.top = roadLineRight1.y + "px";
    gameAreaRight.appendChild(roadLineRight1);

    let roadLineRight2 = document.createElement("div");
    roadLineRight2.setAttribute("class", "roadLineRight2");
    roadLineRight2.y = x * 150;
    roadLineRight2.style.top = roadLineRight2.y + "px";
    gameAreaRight.appendChild(roadLineRight2);
  }

  //Adding Player Cars
  let carPlayer1 = document.createElement("div");
  carPlayer1.setAttribute("class", "carPlayer1");
  gameAreaLeft.appendChild(carPlayer1);

  let carPlayer2 = document.createElement("div");
  carPlayer2.setAttribute("class", "carPlayer2");
  gameAreaRight.appendChild(carPlayer2);

  //Assigning positions for controlling movement
  player1.x = carPlayer1.offsetLeft;
  player1.y = carPlayer1.offsetTop;

  player2.x = carPlayer2.offsetLeft;
  player2.y = carPlayer2.offsetTop;
}

function gamePlay() {
  let areaLeft = gameAreaLeft.getBoundingClientRect();
  let carPlayer1 = document.querySelector(".carPlayer1");
  //   console.log(areaLeft);

  let areaRight = gameAreaRight.getBoundingClientRect();
  let carPlayer2 = document.querySelector(".carPlayer2");
  //   console.log(areaRight);

  //Adding movement to the player cars
  if (player1.ready) {
    if ((keys.w || keys.W) && player1.y > 0) {
      player1.y -= player1.speed;
    }
    if ((keys.s || keys.S) && player1.y < areaLeft.bottom - 70) {
      player1.y += player1.speed;
    }
    if ((keys.a || keys.A) && player1.x > 0) {
      player1.x -= player1.speed;
    }
    if ((keys.d || keys.D) && player1.x < areaLeft.width - 50) {
      player1.x += player1.speed;
    }
  }

  if (player2.ready) {
    if (keys.ArrowUp && player2.y > 0) {
      player2.y -= player2.speed;
    }
    if (keys.ArrowDown && player2.y < areaRight.bottom - 70) {
      player2.y += player2.speed;
    }
    if (keys.ArrowLeft && player2.x > 0) {
      player2.x -= player2.speed;
    }
    if (keys.ArrowRight && player2.x < areaRight.width - 50) {
      player2.x += player2.speed;
    }
  }

  //Changing the position of cars
  carPlayer1.style.top = player1.y + "px";
  carPlayer1.style.left = player1.x + "px";

  carPlayer2.style.top = player2.y + "px";
  carPlayer2.style.left = player2.x + "px";

  window.requestAnimationFrame(gamePlay);
}

//Functions for registering the keys pressed
function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true;
  // console.log(e.key);
  // console.log(keys);
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false;
  // console.log(e.key);
  // console.log(keys);
}
