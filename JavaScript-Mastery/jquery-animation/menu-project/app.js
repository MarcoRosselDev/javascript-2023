(function () {
    'use strict';

    const allUl = document.querySelectorAll('.ul');
    const allLi = document.querySelectorAll('ul li ul li')
// primero ocultamos todas las sub-listas

function cerrarTodo() {
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu'
    }
}
cerrarTodo()

// mostramos  y ocultamos si click en menu x
    for (let i = 0; i < allUl.length; i++) {
        allUl[i].addEventListener('click', function () {

            const esteMenu = this.parentElement;
            const a = esteMenu.querySelectorAll('li')
            for (let f = 0; f < a.length; f++) {

                if (a[f].className == 'mostrar-menu') {
                    a[f].className = 'ocultar-menu'
                } else{
                    cerrarTodo()
                    a[f].className = 'mostrar-menu';
                }
            }
        // preguntamos si alugn otro menu esta abierto
        // si es true lo ocultamos y mostramos este

        })
    }
})()