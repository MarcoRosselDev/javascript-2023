(function () {
    'use strict';

    const allUl = document.querySelectorAll('.ul');
    const allLi = document.querySelectorAll('ul li ul li')

    console.log(allLi);
    for (let i = 0; i < allUl.length; i++) {
        allUl[i].addEventListener('click', function () {
            console.log('clicked');
        })
    }

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'ocultar-menu'
        
    }
    console.log(allUl);
})()