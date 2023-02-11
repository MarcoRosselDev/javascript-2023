// ejercicio 71: uso del operador void

// undefined
console.log(undefined);
//console.log(window.undefined); no aplica por que no es un navegador como chrom

// se requiere de void cuando queremos que se aplique como referencia undefined
// osea que se ejecute la operacion requerida como una suma o un cambio de estilo
// y luego no retorne nada, como undefined
// 71.html como ejemplo del uso de void

//-----------------------72 consultar con typeof
console.log(typeof NaN); // number lol
console.log(typeof undefined); // undefined

let regularExpresion = /^$/;

console.log(typeof regularExpresion); // object

console.log(typeof null); // object

console.log(typeof typeof []); // string
