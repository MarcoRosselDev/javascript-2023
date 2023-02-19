// ejercicio 180: iterar el contenido de un arreglo por medio del ciclo while.

const numeros = [2, 6, 3, 8, 3, 9, 4, 0, 1];

let index = 0;

while (index < numeros.length) {
  console.log(numeros[index]);
  index++;
}
// 2
// 6
// 3
// 8
// 3
// 9
// 4
// 0
// 1

// mucho cuidado con no aumentar index o se bugeara code.
