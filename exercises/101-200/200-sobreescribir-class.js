// ejercicio 200: sobrescribir el metodo toString() en una clase personalizada.

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  imprimir() {
    console.log(this.nombre, this.apellido, this.edad);
  }

  toString() {
    return `mi nombre es ${this.nombre} ${this.apellido}, y mi edad es ${this.edad}`;
  }
}

const juan = new Persona("Juan", "Medina", 35, "juan@gmail.com");

juan.imprimir(); // Juan Medina 35
console.log(juan.toString()); // mi nombre es Juan Medina, y mi edad es 35
