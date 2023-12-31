// CREATE A SQUARE CANVAS ON THE SCREEN.
// THE CANVAS WILL INCLUDE THE SNEK AND FRUITS INSIDE IT.

// *** DOM ELEMENTS
const canvas = document.getElementById("canvas");

/// *** MAIN LOOP ***
paintCanvas(12);

function paintCanvas(gridSize = 10) {
  for (let y = 0; y < gridSize; y++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      // ADD AN ID TO ELEMENT IN THE FORM OF: [X][Y]
      // THIS WILL BE TO ADD SNEK/FRUIT ELEMENTS TO SCREEN AS DESIRED LATER.

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
