// ejercicio 226: crear una funcion para proveer la operacion de subconjunto.

Set.prototype.subconjunto = function (otroConjunto) {
  if (this.size > otroConjunto.size) {
    return false;
  } else {
    for (const w of this) {
      if (!otroConjunto.has(w)) {
        return false;
      }
    }
    return true;
  }
};

const a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const b = new Set([3, 4, 5, 6]);
const c = new Set([10, 11, 12]);

console.log(a.subconjunto(b));
console.log(a.subconjunto(c));
console.log(b.subconjunto(a)); // true
console.log(b.subconjunto(c));
console.log(c.subconjunto(a));
console.log(c.subconjunto(b)); // todos false mentos la linea 22

// subconjunto ---> conjunto de elementos dentro de conjunto mayor
