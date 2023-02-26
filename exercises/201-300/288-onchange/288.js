// ejercicio 288 : uso del evento onchange sobre el elemento select de HTML

function seleccinarLenguaje() {
    let lenguajes = document.getElementById('lenguajes')
    let lenguaje = lenguajes.value

    document.getElementById('lenguajeSeleccionado').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}`
}