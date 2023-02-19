// ejercicio 185: validar que al menos un elemento de un arreglo cumple una condicion.

const numeros = [1, 5, 7, 2, -1, 4, 9, 1, 0];

let resultado = numeros.some((value) => {
  return value >= 10;
});

// some nos devuelve un booleano si al menos un elemento del arreglo cumple la condicion
// en este caso es false por que ningun elemento es mayor o igual a 10

console.log(resultado); // false

resultado = numeros.some((valor) => {
  return valor <= -1;
});

console.log(resultado); // true
