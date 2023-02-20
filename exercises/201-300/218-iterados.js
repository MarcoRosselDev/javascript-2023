// ejercicio 218: recorrer cada uno de los elementos de un conjunto con un iterador.

const numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros); // Set(5) { 1, 2, 3, 4, 5 }

const iterador = numeros.values();

console.log(iterador); // [Set Iterator] { 1, 2, 3, 4, 5 }

let valorActual = iterador.next();

console.log(valorActual.value); // 1
console.log(valorActual.done); // false
valorActual = iterador.next();
console.log(valorActual.value); // 2
console.log(valorActual.done); // false
valorActual = iterador.next();
console.log(valorActual.value); // 3
console.log(valorActual.done); // false
valorActual = iterador.next();
console.log(valorActual.value); // 4
console.log(valorActual.done); // false
valorActual = iterador.next();
console.log(valorActual.value); // 5
console.log(valorActual.done); // false
valorActual = iterador.next();
console.log(valorActual.value); // undefined
console.log(valorActual.done); // true
