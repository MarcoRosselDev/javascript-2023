//
// Ejercicio 38 : Determinar a que tipo de dato pertenece un objeto

let fecha = new Date();
let error = new Error();
let cadena = new String();
let objeto = new Object();

console.log(typeof fecha); // objeto
console.log(typeof error); // objeto
console.log(typeof cadena); // objeto
console.log(typeof objeto); // objeto lol

// lo comprobamos

if (fecha instanceof Date) {
  console.log("fecha es tipo date");
} else if (fecha instanceof Error) {
  console.log("fecha es tipo error");
} else if (fecha instanceof String) {
  console.log("fecha es tipo string");
} else {
  console.log("no se sabe my frend");
} // fecha es de tipo date

if (error instanceof Date) {
  console.log("error es tipo date");
} else if (error instanceof Error) {
  console.log("error es tipo error");
} else if (error instanceof String) {
  console.log("error es tipo string");
} else {
  console.log("no se sabe my frend");
} //error es de tipo error

if (cadena instanceof Date) {
  console.log("cadena es tipo date");
} else if (cadena instanceof Error) {
  console.log("cadena es tipo error");
} else if (cadena instanceof String) {
  console.log("cadena es tipo string");
} else {
  console.log("no se sabe my frend");
} // cadena es tipo string

if (objeto instanceof Date) {
  console.log("objeto es tipo date");
} else if (objeto instanceof Error) {
  console.log("objeto es tipo error");
} else if (objeto instanceof String) {
  console.log("objeto es tipo string");
} else {
  console.log("no se sabe my frend");
}
// no se sabe por que es una instancia general por que todo viene de la instancia objeto
