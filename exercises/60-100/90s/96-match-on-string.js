// ejercicio 96: uso del metodo match de la clase string

const paragraph =
  "The quick brown fox jumps over the lazy dog, it barked. There are 2 dogs and 1 fox";

const regex = /[A-Z]/g;

const found = paragraph.match(regex);
console.log(found); // [ 'T', 'T' ] -----> encontrar las mayuscaulas de A-Z y meterlas en un arreglo

console.log(paragraph.match(/[0-9]/g)); // [ '2', '1' ] ------> encontrar los numero del 0 - 9 y meterlos en un arreglo
console.log(paragraph.match("fox")); //

/* retorna todo esto;
[
  'fox',
  index: 16,
  input: 'The quick brown fox jumps over the lazy dog, it barked. There are 2 dogs and 1 fox',
  groups: undefined
]
*/
