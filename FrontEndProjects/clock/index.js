const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_CLOCK_DAY = 12;
const DEGREES_PER_SECOND = 360 / SECONDS_IN_MINUTE; // how much second hand rotates per second.
const DEGREES_PER_MINUTE = 360 / MINUTES_IN_HOUR; // how much minute hand rotates per minute.
const DEGREES_PER_HOUR = 360 / HOURS_IN_CLOCK_DAY; // how much hour hand rotaets per minute.

const secondHand = document.getElementsByClassName("second-hand")[0];
const minuteHand = document.getElementsByClassName("minute-hand")[0];
const hourHand = document.getElementsByClassName("hour-hand")[0];

setInterval(updateClock, 1000);

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
