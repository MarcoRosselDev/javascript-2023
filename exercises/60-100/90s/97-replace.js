// ejercicio 97: Usar el metodo replace para reemplazar una cadena de caracteres.

let cadena = "Javascrpt es un lenguaje de programacion";

console.log(cadena);

cadena = cadena.replace("Java", "java");

console.log(cadena); // javascrpt es un lenguaje de programacion

// buscar dentro de la cadena y si lo encuentra lo reemplaza por el segundo valor ingresado

cadena = "Javascript es genial, Javascript es tremendo";
console.log(cadena); // Javascript es genial, Javascript es tremendo

cadena = cadena.replace("Javascript", "JavaScript");
console.log(cadena); // JavaScript es genial, Javascript es tremendo

// notece que solo reemplazo la primera coinsidencia, como podemos hacer para aplicarlo en todas las coincidencias?
