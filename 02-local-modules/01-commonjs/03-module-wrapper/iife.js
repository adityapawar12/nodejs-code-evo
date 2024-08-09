// Node js uses immediately invoked function expressions as module wrappers. It helps in keeping the scopes between two modules seperate.
(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello, ");

// Each of the module iife will have five arguments which will be
// __filename : path of the current file.
// __dirname : Directory path of the current file.
// require : Require function is used to import a function using it's path.
// exports
// module : This is a reference to the current module.
(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("I'm, ");
