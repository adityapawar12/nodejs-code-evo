const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("This is readable stream close event callback");
});

setImmediate(() => console.log("SI 1"));

setTimeout(() => console.log("ST 1"), 0);

Promise.resolve().then(() => {
  console.log("PR 1");
});

process.nextTick(() => {
  console.log("PCN 1");
});
