// ejercicio 295: buscar texto en  una cadena de caracters con el metodo search.

const frase = 'JavaScript es un lenguaje de programacion que se ejecuta en un navegador Web.';

let palabra = 'lenguaje';

console.log(frase.search(palabra)); // 17
palabra = 'ejecuta'
console.log(frase.search(palabra)); // 49
palabra = 'monkeytype'
console.log(frase.search(palabra)); // -1

// marca -1 cuando no se encuentra la palabra espesificada