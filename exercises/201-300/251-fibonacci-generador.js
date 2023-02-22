// ejercicio 251: crear una funcion generadora para generar numeros de fibonacci.

// 0 1 1 2 3 5 8 13 21 34 55 ..
//  el siguiente numero es la suma de los ultimos dos

function* generarFibonacci() {
  yield 0;
  yield 1;

  let a = 0;
  let b = 1;

  while (true) {
    yield a + b;
    [a, b] = [b, a + b];
  }
}

const generador = generarFibonacci();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 5, done: false }
// { value: 8, done: false }
// { value: 13, done: false }
// { value: 21, done: false }
// { value: 34, done: false }
// { value: 55, done: false }
// { value: 89, done: false }
// { value: 144, done: false }
// { value: 233, done: false }
// { value: 377, done: false }
// { value: 610, done: false }
// { value: 987, done: false }
