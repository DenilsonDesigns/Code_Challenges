// Apartment hunting:

// My first attemp:
// Time: O(2n^2)=> O(n^2) (might be worse due to the sort)
function apartmentHunting(blocks, reqs) {
  let cleanBlocks = JSON.parse(JSON.stringify(blocks));

  blocks.forEach((block, idx) => {
    for (const [key, value] of Object.entries(block)) {
      if (block[key]) block[key] = 0;
      else block[key] = findClosest(key, idx, cleanBlocks);
    }
  });

  let lowestAmt = Infinity;
  let lowestIdx;
  blocks.forEach((block, idx) => {
    let newBlock = Object.entries(block).filter((el) => reqs.includes(el[0]));

    newBlock.sort((a, b) => b[1] - a[1]);

    if (newBlock[0][1] < lowestAmt) {
      lowestAmt = newBlock[0][1];
      lowestIdx = idx;
    }
  });

  return lowestIdx;

  function findClosest(localeToFind, currentLocale, blocksToSearch) {
    let currSmallest = blocksToSearch.length;
    blocksToSearch.forEach((block, idx) => {
      if (block[localeToFind] && idx !== currentLocale) {
        let currDiff =
          Math.max(idx, currentLocale) - Math.min(idx, currentLocale);
        if (currDiff < currSmallest) {
          currSmallest = currDiff;
        }
      }
    });
    return currSmallest;
  }
}

console.log(
  ///
  apartmentHunting(
    [
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: true,
        school: false,
        store: false,
      },
      {
        gym: true,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: true,
      },
    ],
    ["gym", "school", "store"]
  )
  ///
);
