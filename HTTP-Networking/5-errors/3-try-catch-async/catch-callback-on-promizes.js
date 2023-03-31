/* .catch() callback on promises
eng

The .catch() method works similarly to the .then() method, 
but it fires when a promise is rejected instead of resolved.
-----------------------------------------------------------
spa

El metodo .catch() funciona de manera similar al metodo .then(),
pero se activa cuando se rechaza una promesa en lugar de resolverla.

*/

//Example with .then and .catch callbacks

fetchUser().then(function(user){
    console.log(`user fetched: ${user}`)
}).catch(function(err){
    console.log(`an error was thrown: ${err}`)
});

//Example of awaiting a promise
try {
    const user = await fetchUser()
    console.log(`user fetched: ${user}`)
} catch (err) {
    console.log(`an error was thrown: ${err}`)
}

//  As you can see, the async/await version looks just like normal try/catch JavaScript !
//  Como puedes ver, la vercion async/await  se parece a javaScript normal de try/catch !