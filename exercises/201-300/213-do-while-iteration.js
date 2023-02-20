// ejercicio 213: iterar un conjunto de objetos por medio del ciclo do while.

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

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

const punto1 = new Punto(3, 7);
const punto2 = new Punto(1, 4);
const punto3 = new Punto(3, 7);
const punto4 = new Punto(-2, -1);

const puntos = [punto1, punto2, punto3, punto4];
let origen = new Punto(0, 0);
let i = 0;

do {
  console.log(puntos[i]);
  i++;
} while (puntos[i].distancia(origen) <= 5);

// { x: 3, y: 7 }
// { x: 1, y: 4 }
