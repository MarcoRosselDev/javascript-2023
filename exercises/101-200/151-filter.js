// ejercicio 151: eliminar elementos de un arreglo por medio de un filtro.

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// nos piden elminar los numero impares

let numerosImpares = numeros.filter((valor) => {
  return valor % 2 == 1;
});

console.log(numeros); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numerosImpares); // [ 1, 3, 5, 7, 9 ]
