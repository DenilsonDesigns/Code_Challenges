// *** CONSTANTS ***
let IS_RUNNING = false;
let timeToShow = 0;
let timeAtClick = new Date().getTime();

// *** PAGE ELEMENTS ***
const stopStartButton = document.getElementById("stop-start-button");
const resetButton = document.getElementById("reset-button");
const minuteBody = document.getElementById("minute-body");
const secondBody = document.getElementById("second-body");
const millisecondBody = document.getElementById("millisecond-body");

// *** EVENT LISTENERS ***
stopStartButton.addEventListener("click", () => {
  IS_RUNNING = !IS_RUNNING;
  timeAtClick = new Date().getTime();
  updateStopStartButtonInnerHTML();
});

resetButton.addEventListener("click", () => {
  IS_RUNNING = false;
  timeToShow = 0;
  resetValues();
});

// *** MAIN LOOP ***
setInterval(updateTimer, 1);

function updateTimer() {
  if (IS_RUNNING) {
    let currentTime = new Date().getTime();
    let timeToAdd = currentTime - timeAtClick;

    timeToShow = timeToShow + timeToAdd;
    timeAtClick = currentTime;
    updateNumberBody();
  }
}

function updateStopStartButtonInnerHTML() {
  if (IS_RUNNING) {
    stopStartButton.innerHTML = "Pause";
  } else {
    stopStartButton.innerHTML = "Start";
  }
}

function updateNumberBody() {
  const [minutes, seconds, milliseconds] = getTimeBrokenDown(timeToShow);
  const [minutesFormatted, secondsFormatted, millisecondsFormatted] =
    getFormattedTimerValues({
      minutes,
      seconds,
      milliseconds,
    });

  updateFaceValues({
    minutesFormatted,
    secondsFormatted,
    millisecondsFormatted,
  });
}

function getTimeBrokenDown() {
  const totalSeconds = timeToShow / 1000;

  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  const milliseconds = timeToShow % 1000;

  return [minutes, remainingSeconds, milliseconds];
}

function getFormattedTimerValues({ minutes, seconds, milliseconds }) {
  return [
    getNumberAsTwoBase(minutes),
    getNumberAsTwoBase(seconds),
    getNumberAsTwoBase(milliseconds),
  ];
}

function getNumberAsTwoBase(num) {
  return String(parseInt(num, 10)).padStart(2, "0").slice(0, 2);
}

function updateFaceValues({
  minutesFormatted,
  secondsFormatted,
  millisecondsFormatted,
}) {
  minuteBody.innerHTML = minutesFormatted;
  secondBody.innerHTML = secondsFormatted;
  millisecondBody.innerHTML = millisecondsFormatted;
}

function resetValues() {
  IS_RUNNING = false;
  timeToShow = 0;
  updateFaceValues({
    minutesFormatted: "00",
    secondsFormatted: "00",
    millisecondsFormatted: "00",
  });
}
