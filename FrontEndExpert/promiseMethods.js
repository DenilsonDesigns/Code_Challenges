Promise.myRace = function (promises) {
  // Write your code here.
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      return promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((res) => {
          return resolve(res);
        })
        .catch(() => {
          rejectedCount++;
          if (rejectedCount === promises.length) {
            return reject("all promises rejected");
          }
        });
    }
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let settledCount = 0;

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((res) => {
          results[i] = res;
          settledCount++;
          if (settledCount === promises.length) {
            return resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

Promise.myAllSettled = function (promises) {
  // Write your code here.
  return new Promise((resolve) => {
    let results = [];
    let settledCount = 0;

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((res) => {
          results[i] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          results[i] = {
            status: "rejected",
            error: err,
          };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            return resolve(results);
          }
        });
    }
  });
};

Promise.myAllSettled([
  new Promise((res) => setTimeout(() => res(0), 500)),
  // Promise.resolve(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
  Promise.reject(5),
  Promise.reject(5),
])
  .then(console.log)
  .catch((error) => console.log("error: " + error));
