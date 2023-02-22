// ejercicio 253: especificar parametros por defecto en el encabezado de una funcion.

// Previo a ES6:

function mostrarMensaje(texto) {
  texto = typeof texto !== "undefined" ? texto : "Valor por defecto";
  console.log(texto);
}

mostrarMensaje(); // Valor por defecto
mostrarMensaje("!JavaScript es tremendo!"); // !JavaScript es tremendo!

// ES6

function visualisarMensaje(texto = "Valor por defecto") {
  console.log(texto);
}

visualisarMensaje(); // Valor por defecto
visualisarMensaje("texto de prueba"); // texto de prueba
