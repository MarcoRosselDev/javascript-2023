// ejercicio 272: iterar un arreglo con el elemento Symbol.iterator.

const numeros = [2, 4, 6, 1, 8, 4];

// for of

for (const numero of numeros) {
  console.log(numero); // 2, 4, 6, 1, 8, 4
}

console.log("salto de linea");

// Symbol.iterator=

let iterador = numeros[Symbol.iterator]();
let iteracion = iterador.next();

// console.log(iteracion);

while (!iteracion.done) {
  let valor = iteracion.value;
  console.log(valor);
  iteracion = iterador.next();
}
// 2
// 4
// 6
// 1
// 8
// 4
