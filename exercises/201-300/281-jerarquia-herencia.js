// ejercicio 281- crear una jerarquia de herencia con la palabra clave extends.

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, apellido, asignatura) {
    super(nombre, apellido);
    this.asignatura = asignatura;
  }
}

const marco = new Estudiante("Marco", "Rossel", "Arquitectura");

console.log(marco);

// Estudiante {
//   nombre: 'Marco',
//   apellido: 'Rossel',
//   asignatura: 'Arquitectura'
// }

console.log(marco.saludar()); // Hola, mi nombre es Marco Rossel
