//
// ejercicio 49: Ejemplo basico de una expresion regular

let cadena = "JavaScript es genial!";

let regex = /Script/;

console.log(typeof regex); // object
console.log(regex.test(cadena)); // true
// le preguntamos si regex se encuentra en cadena

regex = /(\b\w+\b)+/g;

if (cadena.match(regex)) {
  let cantidadPalabras = cadena.match(regex).length;

  console.log(cantidadPalabras);
} else {
  console.log("no se encontraros coinsidencias");
}
// retorna 3
