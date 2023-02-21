// ejercicio 231: eliminar todos los elementos de un mapa con la funcion clear().

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

console.log(mapa.size); // 6

mapa.clear();
console.log(mapa.size); // 0

// se eliminaron todos los elementos del mapa
