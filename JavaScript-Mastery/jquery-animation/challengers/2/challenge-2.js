/*     Challenge 2
Use jQuery to change the size of the text in the
paragraph to 24px.
*/

(function () {
    'strict mode';
    $('#paragraph').css('font-size', '24px');
    console.log(document.getElementById('paragraph').style.fontSize);
})()