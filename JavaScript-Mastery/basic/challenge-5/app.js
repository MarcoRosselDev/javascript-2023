text = document.getElementById("answer");

const numero = prompt("ingrese un numero, por favor");

if (numero > 10) {
  text.innerText = "su numero es mayor a 10";
} else {
  text.innerText = "su numero es menor a 10";
}
