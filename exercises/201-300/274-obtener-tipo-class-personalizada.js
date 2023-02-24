// ejercicio 274: Obtener el tipo de una clase de coleccion personalizada.

let tamagnio = Symbol("Tamaño");

class Coleccion {
  constructor() {
    this[tamagnio] = 0;
  }

  agregar(elemento) {
    this[this[tamagnio]] = elemento;
    ++this[tamagnio];
  }

  get [Symbol.toStringTag]() {
    return "Coleccion";
  }

  static TamagnioActual(instancia) {
    return instancia[tamagnio];
  }
}

const numeros = new Coleccion();
console.log(typeof numeros); // object
console.log(Object.prototype.toString.call(numeros)); // [object Coleccion]
