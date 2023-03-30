/*   ejercicio 
eng

In the Fantasy Quest game menu, 
we show user's the email addresses of their friends. 
We need that email to be a clickable hyperlink. 
When they click the hyperlink their default email client should open 
with a new message ready to send to the address they clicked on.

Complete the getMailtoLinkForEmail function. 
It should return a "mailto" hyperlink for the given email. 

------------------------------------------------------------------
spa

En el menú del juego Fantasy Quest,
mostramos a los usuarios las direcciones de correo electrónico de sus amigos.
Necesitamos que ese correo electrónico sea un hipervínculo en el que se pueda hacer clic.
Cuando hacen clic en el hipervínculo, su cliente de correo electrónico predeterminado debería abrirse
con un nuevo mensaje listo para enviar a la dirección en la que hicieron clic.

Complete la función getMailtoLinkForEmail.
Debería devolver un hipervínculo "mailto" para el correo electrónico dado.
*/

function getMailtoLinkForEmail(email) {
    return `malito:${email}`
}

// don't touch below this line

let email = 'slayer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
email = 'killer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)

/* log successful

The mailto link for slayer@fquest.app is: malito:slayer@fquest.app
The mailto link for killer@fquest.app is: malito:killer@fquest.app

*/