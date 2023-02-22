// ejercicio 250: crear una funcion generadora para generar numeros primos

function* generarPrimos(params) {
  let primo = 2;

  yield primo;

  while (true) {
    let numero = primo + 1;
    let contadorDivisores = 0;
    let i = 0;

    while (i <= numero) {
      if (numero % i == 0) {
        ++contadorDivisores;
      }
      if (contadorDivisores > 2) {
        break;
      }
      ++i;
    }
    if (contadorDivisores == 2) {
      primo = numero;
      yield primo;
    }
    ++primo;
  }
}

const generador = generarPrimos();

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
console.log(generador.next());
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 5, done: false }
// { value: 7, done: false }
// { value: 11, done: false }
// { value: 13, done: false }
// { value: 17, done: false }
// { value: 19, done: false }
// { value: 23, done: false }
// { value: 29, done: false }
// { value: 31, done: false }
// { value: 37, done: false }
// { value: 41, done: false }
// { value: 43, done: false }
// { value: 47, done: false }
// { value: 53, done: false }
// { value: 59, done: false }
// { value: 61, done: false } ----> podemos generar todos los primos que queramos
