import Queue from "../../Queue/Queue.js";
import Snake from "./Snake.js";

// *** CONSTANTS ***
const CANVAS_SIZE = 12;
const GAME_SPEED = 1000;
const SNEK_BODY_CHAR = "■";
// const NUM_FRUITS_ON_SCREEN = 1;

// *** DOM ELEMENTS
const canvas = document.getElementById("canvas");

// *** GAME ELEMENTS
// generate snek body based on CANVAS_SIZE;
const snekQueue = generateStartingSnekQueue(CANVAS_SIZE);
const snek = new Snake(snekQueue);
console.log(snek);

/// *** MAIN LOOP ***
main();

function main() {
  paintCanvas(CANVAS_SIZE);
  renderSnek();
  // maybe just generate the coords, then place them in an array globally.
  // then update snek will check for them,
  //   placeFruits(NUM_FRUITS_ON_SCREEN, snek);

  setInterval(() => {
    updateSnek();
    renderSnek();
  }, GAME_SPEED);
}

function paintCanvas(gridSize = 10) {
  for (let y = 0; y < gridSize; y++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${x}-${y}`;

      if (y === 0) {
        // paint the top line
        cell.style.borderTop = "2px solid black";
      }

      if (x === 0) {
        // paint the left border
        cell.style.borderLeft = "2px solid black";
      }

      if (x === gridSize - 1) {
        cell.style.borderRight = "2px solid black";
      }

      if (y === gridSize - 1) {
        // paint the bottom line
        cell.style.borderBottom = "2px solid black";
      }

      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

function renderSnek() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const cellCoordinates = cell.id.split("-").map((coord) => parseInt(coord));

    const isSnekBodyPart = snek.body.items.some(
      (coord) =>
        coord[0] === cellCoordinates[0] && coord[1] === cellCoordinates[1]
    );

    if (isSnekBodyPart) {
      cell.innerHTML = SNEK_BODY_CHAR;
    } else {
      cell.innerHTML = "";
    }
  });
}

// function placeFruits(numFruits, currentSnek){
//     // generate random spot on screen which is diff from any coords of starting snek,
// }

function updateSnek() {
  console.log("updatingsnek size");
  const currentDirection = snek.direction;
  const currentHead = snek.body.getHead();
  const newHead = [...currentHead];
  console.log("newHead: ", newHead);
  console.log("snek: ", snek);

  if (currentDirection === "D") {
    if (currentHead[1] === CANVAS_SIZE - 1) {
      snek.body.enQueue([newHead[0], 0]);
      return snek.body.deQueue();
    }
    snek.body.enQueue([newHead[0], newHead[1] + 1]);
    return snek.body.deQueue();
  }

  if (currentDirection === "U") {
    if (currentHead[1] === 0) {
      snek.body.enQueue([newHead[0], CANVAS_SIZE - 1]);
      return snek.body.deQueue();
    }
    snek.body.enQueue([newHead[0], newHead[1] - 1]);
    return snek.body.deQueue();
  }

  if (currentDirection === "L") {
    if (currentHead[0] === 0) {
      snek.body.enQueue([CANVAS_SIZE - 1, newHead[1]]);
      return snek.body.deQueue();
    }
    snek.body.enQueue([newHead[0] - 1, newHead[1]]);
    return snek.body.deQueue();
  }

  if (currentDirection === "R") {
    if (currentHead[0] === CANVAS_SIZE - 1) {
      snek.body.enQueue([0, newHead[1]]);
      return snek.body.deQueue();
    }
    snek.body.enQueue([newHead[0] + 1, newHead[1]]);
    return snek.body.deQueue();
  }
}

function generateStartingSnekQueue(canvasSize) {
  const snekSize = Math.max(Math.floor(canvasSize / 2 - 1), 1);

  const snekStartingY = Math.floor(canvasSize / 2);
  const snekStartingX = 1;

  const r = [];

  for (let i = snekStartingX + snekSize; i >= snekStartingX; i--) {
    r.push([i, snekStartingY]);
  }
  return new Queue(r);
}
