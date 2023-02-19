// ejercicio 186: aplicar un filtro sobre un arreglo para obtener los elementos que cumplan una condicion.

const numeros = [1, 5, 7, 2, 8, 4, 9, 1, 0];

let resultado = numeros.filter((value) => {
  return value >= 5;
});

console.log(numeros);
console.log(resultado); // [ 5, 7, 8, 9 ]

// nota: el orden en que se guardan es el mismo en el que aparecen en el arreglo base.
