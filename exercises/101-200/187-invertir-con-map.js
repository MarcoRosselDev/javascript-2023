// ejercico 187: invertir todas las cadenas de un arreglo con la funcion  map de array.

const lenguajes = ["Java", "C", "C++", "JavaScript", "Python"];

let resultado = lenguajes.map((value) => {
  return value.split("").reverse().join("");
});

console.log(resultado); // [ 'avaJ', 'C', '++C', 'tpircSavaJ', 'nohtyP' ]

// .split('') ---> divide en cada letra ['J', 'a', 'v', 'a']
// .reverse() ---> lo invierte ['a', 'v', 'a', 'J']
// .join('') ---> los une como un string

console.log(lenguajes[3].split("")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
console.log(lenguajes.reverse()); // [ 'Python', 'JavaScript', 'C++', 'C', 'Java' ]
console.log(lenguajes[1].split("").reverse().join("")); // tpircSavaJ
