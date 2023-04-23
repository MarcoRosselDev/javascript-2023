(function () {
    'use strict';

    const spans = document.querySelectorAll('.spanUl');
    const uls = document.querySelectorAll('ul li ul');

    console.log(uls);
    uls.forEach(e => e.className = 'hide-menu')

    console.log(spans);
    spans.forEach(e => e.addEventListener('click', function () {
        const este = this.parentNode.querySelector('ul');
        
        if (este.className == 'hide-menu') {
            este.className = 'show-menu';
        } else {
            este.className = 'hide-menu';
        }
    }))
}
)()