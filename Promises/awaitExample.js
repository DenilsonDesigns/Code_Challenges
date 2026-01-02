/**
 * Basic example showing promises will yield to the caller to check for any execution in the callers queues.
 */

async function test() {
  console.log("A"); // runs immediately
  await Promise.resolve(); // pauses function, schedules continuation
  console.log("B"); // runs later (microtask)
}

// ***
// console.log("C");
// test();
// console.log("D");
// ***

/**
 * shows awaiting promises with varying setTimemout times.
 */
function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function run() {
  const a = wait(10000, "A");
  const b = wait(50, "B");

  console.log(await Promise.all([a, b]));
  console.log(await b);
}

// ***
// run();
// ***

/**
 * Examples showing micro vs macro task queue
 * Micro task queue must be empty before engine will
 * execute anything from macrotask queue.
 */

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    setTimeout(() => console.log("Inside Timeout"), 0);
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
    Promise.resolve().then(() => {
      console.log("Inner Promise 1");
    });
  })
  .then(() => {
    console.log("Promise 3");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
