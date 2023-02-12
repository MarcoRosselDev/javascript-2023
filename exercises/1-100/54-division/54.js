// ejercicion 54: Uso del operador de division

// promocion = coercion
// su significado es forzar o reprimir moral o fisicamente una accion
// por lo que en estos casos se coerciona a que el string que contiene un numero
// se transforme en number para poder operar

console.log(10 / "2"); // 5
console.log("10" / "2"); // 5

// infinito
console.log("10" / "0"); // Infinity
// NaN
console.log("10" / "a"); // NaN
// nan significa que intento coercionar pero no se pudo por lo que no es un numero
