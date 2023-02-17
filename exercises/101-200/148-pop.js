// ejercicio 148: eliminar un elemento de un arreglo con el metodo pop

let numeros = [1, 6, 89, 9, 2, 9, 3, 3];

console.log(numeros);

// la documentacion dice que elimina el ultimo elemento de un array y este se devuelve
// osea que lo podemos guardar en una variable.

const numeroEliminado = numeros.pop();

console.log(numeros); // [ 1, 6, 89, 9, 2, 9,  3]
console.log(numeroEliminado); // 3
