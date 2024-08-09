const fs = require("node:fs");

// EX 1
// fs.readFile(__dirname + "./file.txt", () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => {
//   console.log("PCN 1");
// });

// Promise.resolve().then(() => {
//   console.log("PR 1");
// });

// EX 2
// uncertain result because of the internal settimeout minimum limit being set to 1 even if we give it 0 as value. So it depends on how busy the cpu is.
// setTimeout(() => console.log("ST 1"), 0);

// fs.readFile(__dirname + "./file.txt", () => {
//   console.log("This is readFile 1");
// });

// // EX 3
// fs.readFile(__dirname + "./file.txt", () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => {
//   console.log("PCN 1");
// });

// Promise.resolve().then(() => {
//   console.log("PR 1");
// });
// setTimeout(() => console.log("ST 1"), 0);

// for (let i = 0; i < 20000000; i++) {}

// // EX 4
fs.readFile(__filename, () => {
  console.log("This is readFile 1");
});

process.nextTick(() => {
  console.log("PCN 1");
});

Promise.resolve().then(() => {
  console.log("PR 1");
});
setTimeout(() => console.log("ST 1"), 0);
setImmediate(() => console.log("SI 1"));

for (let i = 0; i < 20000000; i++) {}
