/*      Challenge 23
Add a few more paragraphs.
When you click the button, all the
paragraphs turn green.
*/
const p = document.querySelectorAll('p')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    //p.style.color = 'green'
    p.forEach((e) => e.style.color = 'green')
})