// ejercicio 287 --> Asociar un evento de click a un elemento button.

(()=>{
    const btnCambiarColorFondo = document.getElementById('btnCambiarColorFondo')

    btnCambiarColorFondo.addEventListener('click', function () {
        document.body.style.backgroundColor = 'grey'
    })
})()