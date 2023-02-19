// ejercicio 190: encontrar los elementos unicos de un arreglo con la fucnion filter.

const numeros = [8, 2, 7, 3, 6, 9, 3, 2, 5, 7, 9, 2, 12, 1, 0];

let resultado = numeros.filter((valor, indice, arreglo) => {
  return arreglo.indexOf(valor) == indice;
  // console.log(valor);
  // console.log(indice);
  // console.log(arreglo);
});

console.log(resultado);
// [8, 2, 7, 3, 6, 9, 5, 12, 1, 0];
