// ejercicio 172: buscar el indice de un objeto en un arreglo a partir del valor de una propiedad.

const marco = { nombe: "Marco", email: "marco@gmail.com", edad: 29 };
const eva = { nombe: "eva", email: "eva@gmail.com", edad: 61 };
const eduardo = { nombe: "eduardo", email: "eduardo@gmail.com", edad: 56 };

const personas = [marco, eva, eduardo];

console.log(personas);

const index = (nombre, objeto) => {
  objeto.findIndex((obj) => {
    return obj.nombre === nombre;
  });
};

console.log(index("marco", personas));
