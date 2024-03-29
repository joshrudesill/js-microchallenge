// Create a function that takes in two numbers.
// Your function should return the sum of the two numbers passed in.

// Examples:

// sum(2, 3)
//     should evaluate to 5

// sum(2, 7)
//     should evaluate to 9

function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(2, 3));
console.log(sum(2, 7));

try {
  module.exports = sum;
} catch (err) {
  // do nothing...
}
