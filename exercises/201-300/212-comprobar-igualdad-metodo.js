// ejercicio 212: Crear un metodo para comprobar si dos objetos son iguales por contenido

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.comparar = function (anotherPoint) {
  return this.x == anotherPoint.x && this.y == anotherPoint.y;
  // esto retornara un booleano si pasan o no la condicion
};

const punto1 = new Punto(3, 7);
const punto2 = new Punto(1, 4);

console.log(punto1.comparar(punto2)); // false

const punto3 = new Punto(1, 4);

console.log(punto2.comparar(punto3)); // true
