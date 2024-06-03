const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const scoreDisplay = document.querySelector("#score");
const width = 10;
let snake = 0;

function start() {
    squares[snake].classList.add("snake");
}
startBtn.addEventListener("click", start);

function start() {}
function runGame() {
    snake = snake + 1;
    squares[snake].classList.add("snake");
}

startBtn.addEventListener("click", start);
moveSnake();
moveSnake();

function start() {
    runGame();
    runGame();
}
function runGame() {
    snake = snake + 1;
    squares[snake]
}