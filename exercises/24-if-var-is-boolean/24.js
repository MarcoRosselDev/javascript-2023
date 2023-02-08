// Ejercicio 24: Determinar si una variable booleana ha sido inicializada.

// en archivos muy grande no podemos comprobar esto por simple inspeccion por eso es
// recomendable saber comprobarlas

let a = Boolean(true);
let b = false;
let c = "";
let d = new Number(5);

console.log(typeof a); // boolean
console.log(typeof a === "boolean"); //true
console.log(typeof b === "boolean"); //true
console.log(typeof c); // String
console.log(typeof c === "boolean"); //false -------> es de tipo texto
console.log(typeof d); //object
console.log(typeof d === "boolean"); //false -------> como es la instancia de la clase Number es un objeto no un tipo numero
