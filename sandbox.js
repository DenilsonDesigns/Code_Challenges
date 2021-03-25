// /**

// tacos: prog1
// tacos: prog2
// prog1: a.o
// prog1: b.o
// a.o: a.c
// b.o: b.c
// prog2: b.o
// prog2: c.o
// c.o: c.c

// Dependencies
// [
//     ['prog1', 'a.o'],
// ]

// Changes
// [
//     'a.c'
// ]

// -> ['a.o', 'prog1']

// */

// // const foo = (deps, changes) => {}

// function checkDependencies(deps, changes){
//     const r = new Set()

//     let depChanges = {
//         'a.o': [
//             'prog1'
//         ],
//         'b.o':[
//             'prog1', 'prog2'
//         ],
//         'c.o':[
//             'tacos', 'prog1'
//         ],
//         'tacos':[
//             'prog3'
//         ]
//     }

//     // loop changes and push any dependencies for each change from depChanges table.
//     for(change of changes){
//         if(change in depChanges){
//             for(val of depChanges[change]){
//                 // should check val does not exist in r before pushing
//                 // if(!(val in r)){
//                 r.add(val)
//                 // }
//             }
//         }
//     }

//     return r
// }

// const dependencies = [
//   ['prog1', 'a.o'],
//   ['prog1', 'b.o'],
//   ['a.o', 'a.c'],
//   ['b.o', 'b.c'],
//   ['prog2', 'b.o'],
//   ['prog2', 'c.o'],
//   ['c.o', 'c.c'],
// ]

// console.log(checkDependencies(dependencies, ['b.o', 'c.o']))

// **********************************************************************
// *** new test ***
// Start typing here

// Task
// In your choice of programming language, write a function that finds all customers who share all of their accounts.

// Example
// The following example indicates which customers own which accounts. For instance, the customer with id 1 owns the account with id 10 and the account with id 11.

// Customer    Account
// 1           10
// 1           11
// 2           13
// 3           11
// 4           14
// 3           10
// 4           13
// For this example:

// Customers 1 and 3 share all of their accounts, 10 and 11, so they are a match.
// Customers 2 and 4 share account 13 but customer 4 also owns account 14, which customer 2 doesn't. They are not a match.

// [
//     {c:1, a:10},
//     {c:1, a:11},
//     {c:2, a:13},
//     {c:3, a:11},
//     {c:4, a:14},
//     {c:3, a:10},
//     {c:4, a:13},
// ]

//[[1 3]]

const custAccountData = [
  { c: 1, a: 10 },
  { c: 1, a: 11 },
  { c: 2, a: 13 },
  { c: 3, a: 11 },
  { c: 4, a: 14 },
  { c: 3, a: 10 },
  { c: 4, a: 13 },
  { c: 1, a: 99 },
];

// [[1, 3], [1, 3]]

function checkSharedAccs(accInfo) {
  // make object with accounts as key.
  // and array of customer numbers.
  const r = [];

  //    const table = {
  //  10: [1, 3],
  // 11: [1, 3],
  // 13: [2, 4],
  // 14: [4]
  // }
  const table = {};

  // build table from accInfo
  for (element of accInfo) {
    if (table[element["a"]]) {
      table[element["a"]].push(element["c"]);
    } else {
      table[element["a"]] = [element["c"]];
    }
  }

  // loop keys in table, and if values match, we can push that array to the return array.
  // { '10': [ 1, 3 ], '11': [ 1, 3 ], '13': [ 2, 4 ], '14': [ 4 ] }
  // from SO:
  // a = [2, 4, 5].toString();
  // b = [2, 4, 5].toString();
  for (keyOuter in table) {
    // for each value array, sort it.
    let sortedCusArr = table[keyOuter].sort((a, b) => a - b).toString();
    // console.log(sortedCusArr)
    // '1' : [1,3] => 13?
    // '2' : [13]  =>
    // loop through table again (avoid current key), check if value array matches, (sort and toString())
    for (keyInner in table) {
      if (keyInner !== keyOuter) {
        let sortedCusArrInner = table[keyInner]
          .sort((a, b) => a - b)
          .toString();
        if (sortedCusArr === sortedCusArrInner) {
          r.push(table[keyInner]);
        }
      }
    }
    // if customer arrays match, push to r.
  }
  console.log(table);
  return r;
}

function checkSharedAccsV2(accInfo) {
  // return array
  const r = [];

  const table = [];

  // build array of arrays
  // [
  //     {10: [1, 3]},
  //     {11: [1, 3]}
  // ]
  // [
  //     {c:1, a:10},
  //     {c:1, a:11},
  //     {c:2, a:13},
  //     {c:3, a:11},
  //     {c:4, a:14},
  //     {c:3, a:10},
  //     {c:4, a:13},
  // ]
  for (info of accInfo) {
    // loop through and check if account key exists in table.
    // if exists, push customerId to value subarray,
    // else, add object with account as key and array with customerId as value
  }
}
