// es module
// export method 1
// export default function greeting() {
//     console.log("Good Morning")
// }
// export function add(a, b) {
//     console.log(a + b);
// }
// export function subtraction(a, b) {
//     console.log(a - b)
// }


function greeting() {
    console.log("Good Morning")
}

function add(a, b) {
    console.log(a + b);
}

function subtraction(a, b) {
    console.log(a - b)
}

// exprot method 2
export { greeting as default, add, subtraction };