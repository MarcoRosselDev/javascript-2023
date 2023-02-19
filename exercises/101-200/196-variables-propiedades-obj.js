// ejercicio 196: usar variables para representar las propiedades de un objeto

const nombre = "name";
const edad = "age";
const email = "e-mail";
const apellido = "last-name";

const persona = {};
persona[nombre] = "Marco";
persona[apellido] = "Rossel";
persona[edad] = 29;
persona[email] = "andresmarcorossel@gmail.com";

console.log(persona);

// {
//   name: 'Marco',
//   'last-name': 'Rossel',
//   age: 29,
//   'e-mail': 'andresmarcorossel@gmail.com'
// }

let a = {
  name: "Marco",
  "last-name": "Rossel",
  age: 29,
  "e-mail": "andresmarcorossel@gmail.com",
};

console.log(Object.keys(a));
