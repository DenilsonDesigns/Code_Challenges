import Queue from "../../Queue/Queue.js";
import Snake from "./Snake.js";

// *** CONSTANTS ***
const CANVAS_SIZE = 12;
const GAME_SPEED = 500;
const SNEK_BODY_CHAR = "■";
const NUM_FRUITS_ON_SCREEN = 2;
const FRUIT_CHAR = "ο";

// *** DOM ELEMENTS
const canvas = document.getElementById("canvas");
let cells;

// *** GAME ELEMENTS
const snekQueue = generateStartingSnekQueue(CANVAS_SIZE);
const snek = new Snake(snekQueue);
const fruitCoords = generateStartingFruits(
  NUM_FRUITS_ON_SCREEN,
  snek.body.items,
  CANVAS_SIZE
);

/// *** MAIN LOOP ***
main();

// *** EVENT LISTENERS
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      if (snek.direction === "R") {
        break;
      }
      snek.direction = "L";
      break;
    case "ArrowUp":
      if (snek.direction === "D") {
        break;
      }
      snek.direction = "U";
      break;
    case "ArrowRight":
      if (snek.direction === "L") {
        break;
      }
      snek.direction = "R";
      break;
    case "ArrowDown":
      if (snek.direction === "U") {
        break;
      }
      snek.direction = "D";
      break;
  }
});

function main() {
  createCanvas(CANVAS_SIZE);
  renderCanvasElements();

  setInterval(() => {
    updateSnek();
    renderCanvasElements();
  }, GAME_SPEED);
}

function createCanvas(gridSize = 10) {
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
  cells = document.querySelectorAll(".cell");
}

function generateStartingFruits(numFruits, snakeBodyCoords, canvasSize) {
  const r = [];

  while (r.length < numFruits) {
    const currentCoords = generateRandomXY(canvasSize);
    console.log(currentCoords);
    if (!checkCoordExists(currentCoords, snakeBodyCoords)) {
      r.push(currentCoords);
    }
    continue;
  }
  return r;
}

function checkCoordExists(targetCoord, coordsToCheck) {
  return coordsToCheck.some((array) =>
    array.every((value, index) => value === targetCoord[index])
  );
}

function removeArrayIfExists(targetCoord, coordsToCheck) {
  const indexToRemove = coordsToCheck.findIndex(
    (array) =>
      array.length === targetCoord.length &&
      array.every((value, index) => value === targetCoord[index])
  );

  if (indexToRemove !== -1) {
    coordsToCheck.splice(indexToRemove, 1);
  }
}

function generateRandomXY(canvasSize) {
  let xCoord = Math.floor(Math.random() * canvasSize);
  let yCoord = Math.floor(Math.random() * canvasSize);
  return [xCoord, yCoord];
}

function renderCanvasElements() {
  cells.forEach((cell) => {
    const cellCoordinates = cell.id.split("-").map((coord) => parseInt(coord));

    const isSnekBodyPart = snek.body.items.some(
      (coord) =>
        coord[0] === cellCoordinates[0] && coord[1] === cellCoordinates[1]
    );

    const isFruit = fruitCoords.some(
      (coord) =>
        coord[0] === cellCoordinates[0] && coord[1] === cellCoordinates[1]
    );

    if (isSnekBodyPart) {
      cell.innerHTML = SNEK_BODY_CHAR;
    } else if (isFruit) {
      cell.innerHTML = FRUIT_CHAR;
    } else {
      cell.innerHTML = "";
    }
  });
}

function updateSnek() {
  const currentDirection = snek.direction;
  const currentHead = snek.body.getHead();
  let newHead = [...currentHead];

  // console.log("snek: ", snek);
  console.log("newHead: ", newHead);

  if (currentDirection === "D") {
    if (currentHead[1] === CANVAS_SIZE - 1) {
      newHead = [newHead[0], 0];
      snek.body.enQueue(newHead);
    } else {
      newHead = [newHead[0], newHead[1] + 1];
      snek.body.enQueue(newHead);
    }
  }

  if (currentDirection === "U") {
    if (currentHead[1] === 0) {
      newHead = [newHead[0], CANVAS_SIZE - 1];
      snek.body.enQueue(newHead);
    } else {
      newHead = [newHead[0], newHead[1] - 1];
      snek.body.enQueue(newHead);
    }
  }

  if (currentDirection === "L") {
    if (currentHead[0] === 0) {
      newHead = [CANVAS_SIZE - 1, newHead[1]];
      snek.body.enQueue(newHead);
    } else {
      newHead = [newHead[0] - 1, newHead[1]];
      snek.body.enQueue(newHead);
    }
  }

  if (currentDirection === "R") {
    if (currentHead[0] === CANVAS_SIZE - 1) {
      newHead = [0, newHead[1]];
      snek.body.enQueue(newHead);
    } else {
      newHead = [newHead[0] + 1, newHead[1]];
      snek.body.enQueue(newHead);
    }
  }

  // if newHead is equal to fruit coords, pop from fruit coords.
  // and DO NOT DEQUEUE;
  if (checkCoordExists(newHead, fruitCoords)) {
    // pop newHead from fruitCoords.
    removeArrayIfExists(newHead, fruitCoords);
    console.log("fruit Coords: ", fruitCoords);
    return;
  }

  return snek.body.deQueue();
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
