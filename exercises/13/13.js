// ejercicio 13: Creacion de una constante con la sentencia const.

var nombre = "Marco";
let lenguaje = "javaScript";
const PI = 3.1415;

// si se decine como termino variable es una locacion de memoria del sistema para guardar informacion

const estudiante = { id: 5, nombre: "Marco" };

console.log(estudiante);
// { id: 5, nombre: 'Marco' }

estudiante.id = 7;

console.log(estudiante);
// { id: 7, nombre: 'Marco' } al parecer no hay problema

// estudiante = { id: 5, nombre: "Marco Rossel" };
// console.log(estudiante);

// entonces no podemos hacer una re referencia de  memoria pero si podemos modificarlo individualmente ?

estudiante.name = "Marco Rossel";
console.log(estudiante);
