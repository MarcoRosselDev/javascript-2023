// ejercicio 88: iterar por todos los caracteres de una cadena de caracteres.

let texto = "javaScript es genial!";

for (let i in texto) {
  console.log(texto[i]);
}
// resultado

// j
// a
// v
// a
// S
// c
// r
// i
// p
// t

// e
// s

// g
// e
// n
// i
// a
// l
// !

// podemos hacerlo mas interesante y aplicamos :

for (let i in texto) {
  console.log(`la posicion es ${i}, y el caracter es: [${texto[i]}]`);
}

// retorna

// la posicion es 0, y el caracter es: [j]
// la posicion es 1, y el caracter es: [a]
// la posicion es 2, y el caracter es: [v]
// la posicion es 3, y el caracter es: [a]
// la posicion es 4, y el caracter es: [S]
// la posicion es 5, y el caracter es: [c]
// la posicion es 6, y el caracter es: [r]
// la posicion es 7, y el caracter es: [i]
// la posicion es 8, y el caracter es: [p]
// la posicion es 9, y el caracter es: [t]
// la posicion es 10, y el caracter es: [ ]
// la posicion es 11, y el caracter es: [e]
// la posicion es 12, y el caracter es: [s]
// la posicion es 13, y el caracter es: [ ]
// la posicion es 14, y el caracter es: [g]
// la posicion es 15, y el caracter es: [e]
// la posicion es 16, y el caracter es: [n]
// la posicion es 17, y el caracter es: [i]
// la posicion es 18, y el caracter es: [a]
// la posicion es 19, y el caracter es: [l]
// la posicion es 20, y el caracter es: [!]
