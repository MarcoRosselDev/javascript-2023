// ejercicio 203: sobrescribir el metodo de instancia toString() en una funcion constructora.

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  //
  this.mostrarDatos = function () {
    console.log(`${this.nombre}${this.apellido} tiene ${this.edad} agnios`);
  };
  //
  this.toString = function () {
    return `Nombre: ${this.nombre}`;
  };
}

const marco = new Persona("Marco", "Rossel", 29);
const juan = new Persona("Juan", "Medina", 35);

marco.mostrarDatos(); // MarcoRossel tiene 29 agnios
juan.mostrarDatos(); // JuanMedina tiene 35 agnios

console.log();

console.log(marco.toString()); // Nombre: Marco
