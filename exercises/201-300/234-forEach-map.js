// ejercicio 234: iterar todos los elementos de un mapa con la funcion forEach().

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

// forEach --> itera por todos los elementos

mapa.forEach((value, key, map) => {
  console.log(key, value);
  // ene 100
  // feb 90
  // mar 110
  // abr 140
  // 23 70
  // false aasdf

  // map no lo logeo por que muestra todos los elementos por cada iteracion y eso extiende demaciado la idea
});
