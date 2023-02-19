// ejercicio 192: encontrar el valor minimo y maximo de un arreglo con la clase Math.

const numeros = [8, 2, 7, 3, 6, -9, 3, 2, 5, 7, 9, 2, 12, 1, 0];

console.log(Math.min.apply(null, numeros)); // -9
console.log(Math.max.apply(null, numeros)); // 12
