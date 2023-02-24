// ejercicio 269 : obtener la representacion en cadena de caracteres de un objeto Symbol.

const symbol1 = Symbol("Este es el Symbol no.1");

console.log(typeof symbol1); // symbol
console.log(symbol1.toString()); // Symbol(Este es el Symbol no.1)
console.log(symbol1); // Symbol(Este es el Symbol no.1)

// .toString === invocation
// no se nesecita toString para obtener en cadena de caracteres,
// osea que se hace de manera implicita.
