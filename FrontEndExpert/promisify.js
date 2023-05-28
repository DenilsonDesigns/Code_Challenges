// function foo(...args, otherFn){
//     // ...foo body
// }

// function otherFn(error, value){
//     // ... otherFn body
//     // error first callback.
// }

function promisify(callback) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error == null) {
          resolve(value);
        } else {
          reject(error);
        }
      }

      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}
