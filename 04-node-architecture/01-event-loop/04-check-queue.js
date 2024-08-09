const fs = require("node:fs");

// // EX 1
// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");

//   setImmediate(() => console.log("SI 1 inner"));

//   Promise.resolve().then(() => {
//     console.log("PR 2");
//   });
//   process.nextTick(() => {
//     console.log("PCN 2");
//   });
// });

// process.nextTick(() => {
//   console.log("PCN 1");
// });

// Promise.resolve().then(() => {
//   console.log("PR 1");
// });
// setTimeout(() => console.log("ST 1"), 0);

// for (let i = 0; i < 20000000; i++) {}

// // EX 2
// setImmediate(() => console.log("SI 1"));
// setImmediate(() => {
//   console.log("SI 2");

//   process.nextTick(() => {
//     console.log("PCN 1");
//   });

//   Promise.resolve().then(() => {
//     console.log("PR 1");
//   });
// });
// setImmediate(() => console.log("SI 3"));

// // EX 3
setTimeout(() => console.log("ST 1"), 0);
setImmediate(() => console.log("SI 1"));
