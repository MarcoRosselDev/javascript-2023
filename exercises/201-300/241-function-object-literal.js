// ejercicio 241: crear una funcion anonima como propiedad de un objeto literal

const radio = {
  encendida: false,
  encender: function () {
    this.encendida = true;
  },
  apagar: function () {
    this.encendida = false;
  },
};

console.log(radio);
// {
//   encendida: false,
//   encender: [Function: encender],
//   apagar: [Function: apagar]
// }

radio.encender();
console.log(radio);
// {
//   encendida: true,
//   encender: [Function: encender],
//   apagar: [Function: apagar]
// }
radio.apagar();
console.log(radio);
// {
//   encendida: false,
//   encender: [Function: encender],
//   apagar: [Function: apagar]
// }
