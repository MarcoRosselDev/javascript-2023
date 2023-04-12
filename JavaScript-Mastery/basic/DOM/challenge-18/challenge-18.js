/*          Challenge 18
spa

Para este desafío, obtenga todos los párrafos en
la página, asígnelos a una variable, luego use
esa variable en un bucle para establecer el estilo.color
propiedad a verde.
Intenta hacer esto sin mirar la respuesta.
en la siguiente diapositiva!

---------------------------------------------------
eng

For this challenge, get all the paragraphs on
the page, assign them to a variable, then use
that variable in a loop to set the style.color
property to green.
Try to do this without looking at the answer
on the next slide!
*/

(function () {
    const p = document.querySelectorAll('p')
    console.log(p);// [p, p, p, p]
    // esto retorna una lista por lo que tenemos que iterar por ella,
    // entonces en cada una podemos aplicar .style.color = "green"

    p.forEach(e => e.style.color = 'green')
})()