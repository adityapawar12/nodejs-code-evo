// Import path built in
// const path = require("path");
const path = require("node:path");

// properties from the common js modules parameters.
console.log(__filename);
console.log(__dirname);

// path.basename(pathString) : returns the last portion of the path.
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// path.extname(pathString) : returns the extension of the path.
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// path.parse(pathString) : returns an object with properties of significant elements of the path.
console.log(path.parse(__filename));

// path.format(pathObject) : returns a path string when we provide it a path object(like the one returned by parse method).
console.log(path.format(path.parse(__filename)));

// path.isAbsolute(pathString) : returns a boolean value which states if path is absolute or not.
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./01-path.js"));

// path.join(pathString1, pathString2, pathString3....) : returns a path string which is joined by using os specific delimiter.
console.log(path.join("folder-one", "folder-two", "01-path.js"));
console.log(path.join("/folder-one", "folder-two", "01-path.js"));
console.log(path.join("/folder-one", "//folder-two", "01-path.js"));
console.log(path.join("/folder-one", "//folder-two", "../01-path.js"));
console.log(path.join(__dirname, "01-path.js"));

// path.resolve(pathString1, pathString2, pathString3....) : resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve("folder-one", "folder-two", "01-path.js"));
console.log(path.resolve("/folder-one", "folder-two", "01-path.js"));
console.log(path.resolve("/folder-one", "//folder-two", "01-path.js"));
console.log(path.resolve("/folder-one", "//folder-two", "../01-path.js"));
console.log(path.resolve(__dirname, "01-path.js"));
