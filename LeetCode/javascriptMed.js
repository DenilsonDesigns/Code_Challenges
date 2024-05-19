// 2627. Debounce
var debounce = function (fn, t) {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// 2623. Memoize
function memoize(fn) {
  let callMap = new Map();

  return function (...args) {
    let callKey = JSON.stringify(...args);

    if (callMap.has(callKey)) {
      return callMap.get(callKey);
    } else {
      let result = fn(...args);
      callMap.set(callKey, result);
      return result;
    }
  };
}

console.log(
  // ***
  debounce(
    [
      { t: 50, inputs: [1] },
      { t: 75, inputs: [2] },
    ],
    50
  )
  // ***
);
