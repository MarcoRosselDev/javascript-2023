/*      Challenge 17
spa

Para cada uno de estos desafíos, use el archivo de inicio
y agregue etiquetas <script> en la parte inferior de la
página, justo antes de la etiqueta de cierre </body>, y
pon tu JavaScript entre esas etiquetas.

Guarde cada desafío como desafío17.html, etc.

Para este desafío, escriba un guión que obtenga la
texto dentro del párrafo con el id establecido en
"copyright" y use la propiedad de color para
cambie el color del texto a verde.
-------------------------------------------
eng

For each of these challenges, use the start file
and add <script> tags at the bottom of the
page, just before the closing </body> tag, and
put your JavaScript between those tags.

Save each challenge as challenge17.html, etc.

For this challenge, write a script that gets the
text inside the paragraph with the id set to
"copyright" and use the color property to
change the color of the text to green.
*/

const copyr = document.getElementById('copyright');

copyr.addEventListener('mouseover', function () {
    copyr.style.color = 'red'
})
copyr.addEventListener('mouseout', function () {
    copyr.style.color = 'black'
})

copyr.addEventListener('click', function () {
    copyr.style.color = 'green'
})

// long brack
