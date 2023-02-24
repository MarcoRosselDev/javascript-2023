// ejercicio 275: crear un objeto proxy usando la clase proxy.

const handler = {
  get: function (target, name) {
    return name in target ? target[name] : "No existe la propiedad: " + name;
  },
};

const marco = {
  name: "Marco",
  apellido: "Rossel",
  edad: 29,
  estado_civil: false,
};
const proxy = new Proxy(marco, handler);

console.log(proxy.name);
console.log(proxy.apellido);
console.log(proxy.edad);
console.log(proxy.estado_civil);
console.log(proxy.email);

// Marco
// Rossel
// 29
// false
// No existe la propiedad: email
