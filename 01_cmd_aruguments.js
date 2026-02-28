// const dotenv = require("dotenv") 
// dotenv.config()

console.log("All arguments: ",process.argv);
console.log("process env: ", process.env.NAME || "A"); // need to install dotenv to use it

// Show the V8 engine version used by your Node.js installation
console.log(`V8 version: ${process.versions.v8}`);