const obj1 = {
  name: "Bruce Wayne",
};

let obj2 = obj1;
// obj2.name = "Clark kent";

// Prints clark kent
// console.log(obj1.name);
// console.log(obj2.name);

// // Avoid that
obj2 = {
  name: "Clark Kent",
};
console.log(obj1.name);
console.log(obj2.name);

// // Same way
function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

// This works
module.exports = {
  add: add,
  subtract: subtract,
};

// This does not work because exports is just a reference to module.exports
// exports = {
//   add,
//   subtract,
// };
