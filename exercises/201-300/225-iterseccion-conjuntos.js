// ejercicio 255: crear una funcion para proveer la operacion de interseccion estre dos conjuntos.

// metodos | methods

Set.prototype.interseccion = function (otroConjunto) {
  let conjuntoInterseccio = new Set();

  for (const e of otroConjunto) {
    if (this.has(e)) {
      conjuntoInterseccio.add(e);
    }
  }
  return conjuntoInterseccio;
};

const a = new Set([1, 2, 3, 4, 5, 6]);
const b = new Set([4, 5, 6, 7, 8, 9]);

console.log(a.interseccion(b)); // Set(3) { 4, 5, 6 }
