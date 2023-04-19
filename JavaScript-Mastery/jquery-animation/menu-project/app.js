(function () {
    'use strict';

    const menu = document.querySelectorAll('.ul');
    const allLi = document.querySelectorAll('ul li ul');

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu'
    }
    
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function (e) {
            e.preventDefault

            const este = this.querySelectorAll('li');
            
            for (let h = 0; h < este.length; h++) {
                este[h].className = 'mostrar-menu'
                
            }
        })
    }


})()