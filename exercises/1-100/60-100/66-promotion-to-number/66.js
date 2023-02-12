//
// ejercicio 66: Uso del operador de suma para promocionar un objeto a un numero
// coercionar

// podemos coercionar un string a numero con incremento +

console.log(typeof "42"); // string
console.log(typeof +"42"); // number
console.log(+"42"); // 42

// siempre y cuando la cadena reprecente un numero

// resulta que el operador + es igual que aplicar Number('string tipo numero')

console.log(typeof Number("22")); // number
console.log(typeof +"22"); //  number
// esto es equivalente pero la segunda es mas efieciente de implementar
