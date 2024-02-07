let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isPaused = false;

function startTimer() {
  if (!timer || isPaused) {
    timer = setInterval(updateTimer, 1000);
    isPaused = false;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resumeTimer() {
  if (isPaused) {
    timer = setInterval(updateTimer, 1000);
    isPaused = false;
  }
}

function stopTimer() {
  clearInterval(timer);
  isPaused = false;
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  isPaused = false;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById('timer').innerText = formattedTime;
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

// Adicionando funcionalidade para definir um tempo inicial
function setInitialTime() {
  const initialHours = parseInt(prompt("Horas:"));
  const initialMinutes = parseInt(prompt("Minutos:"));
  const initialSeconds = parseInt(prompt("Segundos:"));

  if (!isNaN(initialHours) && !isNaN(initialMinutes) && !isNaN(initialSeconds)) {
    hours = initialHours;
    minutes = initialMinutes;
    seconds = initialSeconds;
    updateDisplay();
  } else {
    alert("Por favor, insira valores numéricos válidos.");
  }
}
