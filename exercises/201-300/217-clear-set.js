// ejercicio 217: eliminar todos los elelmentos de un conjunto con clear().

const numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros); // Set(5) { 1, 2, 3, 4, 5 }

numeros.clear();
console.log(numeros); // Set(0) {}

// clear elimina todos los elementos que tiene el conjunto
