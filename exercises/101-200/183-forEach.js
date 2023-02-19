// ejercicio 183: ejecutar una operacion por cada elemento de un arreglo

const numeros = [1, 5, 7, 2, 8, 4, 9, 1, 0];

numeros.forEach((valor, indice, todo) => {
  console.log(
    `el indice es ${indice}, valor: ${valor} multiplicado por 2 = ${
      valor * 2
    } ---> ${todo}`
  );
});
// el indice es 0, valor: 1 multiplicado por 2 = 2 ---> 1,5,7,2,8,4,9,1,0
// el indice es 1, valor: 5 multiplicado por 2 = 10 ---> 1,5,7,2,8,4,9,1,0
// el indice es 2, valor: 7 multiplicado por 2 = 14 ---> 1,5,7,2,8,4,9,1,0
// el indice es 3, valor: 2 multiplicado por 2 = 4 ---> 1,5,7,2,8,4,9,1,0
// el indice es 4, valor: 8 multiplicado por 2 = 16 ---> 1,5,7,2,8,4,9,1,0
// el indice es 5, valor: 4 multiplicado por 2 = 8 ---> 1,5,7,2,8,4,9,1,0
// el indice es 6, valor: 9 multiplicado por 2 = 18 ---> 1,5,7,2,8,4,9,1,0
// el indice es 7, valor: 1 multiplicado por 2 = 2 ---> 1,5,7,2,8,4,9,1,0
// el indice es 8, valor: 0 multiplicado por 2 = 0 ---> 1,5,7,2,8,4,9,1,0
