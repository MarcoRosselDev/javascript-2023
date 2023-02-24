// ejercicio 270: especificar una propiedad de una clase como metadata usando symbol.

let tamagnio = Symbol("Tamaño");

class Coleccion {
  constructor() {
    this[tamagnio] = 0;
  }

  agregar(elemento) {
    this[this[tamagnio]] = elemento;
    ++this[tamagnio];
    console.log(elemento);
    // console.log(tamagnio);
  }

  static TamagnioActual(instancia) {
    return instancia[tamagnio];
  }
}

const numeros = new Coleccion();
// console.log(Coleccion.TamagnioActual(numeros)); // 0

numeros.agregar(2);
// console.log(Coleccion.TamagnioActual(numeros)); // 1
numeros.agregar(7);
// console.log(Coleccion.TamagnioActual(numeros)); // 2
