// ejercicio 68: uso del operdar logico de negacion para alterar el valor de verdad

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!!true); // true

// a && b --------> a and b
// a || b --------> a or b

let a = true;
let b = false;

console.log(!(a && b)); // true
console.log(!(a || b)); // false
