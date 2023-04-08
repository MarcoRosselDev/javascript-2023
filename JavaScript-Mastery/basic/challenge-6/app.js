text = document.getElementById("answer");
const numero = prompt("ingrese un numero, por favor");
console.log(typeof numero);

if (numero > 10) {
  text.innerText = "su numero es mayor a 10";
} else if (numero < 10) {
  text.innerText = "su numero es menor a 10";
} else if (numero == 10) {
  text.innerText = "su numero es 10";
} else {
  text.innerText = "este no es un numero !";
  text.style.color = "red";
}
