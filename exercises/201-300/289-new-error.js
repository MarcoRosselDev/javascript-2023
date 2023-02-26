// ejercicio 289: estudiar los tipos de errores en tiempo de ejecucion.

const numeros = new Array(10) // permitido por que genera una capacidad
// const numeros2 = new Array(-10) // genera error RangeError

console.log(numeros);

console.log(new Error('se produjo un error')); // esto genera un nuevo tipo de error
// nosotros podemos crear errores especializados para nosotros.