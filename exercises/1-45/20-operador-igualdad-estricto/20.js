// Ejercicio 20: Uso baisco del operador de igualdad estricto.

// ===

let numero = 5;

console.log(numero == 5); //------------> true
console.log(numero == "5"); //----------> true

console.log(numero === "5"); //----------> false
// es mas estricto que ==
// devido a que js es un lenguaje muy flexible.
console.log(numero === 5); //----------> true
