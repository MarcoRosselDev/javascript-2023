// ejercicio 61: Uso del operador de igualdad estricta
// ejercicio 61:

// obviando lo obvio pasamos a los datos interesantes

if (true === 1) {
  console.log("true === 1");
}
// nos se ejecuta
// son igual en contenido pero no en tipo de dato

// otro caso interesante

let objeto1 = {};
let objeto2 = {};

if (objeto1 === objeto2) {
  console.log("objeto1 === objeto2");
} // no se ejecuta
// por que si vien son identicos, no apuntan al mismo espacio en la memoria
// entonces la igualdad estricta tmbn solicita esa conisidencia.

// demostracion
let objeto3 = objeto1;

if (objeto1 === objeto3) {
  console.log("objeto1 === objeto3");
}
// respuesta
// objeto1 === objeto3
