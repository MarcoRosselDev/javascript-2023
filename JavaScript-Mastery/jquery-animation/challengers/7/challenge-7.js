/*      Challente 7
Use JavaScript to change the color of every
other paragraph inside the div to red.
*/

(function () {
    'use strict';

    const p = document.querySelectorAll('#main p');
    console.log(p);

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'red'
    }
})()