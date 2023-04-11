/*      Challenge 12
eng

This time, add a prompt requesting the user
for their name, and assign the result to a
variable.
Then pass that variable into the hello()
function so that the console greets the person
by name
-----------------------------------------------
spa

Esta vez, agregue un aviso solicitando al usuario
por su nombre, y asigne el resultado a un
variable.
Luego pasa esa variable al hello()
función para que la consola salude a la persona
por nombre
*/

const parrafo = document.getElementById('result')

const namePrompt = prompt('Escribe tu nombre por favor ');

function greet(name) {
    parrafo.innerText = `Buenos dias ${name}, Bienvenido !`
}

greet(namePrompt)