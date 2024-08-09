// // Import http built in module
// // const http = require("http");
const http = require("node:http");
const fs = require("node:fs");

// // Server with text response
// // create a http server which gets request and response objects as arguments to it's callback function.
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello world!");
// });

// // start the server using listen method which takes a port number and callback function as it's argument
// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// // Server with json response
// const jsonServer = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };

//   // set content type for json response
//   res.writeHead(200, { "Content-Type": "application/json" });
//   // We will get error without json stringify.
//   res.end(JSON.stringify(superHero));
// });

// jsonServer.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// // Server with html response
// const server = http.createServer((req, res) => {
//   // set content type for html response
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // This reads entire file content in one go so if we have a large html file it will store that in one buffer which will be unnecessary use of memory
//   // const html = fs.readFileSync("./index.html", "utf-8");
//   // res.end(html);

//   fs.createReadStream(__dirname + "/index.html").pipe(res);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// // Server with html template response
// const server = http.createServer((req, res) => {
//   const name = "Ezio Auditore";
//   res.writeHead(200, { "Content-Type": "text/html" });

//   let html = fs.readFileSync("./index-2.html", "utf-8");

//   html = html.replaceAll("{{name}}", name);

//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// // Server with http routing
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ firstName: "Bruce", lastName: "Wayne" }));
  } else {
    res.writeHead(404);
    res.end("404, page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
