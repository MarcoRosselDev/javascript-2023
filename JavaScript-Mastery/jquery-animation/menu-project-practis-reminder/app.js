(function () {
    'use strict';

    const liSelect = document.querySelectorAll('.selectLi');
    /* liSelect.forEach((e)=> e.addEventListener('click', (f)=>{
        console.log(f);
        console.log(`clicked from menu ` );
    })); */

    for (let i = 0; i < liSelect.length; i++) {
        liSelect[i].addEventListener('click', function () {
            console.log('clicked aaa');
        })
        
    }
})()