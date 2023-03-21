console.log('se cargo exitosamente !');

/* 
<div class="container">
    <input type="text" class="inputForm">
    <button class="btn">Enviar respuesta</button>
    <p class="pista"></p>
    <p class="intentosAnteriores"></p>
    <p class="mensajeIntentos"></p>
</div>
*/

const inputForm = document.querySelector('.inputForm');
const btn = document.querySelector('.btn');
const paraf = document.querySelector('.intentosAnteriores');
const mensajeIntentos = document.querySelector('.mensajeIntentos');
const pista = document.querySelector('.pista');

let numeros = [];
let intentos = 1;
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
let elementos = ''

for (let i = 0; i < numeros.length; i++) {
    const elementos = ` ${numeros[i]}`
}

btn.addEventListener('click', function () {
    numeros.push(inputForm.value)

    if (inputForm.value == randomNumber) {
        paraf.textContent = `Ganaste !! el numero es ${randomNumber}`
        mensajeIntentos.textContent = ''
        pista.textContent = ''
        // agregar boton para jugar denuevo.
    } else {        
        // pista
        if (inputForm.value > randomNumber) {
            pista.textContent = 'El numero es demaciado grand.'
        } else {
            pista.textContent = 'El numero es demaciado pequegnio.'
        }
        // 
        paraf.textContent = `intentos anteriores = ${elementos}`
        mensajeIntentos.textContent = `segue intentando, te quedan n intentos`
    }
    inputForm.value = ''
});


