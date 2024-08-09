// const fs = require("node:fs");
// const crypto = require("node:crypto");
// const https = require("node:https");

// // By default libuv uses 4 threads we can modify that using this line
// // Do not increase this beyond physical cores on your cpu
// // process.env.UV_THREADPOOL_SIZE = 4;

// console.log("1");

// // Read file content synchronously in utf-8 encoding
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   console.log("File Contents");
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log(data);
//   //   }
// });

// console.log("2");

// const start = Date.now();

// // This function is used to hash/encrypt a string like password synchronously and it does take some time.
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("Hash : ", Date.now() - start);

// const MAX_CALLS = 10;
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   // This function is used to hash/encrypt a string asynchronously and it makes use of libuv thread pool.
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Hash : ${i + 1}`, Date.now() - start);
//   });
// }

// const MAX_CALLS = 20;
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   https
//     .request("https://www.google.com", (res) => {
//       res.on("data", () => {});
//       res.on("end", () => {
//         console.log(`Request : ${i + 1}`, Date.now() - start);
//       });
//     })
//     .end();
// }
