/*      Challenge 26
For this challenge, change the first
paragraph so that it says, "This is
paragraph number 1".
Each time the user presses the add
paragraph button, the number at
the end of the statement
increments.
When the user clicks the remove
paragraph button, it functions as
normal, but alerts the user if they
try to delete the last paragraph.
*/

const div = document.querySelector('div')

// seleccionando botones sin id ni clases
const btn = document.querySelectorAll('button')
const addParagraph = btn[0]
const removeParagraph = btn[1]

let numberParagraph = 0

addParagraph.addEventListener('click', function () {
    const newP = document.createElement('p');
    newP.innerText = `A new paragraph number ${numberParagraph}`;
    numberParagraph++
    div.appendChild(newP);
})

removeParagraph.addEventListener('click', function () {
    const a = div.lastElementChild
    div.removeChild(a)
    numberParagraph--
    //div.removeChild()
})
