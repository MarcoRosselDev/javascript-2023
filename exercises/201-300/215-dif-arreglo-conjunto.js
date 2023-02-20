// ejercicio 215: estudiar la diferencia entre un arreglo y un conjunto.

// arreglos ---> permiten duplicados
// conjuntos --->no permiten duplicados

const arreglo = [1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9];

console.log(arreglo.length); // 16

console.log();

const conjunto = new Set();
conjunto.add(1);
conjunto.add(1);
conjunto.add(2);
conjunto.add(2);

console.log(conjunto.size); // 2
