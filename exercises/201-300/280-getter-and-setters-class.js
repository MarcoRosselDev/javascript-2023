// ejercicio 280 - Definir metodos getters y setters en una class.

class Persona {
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
}

const marco = new Persona("Marco", "Rossel", 29);
console.log(marco); // Persona { _nombre: 'Marco', _apellido: 'Rossel', _edad: 29 }

marco.apellido = "Nahuelpan";
console.log(marco); // Persona { _nombre: 'Marco', _apellido: 'Nahuelpan', _edad: 29 }
