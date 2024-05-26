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

// 2618. Check if Object Instance of Class
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  return Object(obj) instanceof classFunction;
};

console.log(
  // ***
  checkIfInstanceOf(new Date("20022"), Date)
  // ***
);
