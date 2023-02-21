// ejercicio 227: crear una funcion para proveer la operacion de diferencia de conjuntos

// la diferencia quiere decir de dos conjuntos si A / B
// A diferencia de B quiere decir los elementos de A que no esten en B

Set.prototype.diferencia = function (B) {
  let conjutnoDiferencia = new Set();

  for (const e of this) {
    if (!B.has(e)) {
      conjutnoDiferencia.add(e);
    }
  }
  return conjutnoDiferencia;
};

const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7, 8]);

console.log(A.diferencia(B)); // Set(3) { 1, 2, 3 }
console.log(B.diferencia(A)); // Set(3) { 6, 7, 8 }
