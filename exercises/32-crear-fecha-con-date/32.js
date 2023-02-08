// Ejercicio 32: Crear una fecha en por medio del objeto Date.

let hoy = new Date();

console.log(hoy); //2023-02-08T21:22:06.481Z

// podemos crear un dato con una fecha especifica

let fecha = new Date("May 07, 1993 14:17:19");
console.log(fecha); //1993-05-07T18:17:19.000Z

// otra forma de crear una fecha ------------------------------------

fecha = new Date(2013, 4, 13);
console.log(fecha); //2013-05-13T04:00:00.000Z ---> con el detalle que la hora es 00 por defecto

// otra forma de crear una fecha ------------------------------------

fecha = new Date(2013, 4, 13, 4, 5, 6);
console.log(fecha); //2013-05-13T08:05:06.000Z ----> ahora si tiene la hora

// otra forma de crear una fecha ------------------------------------

console.log(fecha.getMonth()); //4
console.log(fecha.getFullYear()); //2013
console.log(fecha.getDate()); //13
console.log(fecha.getMilliseconds()); // 0
