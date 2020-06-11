// make array consec.

function makeArrayConsecutive2(statues) {
  let max = Math.max(...statues);
  let min = Math.min(...statues);
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (!statues.includes(i)) count++;
  }
  return count;
}

// best
// function makeArrayConsecutive2(sequence) {
//   return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
// }

function matrixElementsSum(matrix) {
  let sum = 0;
  let indexOfGhosts = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indexOfGhosts.push(j);
      }
      if (matrix[i][j] > 0 && !indexOfGhosts.includes(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function commonCharacterCount(s1, s2) {
  let count = 0;
  let secondWord = s2.split("");
  s1.split("").map((char) => {
    if (secondWord.includes(char)) {
      count++;
      let index = secondWord.indexOf(char);
      if (index > 0) secondWord.splice(index, 1);
    }
  });
  return count;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
