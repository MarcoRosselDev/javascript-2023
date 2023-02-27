// ejercicio 302 --> buscar solo palabras en una frase con una expresion regular.

const frase = "Javascript es un lenguaje de programacion";

const patron = /[a-zA-Z]+/g;

console.log(frase.match(patron)); // [ 'Javascript', 'es', 'un', 'lenguaje', 'de', 'programacion' ]

// ojo que este patron aplica con palabras escritas en ingles, si aplicamos tildes o ñ no lo reconosera.
