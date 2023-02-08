//

// Ejercico 15: Crear instancias de objetos por medio de constructores.

// lista de numeros primos
[2, 3, 5, 7, 11]; // esto es una lista en foma literal de crarla

const primos = new Array(2, 3, 5, 7, 11); // mecanismo por medio de constructor

function restar(a, b) {
  return a - b;
}

let solution = restar(5, 2);

console.log(solution);

let restarFn = new Function("a", "b", "return a - b"); // esta es por medio de constructor

console.log(restarFn(2, 3));

let persona = new Object();

persona.id = 1;
console.log(persona);

persona.name = "Marco";
console.log(persona);

persona.name = "Lushito";
console.log(persona);
