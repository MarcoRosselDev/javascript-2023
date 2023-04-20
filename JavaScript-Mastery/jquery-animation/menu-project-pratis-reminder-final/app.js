(function () {
    'use strict';

    const li = document.querySelectorAll('.lii');
    const allLi = document.querySelectorAll('ul li ul')

    allLi.forEach(e => e.className = 'hide-menu')
    
    li.forEach(e => e.addEventListener('click', function (e) {
        e.preventDefault;
        
        const este = this.parentNode.querySelector('ul')
        
        if (este.className == 'hide-menu') {
            allLi.forEach(e => e.className = 'hide-menu');
            este.className = 'show-menu'
        } else {
            este.className = 'hide-menu'
        }

    }))
})()