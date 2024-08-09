// // Default export es6 modules pattern one
// function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// export default add;

// // Default export es6 modules pattern two
// export default function add(numOne, numTwo) {
//   return numOne + numTwo;
// }

// // Multiple exports es6 modules
// const add = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// const subtract = (numOne, numTwo) => {
//   return numOne - numTwo;
// };

// // ES6
// export default {
//   add,
//   subtract,
// };

// // Normal
// export default {
//   add: add,
//   subtract: subtract,
// };

// Named exports es6 mdoules pattern one
export const add = (numOne, numTwo) => {
  return numOne + numTwo;
};

export const subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};
