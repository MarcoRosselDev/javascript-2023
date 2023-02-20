// ejercicio 208: Agregar un metodo a una funcion constructora con prototype.

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.distancia = function (anotherPunto) {
  const distancia = Math.sqrt(
    Math.pow(this.x - anotherPunto.x, 2) + Math.pow(this.y - anotherPunto.y, 2)
  );
  return distancia;
};

const punto1 = new Punto(3, 7);
const punto2 = new Punto(-2, -1);

console.log(punto1.distancia(punto2)); // 9.433981132056603
