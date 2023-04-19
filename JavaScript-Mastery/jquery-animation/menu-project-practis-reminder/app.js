(function () {
    'use strict';

    const liSelect = document.querySelectorAll('.selectLi');
    const allLi = document.querySelectorAll('ul li ul');

    // primero ocultamos todas las listas
    function hideAll() {
        allLi.forEach(e => e.className = 'hide-menu')
    }
    hideAll()

    liSelect.forEach(i => i.addEventListener('click', function(e){
        e.preventDefault
        const esteMenu = this.parentElement.querySelector('ul');

        if (esteMenu.className == 'hide-menu') {
            hideAll()
            esteMenu.className = 'show-menu'
        } else {
            esteMenu.className = 'hide-menu';
        }
    }))
})()