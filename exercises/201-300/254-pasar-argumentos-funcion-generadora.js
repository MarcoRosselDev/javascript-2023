// ejercicio 254: enviar mensajes o argumentos a una funcion generadora.

function* generadorEnteros(limite) {
  for (let i = 0; i < limite; i++) {
    yield i;
  }
}

const generador = generadorEnteros(4);

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
