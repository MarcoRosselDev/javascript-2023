//
// ejercicio 46: recorrer un arreglo por medio de for...in

let animales = ["🐄", "🐎", "🦙", "🐢", "🦘"];

for (let i in animales) {
  console.log(i);
}
// resultado
// 0
// 1
// 2
// 3
// 4

for (let i in animales) {
  console.log(animales[i]);
}
// resultado
// 🐄
// 🐎
// 🦙
// 🐢
// 🦘
