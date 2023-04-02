/* Assinment

We need to write a reusable function that retrieves 
all of the Fantasy Quest users from our server.

Complete the getUsers() function. It should:

    Call fetch using the URL parameter. The fetch call should:
        Use the 'GET' Method
        Use the 'cors' mode
        Add an X-API-Key header with apiKey as the value
        Return the resulting JSON data from the response

We've done this all before, but now you're writing it all from scratch!

--------------------------------------------------------------------
spa

Nesecitamos escribir una funcion reusable que retorne 
todos los usuarios de Fantasy Quest del server.

Completa la funcion getUsers(). Deberia:

    usar fetch usando el parametro URL. La fetch usada deberia:
        Usar el metodo "GET"
        Usar el metodo "cors"
        Agregar un X-API-Key al encabezado con apiKey como valor
        Retornar el resultado como dato JSON desde la respuesta.

Hemos hecho todo esto antes, pero ahora lo escribes todo desde 0.

*/

async function getUsers(url, apiKey) {
    const ftch = await fetch(url, {
        method:"GET",
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
        }
    })
    return ftch.json()
}

/* log successful

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

*/


// Don't touch below this line

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
const users = await getUsers(url, generatedKey)
logUsers(users)

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