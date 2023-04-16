(function () {
    'use strict';

    const menuLinks = document.querySelectorAll('.menulink');
    console.log(menuLinks);
    const liss = document.querySelectorAll('li ul li');
    console.log(liss);
    
    for (let i = 0; i < liss.length; i++) {
        liss[i].className = 'hide-menu'
    }

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
            const liMenu = this.parentNode.querySelectorAll('li');

            for (let i = 0; i < liMenu.length; i++) {
                liMenu[i].className = 'show-menu';
            }
            //liMenu.class = 'hide-menu'
            console.log('i');
        })
    }
})()