// ejecicio 188: sumar todos los valores numericos de un arreglo con la funcion reduce.

const numeros = [4, 7, 2, 1, 8, 3];

let resultado = numeros.reduce((anterior, actual) => {
  return anterior + actual;
});

console.log(resultado); // 25
