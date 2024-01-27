// @TODO: make the dot have concentric circles.
// @TODO: display: none for dot

//  *** Game Constants ***

// *** DOM Elements ***
const dot = document.getElementById("dot-outer");
const canvas = document.getElementById("canvas");

// *** Event Listeners ***
dot.addEventListener("click", () => {
  console.log("dot clicked");
  dotClickedHandler();
});

// *** Main Game Loop ***
gameLoop();

// *** Functions ***
function gameLoop() {
  const [xCoord, yCoord] = getCoordinatesInsideCanvas();
  renderDot({ xCoord, yCoord });
}

function renderDot({ xCoord, yCoord }) {
  dot.style.display = "flex";
  dot.style.position = "absolute";
  dot.style.top = `${yCoord + 31}px`;
  dot.style.left = `${xCoord}px`;
}

function getCoordinatesInsideCanvas() {
  const canvasHeight = canvas.offsetHeight;
  const canvasWidth = canvas.offsetWidth;

  const xCoord = Math.random() * (canvasWidth - 30);
  const yCoord = Math.random() * (canvasHeight - 30);
  console.log(xCoord, yCoord);
  return [xCoord, yCoord];
}

function dotClickedHandler() {
  // get new coordinates
  const [xCoord, yCoord] = getCoordinatesInsideCanvas();
  renderDot({ xCoord, yCoord });
}
