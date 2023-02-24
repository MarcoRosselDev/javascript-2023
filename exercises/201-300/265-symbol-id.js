// ejercicio 265: especificar una descripcion para un elemento symbol.

const ID = Symbol("ID para literal de objeto");

let persona = {
  [ID]: "1245",
  nombre: "Marco",
  apellido: "Rossel",
  edad: 29,
};

console.log(persona);

console.log(Symbol("ID para literal de objeto") == ID);
console.log(Symbol("ID para literal de objeto") == Symbol());

// cada Symbol es un elemento unico en javaScript...
