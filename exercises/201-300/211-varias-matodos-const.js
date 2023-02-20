// ejercicio 211 : Agregar varios  metodos a una funcion constructora con prototype.

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

// en este ejemplo solo agregamos una funcionalidad a Punto

// Punto.prototype.distancia = function (anotherPunto) {
//   const distancia = Math.sqrt(
//     Math.pow(this.x - anotherPunto.x, 2) + Math.pow(this.y - anotherPunto.y, 2)
//   );
//   return distancia;
// };

// pero podemos agregar muchas de una vez

Punto.prototype = {
  distancia: function (anotherPoint) {
    const distancia = Math.sqrt(
      Math.pow(this.x - anotherPoint.x, 2) +
        Math.pow(this.y - anotherPoint.y, 2)
    );
    return distancia;
  },
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};

const punto1 = new Punto(0, 2);
const punto2 = new Punto(0, -2);

console.log(punto1.distancia(punto2)); // 4

console.log(punto2.toString()); // (0, -2)
