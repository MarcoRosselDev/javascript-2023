// Ejercicio 12: comportamiento del alcance o contexto funcional.

function asd(arr) {
  var a = arr;

  function funcion3() {
    var b = 7;

    function funcion5() {
      console.log(a + b);
    }
    funcion5();
  }
  funcion3();
  // console.log(a);
}
console.log("hola");

function afs() {
  var a = 7;

  function funcion4() {
    console.log(a);
  }
}

// console.log(a);

asd(7);
afs();
