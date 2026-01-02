function maxPlanes(startHeight, descentRate) {
  const n = startHeight.length;
  // Step 1: compute landing times
  const landingTimes = [];
  for (let i = 0; i < n; i++) {
    landingTimes.push(startHeight[i] / descentRate[i]);
  }

  landingTimes.sort((a, b) => a - b);

  // Step 3: greedy shooting
  let shots = 0;
  for (let t of landingTimes) {
    if (t > shots) {
      shots++; // shoot this plane
    } else {
      break; // game over: this plane lands before we could shoot
    }
  }

  return shots;
}

// ---------- Sample test ----------
const startHeight = [1, 3, 5, 4, 8];
const descentRate = [1, 2, 2, 1, 2];
console.log(maxPlanes(startHeight, descentRate)); // Expected: 4
