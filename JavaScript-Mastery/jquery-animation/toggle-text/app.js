(function () {
    'use strict';
    const allSections = document.querySelectorAll('.toggle');
    const allPara = document.querySelectorAll('.allPara');
    let parrafo = 0;

    for (let i = 0; i < allPara.length; i++) {
        allPara[i].addEventListener('click', function () {
            this.className += ' green'
            //this.style.backgroundColor = 'red';
            parrafo = i;
            asq()
        })
        
    }
    function hideText() {
        allSections.forEach(e => e.className = 'hide-text');
    }

    function asq() {
        if (parrafo == 0) {
            hideText()
            allSections[0].className = 'show-text';

        } else if (parrafo == 1) {
            hideText()
            allSections[1].className = 'show-text';
        } else if (parrafo == 2) {
            hideText()
            allSections[2].className = 'show-text';
        }
    }
    asq()

})()