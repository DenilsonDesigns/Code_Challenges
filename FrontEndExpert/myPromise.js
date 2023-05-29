const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  // Write your code here.
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

  then(onFulfilled, onRejected) {
    return new MyPromise();
  }

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

// Do not edit the line below.
exports.MyPromise = MyPromise;
