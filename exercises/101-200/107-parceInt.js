// ejercicio 107: converti cadenas de caracteres a numeros

// parceInt(string)
// parceFloat(string)

let cadena = "19";
let numero = parseInt(cadena);

console.log(typeof cadena); // string
console.log(typeof numero); // number

let cadena2 = "19.12312";
let numero2 = parseInt(cadena2);

console.log(numero2); // 19

// parseInt ignora el punto decimal,
// para eso es parseFloat...
