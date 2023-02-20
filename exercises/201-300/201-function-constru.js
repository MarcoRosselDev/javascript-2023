// ejercicio 201 : crear una funcion constructora para la creacion de objetos.

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

const marco = new Persona("Marco", "Roseel", 29);

console.log(marco); // Persona { nombre: 'Marco', apellido: 'Roseel', edad: 29 }
