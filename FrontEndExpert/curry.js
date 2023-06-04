function curry(callback) {
  const curriedCallback = (...args) => {
    if (args.length === 0) {
      return callback();
    }

    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      return curriedCallback(...args, ...otherArgs);
    };
  };
  return curriedCallback;
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2, 3)(8)());
