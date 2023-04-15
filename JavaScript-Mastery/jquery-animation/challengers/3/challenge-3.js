/*      Challenge 3
Use plain JavaScript to change the font size to
24 pixels and the color to red for the paragraphs
inside the div, but not the one outside the div.
*/

(function () {
    // use the id main from div
    const main = document.querySelectorAll('#main p');
    console.log(main[2].innerText);

    for (let i = 0; i < main.length; i++) {
        main[i].style.fontSize = '24px';
        main[i].style.color = 'red';
    }
})()