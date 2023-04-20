(function () {
    'use strict';

    const li = document.querySelectorAll('.lii');
    const allLi = document.querySelectorAll('ul li ul')

    allLi.forEach(e => e.className = 'hide-menu')

    li.forEach(e => e.addEventListener('click', function (e) {
        e.preventDefault;

        console.log('click');
    }))
})()