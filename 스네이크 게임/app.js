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

const width = 10;
let interval;
let intervalTime = 1000;
function start() {
    squares[snake].classList.add("snake");
    interval = setInterval(runGame, intervalTime);
}
function runGame() {
    squares[snake].classList.remove("snake");
    snake = snake + 1;
    squares[snake].classList.add("snake");
}
starBtn.addEventListener("click", start);
moveSnake();
moveSnake();
moveSnake();

let intervalTime = 1000;
let dir = 1;

function start() {}
function runGame() {
    squares[snake].classList.remove("snake");
    snake = snake + dir;
    squares[snake].classList.add("snake");
}
function move(e) {
    if (e.keyCode === 37) {dir = -1}
    else if (e.keyCode === 39) {dir = 1}
    else if (e.keyCode === 38) {dir = -width}
    else if (e.keyCode === 40) {dir = width}
}
document.addEventListener("keyup", move)
startBtn.addEventListener("click", start)

let intervalTime = 1000;
let dir = 1;

function start() {}
function runGame() {
    squares[snake].classList.remove("snake");
    snake = snake + dir;
    squares[snake].classList.add("snake");
}-

function move(e) {
    if (e.keyCode === 37) {dir = -1}
    else if (e.keyCode === 39) {dir = 1}
    else if (e.keyCode === 38) {dir = -width}
    else if (e.keyCode === 40) {dir = width}
}
document.addEventListener("keyup", move)
startBtn.addEventListener("click", start)

let dir = 1
let appleLoc = 0;
function start() {
    makeApple()
    interval = setInterval(moveSnake, intervalTime);
}
function makeApple() {
    appleLoc = Math.floor(Math.random() * squares.length);
    squares[appleLoc].classList.add("apple");
}

function runGame() {
    snake.unshift(snake[0]+dir);
    if (squares[snake[0]].classList.contains("apple"))
    {54444444444
        makeApple();
    } else {
        const tail = snake.pop()
        squares[tail].classList.remove("snake");
    }
    squares[snake[0]].classList.add()
}
function runGame() {
    if (
        (snake[0]%width === width-1 && dir === 1)
        (snake[0]%width === 0 && dir === -1)
        (snake[0]+width >= width*width && dir === width)
        (snake[0]-width === width-1 && dir === 1)
        (squares[snake[0]+dir].classList.contains("snake"))

    ) {
        clearInterval(interval);
        return;
    }
}
function makeApple() {
    do {
        appleLoc = Math.floor(Math.random() * squares.length);
    } while (squares[appleLoc].classList.contains("apple"));
    squares[appleLoc].classList.add("apple");                                                                                                                                                                                                                      
}