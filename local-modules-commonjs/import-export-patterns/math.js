// // Default export commonjs pattern one(normal)
// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// module.exports = add;

// // Default export commonjs pattern two(short form)
// module.exports = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// // Multiple exports commonjs pattern one
// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// function subtract(numOne, numTwo) {
//   return numOne - numTwo;
// }

// // No ES6
// module.exports = {
//   add: add,
//   subtract: subtract,
// };

// // ES6
// module.exports = {
//   add,
//   subtract,
// };

// // Multiple exports commonjs pattern two
module.exports.add = (numOne, numTwo) => {
  return numOne + numTwo;
};

module.exports.subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};

// // Multiple exports commonjs pattern three not recommended
// exports.add = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// exports.subtract = (numOne, numTwo) => {
//   return numOne - numTwo;
// };
