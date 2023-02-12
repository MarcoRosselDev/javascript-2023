// ejercicio 52: uso del operador de resta o sustraccion

let a = 2;
let b = 3;

let suma = a - b;

console.log(suma); // -1
console.log(suma - 5); // -6

let x = "2";
let y = 3;
console.log(x - y); // -1
// al parecer si aplica la resta aunque sea un string
// el profesor explica que javaScript detecta que es un numero y lo combierte y aplica la resta
// solo se da en la resta

let x2 = "hola";
let y2 = 3;
console.log(x2 - y2); // NaN
// no es un numero
