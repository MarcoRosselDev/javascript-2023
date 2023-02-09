//
// Ejercicio 44: Usar un ciclo while para recorrer un arreglo.

let lenguajes = ["JavaScript", "Python", "Java", "PHP"];

let i = 0;

while (i < lenguajes.length) {
  console.log(lenguajes[i]);
  // importante aplicar el incremento de i por que si no se produce un bucle infinito
  //
  i++;
}
