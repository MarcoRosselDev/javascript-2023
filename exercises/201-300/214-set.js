// ejercicio 214: crear un conjunto usando la clase set.

const numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(3);
numeros.add(2);
numeros.add(1);
numeros.add(5);
numeros.add(4);

console.log(numeros.size); // 5

console.log(numeros); // Set(5) { 1, 2, 3, 5, 4 }

// Set no permite elementos duplicados.
