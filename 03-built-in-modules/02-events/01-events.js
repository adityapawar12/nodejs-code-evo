// Import events built in
// const EventEmitter = require("events");
const EventEmitter = require("node:events");

// Create a new instance of event emitter
const emitter = new EventEmitter();

// Listen to the order-pizza event
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza with ${topping}!`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log(`Serving complimentry drink!`);
  }
});

console.log("Do work before events occur in the system");

// Emit the order-pizza event
emitter.emit("order-pizza", "large", "mushroom");
emitter.emit("order-pizza", "medium", "mushroom");

const PizzaShop = require("./02-pizza-shop");
const DrinkMachine = require("./03-drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza with ${topping}!`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
