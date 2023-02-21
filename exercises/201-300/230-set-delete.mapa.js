// ejercicio 230: agregar y eliminar elementos en un mapa con las funciones set() y delete().

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

console.log(mapa);
console.log(mapa.size); // 6
// Map(6) {
//   'ene' => 100,
//   'feb' => 90,
//   'mar' => 110,
//   'abr' => 140,
//   23 => 70,
//   false => 'aasdf'
// }

mapa.delete("feb");

console.log(mapa);
console.log(mapa.size); // 5

// Map(5) {
//   'ene' => 100,
//   'mar' => 110,
//   'abr' => 140,
//   23 => 70,
//   false => 'aasdf'
// }
