function maxPlanesNaive(startHeight, descentRate) {
  // Naive O(n^2)
  const n = startHeight.length;
  const landingTimes = [];

  // compute Landing Times:
  for (let i = 0; i < descentRate.length; i++) {
    landingTimes.push(startHeight[i] / descentRate[i]);
  }

  console.log("landing Times:", landingTimes);
  let shots = 0;

  const shot = new Array(n).fill(false);

  // simulate second by second
  for (let time = 1; time <= n; time++) {
    let bestIdx = -1;
    let bestLanding = Infinity;

    // Find the "most urgent" plane (smallest landing time still >= current time)
    for (let i = 0; i < n; i++) {
      if (
        !shot[i] &&
        landingTimes[i] >= time &&
        landingTimes[i] < bestLanding
      ) {
        bestLanding = landingTimes[i];
        bestIdx = i;
      }
    }

    console.log("bestLanding: ", bestLanding);

    if (bestIdx === -1) {
      break; // no shootable planes left
    }

    shot[bestIdx] = true;
    shots++;
  }

  return shots;
}

// ---------- Sample test ----------
const startHeight = [4, 3, 2];
const descentRate = [2, 1, 1];
console.log(maxPlanesNaive(startHeight, descentRate));
