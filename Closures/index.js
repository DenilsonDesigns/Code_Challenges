// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// This wont work:
// needs to store reference to function in a variable to store the closure:
// counter()(); // 1
// counter()(); // 2

// Stores "counter" in a variable,
// now each invocation will call "count++" and return the incremented "count"
// const myCounter = counter();
// myCounter(); // 1
// myCounter(); // 2

// function createCounter(step) {
//   let count = 0;

//   function increment() {
//     count += step;
//     console.log(count);
//   }

//   function decrement() {
//     count -= step;
//     console.log(count);
//   }

//   return {
//     increment,
//     decrement,
//   };
// }

// Create a counter that increments by 2
// const counterByTwo = createCounter(2);
// counterByTwo.increment(); // Outputs: 2
// counterByTwo.increment(); // Outputs: 4

// Create a counter that increments by 5
// const counterByFive = createCounter(5);
// counterByFive.increment(); // Outputs: 5
// counterByFive.decrement(); // Outputs: 0

// function createCollectionManager() {
//   let collection = [];

//   function addItem(item) {
//     collection.push(item);
//     console.log(`${item} added to the collection.`);
//   }

//   function removeItem(item) {
//     const index = collection.indexOf(item);
//     if (index !== -1) {
//       collection.splice(index, 1);
//       console.log(`${item} removed from the collection.`);
//     } else {
//       console.log(`${item} not found in the collection.`);
//     }
//   }

//   function getCollection() {
//     return collection.slice(); // Return a copy to prevent external modification
//   }

//   return {
//     addItem,
//     removeItem,
//     getCollection,
//   };
// }

// const collectionManager = createCollectionManager();

// collectionManager.addItem("Item 1");
// collectionManager.addItem("Item 2");
// console.log(collectionManager.getCollection()); // Outputs: ["Item 1", "Item 2"]

// collectionManager.removeItem("Item 1");
// console.log(collectionManager.getCollection()); // Outputs: ["Item 2"]

function fetchData(url, callback) {
  // ...
  fetch(url).then((response) => callback(response));
}

fetchData("https://example.com/api/data", function (res) {
  // 'response' here is available due to closure
  console.log(res);
});
