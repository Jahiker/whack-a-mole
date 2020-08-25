const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const button = document.querySelector('.button');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function ramdonSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assign the is of the randomPosition to hitPosition for us later
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(ramdonSquare, 600);
}

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

let timerId = setInterval(countDown, 1000);

button.addEventListener('click', () => {
    reload();
})

function reload() {
    location.reload();
}