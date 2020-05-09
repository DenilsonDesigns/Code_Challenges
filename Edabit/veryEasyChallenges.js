// Convert Minutes into Seconds

// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function convert(minutes) {
  return minutes * 60;
}

// Area of a triangle

// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function triArea(base, height) {
  return (base * height) / 2;
}

// Profitable gamble

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Examples
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true
// Notes
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
  return prob * (prize - pay) > 0;
}

//Return the Next Number from the Integer Passed

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function addition(num) {
  return num + 1;
}

//Return the First Element in an Array

// Create a function that takes an array and returns the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr) {
  return arr[0];
}

// Convert Hours into Seconds

// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

function howManySeconds(hours) {
  return hours * 60 * 60;
}

// Return the Remainder from Two Numbers

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function remainder(x, y) {
  return x % y;
}

// Is the Number Less than or Equal to Zero?

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

// The farm problem

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50
// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

//Check if an Integer is Divisible By Five

// Create a function that returns true if an integer is divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true

// divisibleByFive(-55) ➞ true

// divisibleByFive(37) ➞ false
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function divisibleByFive(n) {
  return n % 5 === 0;
}

// Equality check

// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have an matching equality. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learnt so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are different.

// Examples
// checkEquality(1, true) ➞ false
// // A number and a boolean: their type is different

// checkEquality(0, "0") ➞ false
// // A number and a string: their type is different

// checkEquality(1,  1) ➞ true
// // A number and a number: their type and value are equal
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function checkEquality(a, b) {
  return typeof a === typeof b && a === b;

  // or simply a === b;
}

checkEquality(1, 1);

// Divides Evenly

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// # 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// # 85/4 = 21.25
// Notes
// a will always be greater than or equal to b.

function dividesEvenly(a, b) {
  return a % b === 0;
}

// Multiple of 100

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true

function divisible(num) {
  return num % 100 === 0;
}

// Recursion: Length of a String

// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

function length(str) {
  return str.length;
}

// Compare Strings by Count of Characters

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false

function comp(str1, str2) {
  return str1.length === str2.length;
}

// Is the string empty?

// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function isEmpty(s) {
  return s === "";
}

// Concatenate First and Last Name into One String

// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"

function concatName(firstName, lastName) {
  return lastName + ", " + firstName;
}

// Reverse an Array

// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

function reverse(arr) {
  return arr.reverse();
}

// Name greeting

// Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

// Examples
// helloName("Gerald") ➞ "Hello Gerald!"

// helloName("Tiffany") ➞ "Hello Tiffany!"

// helloName("Ed") ➞ "Hello Ed!"

const helloName = (name) => {
  return `Hello ${name}!`;
};

// Free Coffee Cups

// Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Examples
// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

// totalCups(213) ➞ 248
// Notes
// Number of cups I bought + number of cups I got for free.
// Only valid inputs will be given.

function totalCups(n) {
  return Math.floor(n + n / 6);
}

// console.log(totalCups(12));

// Find the index part 2

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.

function search(arr, item) {
  return arr.indexOf(item);
}

// Concatenating Two Integer Arrays

// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.

function search(arr, item) {
  return arr.indexOf(item);
}

// Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

function check(arr, el) {
  return arr.indexOf(el) !== -1;
}

// Find the Bug: Returning the Container
// The packaging system is running wild and the candy is lying loose all over in the warehouse and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

// The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

// Examples
// getContainer("Bread") ➞ "bag"

// getContainer("Beer") ➞ "bottle"

// getContainer("Candy") ➞ "plastic"

// getContainer("Cheese") ➞ null

function getContainer(product) {
  let container;
  switch (product) {
    case "Bread":
      container = "bag";
      break;
    case "Beer":
      container = "bottle";
      break;
    case "Milk":
      container = "bottle";
      break;
    case "Cerials":
      container = "box";
      break;
    case "Eggs":
      container = "carton";
      break;
    case "Candy":
      container = "plastic";
      break;
    default:
      container = null;
      break;
  }

  return container;
}

// Extract City Facts

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

// Check String for Spaces

// Create a function that returns true if a string contains any spaces.

// Examples
// hasSpaces("hello") ➞ false

// hasSpaces("hello, world") ➞ true

// hasSpaces(" ") ➞ true

// hasSpaces("") ➞ false

// hasSpaces(",./!@#") ➞ false
// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function hasSpaces(str) {
  return str.includes(" ");
}

// Count the Arguments

// Create a function that returns the number of argument it was called with.

// Examples
// numArgs() ➞ 0

// numArgs("foo") ➞ 1

// numArgs("foo", "bar") ➞ 2

// numArgs(true, false) ➞ 2

// numArgs({}) ➞ 1

function numArgs() {
  return arguments.length;
}

// To the Power of _____
// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27

function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}

// Return the Total Number of Parameters

// Create a function that returns the total number of parameters passed in.

// Examples
// numberArgs("a", "b", "c") ➞ 3

// numberArgs(10, 20, 30, 40, 50) ➞ 5

// numberArgs(x, y) ➞ 2

// numberArgs() ➞ 0

function numberArgs(/* fill-in */) {
  return arguments.length;
}

// Stack the boxes

// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

// Stack the Boxes

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// Examples
// stackBoxes(1) ➞ 1

// stackBoxes(2) ➞ 4

// stackBoxes(0) ➞ 0

function stackBoxes(n) {
  return n * n;
}

// Case Insensitive Comparison

// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false

function match(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

// Is the Word Singular or Plural?

// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Examples
// isPlural("changes") ➞ true

// isPlural("change") ➞ false

// isPlural("dudes") ➞ true

// isPlural("magic") ➞ false

function isPlural(word) {
  return word[word.length - 1] === "s";
}

// Slice of Pie

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// The function will be in this form:

// equalSlices(total slices, no. recipients, slices each)
// Examples
// equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices

// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices

// equalSlices(8, 3, 2) ➞ true

// equalSlices(8, 3, 3) ➞ false

// equalSlices(24, 12, 2) ➞ true

function equalSlices(total, people, each) {
  return people * each <= total;
}

// Char-to-ASCII

// Create a function that returns the ASCII value of the passed in character.

// Examples
// ctoa("A") ➞ 65

// ctoa("m") ➞ 109

// ctoa("[") ➞ 91

// ctoa("\") ➞ 92

function ctoa(c) {
  return c.charCodeAt(0);
}

// String or Integer?

// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

// Examples
// intOrString(8) ➞ "int"

// intOrString("Hello") ➞ "str"

// intOrString(9843532) ➞ "int"

function intOrString(param) {
  return typeof param === "string" ? "str" : "int";
}

// Testing K^K == N?

// Write a function that returns true if k^k == n for input (n, k).

// Examples
// kToK(4, 2) ➞ true

// kToK(387420489, 9) ➞ true
// // 9^9 == 387420489

// kToK(3124, 5) ➞ false

// kToK(17, 3) ➞ false

function kToK(n, k) {
  return Math.pow(k, k) === n;
}

// Add, Subtract, Multiply or Divide?

// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// Examples
// operation(15, 9) ➞ "added"

// operation(26, 2) ➞ "subtracted"

// operation(11, 11) ➞ null

function operation(num1, num2) {
  if (num1 + num2 === 24) {
    return "added";
  }
  if (num1 - num2 === 24) {
    return "subtracted";
  }
  if (num1 * num2 === 24) {
    return "multiplied";
  }

  if (num1 / num2 === 24) {
    return "divided";
  }
  return null;
}

// String to Integer and Vice Versa

// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples
// toInt("77") ➞ 77

// toInt("532") ➞ 532

// toStr(77) ➞ "77"

// toStr(532) ➞ "532"

function toInt(str) {
  return parseInt(str);
}

function toStr(int) {
  return "" + int;
}

// Volume of a Pizza

// Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!

// You are given the two parameters that Tom measured:

// radius
// height
// He tells you that if you multiply the height for the square of the radius and multiply the result for the mathematical constant π (Pi), you will obtain the total volume of the pizza. Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer (and rounding up for numbers with .5 as decimal part).

// Examples
// volPizza(1, 1) ➞ 3
// // (radius² x height x π) = 3.14159... rounded to the nearest integer.

// volPizza(7, 2) ➞ 308

// volPizza(10, 2.5) ➞ 785

function volPizza(radius, height) {
  return Math.round(radius ** 2 * height * Math.PI);
}

// Coding Website Score Calculator

// Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

// Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

// Examples
// scoreCalculator(1, 2, 3) ➞ 85

// scoreCalculator(1, 0, 10) ➞ 205

// scoreCalculator(5, 2, -6) ➞ "invalid"

function scoreCalculator(easy, med, hard) {
  for (let arg in arguments) {
    if (arguments[arg] < 0) {
      return "invalid";
    }
  }
  return easy * 5 + med * 10 + hard * 20;
}

// Simple OOP Calculator

// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
// Examples
// var calculator = new Calculator()

// calculator.add(10, 5) ➞ 15

// calculator.subtract(10, 5) ➞ 5

// calculator.multiply(10, 5) ➞ 50

// calculator.divide(10, 5) ➞ 2

class Calculator {
  // Write functions to add(), subtract(), multiply() and divide()
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

// Formatting Text on Edabit
// The important thing when a comment is posted on Edabit is its content, but when a comment is formatted in the right way, it will be properly shown and it will be easily readable by everyone.

// In this challenge, you have to format a word using four specific methods of the Markdown language, that is used by Edabit to format the text in the Comments tab and the Instructions tab (during the creation, or the translation, of a challenge). Each of these four methods (or styles), is identified by the lowercased initial letter of its name:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
// You are given two parameters: a string word being the word to format, and another string style being the lowercased initial of the style to apply. You have to implement a function that returns a string being the word surrounded by the special characters used to apply the given style.

function mdFormat(word, style) {
  switch (style) {
    case "b":
      return "**" + word + "**";
    case "i":
      return "_" + word + "_";
    case "c":
      return "`" + word + "`";
    case "s":
      return "~~" + word + "~~";
  }
}

// The 3 Programmers Problem

// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

// Examples
// programmers(147, 33, 526) ➞ 493

// programmers(33, 72, 74) ➞ 41

// programmers(1, 5, 9) ➞ 8

function programmers(one, two, three) {
  return Math.max(one, two, three) - Math.min(one, two, three);
}

// Check if Number is within a Given Range

// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// Examples
// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true

function isInRange(num, range) {
  return num >= range.min && num <= range.max;
}

// Find the Total Number of Digits the Given Number Has

// Create a function that takes a number as an argument and returns the amount of digits it has.

// Examples
// findDigitAmount(123) ➞ 3

// findDigitAmount(56) ➞ 2

// findDigitAmount(7154) ➞ 4

// findDigitAmount(61217311514) ➞ 11

// findDigitAmount(0) ➞ 1

function findDigitAmount(num) {
  return num.toString().length;
}

// Limit a Number's Value

// Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.

// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.
// Examples
// limitNumber(5, 1, 10) ➞ 5

// limitNumber(-3, 1, 10) ➞ 1

// limitNumber(14, 1, 10) ➞ 10

// limitNumber(4.6, 1, 10) ➞ 4.6

// function limitNumber(num, rangeLow, rangeHigh) {
//   switch (true) {
//     case num > rangeHigh:
//       return rangeHigh;
//     case num < rangeLow:
//       return rangeLow;
//     default:
//       return num;
//   }
// }

function limitNumber(num, rangeLow, rangeHigh) {
  return num > rangeHigh ? rangeHigh : num < rangeLow ? rangeLow : num;
}

// Count the Capital Letters

// Given a string of letters, how many capital letters are there?

// Examples
// capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

// function capitalLetters(txt) {
//   let count = 0;

//   for (let char of txt) {
//     if (char === char.toUpperCase()) count++;
//   }
//   return count;
// }

function capitalLetters(txt) {
  return [...txt].filter((char) => char === char.toUpperCase()).length;
}

// Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

// negate([]) ➞ []

function negate(arr) {
  let neww = [];
  arr.forEach((element) => {
    neww.push(-element);
  });
  return neww;
}

// more consise:
function negate(arr) {
  return arr.map((val) => -val);
}

// Find the Perimeter of a Rectangle
function findPerimeter(height, width) {
  return height * 2 + width * 2;
}

// Are the Numbers Equal?
function isSameNum(num1, num2) {
  return num1 === num2;
}

// Frames Per Second
function frames(minutes, fps) {
  return minutes * 60 * fps;
}

// Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
function addIndexes(arr) {
  return arr.map((el, index) => {
    return el + index;
  });
}

// The pH Scale
function pHName(pH) {
  if (pH > 14 || pH < 0) {
    return "invalid";
  }
  if (pH > 7) {
    return "alkaline";
  }
  if (pH < 7) {
    return "acidic";
  }
  return "neutral";
}

// Is the Last Character an N?
function isLastCharacterN(word) {
  return word[word.length - 1].toUpperCase() === "N";
}

// ES6: Destructuring Arrays IV
// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4]
// Use the Rest element
const str = "[head, ...tail] = [1, 2, 3, 4]";

// Multiply Every Array Item by Two
function getMultipliedArr(arr) {
  return arr.map((el) => {
    return el * 2;
  });
}

// Array of Word Lengths
function wordLengths(arr) {
  return arr.map((word) => {
    return word.length;
  });
}

// Add a Consecutive List of Numbers
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// Shapes With N Sides
function nSidedShape(n) {
  const shapes = [
    "circle",
    "semi-circle",
    "triangle",
    "square",
    "pentagon",
    "hexagon",
    "heptagon",
    "octagon",
    "nonagon",
    "decagon",
  ];
  return shapes[n - 1];
}

// Count the Syllables
function countSyllables(str) {
  let count = 0;
  [...str].forEach((char) => {
    if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) {
      count++;
    }
  });
  return count;
}

// Get the Sum of All Array Elements
function getSumOfItems(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}
