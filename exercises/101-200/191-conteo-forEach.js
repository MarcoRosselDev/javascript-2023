// ejercicio 191: contar las ocurrencias de los elementos de un arreglo con forEach.

const numeros = [8, 2, 7, 3, 6, 9, 3, 2, 5, 7, 9, 2, 12, 1, 0];

let conteo = {};

let ocurrencias = numeros.forEach((valor, indice, arreglo) => {
  if (conteo[valor]) {
    conteo[valor] += 1;
  } else {
    conteo[valor] = 1;
  }
});

console.log(conteo);

// retorna las veces que se repite un elemento en el arreglo
// {
//   '0': 1,
//   '1': 1,
//   '2': 3,
//   '3': 2,
//   '5': 1,
//   '6': 1,
//   '7': 2,
//   '8': 1,
//   '9': 2,
//   '12': 1
// }
