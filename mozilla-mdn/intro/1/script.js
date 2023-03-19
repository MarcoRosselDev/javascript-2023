document.getElementById('button').addEventListener('click', agregarElementoHijo)

function agregarElementoHijo() {
    let parrafo = document.createElement('p');
    parrafo.textContent = 'Clickeaste el boton !';
    document.body.appendChild(parrafo)
}