// ejercicio 264 : usar symbol como propiedad identificadora de un objeto.

const ID = Symbol();

let persona = {
  [ID]: "1245",
  nombre: "Marco",
  apellido: "Rossel",
  edad: 29,
};

console.log(persona);
