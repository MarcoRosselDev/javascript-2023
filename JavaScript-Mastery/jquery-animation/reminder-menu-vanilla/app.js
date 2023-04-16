(function () {
    'use strict';

    const menuLinks = document.querySelectorAll('.menulink');
    
    function hideMenu() {
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
            console.log(liMenu);

            if (liMenu.className == 'hide-menu') {
                hideMenu()
                liMenu.className = 'show-menu';
            } else {
                liMenu.className = 'hide-menu';
            }
    })
    }
})()