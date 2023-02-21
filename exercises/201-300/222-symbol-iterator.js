// ejercicio 222: recorrer un conjunto con un iterador tipo symbol.iterator.

const lenguajes = new Set(["Java", "C", "C++", "PHP"]);

const iterador = lenguajes[Symbol.iterator]();

console.log(iterador.next()); // { value: 'Java', done: false }
console.log(iterador.next()); // { value: 'C', done: false }
console.log(iterador.next()); // { value: 'C++', done: false }
console.log(iterador.next()); // { value: 'PHP', done: false }
console.log(iterador.next()); // { value: undefined, done: true }
console.log(iterador.next()); // { value: undefined, done: true }
