// startGame
// This will handle the start and pause of the timer and period
// Everytime is clicked, it will start the new period, and the timer will reset to the first value.
// If time hasn't finished and the button is clicked, it will pause the timer.

const INITIAL_TIME = 60 * 10;
let timerId;
let timeLeft = INITIAL_TIME;
let isRunning = false;
let timerParagraph = document.getElementById('timer');

function startRound() {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(updateTimer, 1000);
    }
}

function pauseRound() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerId);
    }
}

function resetRound() {
    clearInterval(timerId);
    timeLeft = INITIAL_TIME;
    isRunning = false;
    timerParagraph.textContent = formatTime(timeLeft);
}

function updateTimer() {
    if (isRunning) {
        timeLeft--;
        timerParagraph.textContent = formatTime(timeLeft);
    }
    if (timeLeft === 0) {
        resetRound();
    }
}

function formatTime(time) {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    return `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}
