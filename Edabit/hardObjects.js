// Sort Authors Last Names Alphabetically
/**
 *
 * @param {Object[]} books
 * @return {Object[]}
 */
function sortByLastName(books) {
  return books.sort((a, b) => b.author.localeCompare(a.author));
}

// Pizza Points™ 🍕
/**
 *
 * @param {Object} customers
 * @param {Number} minOrders
 * @param {Number} minPrice
 * @returns {String[]}
 */
function pizzaPoints(customers, minOrders, minPrice) {
  let r = [];
  for (let [k, v] of Object.entries(customers)) {
    if (v.length < minOrders) continue;
    let filteredOrders = v.filter((el) => el >= minPrice);
    if (filteredOrders.length >= minOrders) r.push(k);
  }

  return r.sort();
}

let obj3 = {
  Zorro: [13, 53, 10, 51],
  Wolverine: [16],
  "Elon Musk": [
    26, 61, 23, 61, 39, 50, 53, 54, 45, 46, 42, 49, 18, 75, 11, 73, 42, 61, 15,
    60, 70, 67, 8, 9, 63, 55, 55, 35, 24, 59, 13, 49, 46, 26, 7, 8, 8, 34, 73,
    60, 27, 28, 28, 48, 10,
  ],
};

console.log(
  pizzaPoints(obj3, 7, 15) // Elon Musk
);
