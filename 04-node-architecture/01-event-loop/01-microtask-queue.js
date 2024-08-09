// // Ex 1
// console.log("1");

// process.nextTick(() => {
//   console.log("process next tick");
// });

// console.log("2");

// // Ex 2
// Promise.resolve().then(() => {
//   console.log("promise resolved");
// });

// process.nextTick(() => {
//   console.log("process next tick");
// });

// // Ex 3
process.nextTick(() => {
  console.log("PCN 1");
});

process.nextTick(() => {
  console.log("PCN 2");

  process.nextTick(() => {
    console.log("PCN inner");
  });
});

process.nextTick(() => {
  console.log("PCN 3");
});

Promise.resolve().then(() => {
  console.log("PR 1");
});

Promise.resolve().then(() => {
  console.log("PR 2");

  process.nextTick(() => {
    console.log("PCN inner 2");
  });
});

Promise.resolve().then(() => {
  console.log("PR 3");
});
