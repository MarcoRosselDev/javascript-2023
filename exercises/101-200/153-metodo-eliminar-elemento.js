// ejercicio 153:  crear un metodo para eliminar un elemento de un arreglo

const eliminador = (arreglo, elementoAEliminar) => {
  return arreglo.filter((item) => {
    return item != elementoAEliminar;
  });
};

let numeros = [0, 1, 2, 3, 4, 3, 6, 7, 8, 3];
console.log(numeros);
numeros = eliminador(numeros, 3);
console.log(numeros); // [0, 1, 2, 4, 6, 7, 8]

// retorna todas las coinsidencias con este elemento
