// ejercicio 26: Promocionar de valores a tipo de cadena de caracteres (String)

// en ingles se le llama coersing ---> coercionar o fromzar la convercion de un tipo de valor

console.log(String(5));
console.log(typeof String(5)); // String
console.log(typeof String(true)); // String

let objeto = { nombre: "Marco Rossel", id: 123121 };

console.log(String(objeto)); //[object, Object]
// esa es su representacion como cadena de caracteres "string"

let numeros = [2, 3, 5, 7];

console.log(String(numeros)); // 2, 3, 5, 7

let sumar = (a, b) => {
  return a + b;
};

console.log(String(sumar)); // devuelve convertido en texto toda la funcion lol
