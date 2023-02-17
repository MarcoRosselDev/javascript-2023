// ejercicio 152: eliminar elemento de un arreglo con la libreria lodash

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let pares = _.remove(numeros, (n) => {
  return n % 2 == 0;
});

console.log(numeros);
console.log(pares);

// contenido copiado de lodash web para probar el codigo.
// no corre en node si no instalo lodash,
