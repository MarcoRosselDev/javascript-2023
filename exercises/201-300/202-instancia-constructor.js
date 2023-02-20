// ejercicio 202: Definir un metodo de instancia en una funcion constructora.

function Persona(nombre, apellido, edad) {
  // atributos
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;

  // metodos
  this.mostrarDatos = function () {
    console.log(this.nombre, this.apellido, this.edad);
  };
}

const marco = new Persona("Marco", "Roseel", 29);

console.log(marco); // Persona { nombre: 'Marco', apellido: 'Roseel', edad: 29 }

marco.mostrarDatos(); // Marco Roseel 29
