// ejercicio 225: crear una funcion para porveer la operacion de union entre conjuntos.

// por defecto set() no tiene una funcion para unir conjuntos, por lo que devemos crearla

Set.prototype.union = function (otroConjunto) {
  let conjuntoUnion = new Set();

  for (const e of this) {
    conjuntoUnion.add(e);
  }
  for (const e of otroConjunto) {
    conjuntoUnion.add(e);
  }
  return conjuntoUnion;
};

const a = new Set([1, 2, 3, 4, 5, 6]);
const b = new Set([5, 6, 7, 8, 9]);

console.log(a.union(b)); //Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
