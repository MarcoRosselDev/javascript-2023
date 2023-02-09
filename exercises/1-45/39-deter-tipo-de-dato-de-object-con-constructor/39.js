//
// Ejercicio 39 : Determinar el tipo de un objeto a traves de la propiedad constructor.

let fecha = new Date();
let cadena = new String();

console.log(fecha.constructor); //[Function: Date]
console.log(cadena.constructor); //[Function: String]

// con esto podemos preguntar si pertenece al tipo de constructor
console.log(fecha.constructor === Date); // true
console.log(cadena.constructor === String); // true
