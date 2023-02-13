// ejercicio 100: obtener las partes o palabras de una cadena de caracteres con split.

let cadena = "Javascrpt es un lenguaje de programacion";

// el primer valor es el caracter que se detectara y se omite
// el segundo es opcional y es la cantidad de particiones;
let splitCadena = cadena.split(" "); // ----> es el caracter espacio vacio

console.log(splitCadena);
// resultado:

// ["Javascrpt", "es", "un", "lenguaje", "de", "programacion"];

// ahora que pasa si solo quiero asta lenguaje, para eso aplico el segundo valor en 4
splitCadena = cadena.split(" ", 4);
console.log(splitCadena);
// resultado:

// ["Javascrpt", "es", "un", "lenguaje"];
