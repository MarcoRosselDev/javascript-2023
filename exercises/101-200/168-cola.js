// ejercicio 168: Simular el comportamiento de una cola por medio de un arreglo

const lenguajes = [];

lenguajes.push("Java"); // [ 'Java' ]

console.log(lenguajes);
lenguajes.push("C"); // [ 'Java', 'C' ]
console.log(lenguajes);
lenguajes.push("C+"); // [ 'Java', 'C', 'C+' ]
console.log(lenguajes);

// por ahora con push se agrega en la ultima posicion de el arreglo

lenguajes.shift();
console.log(lenguajes); // [ 'C', 'C+' ]

// con shifr eliminamos el elemento que ingreso primero
