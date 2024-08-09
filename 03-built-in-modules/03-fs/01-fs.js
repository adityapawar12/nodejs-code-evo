// Import fs module
// const fs = require("fs");
const fs = require("node:fs");

console.log("1");

// Read file content synchronously in utf-8 encoding
const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log("fileContents >>> ", fileContents);

console.log("2");

// Read file content asynchronously in utf-8 encoding
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("error >>> ", error);
  } else {
    console.log("data >>> ", data);
  }
});

console.log("3");

// Write to a file synchronously replaces existing content
fs.writeFileSync("./greet.txt", "nothing is true everything is permitted");

console.log("4");

// Write to a file asynchronously replaces existing content
fs.writeFile(
  "./greet-asynchronously.txt",
  "nothing is true everything is permitted",
  (error) => {
    if (error) {
      console.log("error >>> ", error);
    } else {
      console.log("Message has been delivered altair!");
    }
  }
);

console.log("5");

// Write to a file asynchronously with the append flag
fs.writeFile(
  "./greet-asynchronously.txt",
  " nothing is true everything is permitted",
  { flag: "a" },
  (error) => {
    if (error) {
      console.log("error >>> ", error);
    } else {
      console.log("Message has been delivered ezio!");
    }
  }
);

console.log("6");
