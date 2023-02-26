// ejercicio 296 : buscar texto en una cadena de caracteres con una expresion regular.

const frase = 'JavaScript es un lenguaje de programacion que se ejecuta en un navegador Web.';

let patron = /javascript/i

console.log(frase.search(patron)); // 0

// la diferencia con el ejercicio anterior es que con expresion regular no importan minusculas y mayusculas,