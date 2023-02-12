// ejercicio 76: Uso del operador de disyuncion logica.

// || == or == o == o inclusivo

let computador1 = { id: 12312, procesador: "intel core i7", ram: 32 };
let computador2 = { id: 15312, procesador: "AMD", ram: 8 };
let computador3 = { id: 1531212, procesador: "AMD", ram: 4 };

// requisitos de un computador para correr un juego con las siguientes caracteristicas
// ram >= 8ram
// procesador intel core i7 o amd

let comparador = (id, procesador, ram) => {
  if ((procesador == "intel core i7" || procesador == "AMD") && ram >= 8) {
    console.log(`el computador ${id} puede correr el juego`);
  } else {
    console.log(
      `el computador id: ${id} no puede correr el juego, comprate una mejor pese :D`
    );
  }
};

let info = (computador) => {
  let ramPc = computador.ram;
  let procesadorPc = computador.procesador;
  let idPc = computador.id;
  // ejecutamos la funcion comarador con estos datos
  comparador(idPc, procesadorPc, ramPc);
};

info(computador1);
info(computador2);
info(computador3);

// resultado

// el computador 12312 puede correr el juego
// el computador 15312 puede correr el juego
// el computador id: 1531212 no puede correr el juego, comprate una mejor pese :D
