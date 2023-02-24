// ejercicio 263: crear identificadores unicos para cada objeto definido.

const marco = { id: Symbol(), nombre: "Marco", edad: 29 };
const eduardo = { id: Symbol(), nombre: "Eduardo", edad: 32 };

console.log(marco.id == eduardo.id); // false

// al parecer Symbol crea un valor aleatorio unico, util para un id error
