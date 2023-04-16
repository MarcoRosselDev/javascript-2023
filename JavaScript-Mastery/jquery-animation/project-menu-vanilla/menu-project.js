(function () {
    'use strict';

    const allUlLi = document.querySelectorAll('ul li ul');
    const li = document.querySelectorAll('.menulink')
    console.log(li); // devuelve un arreglo

    /* li.addEventListener('click', function () {
        console.log('clicked');
    }) */

    // iteramos por el arreglo y aplicamos escucha de click
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            console.log('click');
        })
    }

    console.log(allUlLi[0].innerHTML);

    for (let i = 0; i < allUlLi.length; i++) {
        allUlLi[i].addEventListener('click', function () {
            console.log('clicked');
        })
    }
})()