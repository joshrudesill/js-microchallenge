// Create a function that takes in an array of arrays. Like so:
// [
//   [1, 5],
//   [2],
//   [5, 10, 3]
// ]

// Your function must add up all of the numbers in all of the
// arrays and return the value.

// Examples:
let nestedNumbers = [[1, 5], [2], [5, 10, 3]];

// addNestedNumbers()
//     should evaluate to 26

function addNestedNumbers(arr) {
  return arr.flatMap((n) => n).reduce((pv, cv) => pv + cv, 0);
}
console.log(addNestedNumbers(nestedNumbers));

try {
  module.exports = addNestedNumbers;
} catch (err) {
  // do nothing...
}
