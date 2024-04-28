let timer;
let time = 1500; // 25 minutes in seconds
let isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  stopTimer();
  time = 1500;
  updateTimerDisplay();
}

function updateTimer() {
  time--;
  if (time <= 0) {
    stopTimer();
    alert("Time's up!");
    time = 1500; // Reset to 25 minutes
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
