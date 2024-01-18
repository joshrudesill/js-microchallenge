// Create a function that takes in an array of numbers.
// Your function should return the sum of the first and last
// numbers from the array.

// Examples:

// addFirstAndLast([3, 2, 6])
//     should evaluate to 9

// addFirstAndLast([-9, 12, 33, 29])
//     should evaluate to 20

function addFirstAndLast(array) {
  return array[0] + array.at(-1);
}
console.log(addFirstAndLast([3, 2, 6]));
console.log(addFirstAndLast([-9, 12, 33, 29]));
try {
  module.exports = addFirstAndLast;
} catch (err) {
  // do nothing...
}
