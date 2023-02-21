// ejercicio 237: crear y ejecutar una funcion anonima.

const sumar = function (a, b) {
  return a + b;
};

console.log(typeof sumar); // function
console.log(sumar instanceof Function); // true

// IIFE --> Inmediately Invoked Function Expression

(function () {
  console.log("Expresión de función invocada inmediatamente ");
})();
// Expresión de función invocada inmediatamente

// la funcion se invoco inmediatamente, sin nesecidad de invocacion
