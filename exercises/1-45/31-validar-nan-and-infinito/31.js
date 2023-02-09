// Ejercicio 31: Realizar validaciones para NaN e infinito.

let x = NaN;
let y = -Infinity;
let z = Infinity;
let w = 5;

console.log();
console.log(Number.isNaN(x)); // true
console.log(Number.isFinite(y)); // false por que es infinito
console.log(Number.isFinite(z)); // false
console.log(Number.isNaN(w)); //false
console.log(Number.isFinite(w)); // true
