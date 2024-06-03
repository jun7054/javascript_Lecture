const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")
const mole = document.querySelector(".mole")

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

const squares = document.querySelectorAll(".square")
squares[0].classList.add("mole")



    randomSquare();

    function randomSquare() {
        squares.forEach(function(square) {
            square.classList.remove('mole')
        })
        let randomSquare = squares(Math.random() * 9);
        
    }

function moveInterval() {
    timer = setInterval(randomSquare, 1000)
}

moveInterval()

let result = 0;
let targetPosition = null;
let currentTime = 60;
let timer;
let countdownTimer;

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

for(let i=0; i < 9; i++) {
    squares[i].addEventListener('mousedown', function() {
        if (i === targetPosition) {
            result++
            score.textContent = result
            targetPosition = null;
        }
    })
}
function countdown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(timer)
        clearInterval(countdownTimer)
        alert("GAME OVER! Score : " + result)
    }
}