// ejercicio 129: convertir un color rgb a hexadecimal

let converitdor = (r, g, b) => {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

let red = 255;
let green = 0;
let blue = 0;

console.log(converitdor(red, green, blue)); // ff0000
