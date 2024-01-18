// *** Constants
const SECONDS_IN_MINUTE = 60;
const HOURS_ON_CLOCKFACE = 12;
const MINUTES_ON_CLOCKFACE = 60;

// *** DOM Elements
const clockBody = document.getElementById("clock-body");
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

// *** Functions
function tikTock() {
  const currentDate = new Date();
  const currentSeconds = currentDate.getSeconds();
  const currentMinutes = currentDate.getMinutes();
  const currentHours = currentDate.getHours();

  renderSecondHand(currentSeconds);
  renderMinuteHand(currentMinutes);
  renderHourHand(currentHours);
}

function renderSecondHand(currentSeconds) {
  secondHand.style.transformOrigin = "left";
  secondHand.style.transform = `rotate(${
    (currentSeconds / SECONDS_IN_MINUTE) * 360 - 90
  }deg)`;
}

function renderMinuteHand(currentMinutes) {
  minuteHand.style.transformOrigin = "left";
  minuteHand.style.transform = `rotate(${
    (currentMinutes / MINUTES_ON_CLOCKFACE) * 360 - 90
  }deg)`;
}

function renderHourHand(currentHours) {
  hourHand.style.transformOrigin = "left";
  hourHand.style.transform = `rotate(${
    (currentHours / HOURS_ON_CLOCKFACE) * 360 - 90
  }deg)`;
}

function renderFaceNumbers() {
  const numberHolder = document.createElement("div");

  const clockRadius = 190;
  const centerX = 200;
  const centerY = 200;

  const numNumbers = 12;

  for (let i = 1; i <= numNumbers; i++) {
    const angle = (i / numNumbers) * 2 * Math.PI - Math.PI / 2;
    const numberX = centerX + clockRadius * Math.cos(angle);
    const numberY = centerY + clockRadius * Math.sin(angle);

    const numberDiv = document.createElement("div");
    numberDiv.className = "clock-number";
    numberDiv.style.left = `${numberX - 10}px`;
    numberDiv.style.top = `${numberY - 10}px`;
    numberDiv.textContent = i;
    numberHolder.appendChild(numberDiv);
  }

  clockBody.appendChild(numberHolder);
}

renderFaceNumbers();
setInterval(() => {
  tikTock();
}, 1);
