// introduction to es modulers
// ES Modules (ESM) is the official standard format for packaging JavaScript code for reuse.
// It was introduced in ES6 (ES2015) and is now supported in Node.js.
// Prior to ES Modules, Node.js exclusively used the CommonJS module format (require/exports).
// Now developers can choose between CommonJS and ES Modules based on their project needs.

// importing method 1 and two
import greeting, { add, subtraction as subtract } from "./utils.mjs";
greeting();
add(5, 5);
subtract(5, 5)


// if we did not use filename.mjs then we would need to use "type" : "module" in package.json