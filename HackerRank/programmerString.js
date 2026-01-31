function programmerString(str) {
  const findWord = "programmer";

  const templateMap = getCharFrequency("programmer");
  let l = 0;
  let r = findWord.length;

  let firstWord = true;

  const idxes = [];

  console.log("R", r);
  console.log("temaplte", templateMap);

  for (let i = l; i < str.length; i++) {
    if (!findWord.includes(str[i])) {
      l++;
      r++;
      continue;
    }
    const currWord = str.slice(l, r);
    console.log("currword", currWord);
    const currentMap = getCharFrequency(currWord);

    if (hasEnoughCounts(templateMap, currentMap)) {
      if (firstWord) {
        idxes.push(r);
        firstWord = false;
      } else {
        idxes.push(l);
      }
      l = r + 1;
      r = l + findWord.length;
    }

    r++;

    console.log("currmap", currentMap);
  }

  return Math.max(...idxes) - Math.min(...idxes);

  function getCharFrequency(str) {
    const frequency = {};
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }

  function hasEnoughCounts(baseMap, candidateMap) {
    for (const char in baseMap) {
      if (!(char in candidateMap) || candidateMap[char] < baseMap[char]) {
        return false;
      }
    }
    return true;
  }
}

console.log(
  // progxrammeryprogrammer
  programmerString("aprogxrammeryprogrammer"),
);
