(function () {
    'use strict';

    const liSelect = document.querySelectorAll('.selectLi');
    const allLi = document.querySelectorAll('ul li ul');

    console.log(liSelect);
    // primero ocultamos todas las listas
    function hideAll() {
        allLi.forEach(e => e.className = 'hide-menu')
    }
    hideAll()
    /* liSelect.forEach((e)=> e.addEventListener('click', (f)=>{
        console.log(f);
        console.log(`clicked from menu ` );
    })); */
    
    /* liSelect.forEach(e => e.addEventListener('click', (j)=>{
        const este = j.this;
        console.log(este);
    })) */

    liSelect.forEach(i => i.addEventListener('click', function(){
        const esteMenu = this.parentElement.querySelector('ul');

        if (esteMenu.className == 'hide-menu') {
            hideAll()
            esteMenu.className = 'show-menu'
        } else {
            esteMenu.className = 'hide-menu';
        }
    }))

    /* for (let i = 0; i < liSelect.length; i++) {
        liSelect[i].addEventListener('click', function () {
            const este = this.parentElement.querySelector('ul');
            este.className = 'show-menu'
        })
    } */
})()