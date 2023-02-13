// ejercicio 104; contar el numero de ocurrencias de una subcadena de caracteres.

let contarOcurrencias = (cadena, subcadena) => {
  let contadorOcurrencias = 0;

  let posicionOcurrencia = 0;

  while (
    (posicionOcurrencia = cadena.indexOf(subcadena, posicionOcurrencia)) !== -1
  ) {
    ++contadorOcurrencias;
    posicionOcurrencia += subcadena.length;
  }
  return contadorOcurrencias;
};

let cadena =
  "JavaScript es un lenguaje de programacion, la version mas reciente de JavaScript es ES6, JavaScript es un lenguajer interpretado que corre en un navegador Web.";

console.log(contarOcurrencias(cadena, "la")); // 1
console.log(contarOcurrencias(cadena, "JavaScript")); // 3
console.log(contarOcurrencias(cadena, "es")); // 3
console.log(contarOcurrencias(cadena, "un")); // 3
