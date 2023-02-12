//
// ejercicio 64: Uso del operador de preincremento o postincremento.

// ++

let i = 0;

console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);
// retorna
// 0;
// 1;
// 2;

// esto se simplifica aplicando el ++ :
console.log();

i = 0;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
// retorna es el mismo pero es mas facil de impolementar
// 0;
// 1;
// 2;

// ahora viene la diferencia en la ublicacion del ++
// si lo aplicamos delante ++i
// se incrementa y luego se imprime

// si lo aplicamos despues i++
// se imprime y luego se incrementa

console.log("prueba ++i");
i = 0;
console.log(++i); // 1
console.log(++i); // 2
console.log(i); // 2

console.log("prueba i++");
i = 0;
console.log(i++); // 0
console.log(i++); // 1
console.log(i); // 2
