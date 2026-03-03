// i want to use this from commonjs.js file
function greeting() {
    console.log("Hello Everyone");
}

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


function division(a, b) {
    return a / b;
}
// method 1: exporting a single class
// module.exports = greeting;

// method 2: exporting multiple items;
// exports.add = add;
// exports.subtract = subtract;

// method 3: exporting an object with multiple properties
module.exports = { add, division, subtract, multiply, greeting }

