/* Assignment 
eng

We need to save newly created characters on our Fantasy Quest server. 
We will use the getUsers function we created in the last exercise to make sure our creation logic is working.

Let's create the createUser() function. It should:
1   Take URL and the data body as parameters.
2   Call fetch. fetch() should
        Use the POST Method
        Use the cors mode
        Set the X-API-Key header, with apiKey as its value
        Set the Content-Type header with application/json as its value
        Include the body field and pass the data as the key. Don't forget to stringify the data as JSON!
3   Return the response's JSON body
---------------------------------------------------------------------
spa

Necesitamos guardar los personajes recien creados en nuestro servidor Fantasy Quest.
Usaremos la funcion getUsers que creamos  en el ultimo ejercicio para asegurarnos de que nuestra logica de creacion funcione.

Vamos a crear la funcion createUser(). deberia:
1   Tomar la URL y el cuerpo de datos como parametros.
2   Llamar a buscar. fetch() que deberia :
        usar el metodo POST
        usar el mode cors
        Establezca el encabezado X-API-Key, con apiKey como su valor
        Establezca el encabezado Content-Type con application/json como valor
        Incluya el campo de cuerpo pase los datos como la clave. No olvide clasificar los datos como JSON !
3   Devolver el cuerpo JSON de la respuesta.
*/

async function createUser(apiKey, url, data) {
    const a = await fetch(url, {
        method:"POST",
        mode: "cors",
        headers:{
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await a.json()
}

/* log successful

Retrieving user data...
Character name: Grundorf, Class: Warrior, Level: 14, User: Lane
Character name: Varus, Class: Fighter, Level: 1, User: Allan
Character name: Velithria, Class: Wizard, Level: 6, User: Tim
Character name: Myra, Class: Warlock, Level: 8, User: Sam
Character name: Vandil, Class: Hunter, Level: 9, User: Adam
Character name: Horkin, Class: Ranger, Level: 6, User: Ben
Character name: Jaina, Class: Rogue, Level: 8, User: Erika
Character name: Goosk, Class: Paladin, Level: 6, User: Danielle
Character name: Aldwin, Class: Mage, Level: 8, User: Tiffany
Character name: Artemis, Class: Cleric, Level: 1, User: John
---
Creating new character...
Creation response body: {"characterName":"Grendel","class":"Warrior","id":"83472eda-6eb4-4590-aaee-b7f09e757ba9","level":1,"pvpEnabled":false,"user":{"name":"Allan","location":"USA","age":27}}
---
Retrieving user data...
Character name: Grundorf, Class: Warrior, Level: 14, User: Lane
Character name: Varus, Class: Fighter, Level: 1, User: Allan
Character name: Velithria, Class: Wizard, Level: 6, User: Tim
Character name: Myra, Class: Warlock, Level: 8, User: Sam
Character name: Vandil, Class: Hunter, Level: 9, User: Adam
Character name: Horkin, Class: Ranger, Level: 6, User: Ben
Character name: Jaina, Class: Rogue, Level: 8, User: Erika
Character name: Goosk, Class: Paladin, Level: 6, User: Danielle
Character name: Aldwin, Class: Mage, Level: 8, User: Tiffany
Character name: Artemis, Class: Cleric, Level: 1, User: John
Character name: Grendel, Class: Warrior, Level: 1, User: Allan
---
*/

// Test Suite Don't Touch Below This Line

const userToCreate = {
    characterName: 'Grendel',
    class: 'Warrior',
    level: 1,
    pvpEnabled: false,
    user: {
        name: 'Allan',
        location: 'USA',
        age: 27
    }
}

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
    return response.json()
}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logUsers(users) {
    for (const user of users) {
        console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
    }
}

console.log('Retrieving user data...')
const userDataFirst = await getUsers(url, generatedKey)
logUsers(userDataFirst)
console.log('---')

console.log('Creating new character...')
const creationResponse = await createUser(generatedKey, url, userToCreate)
console.log(`Creation response body: ${JSON.stringify(creationResponse)}`)
console.log('---')


console.log('Retrieving user data...')
const userDataSecond = await getUsers(url, generatedKey)
logUsers(userDataSecond)
console.log('---')