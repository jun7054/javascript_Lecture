const stageSize = 15;

//스테이지 생성
for(let i=0; i < stageSize*stageSize; i++) {
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);
}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const display = document.querySelector("#display");


function makePlayer() { }

function movePlayer(e) { }

document.addEventListener("keyup", movePlayer)

let playerLoc = stageSize*(stageSize-2)+7

function makePlayer() {
    stage[playerLoc].classList.add("player");
}
makePlayer()

function movePlayer(e) {  }

document.addEventListener("keyup", movePlayer)

function movePlayer(e) {
    stage[playerLoc].classList.remove("player");
    switch (e.keyCode) {
        case 37:
            if (playerLoc % stageSize !== 0) {playerLoc--;}
            break;
        case 39:
            if (playerLoc % stageSize < stageSize-1) {playerLoc++;}
            break;
    }
    stage[playerLoc].classList.add("player");
}


function makePlayer() { }

function movePlayer() { }

interval = setInterval(moveInvader, 1000);

let invaderLoc = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]
let gameInterval;

function makeInvader() {
    invadersLoc.forEach(function(invader) {
        stage[invader].classList.add("invader")
    })
}

function moveInvader() {
    invaderLoc.forEach(function(invader) {
        stage[invader].classList.remove("invader");
    })
    for(let i=0; i < invaderLoc.length; i++) {
        invaderLoc[i]++;
        stage[invaderLoc[i]].classList.add("invader");
    }
}
gameInterval = setInterval(moveInvader, 1000);

function gameStart() { }

function gameStop() { }

function gameRun() { }

function displayStatus() { }

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);

function gameStart() {
    makePlayer();
    makeInvader();
    gameInterval = setInterval(moveInvader, 1000);
    document.addEventListener("keyup", movePlayer);
}

function gameStop() {
    clearInterval(gameInterval);
    document.removeEventListener("keyup", movePlayer);
}

function gameStart() {
    displayStatus();
    gameInterval = setInterval(gameRun, 1000);
    document.addEventListener("keyup", movePlayer);
    gameRun();
}
function gameRun() {
    moveInvader();
}
function displayStatus() {
    display.innerText = invaderLoc.length + "/" + invadersLoc.length
}

function gameStart() {
    stage[playerLoc].classList.remove("player");
    invadersLoc.forEach(function(invader) {
        stage[invader].classList.remove("invader");
    });
    playerLoc = stageSize*(stageSize-2)+7
    invadersLoc = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]
}