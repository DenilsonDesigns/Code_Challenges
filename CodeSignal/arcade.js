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

//  is Lucky?
function isLucky(n) {
  let word = n.toString();
  let firstPart = word.slice(0, word.length / 2).split("");
  let secondPart = word.slice(word.length / 2).split("");

  function parseSum(list) {
    return list.reduce((acc, val) => acc + parseInt(val), 0);
  }

  return parseSum(firstPart) === parseSum(secondPart);
}

function sortByHeight(a) {
  let positionsOfNonTrees = [];
  let sortedHeights = [];
  let final = a;

  a.forEach((el, i) => {
    if (el !== -1) {
      positionsOfNonTrees.push(i);
      sortedHeights.push(el);
    }
  });

  sortedHeights = sortedHeights.sort((a, b) => {
    return a - b;
  });

  positionsOfNonTrees.forEach((el, i) => {
    final[el] = sortedHeights[i];
  });

  return final;
}

// better
// function sortByHeight(a) {
//   var s = a.filter(h => h > 0).sort((a, b) => a - b)
//   return a.map(p => {
//       if (p !== -1) {
//           return s.shift();
//       }

//       return -1;
//   })
// }

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
