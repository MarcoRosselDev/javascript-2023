// ejercicio 304 ---> encontrar nombres de archivos en un texto con una expresion regular.

const frase =
  "El nombre del archivo es Karl_marx_biografia.pdf. El archivo se encuentra en la carpeta de documentos.";

const patron = /([a-z_]+\.pdf)/;

console.log(patron.exec(frase));

// [
//   'arl_marx_biografia.pdf',
//   'arl_marx_biografia.pdf',
//   index: 26,
//   input: 'El nombre del archivo es Karl_marx_biografia.pdf. El archivo se encuentra en la carpeta de documentos.',
//   groups: undefined
// ]
