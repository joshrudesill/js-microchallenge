// Create a function that takes in two numbers.

// If the first number is bigger than the second number, the function should
// return "The first number was bigger!"

// If the second number is bigger than the first number, the function should
// return "The second number was bigger!"

// If the numbers are the same, the function should return
// "The numbers are the same!"

// Examples:

// compareTwoNumbers(3, 2)
//     should evaluate to "The first number was bigger!"

// compareTwoNumbers(2, 7)
//     should evaluate to "The second number was bigger!"

// compareTwoNumbers(7, 7);
//     should evaluate to "The numbers are the same!"

function compareTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return "The first number was bigger!";
  }
  if (n1 < n2) {
    return "The second number was bigger!";
  }
  return "The numbers are the same!";
}
console.log(compareTwoNumbers(3, 2));
console.log(compareTwoNumbers(2, 7));
console.log(compareTwoNumbers(7, 7));

try {
  module.exports = compareTwoNumbers;
} catch (err) {
  // do nothing...
}
