// ejercicio 233: comprobar si una llave existe en un mapa usando la funcion has()

const mapa = new Map();

mapa.set("ene", 100);
mapa.set("feb", 90);
mapa.set("mar", 110);
mapa.set("abr", 140);
mapa.set(23, 70);
mapa.set(false, "aasdf");

// has retorna un boolean value si el parametro esta en el map

console.log(mapa.has("feb")); // true
console.log(mapa.has("nov")); // false
