// ejercicio 105; uso del metodo includes para comprobar la presencia de una subcadena

// String.prototype.includes()

const sentence = "The quick brown fox jumps over the lazy dog.";

let word = "jumps";

console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// The word jumps is in the sentence

// podemos espesificar a partir de que caracter buscamos la palabra

console.log(
  `The word ${word} ${
    sentence.includes(word, 21) ? "is" : "is not"
  } in the sentence`
);

// The word jumps is not in the sentence

// includes()  is Case-sensitivity ----> es sensible a mayuscaulas
