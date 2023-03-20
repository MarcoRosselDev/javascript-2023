console.log('se cargo exitosamente !');

/* 
<div class="container">
    <input type="text" class="inputForm">
    <button class="btn">Enviar respuesta</button>
    <p class="intentosAnteriores"></p>
</div>
*/

const inputForm = document.querySelector('.inputForm')
const btn = document.querySelector('.btn')
const paraf = document.querySelector('.intentosAnteriores')

function numeroAleatorio() {
    const randomNumber = Math.round(Math.random() * 9)
    console.log(randomNumber + 1);
}

btn.addEventListener('click', numeroAleatorio)

