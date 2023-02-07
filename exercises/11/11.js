// Ejercicio 11: Resolver problema de referencia de variables.

// Error tipico:
// ReferenceError: <<identificador>> is not defined

console.log(mensaje);
function saludar() {
  var mensaje = "este es un mensaje ejecutado desde una funcion";
  console.log(mensaje);
}
