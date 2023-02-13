// ejericio 85: Uso del metodo fromCharCode para cerar cadenas UTF

console.log(String.fromCharCode(189, 43, 190, 61)); // "½+¾="

// es lo mismo que con la clara diferencia que la primera es de tipo string
// y la segunda es tipo numero codificado en UTF

let code = "\u0041";
console.log(code); // A
console.log(String.fromCharCode(0x41)); // A
