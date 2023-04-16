(function () {
    'use strict';

    const menuLinks = document.querySelectorAll('.menulink');
    
    function hideMenu() {
        // ul ( li ( ul ( li ) ) ) ==> puede venir otra ul 
        // por eso ul li ul, y no li ul li, que fue el error cometido en este intento
        /* Conclucion:
            las class from css se aplican en el ul no en cada li
            por lo que iteramos en ul y inyectamos la case show-menu or hide-menu */
        const liss = document.querySelectorAll('ul li ul');

        for (let i = 0; i < liss.length; i++) {
            liss[i].className = 'hide-menu'
        }
    }

    hideMenu()

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function (e) {
            e.preventDefault()
            const liMenu = this.parentNode.querySelector('ul');

            if (liMenu.className == 'hide-menu') {
                hideMenu()
                liMenu.className = 'show-menu';
            } else {
                liMenu.className = 'hide-menu';
            }
    })
    }
})()