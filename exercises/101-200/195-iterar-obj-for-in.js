// ejercicio 195 : iterar por todas las propiedades de un objeto con el ciclo for...in.

const persona = { nombre: "Eva", apellido: "Nahuelpan", edad: 62 };

for (let p in persona) {
  console.log(`propiedad ${p} ---> ${persona[p]}`);
}

// propiedad nombre ---> Eva
// propiedad apellido ---> Nahuelpan
// propiedad edad ---> 62
