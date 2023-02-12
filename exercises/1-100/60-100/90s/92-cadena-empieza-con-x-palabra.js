// ejercicio 92: determinar si una cadena de caracteres empieza con una palabra especifica

let cadena = "firefox es un navegador";
console.log(cadena);
console.log(cadena.startsWith("firefox")); // true
console.log(cadena.startsWith("Firefox")); // false --------> es sensible a mayusculas y min.

console.log();

console.log(cadena.startsWith("fir")); // true ------> no es necesario la palabra completa
