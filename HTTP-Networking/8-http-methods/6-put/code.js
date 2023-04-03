/* Assingnment
eng

You will now use the knowledge you have gained thus far to update a Fantasy Quest character 
using a PUT request and retrieve that character using a GET request.

Complete the updateUser() and getUserById() functions. 
They should update and retrieve individual user resources respectively. 
They should also both return a promise that resolves to the JSON response body of their respective fetch() requests.

We've included the fullURL creation logic for you in both functions, 
we'll be talking more about URL building in the next chapter.
----------------------------------------------------------------------------
spa

Ahora utilizara el conocimiento que ha adquirido hasta ahora para actualizar un personaje de Fanasy Quest
usando un PUT request y recuperar ese personaje mediante una solicitud GET.

Completa las funciones updateUser() y getUserById().
Deben actualizar y recuperar recursos de usuarios individuales respectivamente.
Ambos tambien deben retornar una promesa que se resuelva en el cuerpo de respuesta JSON de sus respectivas solicitudes fetch().

Hemos incluido la logica de creacion de URL completa para usted en ambas funciones.
hablaremos mas sobre la creacion de URL en el proximo capitulo.
*/

async function updateUser(baseURL, id, data, apiKey) {
    const fullURL = `${baseURL}/${id}`
    const a = await fetch(fullURL, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return a.json()
    // ?
}

async function getUserById(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`
    
    const a = await fetch(fullURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return a.json()
    // ?
}
/* log

User uuid: 2f8282cb-e2f9-496f-b144-c0aa4ced56db, Character Name: Velithria, Class: Wizard, Level: 6, PVP Status: false, User name: Tim
Updating user with id: 2f8282cb-e2f9-496f-b144-c0aa4ced56db
User uuid: 2f8282cb-e2f9-496f-b144-c0aa4ced56db, Character Name: Dellbiar, Class: Warrior, Level: 7, PVP Status: true, User name: Allan

*/

// don't touch below this line

const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
const generatedKey = generateKey()
const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logUser(user) {
    console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
}

const userData = await getUserById(baseURL, userId, generatedKey)
logUser(userData)

console.log(`Updating user with id: ${userId}`)
userData.characterName = 'Dellbiar'
userData.level = 7
userData.class = 'Warrior'
userData.pvpEnabled = true
userData.user.name = 'Allan'
await updateUser(baseURL, userId, userData, generatedKey)

const newUser = await getUserById(baseURL, userId, generatedKey)
logUser(newUser)