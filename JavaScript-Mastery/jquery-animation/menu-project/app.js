(function () {
    'use strict';

    const allUl = document.querySelectorAll('.ul');
    const allLi = document.querySelectorAll('ul li ul li')

    console.log(allLi);
    for (let i = 0; i < allUl.length; i++) {
        allUl[i].addEventListener('click', function () {
            const esteMenu = this.parentElement;
            const a = esteMenu.querySelectorAll('li')
            for (let f = 0; f < a.length; f++) {

                if (a[f].className == 'mostrar-menu') {
                    a[f].className = 'ocultar-menu'
                } else{
                    a[f].className = 'mostrar-menu';
                }
            }
        })
    }

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu'
        
    }
    console.log(allUl);
})()