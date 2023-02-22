// ejercicio 249: generar valores de la serie factorial con una funcion generadora.

// 0! = 1
// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24 ---> 1 * 2 * 3 * 4
// 5! = 120 ---> 1 * 2 * 3 * 4 * 5

function* generadorFactorial() {
  yield 1;
  factorial = 1;
  contador = 2;

  while (true) {
    factorial *= contador;
    ++contador;

    yield factorial;
  }
}

const generarFactorial = generadorFactorial();

console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());
console.log(generarFactorial.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 6, done: false }
// { value: 24, done: false }
// { value: 120, done: false }
// { value: 720, done: false }
// { value: 5040, done: false }
// { value: 40320, done: false }
