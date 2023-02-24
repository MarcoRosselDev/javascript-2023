// ejercicio 276: usar un proxy para la validacion de los valores de propiedades.

const validador = {
  set: function (objeto, propiedad, valor) {
    if (propiedad === "edad") {
      if (!Number.isInteger(valor)) {
        throw new TypeError("La edad no es un valor numerico.");
      }
      if (valor > 130) {
        throw new RangeError("La edad no debe superar los 130 agnios.");
      }
    }
    objeto[propiedad] = valor;
    return true;
  },
};

const persona = new Proxy({}, validador);

persona.nombre = "Daniela";
persona.apellido = "Ortiz";

console.log(persona); // { nombre: 'Daniela', apellido: 'Ortiz' }

// persona.edad = "abc";  // TypeError: La edad no es un valor numerico.
// persona.edad = 132; // RangeError: La edad no debe superar los 130 agnios.
persona.edad = 29;
console.log(persona); // { nombre: 'Daniela', apellido: 'Ortiz', edad: 29 }
