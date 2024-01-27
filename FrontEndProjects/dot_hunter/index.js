//  *** Game Constants ***
let timeElapsed = 0;
const MAX_TIME = 10;

// *** DOM Elements ***
const body = document.getElementsByTagName("body")[0];
const canvas = document.getElementById("canvas");
const progressBar = document.getElementById("bar-progress");
const dot = document.getElementById("dot-outer");

// *** Event Listeners ***
dot.addEventListener("click", dotClickedHandler);

canvas.addEventListener("click", () => {
  canvasClickedHandler();
});
// *** Main Game Loop ***
gameLoop();

// *** Functions ***
function gameLoop() {
  const [xCoord, yCoord] = getCoordinatesInsideCanvas();
  renderDot({ xCoord, yCoord });
  renderTimerBar();
}

function renderDot({ xCoord, yCoord }) {
  dot.style.display = "flex";
  dot.style.position = "absolute";
  dot.style.top = `${yCoord}px`;
  dot.style.left = `${xCoord}px`;
}

function renderTimerBar() {
  timeElapsed += 6;
  requestAnimationFrame(renderTimerBar);

  const unitsElapsed = timeElapsed / 1000;

  const barWidth = Math.max(MAX_TIME - unitsElapsed, 0) * 10;
  if (barWidth === 0) {
    gameOverHandler();
  }
  progressBar.style.width = `${barWidth}%`;
}

function getCoordinatesInsideCanvas() {
  const canvasHeight = canvas.offsetHeight;
  const canvasWidth = canvas.offsetWidth;

  const xCoord = Math.random() * (canvasWidth - 30);
  const yCoord = Math.random() * (canvasHeight - 30);
  return [xCoord, yCoord];
}

function dotClickedHandler(e) {
  e.stopPropagation();
  const [xCoord, yCoord] = getCoordinatesInsideCanvas();
  renderDot({ xCoord, yCoord });
  timeElapsed -= 1000;
}

function canvasClickedHandler() {
  body.style.backgroundColor = "red";
  setTimeout(() => {
    body.style.backgroundColor = "rgba(56, 125, 125, 0.418)";
  }, 100);
  timeElapsed += 1000;
}

function gameOverHandler() {
  body.style.backgroundColor = "red";
  dot.removeEventListener("click", dotClickedHandler);
}
