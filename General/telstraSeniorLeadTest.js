const people = [
  { name: "Person 1", age: 10 },

  { name: "Person 2", age: 70 },

  { name: "Person 3", age: 30 },
];

// Expected result
///////////////////////////////////////
const expectedResult = {
  names: ["Person 1", "Person 3"],

  sumOfAges: 40,
};

///////////////////////////////////////
// Update the function below
///////////////////////////////////////

function sumAgesLessThan50(people) {
  let rMap = {
    names: [],
    sumOfAges: 0,
  };

  people.forEach((person) => {
    if (person.age < 50) {
      rMap.names.push(person["name"]);
      rMap.sumOfAges += person["age"];
    }
  });

  return rMap;
}

console.log(sumAgesLessThan50(people));
