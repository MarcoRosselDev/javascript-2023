// ejercicio 122: intercambiar el contenido de dos variable sin usar una variable temporal.

let a = 37;
let b = 89;

console.log(a);
console.log(b);

const intercambiar = (num1, num2) => {
  num2 = num2 - num1;
  num1 = num1 + num2;
  num2 = num1 - num2;
  return [num1, num2];
};

[a, b] = intercambiar(a, b);

console.log(a);
console.log(b);

//----------------------------------
// solucion: a = 50; b = 100

// usando una variable temporal

// let c = a;
// a = b;
// b = c;
