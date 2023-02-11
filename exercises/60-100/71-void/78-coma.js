// ejercicio 78: usar multiples expresiones a traves del operador coma.

let lenguajes = ["JavaScript", "Python", "Java", "PHP"],
  computador = { id: 1, ram: 32 },
  contador = lenguajes.length;

for (let i = 0, n = lenguajes.length; i < contador; ++i, --n) {
  console.log(`lenguaje programacion actual: ${lenguajes[i]}.
   (quedan ${n - 1} lenguajes)`);
}
