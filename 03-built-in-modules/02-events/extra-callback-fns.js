const greet = (name) => {
  console.log(`Hello, ${name}`);
};

const greetAditya = (greeter) => {
  const name = "Aditya";
  greeter(name);
};

greetAditya(greet);

// Renamed functions as to their roles in this program.
const callback = (name) => {
  console.log(`Hello, ${name}`);
};

const higherOrderFn = (callbackFn) => {
  const name = "Aditya";
  callbackFn(name);
};

higherOrderFn(callback);

// Synchronus callbacks
console.log([2, 53, 61].map((num) => num * 2));

// Asynchronus callbacks
setTimeout(() => {
  console.log("one second");
}, 1000);
