// ejercicio 177: iterar cada uno de los indicces de un arreglo o propiedades de un objeto

const lenguajes = ["Java", "C", "C++", "JavaScript", "Python"];

for (i in lenguajes) {
  console.log(`Indice: ${i} ---> ${lenguajes[i]}`);
}

// Indice: 0 ---> Java
// Indice: 1 ---> C
// Indice: 2 ---> C++
// Indice: 3 ---> JavaScript
// Indice: 4 ---> Python

const marco = {
  nomber: "marco",
  apellido: "rossel",
  edad: 29,
  nacionalidad: "chileno",
};

for (p in marco) {
  console.log(`propiedad ${p} ----> ${marco[p]}`);
}

// propiedad nomber ----> marco
// propiedad apellido ----> rossel
// propiedad edad ----> 29
// propiedad nacionalidad ----> chileno
