// ejercicio 246: Invocar una funcion declarada en una clase padre ( superclase ).

class Computador {
  constructor(ram, procesador, sisOperativo, precio) {
    this.ram = ram;
    this.procesador = procesador;
    this.sisOperativo = sisOperativo;
    this.precio = precio;
  }

  getRam() {
    return this.ram;
  }

  getProcesador() {
    return this.procesador;
  }

  getSisOperativo() {
    return this.sisOperativo;
  }

  getPrecio() {
    return this.precio;
  }
}

class ComputadorGaming extends Computador {
  constructor(ram, procesador, sisOperativo, tarjetaGrafica, discDuro, precio) {
    super(ram, procesador, sisOperativo, precio);
    this.tarjetaGrafica = tarjetaGrafica;
    this.discDuro = discDuro;
  }

  getTarjetaGrafica() {
    return this.tarjetaGrafica;
  }

  getDiscoDuro() {
    return this.discDuro;
  }

  getPrecio() {
    return super.getPrecio() + 1200;
  }
}

const computadorGamer = new ComputadorGaming(
  "8ram",
  "Intel Core I7",
  "ubuntu",
  "GeForce",
  500,
  3000
);

console.log(computadorGamer.getPrecio()); // 4200
