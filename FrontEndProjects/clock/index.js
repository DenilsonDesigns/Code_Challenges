const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_CLOCK_DAY = 12;
const DEGREES_PER_SECOND = 360 / SECONDS_IN_MINUTE;
const DEGREES_PER_MINUTE = 360 / MINUTES_IN_HOUR;
const DEGREES_PER_HOUR = 360 / HOURS_IN_CLOCK_DAY;

const secondHand = document.getElementsByClassName("second-hand")[0];
const minuteHand = document.getElementsByClassName("minute-hand")[0];
const hourHand = document.getElementsByClassName("hour-hand")[0];

const clockBody = document.getElementsByClassName("clock-body")[0];

generateFaceNumbers(clockBody, 4);

setInterval(updateClock, 1);

function updateClock() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const secondsToUpdate = seconds * DEGREES_PER_SECOND - 90;
  const minutes = currentTime.getMinutes();
  const minutesToUpdate = minutes * DEGREES_PER_MINUTE - 90;
  const hours = currentTime.getHours();
  const hoursToUpdate = hours * DEGREES_PER_HOUR - 90;

  updateHand(secondHand, secondsToUpdate);
  updateHand(minuteHand, minutesToUpdate);
  updateHand(hourHand, hoursToUpdate);
}

function updateHand(elementToUpdate, param) {
  elementToUpdate.style.transform = `rotate(${param}deg)`;
}

function generateFaceNumbers(container, numsOnFace = 12) {
  const increment = 12 / numsOnFace;

  for (var i = 12; i >= 1; i -= increment) {
    var paragraph = document.createElement("p");
    paragraph.style.setProperty("--n", i);

    var span = document.createElement("span");
    span.style.setProperty("--inner", i);
    span.textContent = i;

    paragraph.appendChild(span);

    container.appendChild(paragraph);
  }
}
