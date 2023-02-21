// ejercicio 232: obtener todas las llaves y valores de un mapa.

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

console.log(mapa.keys()); // [Map Iterator] { 'ene', 'feb', 'mar', 'abr', 23, false }
console.log(mapa.values()); // [Map Iterator] { 100, 90, 110, 140, 70, 'aasdf' }
