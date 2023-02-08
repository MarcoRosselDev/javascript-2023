//
// ejercicio 23: Promocionar valores a tipo logico (booleano).

// en ingles se le conoce como coercionar o coersing

console.log(Boolean(-0)); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(new Number(0))); // true
console.log(Boolean(7)); // true
console.log(Boolean(-7)); // true

console.log();

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log();

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log();

console.log("strings");
console.log(Boolean("")); // false
console.log(Boolean(new String())); // true
console.log(Boolean(new String(""))); // true

console.log();

console.log("objetos");
console.log(Boolean({})); // true
console.log(Boolean([])); // true

let anonimo = function () {};

console.log(Boolean(anonimo)); // true
