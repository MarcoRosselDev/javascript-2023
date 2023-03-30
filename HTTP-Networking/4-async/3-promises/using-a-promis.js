/* Using a Promise

Now that we've created a promise, how do we use it?

The Promise object has .then and .catch that make it easy to work with. 
Think of .then as the expected follow-up to my promise, 
and .catch as the "something went wrong" follow-up.

If a promise resolves, its .then function will execute. 
If the promise rejects, its .catch method will execute.

Here's an example of using .then and .catch with the promise we made above:
-------------------------------------------------------
spa

Ahora que hemos creado una promesa, como la usamos?

El objetivo de una promesa tiene .then y .catch que facilitan el trabajo.
Piense en .then como el seguimiento esperado de mi promesa,
y .catch como el seguimiento de "algo salio mal".

Si se resuelve una promesa, se ejecutara su funcion .then.
si se rechaza, se ejecutara su metodo .catch.

Aqui hay un ejemplo del uso de .then y .catch con la 
promsea que hicimos anteriormente:

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

promise.then((message) => {
    console.log(`The promise finally ${message}`)
}).catch((message) => {
    console.log(`The promise finally ${message}`)
})

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!