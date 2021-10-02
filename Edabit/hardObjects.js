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

// Encoded String Parse
/**
 *
 * @param {String} str
 * @returns {Object}
 */
function parseCode(str) {
  let words = [];
  let currWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0" || i === str.length - 1) {
      if (i === str.length - 1) {
        currWord += str[i];
      }
      if (currWord.length > 0) {
        words.push(currWord);
      }
      currWord = "";
    } else {
      currWord += str[i];
    }
  }

  return {
    firstName: words[0],
    lastName: words[1],
    id: words[2],
  };

  // *** much better
  // let [first, last, id] = str.split(0).filter(Boolean);
  // return {firstName: first, lastName: last, id: id};
}

// Super Strict Grading
/**
 *
 * @param {Object} students
 * @returns {String[]}
 */
function whoPassed(students) {
  const r = [];
  for (let [k, v] of Object.entries(students)) {
    if (v.every((el) => el.split("/")[0] === el.split("/")[1])) {
      r.push(k);
    }
  }
  return r.sort();
}

// Got Enough Money?
// Create a function that returns any of the items you can afford in
// the store with the money you have in your wallet.
// Sort the list in alphabetical order.
function itemsPurchased(store, wallet) {
  const convertNum = (strNum) => {
    let newNum = strNum.replace(/[$,]+/g, "");
    return parseInt(newNum);
  };

  const r = [];

  for (let [k, v] of Object.entries(store)) {
    if (convertNum(v) <= convertNum(wallet)) r.push(k);
  }

  return r.length > 0 ? r.sort() : "Nothing";
}

// Burglary Series (17): Who is the Winner?
// The fight between you and your spouse is over.
// Based on your perception of how the fight went, determine who won.

// Given an object with three rounds, with nested objects as your points per round,
// determine the winner by counting who won the most rounds.
// The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.
function determineWinnerOfFight(obj) {
  let score = 0;

  for (let val of Object.values(obj)) {
    if (val.me > val.spouse) score--;
    if (val.me < val.spouse) score++;
  }

  return score > 0 ? "SPOUSE!" : score < 0 ? "ME!" : "NOBODY!";
}

// Get Groups with Students
// Create a function that takes two arrays: groups and students.
// It should return one array with groups merged with students by id.
// Students within groups should be ordered in the same way the studentIds were ordered.
function getGroupsWithStudents(groups, students) {
  return groups.map((obj) => {
    return {
      id: obj.id,
      name: obj.name,
      students: getStudents(obj.studentIds, students),
      // cleaner way:
      // students: studentIds.map(id => students.find(student => student.id === id)),
    };
  });

  function getStudents(ids, listOfStudents) {
    let r = [];

    ids.forEach((id) => {
      listOfStudents.forEach((student) => {
        if (student.id === id) r.push(student);
      });
    });

    return r;
  }
}

// Burglary Series (05): Third Most Expensive
// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list.
// If that is not possible, because there are not enough items, return false.
function thirdMostExpensive(obj) {
  let ordered = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  return ordered.length < 3 ? false : ordered[2];
}

// Burglary Series (13): Sort That List
// The insurance guy tells you he needs an updated list of the stolen goods,
// and surely only to annoy you, he adds, "in reverse alphabetical order".

// Given an object with the stolen items, return a new object with the list
// in reverse alphabetical order.

// https://edabit.com/challenge/qrb9Xaapq9b8nstLe
function sortList(obj) {}

console.log(
  // ***
  sortList({
    c: 100,
    a: 50,
    b: 10,
    d: 50,
  })
  // ***
);
