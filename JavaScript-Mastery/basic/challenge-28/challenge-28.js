/*      Challenge 28

For this challenge, create the HTML
and CSS on the right. Then write a
script that when you hover the
mouse over the div, it adds the
class "big".

Write a second event handler for
when the mouse goes off the div, it
removes the class "big".
*/

const div = document.querySelector('div');

div.addEventListener('mouseover', function () {
    div.className = 'big';
})

div.addEventListener('mouseout', function () {
    div.removeAttribute('class');
    //  div.className = '';         tmbn sirve, 
    //                              pero removeAtribute remueve todas las clases que puede tener
})
