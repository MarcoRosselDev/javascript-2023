// ejercicio 248 : crear una funcion generadora en ECMAScript 6

function* generarCadena(params) {
  yield "JavaScript";
  yield "es";
  yield "interesante!";
}

const objetoGenerador = generarCadena();

console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());

// { value: 'JavaScript', done: false }
// { value: 'es', done: false }
// { value: 'interesante!', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
