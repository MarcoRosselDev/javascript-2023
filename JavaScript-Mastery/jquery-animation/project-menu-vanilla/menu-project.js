(function () {
    'use strict';

    const allUlLi = document.querySelectorAll('ul li ul');
    const li = document.querySelectorAll('.menulink')
    // console.log(li); // devuelve un arreglo

    for (let i = 0; i < allUlLi.length; i++) {
        allUlLi[i].className = 'hide-menu';
    }

    // iteramos por el arreglo y aplicamos escucha de click
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            e.preventDefault();

            let esteMenu = this.parentNode.querySelector('ul');
            
            if (esteMenu.className == 'hide-menu') {
                esteMenu.className = 'show-menu';
            } else {
                esteMenu.className = 'hide-menu';
            }

            //li[i].className = 'show-menu'
            
        })
    }

    console.log(allUlLi[0].innerHTML);

    
})()