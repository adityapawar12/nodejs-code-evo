// // Local module using common js
// require("./normal-module/add");

// // Local module using common js module.exports
// const add = require("./module-exports/add-module-exports");

// const sumOne = add(324, 23);
// const sumTwo = add(1293, 9832);

// console.log("Sum One >>> ", sumOne);
// console.log("Sum Two >>> ", sumTwo);

// // Module scope each module has seperate scope.
// require("./module-wrapper/batman");
// require("./module-wrapper/superman");
// require("./module-wrapper/iife");

// // Module caching
// const superHero = require("./module-cache/super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./module-cache/super-hero");
// console.log(newSuperHero.getName());

// // Avoid module caching
// const superHeroCreator = require("./module-cache/super-hero-avoid-cache");

// const batman = new superHeroCreator("batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new superHeroCreator("superman");
// console.log(superman.getName());

// // Import export patterns.
// // Default
// const add = require("./import-export-patterns/math");
// console.log(add(2, 344));

// // Multiple
// const math = require("./import-export-patterns/math");
// console.log(math.add(2, 344));
// console.log(math.subtract(2, 344));

// // ES6 destructured imports
// const { add, subtract } = require("./import-export-patterns/math");
// console.log(add(2, 344));
// console.log(subtract(2, 344));

// module.exports vs exports
const { add, subtract } = require("./import-export-patterns/object-reference");
console.log(add(2, 344));
console.log(subtract(2, 344));
