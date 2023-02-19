// ejercicio 174: crear un arreglo a partir de un objeto iterable con Array.from.

function crearArreglo() {
  return Array.from(arguments);
}

const arreglo = crearArreglo(2, 6, 3);

console.log(arreglo); // [ 2, 6, 3 ]
console.log(typeof arreglo); // object
console.log(arreglo instanceof Array); // true

// ojo que solo funciona como funcion, si aplico |>  const crearArreglo = () => {
// devuelve un objeto con muchas propiedades.
// la funcion flecha se comporta de manera distinta
