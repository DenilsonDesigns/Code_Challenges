// Question 1: Basic Understanding
// Explain what a Promise is in JavaScript. Provide a simple code example demonstrating the creation and resolution of a Promise.

// const myPromise = new Promise((res, rej) => {
//   return res(5);
// });

// myPromise.then((res, rej) => console.log(res));
// myPromise.then((res, rej) => console.log(res));

// Question 2: Chaining Promises
// Write a function that returns a Promise. The promise should resolve with a
// string after a delay of 1 second. Use this function to create a chain of
// three promises where each one depends on the result of the previous one.
// Finally, log the result of the last promise in the chain.
// const delayPromise = () =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       return res("After 1 second");
//     }, 1000);
//   });

// delayPromise()
//   .then((result1) => {
//     console.log(result1);
//     return delayPromise(); // Returning a new promise for chaining
//   })
//   .then((result2) => {
//     console.log(result2);
//     return delayPromise(); // Returning a new promise for chaining
//   })
//   .then((result3) => {
//     console.log(result3);
//     // This is the result of the last promise in the chain
//   });

// Question 3: Error Handling
// Create a Promise that has a 50% chance of resolving with a message "Success"
// and a 50% chance of rejecting with an error message "Error". Implement error
// handling to log the appropriate message in each case.
// const fiftyFiftyPromise = new Promise((res, rej) => {
//   const chance = Math.random();

//   if (chance < 0.5) {
//     return res("Success");
//   } else {
//     return rej("Error");
//   }
// });

// fiftyFiftyPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Question 4: Promise.all
// Write a function that takes an array of promises and returns a new promise.
// The new promise should resolve with an array of results when all the input
// promises have resolved, or reject with the reason of the first promise that
// rejects.
// const allPromises = (promises) => {
//   return Promise.all(promises);
// };

// allPromises([
//   new Promise((res, rej) => {
//     res(5);
//   }),
//   new Promise((res, rej) => {
//     res(10);
//   }),
//   new Promise((res, rej) => {
//     res(15);
//   }),
//   new Promise((res, rej) => {
//     throw new Error("An error occurred");
//   }),
// ])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// Question 5: Promise.race
// Implement a function that takes an array of promises and returns a new promise. The new
// promise should resolve or reject as soon as any of the input promises resolve or reject.
// const racePromises = (promises) => {
//   return Promise.race(promises);
// };

// racePromises([
//   new Promise((res, rej) => {
//     res(5);
//   }),
//   new Promise((res, rej) => {
//     res(10);
//   }),
//   new Promise((res, rej) => {
//     res(15);
//   }),
//   new Promise((res, rej) => {
//     throw new Error("An error occurred");
//   }),
// ])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// Question 6: Async/Await
// Convert the following Promise-based code into an equivalent code using async/await:

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// }
// const fetchData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// };

// (async () => {
//   try {
//     const res = await fetchData();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// Question 8: Custom Promise
// Create a simple custom Promise-like object called SimplePromise. It should have resolve and
// reject methods to manually control the state of the promise. Implement a then method to
// handle the resolution.
class SimplePromise {
  constructor() {
    this.state = "pending";
    this.value = undefined;
    this.onResolveCallbacks = [];
  }

  resolve(value) {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.executeCallbacks();
    }
  }

  reject(reason) {
    if (this.state === "pending") {
      this.state = "rejected";
      this.value = reason;
      this.executeCallbacks();
    }
  }

  then(onFulfilled) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.state === "pending") {
      this.onResolveCallbacks.push(onFulfilled);
    }

    return this;
  }

  executeCallbacks() {
    if (this.state === "fulfilled") {
      this.onResolveCallbacks.forEach((callback) => callback(this.value));
    }
  }
}

// Example usage:

const customPromise = new SimplePromise();

customPromise.then((result) => {
  console.log("Resolved:", result);
});

customPromise.resolve("Custom Promise Resolved");
