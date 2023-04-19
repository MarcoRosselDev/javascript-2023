(function () {
    'use strict';

    const liSelect = document.querySelectorAll('.selectLi');
    const allLi = document.querySelectorAll('ul li ul');

    console.log(liSelect);
    // primero ocultamos todas las listas
    allLi.forEach(e => e.className = 'hide-menu')
    /* liSelect.forEach((e)=> e.addEventListener('click', (f)=>{
        console.log(f);
        console.log(`clicked from menu ` );
    })); */
    
    /* liSelect.forEach(e => e.addEventListener('click', (j)=>{
        const este = j.this;
        console.log(este);
    })) */

    liSelect.forEach(i => i.addEventListener('click', function(){
        this.parentElement.querySelector('ul').className = 'show-menu';
    }))

    /* for (let i = 0; i < liSelect.length; i++) {
        liSelect[i].addEventListener('click', function () {
            const este = this.parentElement.querySelector('ul');
            este.className = 'show-menu'
        })
    } */
})()