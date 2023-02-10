//
// ejercicio 50: Usar el contenido de una variable en una cadena.

let persona = { nombre: "Marco", apellido: "Rossel", codigo: 453971 };

// metodo de concatenacion que es propenso a errores
console.log(
  "su nombre es " +
    persona.nombre +
    " " +
    persona.apellido +
    "y su ID es " +
    persona.codigo
);
// su nombre es Marco Rossely su ID es 453971

// ahora con inyeccion de variables
console.log(
  `su nombre es ${persona.nombre} ${persona.apellido} y su ID es ${persona.codigo}`
);

//su nombre es Marco Rossel y su ID es 453971
