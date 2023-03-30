/* Promises and the "await" keyword
eng

We have used the await keyword a few times in this course, 
it's time we finally understand what's going on under the hood.

The await keyword is used to wait for a Promise to resolve. 
Once it has been resolved, 
the await expression returns the value of the resolved promise.
-----------------------------------------------------------------
spa

Hemos usado la palabra clave await varias veces en este curso,
es hora de que finalmente estendamos lo que sucede debajo del capo.

La palabra clave await se usa para esperar a que se resuelva una Promesa.
Una vez resuelta, 
la expresion await devuelve el valor de la promesa resuelta.
*/

// Example with .then callback

promise.then((message) => {
    console.log(`Resolved with ${message}`)
})

// Example of awaiting a promise

const message = await promise
console.log(`Resolved with ${message}`)