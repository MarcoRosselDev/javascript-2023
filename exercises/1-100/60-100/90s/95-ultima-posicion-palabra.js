// ejercicio 95: encontrar la ultima posicion de la ocurrencia de una palabra

let cadena =
  "JavaScript es un lenguaje de programacion. la version mas reciente es ES6";

// indexOf

console.log(cadena.indexOf("es")); // 11

// pero como vemos se repite la palabra dos veces y nos intereca saber la posicion de la ultima ves que se menciona;

console.log(cadena.lastIndexOf("es")); // 67
