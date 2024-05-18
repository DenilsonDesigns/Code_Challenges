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
