// ejercicio 114: crear una funcion para la generacion de numero aleatorios

let aleatorios = (minimo, maximo) => {
  return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
};

for (let i = 0; i < 100; i++) {
  console.log(aleatorios(7, 10));
}
