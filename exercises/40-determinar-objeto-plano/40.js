//
// Ejercicio 40 : Determinar si una variable es un objeto plano.

let objetoPlano1 = {};
let objetoPlano2 = new Object();

let fecha = new Date();
let cadena = new String();

console.log(objetoPlano1.constructor === Object); // true
console.log(objetoPlano2.constructor === Object); // true

console.log;

console.log(fecha.constructor === Object); // false
console.log(cadena.constructor === Object); // false

// por lo que fecha y cadena ya no son objetos planos si no algo mas especializado
// probenientes de un sub constructor o algo asi
