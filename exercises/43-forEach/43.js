// ejercicio 43: Usar el metodo forEach para recorrer un arreglo.

let lenguajes = ["JavaScript", "Python", "Java", "PHP"];

lenguajes.forEach((valor) => {
  console.log(valor);
});

console.log(); // salto de linea artificial para mejor visualizacion

// asi funciona pero probemos como dice el profesor

lenguajes.forEach(function (valor, indice, lenguajes) {
  console.log(valor);
});

// todo salio de pana banana
console.log();

lenguajes.forEach((valor, indice) => {
  console.log(`${valor} se encuantra en el indice ${indice}`);
});

// tambien podemos llamar una funcion en el forEach

let recorrer = (valor, i) => {
  console.log(`${valor} se encuantra en el indice ${i}`);
};

console.log("lamda");
console.log();
lenguajes.forEach(recorrer);

// resultados

// JavaScript se encuantra en el indice 0
// Python se encuantra en el indice 1
// Java se encuantra en el indice 2
// PHP se encuantra en el indice 3
