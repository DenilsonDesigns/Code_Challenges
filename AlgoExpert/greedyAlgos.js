function minimumWaitingTime(queries) {
  // I guess we have our answer to:
  // "does .sort() mutate an array"
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx];
    const queriesLeft = queries.length - (idx + 1);
    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
console.log(minimumWaitingTime([2, 1, 1, 1]));
console.log(minimumWaitingTime([25, 30, 2, 1]));
