// ejercicio 283: ejecutar una funcion una vez se cargue un documento HTML

function documentoCargado() {
  alert("El documento se ha cargado");
}

document.addEventListener("DOMContentLoaded", documentoCargado, false);
