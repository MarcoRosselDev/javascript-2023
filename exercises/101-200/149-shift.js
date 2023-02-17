// ejercicio 149: elminar el primero elemento de un arreglo con el metodo shift

let numeros = [1, 5, 3, 7, 8, 2, 4, 0];

// .shift retorna el primero elemento eliminado para guardarlo el una variable, si es que se quiere

const primerNumero = numeros.shift();
console.log(primerNumero); // 1
console.log(numeros); // [ 5, 3, 7, 8, 2, 4, 0]
