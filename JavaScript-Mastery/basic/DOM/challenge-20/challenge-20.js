/*          Challenge 20
eng

For this challenge, change the src attribute for
the first picture in the first article to:
"http://meadpoint.net/images/xmasajax.jpg"
Also add the class "blue" to all the paragraphs
in the second article.

------------------------------------------------
spa

Para este desafío, cambie el atributo src para
la primera imagen en el primer artículo a:
"http://meadpoint.net/images/xmasajax.jpg"
También agregue la clase "azul" a todos los párrafos
en el artículo segundo.
*/

const p = document.querySelectorAll('p')

for (let i = 3; i < p.length; i++) {
    p[i].className = 'blue';
}

//p[0]  aqui inyectamos la imagen
const inyectImg = p[2]
const imgDiv = document.createElement('img')
imgDiv.src = "http://meadpoint.net/images/xmasajax.jpg"

imgDiv.style.width = '100px';
imgDiv.style.height = '100px';

document.body.insertBefore(imgDiv, inyectImg);
// 1° elemento creado | 2° donde inyectarlo

/* const img = document.createElement('img')
img.src = "http://meadpoint.net/images/xmasajax.jpg" */
