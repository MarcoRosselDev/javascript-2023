const h1 = document.getElementById("saludo");

const nombre = prompt("¿cuál es tu nombre?", "Marco");

h1.innerText = `Buenos dias ${nombre}`;
