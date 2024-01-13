const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(executorFunc) {
    // Write your code here.
  }

  then(onFulfilled, onRejected) {
    // Write your code here.
  }

  catch(onRejected) {
    // Write your code here.
  }

  get state() {
    // Write your code here.
  }

  get value() {
    // Write your code here.
  }
}

const promise = new MyPromise((res, rej) => {
  res(10);
});

promise
  .then((val) => {
    console.log(val);
    return val + 10;
  })
  .then((val) => {
    console.log(val);
    throw val + 10;
  })
  .catch((val) => {
    console.log(val);
    return val + 10;
  })
  .then((val) => {
    console.log(val);
  });

// Do not edit the line below.
exports.MyPromise = MyPromise;
