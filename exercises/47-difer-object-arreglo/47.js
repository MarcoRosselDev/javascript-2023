//
// ejercicio 47: averiguar la diferencia entre un objeto y un arreglo.

let lenguajes = ["JavaScript", "Python", "Java", "PHP"];

let persona = { nombre: "Marco", apellido: "Rossel", codigo: 453971 };

//diferencias como acceder

console.log(lenguajes[0]); //JavaScript
console.log(persona.nombre); // Marco
console.log();

// Object.keys
console.log(Object.keys(persona)); //[ 'nombre', 'apellido', 'codigo' ]
