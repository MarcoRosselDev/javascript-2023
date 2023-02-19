// ejercicio 197: crear una clase para representar los datos de una persona.

class Persona {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }
}

let persona1 = new Persona("Marco", "Rossel", 29, "andres@gmail.com");
let persona2 = new Persona("Eduardo", "Rossel", 31, "eduardo@gmail.com");
console.log(persona1);
console.log(persona2);
// Persona {
//   nombre: 'Marco',
//   apellido: 'Rossel',
//   edad: 29,
//   email: 'andres@gmail.com'
// }
// Persona {
//   nombre: 'Eduardo',
//   apellido: 'Rossel',
//   edad: 31,
//   email: 'eduardo@gmail.com'
// }
