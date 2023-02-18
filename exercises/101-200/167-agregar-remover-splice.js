// ejercicio 167: agragar o remover elementos de un arreglo con splice.

const lenguajes = ["Java", "C", "C++"];

lenguajes.splice(2, 0, "JavaScript");

console.log(lenguajes); // [ 'Java', 'C', 'JavaScript', 'C++' ]

// 1 argumento --> posicion donde ingresar la modificacion
// 2 argumento --> numero de elementos a eliminar desde la posicion del argumento 1
// 3 argumento --> string or value to replace the previous element

//-----------eliminar con splice----------------------

lenguajes.splice(2, 2);
console.log(lenguajes); // [ 'Java', 'C' ]

// se eliminaron 2 elementos a partir de la posicion 2
