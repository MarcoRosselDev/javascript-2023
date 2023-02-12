//
// Ejercicio 16: Validar si una variable tiene un valor asignado.

let a;
let b = 13;
let c;

// utils en casos de archivos grandes de js para saber si una variable tiene un valor asignado.

if (a === undefined) {
  console.log('la variable "a" aun no tiene un valor asignado.');
} else {
  console.log('la variable "a" tiene un valor asignado.');
}

console.log(); // esto hace un salto de linea lol

if (b === undefined) {
  console.log('la variable "b" aun no tiene un valor asignado.');
} else {
  console.log('la variable "b" tiene un valor asignado.');
}
