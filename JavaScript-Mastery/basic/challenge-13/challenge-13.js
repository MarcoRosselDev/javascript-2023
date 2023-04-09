/*          Challenge 13
eng

For this challenge handle the situation that
happens if the user clicks cancel on the
prompt, or does not enter text in the prompt.
If the user does one of those two actions,
have the hello() function log to the console
"You didn't give me your name". Otherwise,
have the console log the greeting.
hint: What do you get if, in challenge 12, you
click cancel or put no text in the prompt?

-----------------------------------------------
spa

Para este reto manejar la situación que
ocurre si el usuario hace clic en cancelar en el
aviso, o no ingresa texto en el aviso.
Si el usuario realiza una de esas dos acciones,
hacer que la función hello() se registre en la consola
"No me diste tu nombre". De lo contrario,
haga que la consola registre el saludo.
pista: ¿Qué obtienes si, en el desafío 12,
haga clic en cancelar o no ponga texto en el aviso?
*/

const parrafo = document.getElementById('result')

const namePrompt = prompt('Escribe tu nombre por favor ', '');

function greet(name) {
    parrafo.innerText = `Buenos dias ${name}, Bienvenido !`
}

if (namePrompt === '' || "null") {
    console.log("no ingresaste un nombre");asdfa
} else {
    greet(namePrompt)
}

// break