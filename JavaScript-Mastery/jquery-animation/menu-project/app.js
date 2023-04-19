(function () {
    'use strict';

    const menu = document.querySelectorAll('.liClass');
    const allLi = document.querySelectorAll('ul li ul');

    console.log(allLi);

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu'
    }
    
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function (e) {
            e.preventDefault

            const este = this.querySelector('ul');
            
            if (este.className == 'ocultar-menu') {
                este.className = 'mostrar-menu';
            } else{
                este.className = 'ocultar-menu';
            }
            
            /* for (let h = 0; h < este.length; h++) {
                este[h].className = 'mostrar-menu'
                
            } */
        })
    }


})()