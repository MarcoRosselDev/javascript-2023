(function () {
    'use strict';

    const allSections = document.querySelectorAll('.toggle');

    // primero ocultamos todos menos el parrafo 1 que esta por defecto abierto
    //allSections[0].className += ' show-text'
    const parrafo1 = document.querySelector('.parrafo1');
    const parrafo2 = document.querySelector('.parrafo2');
    const parrafo3 = document.querySelector('.parrafo3');
    let parrafo = 1;

    parrafo1.addEventListener('click', function () {
        /* this.style.backgroundColor = 'red' */
        parrafo = 1;
        asq();
    })
    parrafo2.addEventListener('click', function () {
        parrafo = 2;
        asq();
    })
    parrafo3.addEventListener('click', function () {
        parrafo = 3;
        asq();
    })

    function asq() {
        if (parrafo == 1) {
            allSections.forEach(e => e.className = 'hide-text');
            allSections[0].className = 'show-text';
        } else if (parrafo == 2) {
            allSections.forEach(e => e.className = 'hide-text');
            allSections[1].className = 'show-text';
        } else if (parrafo == 3) {
            allSections.forEach(e => e.className = 'hide-text');
            allSections[2].className = 'show-text';
        }
    }
    asq()

})()