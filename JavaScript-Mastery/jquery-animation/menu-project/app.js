(function () {
    'use strict';

    const allLi = document.querySelectorAll('ul li ul');
    const clickUl = document.querySelectorAll('.selectAllUl');

    console.log(allLi);
    console.log(clickUl);

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu';
    }

    for (let i = 0; i < clickUl.length; i++) {
        clickUl[i].addEventListener('click', function () {

            let a = clickUl[i].parentNode.querySelector('ul');
            a.className = 'mostrar-menu'
            /* const esteUl = this.parentNode.querySelector('ul');
            esteUl.className = 'mostrar-menu' */
        })
    }
    
})()