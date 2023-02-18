// ejercicio 171: Computar la posicion o indice de un elemento en un arreglo.

const lenguajes = ["Java", "C", "C++", "Python", "JS", "PHP", "C"];

console.log(lenguajes.indexOf("C")); // 1 ---> C esta dos veces pero devuelve 1, por lo que solo considera la primera coincidencia

//para eso aplicamos lastIndexOf
console.log(lenguajes.lastIndexOf("C")); // 6

console.log(lenguajes.indexOf("c++")); // -1 significa no encontrado, por lo que es sencible a mayusculas
console.log(lenguajes.indexOf("C++")); // 2
