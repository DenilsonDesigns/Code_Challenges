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

// The Frugal Gentleman
/**
 *
 * @param {Object[]} wines
 * @returns {String}
 */
function chosenWine(wines) {
  if (wines.length === 0) return null;
  if (wines.length === 1) return wines[0].name;

  wines.sort((a, b) => a["price"] - b["price"]);
  return wines[1]["name"];
}

// Calculate the Total Price of Groceries
/**
 *
 * @param {Object[]} groceries
 * @returns {Number}
 */
function getTotalPrice(groceries) {
  let num = groceries.reduce(
    (acc, el) => acc + el["quantity"] * el["price"],
    0
  );
  return Math.round(num * 100) / 100;
}

// Get Students with Names and Top Notes
function getStudentsWithNamesAndTopNotes(students) {
  return students.map((el) => ({
    name: el.name,
    topNote: Math.max(...el.notes, 0),
  }));
}

// Burglary Series (12): Get Vodka Bottle
const random = Math.random();
const obj = {
  absinth: 100,
  whiskey: 100,
  "Rammstein A": 100,
  "Rammstein B": 50,
  "Rammstein C": random,
};
function getVodkaBottle(obj, num) {
  for (let [k, v] of Object.entries(obj)) {
    if (v === num && k.indexOf("Ramm") >= 0) {
      return k;
    }
  }
}

// Frequency Distribution
function getFrequencies(arr) {
  let r = {};
  for (let i = 0; i < arr.length; i++) {
    r[arr[i]] ? r[arr[i]]++ : (r[arr[i]] = 1);
  }

  return r;
}

console.log(getFrequencies(["A", "A"]));
