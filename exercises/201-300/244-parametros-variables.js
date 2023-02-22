// ejercicio 244: especificar una cantidad variable de parametros en una funcion.

// rest parameters

function diasSemana(...dias) {
  console.log(dias);
}

diasSemana(); // []
diasSemana("lunes", "martes", "miercoles", "jueves"); // [ 'lunes', 'martes', 'miercoles', 'jueves' ]

const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [4, 5, 6, 7];

function sumar(...values) {
  return values.reduce((valorAnterior, valorActual) => {
    return valorActual + valorAnterior;
  });
}

console.log(sumar(1, 2, 3, 4, 5)); // 15
console.log(sumar(...numeros1)); // 15
console.log(sumar(...numeros2)); // 22
console.log(sumar(...numeros1, ...numeros2)); // 37
