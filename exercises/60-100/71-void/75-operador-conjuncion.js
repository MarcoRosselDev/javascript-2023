// ejercicio 75: uso del operador de conjuncion logica.

// && == and == y

// permite comparar dos expreciones logicas y solo pasan la prueba si las dos son true

let edad = 19;
let salario = 1000;

if (edad >= 18 && salario >= 800) {
  console.log("la persona es candidata al credito");
} else {
  console.log("la persona no es candidata al credito");
}
// la persona es candidata al credito

// ejemplo 2
edad = 23;
salario = 799;

if (edad >= 18 && salario >= 800) {
  console.log("la persona es candidata al credito");
} else {
  console.log("la persona no es candidata al credito");
}
// la persona no es candidata al credito
