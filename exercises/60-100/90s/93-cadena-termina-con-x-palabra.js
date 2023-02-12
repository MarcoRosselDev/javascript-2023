// ejercicio 93: determinar si una cadena de caracteres termina con un palabra especifica.

let cadena = "firefox es un navegador";

console.log(cadena.endsWith("ndo")); // false ----> considera la ultima palabra y como empieza

console.log(cadena.endsWith("nav")); // false
console.log(cadena.endsWith("navegador")); // true
console.log(cadena.endsWith("Navegador")); // false ----> es sensible a mayusaculas
console.log(cadena.endsWith("dor")); // true
