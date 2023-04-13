/*      Challenge 25

For this challenge, add an
additional button that removes the
last paragraph from the div.

*/

const div = document.querySelector('div')

// seleccionando botones sin id ni clases
const btn = document.querySelectorAll('button')
const addParagraph = btn[0]
const removeParagraph = btn[1]

addParagraph.addEventListener('click', function () {
    const newP = document.createElement('p');
    newP.innerText = 'A new paragraph ';
    div.appendChild(newP);
})

removeParagraph.addEventListener('click', function () {
    const a = div.lastElementChild
    div.removeChild(a)
    //div.removeChild()
})

