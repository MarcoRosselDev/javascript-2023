// ejercicio 77: uso del operador condicional ternario.

// condicion ? expresion_1 : expresion_2
// condicion ? expresion_1? : expresion_2? expresion_3 : expresion_4
// podemos anidar las condiciones que queramos

let iterate = [12, 22, 11, 55, 18, 8, 17, 2, 15];

let clasificarPorEdad = (edadArr) => {
  for (let i = 0; i < edadArr.length; i++) {
    const edad = edadArr[i];

    console.log(edad < 12 ? "ni;o" : edad < 18 ? "adolescente" : "adulto");
  }
};

clasificarPorEdad(iterate);

// resultado

// adolescente;
// adulto;
// ni;
// o;
// adulto;
// adulto;
// ni;
// o;
// adolescente;
// ni;
// o;
// adolescente;

// salio todo de pana
