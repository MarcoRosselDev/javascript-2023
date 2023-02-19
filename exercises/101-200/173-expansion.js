// ejercicio 173: uso basico del operador de expansion ...

const sumar = (a, b, c) => {
  return a + b + c;
};
// a, b, c -----> argumentos
// simulamos que queremos pasarle los valores de un arreglo como 'parametros'.

const numeros = [1, 4, 6];

console.log(sumar(...numeros)); // 11

// tambien sirve como concatenador de arreglos

const masNumeros = [3, 7, 9];

const numerosConcatenados = [...numeros, ...masNumeros];

console.log(numerosConcatenados); // [ 1, 4, 6, 3, 7, 9 ]
