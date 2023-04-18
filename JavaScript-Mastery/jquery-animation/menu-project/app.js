(function () {
    'use strict';

    const allUl = document.querySelectorAll('.ul');
    const allLi = document.querySelectorAll('ul li ul')
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

            console.log('clicked');
            const esteMenu = this.parentNode.children;
            console.log(esteMenu);
            esteMenu.querySelectorAll('li')
            /* for (let f = 0; f < a.length; f++) {

                if (a[f].className == 'ocultar-menu') {
                    a[f].className = 'mostrar-menu'
                } else{
                    a[f].className = 'ocultar-menu';
                }
            } */
        // preguntamos si alugn otro menu esta abierto
        // si es true lo ocultamos y mostramos este

        })
    }
})()