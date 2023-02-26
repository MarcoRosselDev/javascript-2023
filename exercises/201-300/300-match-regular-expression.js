// ejercicio 300: buscar numeros reales en un texto con una expresion regular.

const texto = 'El primero producto cuesta $29.95. El segundo producto cuesta %35.3. El total es $65.25.'

const patron = /\d+\.\d+/g;

const numeros = texto.match(patron).map(Number) 

console.log(numeros); // [ 29.95, 35.3, 65.25 ]