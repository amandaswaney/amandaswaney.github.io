// JavaScript for Pomodoro Timer
let timer;
let minutes = 25;
let seconds = 0;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            isTimerRunning = false;
            alert("Pomodoro session is over!");
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    minutes = 25;
    seconds = 0;
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);
