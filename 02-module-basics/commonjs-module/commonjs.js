// method 1 importing
// const greeting = require("./lets_export");

// method 2 importing
// const {add} = require("./lets_export");

// method 3 importing
const { greeting, add } = require("./lets_export");
greeting();
console.log(add(5, 5))

// method 4 importing by direct complete file
// const hello = require("./lets_export");
// console.log(hello)
// hello.greeting();
// console.log(hello.add(5, 5))