// ejercicio 286: cambiar el fondo de un documento HTML despues de 5 segundos.

function cambiarColorFondo() {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'pink';
    }, 5000)
}