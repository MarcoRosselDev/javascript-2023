// ejercicio 98: buscar texto usando expresiones regulares con el metodo search.

let cadena = "Javascrpt es un lenguaje de programacion";

console.log(cadena.search("J")); // 0
console.log(cadena.search("l")); // 16
console.log(cadena.search("c")); // 5 -----> solo la primera coincidencia

// por lo visto solo retorna la posicion de donde esta la primera coincidencia el el texto

cadena = "jkasdjfaksdjf";
console.log(cadena.search(/[^a-z]/i)); // -1
cadena = "javasprit7";
console.log(cadena.search(/[^a-z]/i)); // 9

// estamos preguntando que encuentre cualqueier numero o simbolo que no sea entre a - z
