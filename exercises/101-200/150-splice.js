// ejercicio 150: eliminar varios elementos de un arreglo con la funcion splice.

let numeros = [1, 3, 45, 6, 7, 8, 3, 7, 3];

// nos solicitan elminitar los numeros 8 y 3

const numerosCortados = numeros.splice(5, 2);

console.log(numeros); //  [1, 3, 45, 6, 7, 7, 3]
console.log(numerosCortados); // [ 8, 3 ]

// splice => posicion, cantidad
