// ejercicio 255: pasar un arreglo como argumento de una funcion generadora.

function* iterarValores(arreglo) {
  for (const e of arreglo) yield e;
}

const generador = iterarValores([1, 2, 3, 6, 8]);

for (const valor of generador) {
  console.log(valor);
}
// 1
// 3
// 2
// 6
// 8
console.log(generador.next());
// { value: undefined, done: true }
