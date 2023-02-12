// ejercicio 99; obtener una seccion de una cadena de caracteres a traves de slice.

let cadena = "Javascrpt es un lenguaje de programacion";

console.log(cadena.slice(4)); // scrpt es un lenguaje de programacion
console.log(cadena.slice(16)); // lenguaje de programacion

// contamos desde 0 en la izquierda para cortar,
// todo lo que querde a la derecha sera el resultado

//-----------------------------------------------------------------
// si le agregamos un segundo valor a slice pordemos truncar el corte

console.log(cadena.slice(cadena.indexOf("es"), cadena.indexOf("de")));
// retorna:-----> es un lenguaje
