// ejercicio 105; uso del metodo includes para comprobar la presencia de una subcadena

// String.prototype.includes()

const sentence = "The quick brown fox jumps over the lazy dog.";

let word = "jumps";

console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
