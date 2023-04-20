(function () {
    'use strict';

    const li = document.querySelectorAll('.lii');
    const allLi = document.querySelectorAll('ul li ul')

    console.log(allLi);

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].className = 'hide-menu'
    }
    //allLi.forEach(e => e.className = 'hide-menu')

    li.forEach(e => e.addEventListener('click', function (e) {
        e.preventDefault;
    }))
})()