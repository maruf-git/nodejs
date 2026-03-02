// What is a Module in Node.js?
// Modules are the building blocks of Node.js applications, allowing you to organize code into logical, reusable components. They help in:
// Organizing code into manageable files
// Encapsulating functionality
// Preventing global namespace pollution
// Improving code maintainability and reusability


// node js suppors two module systems:
// CommonJs (CJS) - The original module system used in Node.js which uses require() and module.exports.
// ECMAScript Modules (ESM) - A newer module system that uses import and export syntax, similar to JavaScript modules in the browser.

// now using require(commonjs) to create a http server in node js
const http = require("http");

http.createServer((req, res) => {
    console.log("start")
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World, How are you all??');
}).listen(8080,()=>{
    console.log("app is listening in port: ",8080)
});