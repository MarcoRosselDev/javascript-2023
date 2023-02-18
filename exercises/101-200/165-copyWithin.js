// ejercicio 165: copyWithin

// Array.prototype.copyWithin()

const array1 = ["a", "b", "c", "d", "e"];

console.log(array1.copyWithin(0, 2, 3)); // [ 'c', 'b', 'c', 'd', 'e' ]

// que pasa si no aplicamos el 3er numero, considerara todo lo demas y se reemplazara, ojo que no modifica la longitud del arreglo, por lo que se pueden producir altercados. usar con precaucion.

console.log(array1.copyWithin(1, 0)); // [ 'c', 'c', 'b', 'c', 'd' ]
