// Import fs/promises module
const fs = require("node:fs/promises");

console.log("1");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log("data >>> ", data))
  .catch((error) => console.log("error >>> ", error));

console.log("2");

async function readFileContent(path) {
  try {
    const content = await fs.readFile(path, "utf-8");

    if (content) {
      console.log("data 2 >>> ", content);
    }
  } catch (error) {
    console.log("error 2 >>> ", error);
  }
}

readFileContent("./file.txt");

console.log("3");
