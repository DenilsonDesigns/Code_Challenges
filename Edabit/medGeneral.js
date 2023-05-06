// Tile Teamwork Tactics
function possibleBonus(a, b) {
  const diff = b - a;

  return diff > 0 && diff < 7;
}

// Let's Fuel Up!
// https://edabit.com/challenge/YMWDcSuYwYvve3HZj
function calculateFuel(n) {
  return Math.max(n * 10, 100);
}

console.log(
  // ***
  calculateFuel(15), // 150
  calculateFuel(23.5) // 235,
  // ***
);
