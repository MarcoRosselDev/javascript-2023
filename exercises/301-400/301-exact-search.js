// ejercicio 301: Realizar una busqueda condicional de texto con una expresion regular.

let frase = 'JavaScript es un lenguaje de programacion'
const patron = /JavaScript|PHP/g // | significa lo uno o lo otro

console.log(patron.exec(frase)); /* [
    'JavaScript',
    index: 0,
    input: 'JavaScript es un lenguaje de programacion',
    groups: undefined
  ] */

frase = 'PHP es un lenguaje de programacion'

console.log(patron.exec(frase)); // null

// por que null?

// por que si queremos solo buscar coinsidencias es mejor usar .search - .test
// por que .exec devuelve un arreglo, lo que lo hace inreutilizable.