// ejercicio 267: obtener nombre de un Symbol a partir de una referencia.

const symbol1 = Symbol.for("Symbol1.key"); // .for pregunta si existe alguno con ese nombre, si no existe lo crea.

// para saber el nombre dado como llave a un Symbol, cualesquiera ===>

console.log(Symbol.keyFor(symbol1)); // Symbol1.key
