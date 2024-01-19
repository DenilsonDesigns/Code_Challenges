// *** Player Class.
class Player {
  #playerNum;
  #token = null;

  constructor(playerNum = 1) {
    this.#playerNum = playerNum;
    this.#token = playerNum === 1 ? "X" : "O";
  }

  getPlayerNum() {
    return this.#playerNum;
  }

  getToken() {
    return this.#token;
  }
}

// *** Game Loop ***
const player1 = new Player(1);
const player2 = new Player(2);

let currentPlayer = player1;

// *** Board Elements ***
const gameSquareElements = document.getElementsByClassName("game-square");
const gameSquares = [...gameSquareElements];
const restartButton = document.getElementById("restart-button");
const gameHeading = document.getElementById("game-heading");

// *** Event Listeners ***
gameSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    gameSquareElements[i].innerHTML = currentPlayer.getToken();

    let hasWinner = gameHasWinner();
    if (hasWinner) {
      disableAllSquares();
      showWinningMsg(currentPlayer);
      return showRestartButton();
    }

    let isDraw = gameIsDraw();
    if (isDraw) {
      disableAllSquares();
      showWinningMsg(currentPlayer);
      return showRestartButton();
    }

    togglePlayer();
    updateHeaderMsg(currentPlayer);
  });
});

restartButton.addEventListener("click", () => {
  resetBoard();
  currentPlayer = player1;
  hideResetButton();
});

// *** Functions ***
function togglePlayer() {
  currentPlayer = currentPlayer.getPlayerNum() === 1 ? player2 : player1;
  console.log(currentPlayer);
}

function resetBoard() {
  gameSquares.forEach((square) => {
    square.innerHTML = "";
    square.disabled = false;
  });
}

function updateHeaderMsg(player) {
  gameHeading.innerText = `Player ${player.getPlayerNum()}'s Turn`;
}

function showWinningMsg(player) {
  gameHeading.innerText = `Player ${player.getPlayerNum()} Wins!`;
}

function showRestartButton() {
  restartButton.style.display = "block";
}

function hideResetButton() {
  restartButton.style.display = "none";
}

function disableAllSquares() {
  gameSquares.forEach((square) => {
    square.disabled = true;
  });
}

function gameHasWinner() {
  const squareValues = gameSquares.map((e) => e.innerText);

  const isWinnerRow = checkRowsForWinner(squareValues);
  const isWinnerCol = checkColsForWinner(squareValues);
  const isWinnerDiag = checkDiagonallyForWinner(squareValues);

  return isWinnerCol || isWinnerRow || isWinnerDiag;
}

function checkRowsForWinner(squares) {
  for (let i = 0; i < squares.length; i += 3) {
    const square1 = squares[i];
    const square2 = squares[i + 1];
    const square3 = squares[i + 2];
    if (square1.length === 1 && square1 === square2 && square2 === square3)
      return true;
  }

  return false;
}

function checkColsForWinner(squares) {
  for (let i = 0; i < squares.length; i += 3) {
    const square1 = squares[i];
    const square2 = squares[i + 3];
    const square3 = squares[i + 6];
    if (square1.length === 1 && square1 === square2 && square2 === square3)
      return true;
  }

  return false;
}

function checkDiagonallyForWinner(squares) {
  const square1 = squares[0];
  const square2 = squares[4];
  const square3 = squares[8];
  if (square1.length === 1 && square1 === square2 && square2 === square3)
    return true;

  const square4 = squares[2];
  const square5 = squares[4];
  const square6 = squares[6];
  if (square4.length === 1 && square4 === square5 && square5 === square6)
    return true;

  return false;
}

function gameIsDraw() {
  const squareValues = gameSquares.map((e) => e.innerText);
  return squareValues.every((square) => square);
}
