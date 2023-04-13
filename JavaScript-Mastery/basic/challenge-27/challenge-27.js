/*      Challenge  27
Add a form. When the user submits
a number, change the size of the
font for the h1 to be equal to the
number they submitted in pixels.
If no number is entered, or
something other than a number is
entered, alert that the user must
enter a number.
To make this work you will have to
prevent the default behavior for
the form submission.
*/

const iptSubmit = document.querySelectorAll('input')[1]
const iptText = document.querySelectorAll('input')[0]
const h1 = document.querySelector('h1')

iptSubmit.addEventListener('click', function (e) {
    e.preventDefault()  // para que no se resetee la pagina al enviar el submit
    parseInt(iptText.value) // cambiamos el tipo de dato a number

    var valoresAceptados = /^[0-9]+$/;  // expreciones regulares

    if (iptText.value.match(valoresAceptados)) {
        h1.style.fontSize = `${iptText.value}px`
    }else{
        alert('no ingresaste un numero, por favor intenta denuevo !')
    }

})
