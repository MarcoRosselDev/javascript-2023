// ejercicio 37:  Determinar si una variable es de tipo objeto.

let x = {};
let y = "javaScript";
let z = 5;

console.log(typeof x); // objeect
console.log(typeof y); // string
console.log(typeof z); // number

console.log();

console.log(typeof x === "object"); // true
console.log(typeof y === "object"); // false
console.log(typeof z === "object"); // false
