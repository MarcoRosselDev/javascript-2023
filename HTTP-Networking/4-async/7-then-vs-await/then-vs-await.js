/* .then() vs await
eng

In the early days of web browsers, 
promises and the await keyword didn't exist, 
so the only way to do something asynchronously was to use callbacks.

A "callback function" is a function that you hand to another function. 
That function then calls your callback later on. 
The setTimeout function we've used in the past is a good example.

While even the .then() syntax is generally easier to use 
than callbacks without the Promise API, 
the await syntax makes them even easier to use. 
You should use async and await over .then and New Promise() as a general rule.

To demonstrate, which of these is easier to understand?
-------------------------------------------------------------
spa

En lso primeros dias de los navegadores web,
las promesas y la palabra clave await no existian,
por lo que la unica forma de hacer algo de forma asincronica era usar 
devoluciones de llamada.

Una "funcion de devolucion de llamada" es una funcion que entrega a otra funcion.
Esa funcion luego llama a su devolucion de llamada mas adelante.
La funcion setTimeout que hemos usado en el pasado es un buen ejemplo.

Si bien incluso la sintaxis .then() es generalmente mas facil de usar que las devoluciones de llamada
sin la API de Promise, la sintaxis await las hace aun mas faciles de usar.
Debe usar async y await sobre .then y new Promise() como regla general.

Para demostrar, cual de estos es mas facil de entender ?
*/

// ejemplo de collback

function callbackFunction(){
    console.log("calling back now!")
}
const milliseconds = 1000
setTimeout(callbackFunction, milliseconds)

//----------------------------------------------
fetchUser.then(function(user){
    return fetchLocationForUser(user)
}).then(function(location){
    return fetchServerForLocation(location)
}).then(function(server){
    console.log(`The server is ${server}`)
});

//----------------------------------------------

const user = await fetchUser()
const location = await fetchLocationForUser(user)
const server = await fetchServerForLocation(location)
console.log(`The server is ${server}`)

/* 
eng

They both do the same thing, but the second example is so much easier to understand! 
The async and await keywords weren't released until after the .then API, 
which is why there is still a lot of legacy .then() code out there.

----------------------------------------
spa

Ambos hacen lo mismo, !pero el segundo ejemplo es mucho mas facil de entender !
las palabras clave async y await no se lanzaron hasta despues de la API .then, 
por lo que todavia hay mucho codigo .then() heredado.
*/