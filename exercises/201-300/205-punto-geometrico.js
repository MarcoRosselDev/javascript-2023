// ejercicio 205: crear una clase para representar un punto geometrico

class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  login() {
    console.log(`(${this.x}, ${this.y})`);
  }
  // calcular el punto medio entre 2 puntos
  puntoMedio(anotherPoint) {
    return Math.sqrt(
      Math.pow(this.x - anotherPoint.x, 2) +
        Math.pow(this.y - anotherPoint.y, 2)
    );
  }
}

const punto1 = new Punto(2, 5);
const punto2 = new Punto(5, 2);

console.log(punto1); // Punto { x: 2, y: 5 }
punto1.login(); // (2, 5)

console.log(punto1.puntoMedio(punto2)); // 4.242640687119285

const punto3 = new Punto(1, 3);
const punto4 = new Punto(5, 7);

console.log(punto3.puntoMedio(punto4)); // 5.656854249492381

// todo funciona a la perfecion
