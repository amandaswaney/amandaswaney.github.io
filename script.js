let minutes = 25;
let seconds = 0;
let isRunning = false;
let intervalId;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    updateTimeDisplay();
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            stopTimer();
            // You can add a sound or any other action when the timer finishes
            alert("Pomodoro session finished!");
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    updateTimeDisplay();
}

function updateTimeDisplay() {
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("time-display").innerText = `${formattedMinutes}:${formattedSeconds}`;
}
