// ejercicio 121: calcular la longitud de un numero entero.

// 129463920 ------> 9 digitos

const value = 2893467402989189;

let longitudNumero = (numero) => {
  return numero.toString().split("").length;
};

console.log(longitudNumero(value)); // 16
