// ejercicio 147: eliminar un elemento de un arreglo con la propiedad length.

let numeros = [1, 5, 6, 1, 3, 0];

console.log(numeros);
console.log(numeros.length); // 6

numeros.length = 5;

console.log(numeros.length); // 5
console.log(numeros); // [ 1, 5, 6, 1, 3 ]

// se elimino el ultimo digito
