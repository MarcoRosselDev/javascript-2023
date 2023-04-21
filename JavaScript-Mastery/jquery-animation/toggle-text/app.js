(function () {
    'use strict';

    const allSections = document.querySelectorAll('.toggle');
    console.log(allSections);

    allSections.forEach(e => e.className += ' hide-text');
    console.log();

    //allSections[0].className += ' show-text'
    
    const parrafo2 = document.querySelector('.parrafo2');
    parrafo2.addEventListener('click', function () {
        allSections.forEach(e => e.className += ' hide-text');
        allSections[1].className += ' show-text';

    })
})()