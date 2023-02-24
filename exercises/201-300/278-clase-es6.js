// ejercicio 278: crear una clase de objeto en ES5 y ES6.

// ES6

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludar() {
    return `hola, soy ${this.nombre} !`;
  }
}

const marco = new Persona("Marco", "Rossel", 29);

console.log(marco.saludar()); // hola, soy Marco !
