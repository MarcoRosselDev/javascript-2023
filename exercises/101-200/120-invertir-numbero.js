// ejercico 120: representar un numero al reves.

// solucion:
// 12345 ---> 54321

let valor = 12345;

let invetirNumero = (numero) => {
  return Number(numero.toString().split("").reverse().join(""));
};

console.log(invetirNumero(valor)); // 54321
console.log(typeof invetirNumero(valor)); // number
