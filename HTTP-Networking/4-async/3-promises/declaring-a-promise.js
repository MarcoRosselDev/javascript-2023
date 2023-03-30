/* Declaring a Promise
eng

Here is an example of a promise that will resolve and return 
the string "resolved!" or reject and return the string 
"rejected!" after 1 second.
---------------------------------------------
spa

Aqui hay un ejemplo de una promesa que resolvera y devolvera la 
cadena "resuelto!" o rechazar y devolver la cadena 
"rechazado!" despues de 1 segundo.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandomBool()) {
            resolve("resolved!")
        } else {
            reject("rejected!")
        }
    }, 1000)
})

function getRandomBool(){
    return Math.random() < .5
}