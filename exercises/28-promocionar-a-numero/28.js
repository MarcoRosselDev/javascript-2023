// Ejercicio 28: Promocionar valores a tipo numerico (Number).

let cadena = "1.414216";
const CONSTANTE_PITAGORICA = Number(cadena); // pasamos el string de la variable cadena a numero

console.log(typeof CONSTANTE_PITAGORICA);
// number

//----------------------------------------------------
// que pasa si combertimos a numero valores booleanos?
console.log(Number(false)); // false === 0
console.log(Number(true)); // true === 1

//----------------------------------------------------
// otras pruebas de valores

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(NaN)); // NaN

//----------------------------------------------------
console.log("stringssss");
// que pasa con los strings
const fu1 = () => {};
console.log(Number("")); // 0
console.log(Number("hola")); // NaN
console.log(Number(fu1)); // NaN
console.log(Number("123999")); // 123999 ---> en resumen se puede promocionar a numero los strings que tengan solo numeros
// en caso de un error como una letra entre medio, fracasara el parceo y quedara como NaN
