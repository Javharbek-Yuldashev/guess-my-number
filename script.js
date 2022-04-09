'use strict';

const random = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const background = document.querySelector('body');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const again = document.querySelector('.again');

let count = 10;
let highCount = 0;
let setLocal = localStorage.setItem('highCount', 0);

const statictics = () => {
    count--;
    highCount++;
    score.textContent = count;
};

const gameOver = () => {
    if (count === 0) {
        background.style.backgroundColor = 'red';
        number.textContent = '😔';
    }
};

check.addEventListener('click', function () {
    const value = document.querySelector('.guess').value;

    if (value > random) {
        message.textContent = 'Too High';
        statictics();
        gameOver();
    } else if (value < random) {
        message.textContent = 'Too Low';
        statictics();
        gameOver();
    } else {
        message.textContent = 'CORRECT';
        background.style.backgroundColor = 'green';
        number.textContent = random;
        statictics();
        highScore.textContent = highCount;
    }

});

again.addEventListener('click', function () {
    random = Math.trunc(Math.random() * 20) + 1;
    count = 10;
    score.textContent = count;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    body.style.background = '#222';
    document.querySelector('.guess').value = '';
});
