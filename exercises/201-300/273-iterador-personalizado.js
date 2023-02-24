// ejercicio 273: Definir un iterador personalizado para una coleccion.

let tamagnio = Symbol("Tamaño");

class Coleccion {
  constructor() {
    this[tamagnio] = 0;
  }

  agregar(elemento) {
    this[this[tamagnio]] = elemento;
    ++this[tamagnio];
  }

  *[Symbol.iterator]() {
    let i = 0;

    while (this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }

  static TamagnioActual(instancia) {
    return instancia[tamagnio];
  }
}

const numeros = new Coleccion();

numeros.agregar(2);
numeros.agregar(7);
numeros.agregar(3);
numeros.agregar(8);
numeros.agregar(1);

for (const numero of numeros) {
  console.log(numero);
}

// 2
// 7
// 3
// 8
// 1
