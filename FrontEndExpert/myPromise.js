const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = STATE.PENDING;
  #value = null;

  constructor(executorFunc) {
    try {
      executorFunc(
        (value) => this.#resolve(value),
        (value) => this.#reject(value)
      );
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {}

  catch(onRejected) {
    // Write your code here.
  }

  get state() {
    return this.#state;
  }

  get value() {
    return this.#value;
  }

  #resolve(value) {
    this.#value = value;
    this.#state = STATE.FULFILLED;
  }

  #reject(value) {
    this.#value = value;
    this.#state = STATE.REJECTED;
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
