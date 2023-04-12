/*      Challenge 24

Change the HTML so that there is a
div around one paragraph. Make it
so that when you click the button a
new paragraph is added to the div,
with the text, "A new paragraph" in
it.
You may need to go back to the
slides on changing the DOM to see
how to do this.

*/

const div = document.querySelector('div')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    const newP = document.createElement('p');
    newP.innerText = 'A new paragraph ';
    div.appendChild(newP);
})

