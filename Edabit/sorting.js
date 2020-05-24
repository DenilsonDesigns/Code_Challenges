function sortDrinkByPrice(drinks) {
  let sorted = drinks.sort((a, b) => {
    return a.price - b.price;
  });
  return sorted;
}

const drinks1 = [
  { name: "lemonade", price: 90 },
  { name: "lime", price: 432 },
  { name: "peach", price: 23 },
];

// function maxTotal(nums) {
//   let sorted = nums.sort((a, b) => {
//     return a - b;
//   });

//   return sorted.slice(5).reduce((el, acc) => {
//     return el + acc;
//   }, 0);
// }

function maxTotal(nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(5)
    .reduce((a, b) => a + b, 0);
}

function findLargestNums(arrList) {
  let final = [];
  arrList.forEach((element) => {
    final.push(Math.max(...element));
  });
  return final;
}

// @Better
// function findLargestNums(arr) {
//     return arr.map(x => Math.max(...x));
//   }

console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);
