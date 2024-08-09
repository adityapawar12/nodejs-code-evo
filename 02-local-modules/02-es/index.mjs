// // Importing default exported function/variable.
// import add from "./math.mjs";

// console.log(add(34, 7));

// // Importing multiple exported functions/variables.
// import math from "./math.mjs";

// console.log(math.add(34, 7));
// console.log(math.subtract(34, 7));

// // Importing multiple exported functions/variables using object destructuring from ES6 later.
// import math from "./math.mjs";

// const { add, subtract } = math;

// console.log(add(34, 7));
// console.log(subtract(34, 7));

// // Importing multiple exported functions/variables using Named exports.
// import * as math from "./math.mjs";

// const { add, subtract } = math;

// console.log(add(34, 7));
// console.log(subtract(34, 7));

// Importing multiple exported functions/variables using Named exports.
import { add, subtract } from "./math.mjs";

console.log(add(34, 7));
console.log(subtract(34, 7));
