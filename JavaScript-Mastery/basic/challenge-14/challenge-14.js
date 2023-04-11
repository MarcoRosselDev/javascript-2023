/*          Challenge 14
eng

For this challenge, update the hello() function
so that it returns a value rather than outputs
directly to the console.
I used a variable: var greeting; and returned
that variable at the end of the function.
Then outside the function write a call to the
console that logs the greeting returned by the
function.
-----------------------------------------
spa

Para este desafío, actualice la función hello()
para que devuelva un valor en lugar de salidas
directamente a la consola.
Usé una variable: var saludo; y volvió
esa variable al final de la función.
Luego, fuera de la función, escriba una llamada a la
consola que registra el saludo devuelto por el
función.
*/
const titleDOM = document.getElementById('title');

const namePrompt = prompt('cual es tu nombre ?', 'Usuario');

function greet(name) {
    var saludo = `Buenos dias ${name} !`;
    return saludo 
}
const greetReturn = greet(namePrompt)

if (namePrompt == '' || namePrompt == null) {
    titleDOM.innerText = "no ingresaste ningun nombre !"
} else {
    titleDOM.innerText = greetReturn
}

