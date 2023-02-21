// ejercicio 238: crear una funcion anonima para callback de la funcion setTimeout().

setTimeout(function () {
  console.log(`El temporizador ha llegado a cero...`);
}, 5000);

const mensaje = function () {
  console.log("another message...");
};

setTimeout(mensaje, 2000);
