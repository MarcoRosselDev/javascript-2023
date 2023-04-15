/*      Challenge 9
Use JavaScript to change the color of paragraph
that contains “Llamas and Chickens!” to red.
*/

(function () {
    'use strict';

    const pInMain = document.querySelectorAll('#main p');

    console.log(pInMain);

    for (let i = 0; i < pInMain.length; i++) {
        if (pInMain[i].innerText == 'Llamas and Chickens!'){
            pInMain[i].style.color = 'red'
        }
    }
})()