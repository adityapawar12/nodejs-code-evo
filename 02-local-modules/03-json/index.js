// We can omit the extension but in that case node will first look for data.js file so not recommended.
const data = require("./data.json");

console.log("data >>> ", data.name);
