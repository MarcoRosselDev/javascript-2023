// ejercicio 220: comporobar si un conjunto contiene un elemento especifico con has().

const lenguajes = new Set();

lenguajes.add("Java").add("C++").add("C");

console.log(lenguajes); // Set(3) { 'Java', 'C++', 'C' }

console.log(lenguajes.has("JavaScript")); // false
console.log(lenguajes.has("Java")); // true

// has nos facilita saber si existe un elemento x en el conjunto.
