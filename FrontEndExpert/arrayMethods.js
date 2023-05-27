Array.prototype.myMap = function (callback) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }

  return output;
};

Array.prototype.myFilter = function (callback) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      output.push(this[i]);
    }
  }

  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let output = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && initialValue === undefined) {
      output = this[i];
    } else {
      output = callback(output, this[i], i, this);
    }
  }
  return output;
};

const array = [1, 2, 3];

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[i];
});

const filteredArray = array.myFilter((value, i, arr) => {
  return value + i + arr[1] > 5;
});

const reducedArray = array.myReduce((acc, val, i, arr) => {
  return acc + val + i + arr[1];
}, 3);

console.log(mappedArray); // [3, 5, 7];
console.log(filteredArray); // [3];
console.log(reducedArray); // 18;
