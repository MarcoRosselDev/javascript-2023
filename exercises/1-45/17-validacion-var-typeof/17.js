// Ejercico 17: Determinar si una variable ha sido declarada con la funcion typeof.

let a;
let b = 12;

console.log(typeof a); //-----------> undefined
console.log(typeof b); //-----------> number

// como preguntar con typeof

// notece la diferencia del ejercicio anterior
//  if (a === undefined) ------------------------> no se le aplican las comillas de array ''
if (typeof a === "undefined") {
  console.log('La variable "a" no tiene asignado un valor.');
} else {
  console.log('La variable "a" tiene asignado un valor.');
}

console.log();

if (typeof b === "undefined") {
  console.log('La variable "b" no tiene asignado un valor.');
} else {
  console.log('La variable "b" tiene asignado un valor.');
}

console.log();
