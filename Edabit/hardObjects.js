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

// Get Student with Best Test Avg.
/**
 *
 * @param {Object} grades
 * @returns {String}
 */
function getBestStudent(grades) {
  let asArr = Object.entries(grades).map((el) => {
    return [el[0], getAverageScore(el[1])];
  });

  return asArr.sort((a, b) => b[1] - a[1])[0][0];

  // ***
  function getAverageScore(scores) {
    return scores.length === 0
      ? 0
      : scores.reduce((acc, el) => acc + el, 0) / scores.length;
  }
}

// Pricey Products
/**
 *
 * @param {Object} r
 * @returns {Array[String]}
 */
function products(r) {
  return Object.entries(r)
    .sort((a, b) => b[1] - a[1])
    .filter((el) => el[1] >= 500)
    .map((el) => el[0]);
}

// Get Students with Names and Notes Average
/**
 *
 * @param {Array[Object]} students
 * @returns {Array[Object]}
 */
function getStudentsWithNamesAndAvgNote(students) {
  return students.map((student) => {
    return { name: student["name"], avgNote: getAverageNote(student["notes"]) };
  });

  // ***
  function getAverageNote(scores) {
    return scores.length === 0
      ? 0
      : scores.reduce((acc, el) => acc + el, 0) / scores.length;
  }
}

// Map the Letters in a String
/**
 *
 * @param {String} word
 * @returns {Object}
 */
function mapLetters(word) {
  let charMap = {};
  const chars = word.split("");

  for (let i = 0; i < chars.length; i++) {
    charMap[chars[i]] ? charMap[chars[i]].push(i) : (charMap[chars[i]] = [i]);
  }

  return charMap;
}

// 25% Discount on the Most Expensive Item
/**
 *
 * @param {Array[Object]} cart
 * @returns {Number}
 */
function twentyFiveOnOne(cart) {
  let sumTotal = 0;
  let priceyBoi = 0;

  cart.forEach((item) => {
    if (item.price > priceyBoi) priceyBoi = item.price;
    sumTotal += item.price * item.quantity;
  });

  return Number((sumTotal - priceyBoi * 0.25).toFixed(2));
}

console.log(
  twentyFiveOnOne([
    { name: "jogging pants", quantity: 1, price: 29.99 },
    { name: "tennis socks", quantity: 2, price: 5.99 },
    { name: "sweat shirt", quantity: 1, price: 59.99 },
  ])
);
