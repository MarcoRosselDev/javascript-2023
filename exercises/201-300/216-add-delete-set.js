// ejercicio 216: agregar y eliminar elementos de un conjunto con add y delete.

const numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros); // Set(5) { 1, 2, 3, 4, 5 }

console.log();

numeros.delete(3);
console.log(numeros); // Set(4) { 1, 2, 4, 5 }
