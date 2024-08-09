const { parentPort } = require("node:worker_threads");

function blockForFiveSeconds() {
  const startTime = Date.now();
  const waitTime = 3000; // 5000 milliseconds = 5 seconds
  while (Date.now() - startTime < waitTime) {
    // This loop will run until 5 seconds have passed
  }
  parentPort.postMessage(2);
}

blockForFiveSeconds();
