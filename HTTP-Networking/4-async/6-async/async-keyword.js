/* The async keyword
eng

While the await keyword can be used in place of .then() 
to resolve a promise, the async keyword can be used in place of New Promise() 
to create a new promise.

When a function is prefixed with the async keyword, 
it will automatically return a Promise. 
That promise resolves with the value that your code returns from the function. 
You can think of async as "wrapping" your function within a promise.

These are equivalent:
-------------------------------------------------------
spa

Mientras que la palabra clave await se puede usar en lugar de .then()
para resolver una promesa, la palabra clave async se puede usar en lugar de New Promise()
para crear una nueva promesa.

Cuando una funcion tiene el prefijo de la palabra clave asincrona,
automaticamente devolvera una Promesa.
Esa promesa se resuelve con el valor que su codigo devuelve de la funcion.
Puede pensar en async como "envolver" su funcion dentro de una promesa.

Estos son equivalentes:
*/

// new Promise()------------------------------------------------------
function getPromiseForUserData(){
    return new Promise((resolve) => {
        fetchDataFromServerAsync().then(function(user){
            resolve(user)
        })
    })
}

const promisePromise = getPromiseForUserData()

// Async---------------------------------------------------------------

async function getPromiseForUserData(){
    const user = await fetchDataFromServer()
    return user
}

const promiseAsync = getPromiseForUserData()