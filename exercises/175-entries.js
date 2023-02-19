// ejercicio 175:

const array1 = [2, "mom", 6, "lokasdf", ["s"]];

// .entries va iterando por el arreglo cada ves que se le invoca.

const iterator = array1.entries();
console.log(iterator.next().value); // [ 0, 2 ]
console.log(iterator.next().value); // [ 1, 'mom' ]
console.log(iterator.next().value); // [2, 6];
console.log(iterator.next().value); // [ 3, 'lokasdf' ]
console.log(iterator.next().value); // [ 4, [ 's' ] ]
