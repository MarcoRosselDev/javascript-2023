// Ejercicio 12: comportamiento del alcance o contexto funcional.

function function1() {
  var a = 2;

  function function2() {
    var b = 5;

    function function5() {
      console.log(a, b);
    }
  }
}

function function2() {
  var a = 7;

  function function4() {
    console.log(a);
  }
}

// console.log(a);

function1();
function2();
