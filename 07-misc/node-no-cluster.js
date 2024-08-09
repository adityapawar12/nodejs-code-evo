const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    function blockForFiveSeconds() {
      const startTime = Date.now();
      const waitTime = 3000; // 5000 milliseconds = 5 seconds
      while (Date.now() - startTime < waitTime) {
        // This loop will run until 5 seconds have passed
      }
    }

    blockForFiveSeconds();

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
