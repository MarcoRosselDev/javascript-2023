// Ejercicio 30: Averiguar si una variable deifinida es de tipo de dato numerico.

let x = 5.5;
let y = Number("1.23");
let z = "";
let w = new Date();

if (typeof x === "number") {
  console.log("x es numerico");
} else {
  console.log("x no  es numerico");
}
//x es numerico
console.log();
//
if (typeof y === "number") {
  console.log("y es numerico");
} else {
  console.log("y no  es numerico");
}
//y es numerico
console.log();
//
if (typeof z === "number") {
  console.log("z es numerico");
} else {
  console.log("z no  es numerico");
}
//z no es numerico
console.log();
//
if (typeof w === "number") {
  console.log("w es numerico");
} else {
  console.log("w no  es numerico");
}
console.log();
// w no es numerico
