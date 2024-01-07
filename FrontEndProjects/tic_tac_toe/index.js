// *** Player Class ***
class Player {
  constructor(id) {
    this.id = id;
    this.char = id === 1 ? "X" : "O";
  }
}

// *** DOM Elements ***
const gameHeading = document.getElementById("game-heading");
const gameSquares = document.querySelectorAll(".game-square");
const restartButton = document.getElementById("restart-button");

// *** Game State Vars ***
const PLAYER1 = new Player(1);
const PLAYER2 = new Player(2);
const PLAYED_SQUARES = new Map();
let GAME_OVER = false;

let currentPlayer = PLAYER1;

// *** Event Listeners ***
gameSquares.forEach((element, idx) => {
  element.addEventListener("click", () => handleGameSquareClick(idx));
});

restartButton.addEventListener("click", handleRestartGame);

// *** Methods ***
function handleGameSquareClick(idx) {
  if (isSquareAvail(idx, PLAYED_SQUARES) && !GAME_OVER) {
    playSquare(idx, currentPlayer);
    if (checkGameEnded(currentPlayer, PLAYED_SQUARES)) {
      disableGameSquares();
      showRestartButton();
    } else {
      flipPlayer();
    }
  }
}

function flipPlayer() {
  currentPlayer = currentPlayer.id === 1 ? PLAYER2 : PLAYER1;
  upHeadingText(currentPlayer.id);
}

function upHeadingText(playerId) {
  gameHeading.innerHTML = `Player ${playerId}'s Turn`;
}

function isSquareAvail(idx, playedSquares) {
  return !playedSquares.has(idx);
}

function playSquare(squareIdx, currentPlayer) {
  PLAYED_SQUARES.set(squareIdx, currentPlayer.char);
  gameSquares[squareIdx].innerHTML = currentPlayer.char;
  gameSquares[squareIdx].disabled = true;
}

function checkGameEnded(player, playedSquares) {
  if (checkRowWinner(player, playedSquares)) {
    announceWinner(player.id);
    GAME_OVER = true;
    return true;
  }
  if (checkColWinner(player, playedSquares)) {
    announceWinner(player.id);
    GAME_OVER = true;
    return true;
  }
  if (checkDiagonalWinner(player, playedSquares)) {
    announceWinner(player.id);
    GAME_OVER = true;
    return true;
  }
  if (checkAllSquaresUsed(playedSquares)) {
    announceDraw();
    GAME_OVER = true;
    return true;
  }
}

function checkRowWinner(player, playedSquares) {
  for (let i = 0; i <= 8; i += 3) {
    if (
      playedSquares.get(i) === player.char &&
      playedSquares.get(i + 1) === player.char &&
      playedSquares.get(i + 2) === player.char
    ) {
      return true;
    }
  }
}

function checkColWinner(player, playedSquares) {
  for (let i = 0; i <= 2; i++) {
    if (
      playedSquares.get(i) === player.char &&
      playedSquares.get(i + 3) === player.char &&
      playedSquares.get(i + 6) === player.char
    ) {
      return true;
    }
  }
}

function checkDiagonalWinner(player, playedSquares) {
  if (
    playedSquares.get(0) === player.char &&
    playedSquares.get(4) === player.char &&
    playedSquares.get(8) === player.char
  ) {
    return true;
  }
  if (
    playedSquares.get(2) === player.char &&
    playedSquares.get(4) === player.char &&
    playedSquares.get(6) === player.char
  ) {
    return true;
  }
}

function announceWinner(playerId) {
  gameHeading.innerHTML = `Player ${playerId} Won!`;
}

function announceDraw() {
  gameHeading.innerHTML = "Tie Game!";
}

function checkAllSquaresUsed(playedSquares) {
  return playedSquares.size === 9;
}

function showRestartButton() {
  restartButton.style.display = "block";
}

function handleRestartGame() {
  clearGameSquares();
  currentPlayer = PLAYER1;
  GAME_OVER = false;
  restartButton.style.display = "none";
  upHeadingText(1);
}

function disableGameSquares() {
  gameSquares.forEach((el) => {
    el.disabled = true;
  });
}

function clearGameSquares() {
  PLAYED_SQUARES.clear();
  gameSquares.forEach((el) => {
    el.innerHTML = null;
    el.disabled = false;
  });
}
