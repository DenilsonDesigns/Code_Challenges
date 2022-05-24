// if you catch but dont .then in a map of promises, what happens? does it return notghing? could this be the problem we found with Saiyi?
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  throw new Error("hello");
}).catch((e) => console.log(e)); // <<<<<------- error is caught

const promise4 = new Promise((resolve, reject) => {
  throw new Error("hello2");
})
  .catch((e) => console.log(e))
  .then(() => 5); //<<<<-------- error is caught

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// [3, 42, undefined, 5]

// a caught promise will just return undefined (and not just nothing, ie there will be something returned).
// the problem we are having is that when giving 4 promises for example, you are only returned an
// array of length == 3;
