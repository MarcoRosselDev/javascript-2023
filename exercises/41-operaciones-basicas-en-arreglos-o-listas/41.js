//
// Ejercicio 41: Realizar operaciones basicas sobre arreglos o listas.

// Creacion:
let lenguajes = ["JavaScript", "Python", "Java", "PHP"];
console.log(lenguajes);

// Acceso:
console.log(lenguajes[0]);
console.log(lenguajes[1]);
console.log(lenguajes[2]);
console.log(lenguajes[3]);
console.log();

// Modificacion:
lenguajes[0] = "JavaScript ES6";
console.log(lenguajes[0]);

// Eliminacion:
delete lenguajes[3]; // notece que se borra el contenido pero no su existencia como tal, por lo que esta undefined.
console.log(lenguajes.length); // 4
// por lo que sigue mostrando que son 4 elementos dentro del array

lenguajes.pop();
console.log(lenguajes.length); // 3
// ahora si elimino el ultimo elemento y son 3
