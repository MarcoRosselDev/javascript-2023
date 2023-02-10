//ejercicio 57: Uso del operador relacional menor o igual que.

let comparador = (a, b) => {
  if (a <= b) {
    console.log(`${a} es menor o igual que ${b}`);
  } else {
    console.log(`${a} no es menor o igual que ${b}`);
  }
};

comparador(3, 5);
comparador(5, 5);
comparador(7, 5);
comparador(11, 5);
comparador(1, 5);

// 3 es menor o igual que 5
// 5 es menor o igual que 5
// 7 no es menor o igual que 5
// 11 no es menor o igual que 5
// 1 es menor o igual que 5
