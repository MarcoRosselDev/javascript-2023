// ejercicio 229: estudiar la diferencia entre un objeto y un mapa.

// la principal diferencia es que las llaves en mapa pueden ser de cualquier tipo,
// en cambio en los objetos solo pueden ser strings

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

mapa.forEach((value, key, map) => {
  console.log(typeof key);
  // string
  // string
  // string
  // string
  // number
  // boolean
});
