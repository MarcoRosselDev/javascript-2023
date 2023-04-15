/*      Challenge 1
Use JavaScript to change the size of the text in
the paragraph to 24px.
*/

(function () {
    "strict mode";
    /* const paragraph = document.getElementById('paragraph');
    paragraph.style.fontSize = '24px';
    console.log(paragraph.style.fontSize); */

    // resumido en una sola linea

    document.getElementById('paragraph').style.fontSize = '24px';
    console.log(document.getElementById('paragraph').style.fontSize); // 24px
})()