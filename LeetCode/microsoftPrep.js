// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a map to store the k/v pair.
  // key is the number itself, value is the index of the number.

  // As looping thru, do a check, to prevent needing to loop thru
  // whole array if we already have a match.
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const lookingFor = target - element;
    if (numMap.hasOwnProperty(lookingFor)) return [numMap[lookingFor], i];

    numMap[element] = i;
  }
};

// 424. Longest Repeating Character Replacement
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let r = k;
  let left = 0;
  let right = 0;
  let maxFreq = 0; // var to store the maxFreq of a char we've seen;

  let map = {};

  while (right < s.length) {
    // add s[right] to map
    map[s[right]] = (map[s[right]] || 0) + 1;
    // now that we've added a char to map, re-calc maxFreq.
    maxFreq = Math.max(maxFreq, map[s[right]]);

    let windowSize = right - left + 1;

    // move left if current window is invalid
    if (windowSize > maxFreq + k) {
      // remove the char on the left from map
      map[s[left]] -= 1;

      // move left:
      left++;
    }

    // each pass, update max window size.
    // if we moved left above, it wont increase
    // will only increase on passes we dont move left.
    r = Math.max(r, right - left + 1);

    // expand window each pass, if we moved left in above, this effectively
    // slides the window, if we didnt move left left, then it expands the
    // window right.
    right++;
  }

  return r;
};

console.log(
  // ***
  characterReplacement("AABABBA", 1) // 4 (BABB/AABA)
  // ***
);
