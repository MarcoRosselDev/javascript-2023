// ejercicio 34: Crear objeto fecha a partir de cadena de caracteres

let cadenaFecha = "may 13 1933 13:11:23";
let fecha = new Date(cadenaFecha);

console.log(fecha);

fecha.setMonth(0);

console.log(fecha);
