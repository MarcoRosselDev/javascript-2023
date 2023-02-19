// ejercicio 184: comprobar que todos los elementos de un arreglo cumplan una condicion.

const numeros = [1, 5, 7, 2, 8, 4, 9, 1];

let resultado = numeros.every((valor) => {
  return valor > 2;
});

// every itera por el arrglo y si cada elemento cumple la condicion retorna un booleano,
// en este caso es false por que 1 y 2 no son mayores a 2

console.log(resultado); // false

resultado = numeros.every((valor) => {
  return valor > 0;
});

console.log(resultado); // true

// ahora es verdadero por que todos loe elementos son mayores a 0
