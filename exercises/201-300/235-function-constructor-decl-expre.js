// ejercicio 235: crear una funcion con un constructor, una declaracion o una expresion.

//-----------------------------------------------------------------------------------------
// constructor:

const funcionConstructor = new Function("a", "b", "return a * b");

console.log(funcionConstructor(5, 5)); // 25

// este tipo de funcion es como trabajan muchas de las fucionalidades de los frameworks
// que automatizan funciones
//-----------------------------------------------------------------------------------------

// Declaracion: ---> funciones nombradas

function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(4, 7)); // 28
//-----------------------------------------------------------------------------------------
// Expresion:

const sumarExpresion = function (a, b) {
  return a + b;
};

console.log(sumarExpresion(10, 8)); // 18
