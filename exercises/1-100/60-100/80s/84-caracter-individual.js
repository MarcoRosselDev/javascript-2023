// ejercicio 84: obtener un caracter individual desde una cadena de caracteres.

let texto = "JavaScript";

console.log(texto[0]); //J

// que pasa si quiero iterar por el array .
// crear una funcion que itere por el array para saber su contenido , cualesquiera que este sea

let iterador = (arr) => {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
};

iterador(texto);

// resultado:

// J
// a
// v
// a
// S
// c
// r
// i
// p
// t
