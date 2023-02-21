// ejercicio 228: crear un objeto de tipo mapa con la clase Map.

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set("may", 70);

console.log(mapa);

// Map(5) {
//   'ene' => 100,
//   'feb' => 90,
//   'mar' => 110,
//   'abr' => 140,
//   'may' => 70
// }

console.log(mapa.get("ene")); // 100
