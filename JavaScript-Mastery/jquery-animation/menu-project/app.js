(function () {
    'use strict';

    const menu = document.querySelectorAll('.liClass');
    const allLi = document.querySelectorAll('ul li ul');

    // primero ocultamos todos los sub-menus
    function ocultarTodo() {
        for (let i = 0; i < allLi.length; i++) {
            allLi[i].className = 'ocultar-menu'
        }
    }
    // invocamos la funcion
    ocultarTodo()
    
    // escuchamos si clickean cualquier menu
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function (e) {
            e.preventDefault

            // invocamos this.para seleccionar la ul
            const este = this.querySelector('ul');
            
            //if para inyectar la clase deceada
            if (este.className == 'ocultar-menu') {
                //si habrimos un menu ocultamos todos los otros
                ocultarTodo()
                este.className = 'mostrar-menu';
            } else{
                este.className = 'ocultar-menu';
            }
        })
    }


})()