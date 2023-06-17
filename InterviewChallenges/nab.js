// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//   }

//   // getter firstname
//   getFirstName() {
//     return this.firstName;
//   }

//   //  getter lastName
//   getLastName() {
//     return this.lastName;
//   }
// }

// const johnSmith = new Person("John", "Smith");

// johnSmith.getFirstName(); // John
// johnSmith.getLastName(); // Smith
// johnSmith.firstName = "Rup";

let numbers = [10, 18, 25, 36, 2, 5];

//  only numbers greater than 10;

// filteredNums = numbers.filter((el) => el > 10);

// [{'num': 18}, ...]

// let numObj = [];

// numbers.forEach((element) => {
//   if (element > 10) {
//     numObj.push({ num: element });
//   }
// });

let numObj = numbers.filter((el) => el > 10).map((el) => ({ num: el }));

console.log(numbers);

console.log(numObj);
