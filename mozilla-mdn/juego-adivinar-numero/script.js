console.log('se cargo exitosamente !');

/* 
<div class="container">
    <input type="text" class="inputForm">
    <button class="btn">Enviar respuesta</button>
    <p class="intentosAnteriores"></p>
    <p class="mensajeIntentos"></p>
</div>
*/

const inputForm = document.querySelector('.inputForm')
const btn = document.querySelector('.btn')
const paraf = document.querySelector('.intentosAnteriores')
const mensajeIntentos = document.querySelector('.mensajeIntentos')

let numeros = []
let intentos = 1
let randomNumber = Math.floor(Math.random() * 100) + 1

console.log(randomNumber);

btn.addEventListener('click', function () {

    console.log(typeof inputForm.value);

    numeros.push(inputForm.value)


    if (inputForm.value == randomNumber) {
        paraf.textContent = `Ganaste !! el numero es ${randomNumber}`
        mensajeIntentos.textContent = ''
        // agregar boton para jugar denuevo.
    } else {        
        paraf.textContent = numeros
        mensajeIntentos.textContent = `segue intentando, te quedan n intentos`
        // imprimir en panatalla los numero anteriores
    }
    inputForm.value = ''
})


