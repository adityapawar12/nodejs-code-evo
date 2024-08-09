// setTimeout(() => console.log("ST 1"), 0);
// setTimeout(() => {
//   console.log("ST 2");

//   process.nextTick(() => {
//     console.log("PCN inner 3");

//     Promise.resolve().then(() => {
//       console.log("PR inner");
//     });
//   });
// }, 0);
// setTimeout(() => console.log("ST 3"), 0);

// process.nextTick(() => {
//   console.log("PCN 1");
// });

// process.nextTick(() => {
//   console.log("PCN 2");

//   process.nextTick(() => {
//     console.log("PCN inner");
//   });
// });

// process.nextTick(() => {
//   console.log("PCN 3");
// });

// Promise.resolve().then(() => {
//   console.log("PR 1");
// });

// Promise.resolve().then(() => {
//   console.log("PR 2");

//   process.nextTick(() => {
//     console.log("PCN inner 2");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("PR 3");
// });

setTimeout(() => console.log("ST 1"), 1000);
setTimeout(() => {
  console.log("ST 2");
}, 500);
setTimeout(() => console.log("ST 3"), 0);
