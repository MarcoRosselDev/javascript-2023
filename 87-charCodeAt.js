// ejercicio 87: uso de la funcion charCodeAt para obtener el valor numerico de un caracter.

let cadena = "Ajax";

console.log(cadena.charCodeAt(0)); // 65
console.log(cadena.charCodeAt(1)); // 106
console.log(cadena.charCodeAt(2)); // 97

console.log();

// al parecer el 65 no es equivalente a \u0065 si no a \u0041

cadena = "\u0041";
console.log(cadena.charCodeAt(0)); // 65
