// ejercicio 303: crear una expresion regular con la clase RegExp.

const patron = /\d+/i;

const numeroRegex = new RegExp(patron);

let cadena = "123";

console.log(numeroRegex.test(cadena)); // true

cadena = "abc";

console.log(numeroRegex.test(cadena)); // false

// RegExp ---> nueva expresion regular, RegExp tiene .test para preguntar si alguna variable coinside o no con la regular expression.
