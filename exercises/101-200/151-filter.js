// ejercicio 151: eliminar elementos de un arreglo por medio de un filtro.

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// nos piden elminar los numero impares

let numerosImpares = numeros.filter((valor) => {
  return valor % 2 == 1;
});

console.log(numeros); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numerosImpares); // [ 1, 3, 5, 7, 9 ]

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//-----------------------------------------------------------------------
// filter es muy util en general

var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
