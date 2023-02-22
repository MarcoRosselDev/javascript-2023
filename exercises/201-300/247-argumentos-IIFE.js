// ejercicio 247: pasar argumentos a una funcion tipo IIFE.

const numeros = [1, 2, 3, 4, 5, 6];

// queremos sumar todos los elementos del arreglo numeros y que se ejecute inmediatamente

const resultado = (function (values) {
  return values.reduce((valorAnterior, valorActual) => {
    return valorActual + valorAnterior;
  });
})(numeros);

console.log(resultado); // 21
