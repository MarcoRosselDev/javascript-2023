// ejercicio 103: comprobar el orden de dos cadenas de caracteres.

// si se requiere ordenar por orden alfavetico
// si devuelve 1 va primero
// si devuelve -1 va despues
// si devuelve 0 es el mismo orden
let a = "Andres";
let b = "Eduardo";
let c = "Fransis";

console.log(b.localeCompare(a)); // 1
console.log(a.localeCompare(c)); // -1

console.log();

console.log(b.localeCompare(c)); // -1

// autodesafio, ordenar lista de nombres en orden alfabetico

// let nombres =
//   "andres marco rossel eduardo eva juan antonela isaida delia king jastin ludovico taylor";

// let arregloNombres = nombres.split(" ");
// /*
// [
//   'andres',   'marco',
//   'rossel',   'eduardo',
//   'eva',      'juan',
//   'antonela', 'isaida',
//   'delia',    'king',
//   'jastin',   'ludovico',
//   'taylor'
// ]
// */

// let ordenador = (arreglo) => {
//   for (let i = 0; i < arreglo.length; i++) {
//     arreglo[i];
//   }
//   console.log(b.localeCompare(a));
// };
