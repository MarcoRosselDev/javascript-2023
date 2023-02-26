// ejercicio 299 : Buscar numeros enteros en un texto con una expresion regular.

const texto = 'La edad de Daniela es 29. Hoy es 26 de febrero de 2023'

const patron = /\d+/g

let numeros = texto.match(patron).map(Number)

console.log(numeros); // [ 29, 26, 2023 ]
