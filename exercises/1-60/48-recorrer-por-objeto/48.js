// Ejercico 48: Obtener y recorrer las llaves de un objeto

let persona = { nombre: "Marco", apellido: "Rossel", codigo: 453971 };

// como obtener las llaves
Object.keys(persona); // [ 'nombre', 'apellido', 'codigo' ]

console.log(Object.keys(persona) instanceof Array); // true
// como es una instancia de array podemos iterar por ella con forEach

Object.keys(persona).forEach((valor) => console.log(valor));
// nombre;
// apellido;
// codigo;
