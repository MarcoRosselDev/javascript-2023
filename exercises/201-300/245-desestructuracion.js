// ejercicio 245 : usar las propiedades de un objeto como parametros de una funcion.

// Object destructuring
//------------------------------------------------------------------------
// ES5

function obtenerNombreES5(objeto) {
  const nombre = objeto.nombre;
  console.log(nombre);
}
//------------------------------------------------------------------------
// ES6

function obtenerNombreES6({ nombre, apellido, edad }) {
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
}

const persona = { nombre: "Marco", apellido: "Rossel", edad: 29 };

obtenerNombreES5(persona); // Marco
obtenerNombreES6(persona); // Marco | Rossel | 29
