// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log(this.name); // `this` refers to the class instance
//   }

//   delayedPrint() {
//     setTimeout(this.printName, 1000); // `this` will be lost
//   }
// }

// const myInstance = new MyClass("Daniel");
// myInstance.delayedPrint(); // `this` will not refer to the class instance here

// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log(this.name); // `this` refers to the class instance
//   }

//   delayedPrint() {
//     setTimeout(() => this.printName(), 1000); // `this` remains lexically bound
//   }
// }

// const myInstance = new MyClass("Daniel");
// myInstance.delayedPrint(); // `this` still refers to the class instance

class MyClass {
  constructor(name) {
    this.name = name;
  }

  outerMethod() {
    console.log("Inside outerMethod");

    // Regular function that has its own `this`
    function innerFunction() {
      console.log(this.name); // `this` does not refer to the class instance in this case
    }

    innerFunction(); // `this` will be the global object or undefined in strict mode
  }
}

const myInstance = new MyClass("Daniel");
myInstance.outerMethod(); // Logs `undefined` or throws an error in strict mode
