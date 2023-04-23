(function () {
    'use strict';

    const spans = document.querySelectorAll('.spanUl');
    const uls = document.querySelectorAll('ul li ul');

    console.log(uls);
    uls.forEach(e => e.className = 'hide-menu')

    console.log(spans);
    spans.forEach(e => e.addEventListener('click', function () {
        console.log(this);
    }))
}
)()