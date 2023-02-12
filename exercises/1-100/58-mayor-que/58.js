// ejercicio 58: Uso del operador relacional mayor que.

let comparador = (a, b) => {
  if (a >= b) {
    console.log(`${a} es mayor o igual que ${b}`);
  } else {
    console.log(`${a} no es mayor o igual que ${b}`);
  }
};

comparador(3, 5);
comparador(5, 5);
comparador(7, 5);
comparador(11, 5);
comparador(1, 5);

// resultados -------------------
// 3 no es mayor o igual que 5
// 5 es mayor o igual que 5
// 7 es mayor o igual que 5
// 11 es mayor o igual que 5
// 1 no es mayor o igual que 5
