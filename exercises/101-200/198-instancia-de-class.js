// ejercicio 198: crear un metodo de instancia en un clase personalizada.

class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }
  mostrarDatos() {
    console.log("Nombre", this.nombre);
    console.log("Apellido", this.apellido);
    console.log("Edad", this.edad);
    console.log("Email", this.email);
  }
}

const persona1 = new Persona("Juan", "Medina", 35, "juan@gmail.com");

console.log(persona1);
// Nombre Juan
// Apellido Medina
// Edad 35
// Email juan@gmail.com
persona1.mostrarDatos();
// Nombre Juan
// Apellido Medina
// Edad 35
// Email juan@gmail.com
