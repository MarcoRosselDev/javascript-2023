/* Assignment
eng

Fix the getResources function. 
This is a flexible function that, given a path, makes a GET request to the fantasy quest server and returns the response body. 
Update the fullURL string so that it's the base URL, in our case https://api.boot.dev, concatenated with the given path.
______________________________________________________________________________
spa

Arregla la funcion getResources.
Esta es una funcion flexible que, dada una ruta, realiza una solicitud GET al servidor de Fantasy Quest y devuelve el cuerpo de la respuesta.
Actualice la cadena fullURL para que la URL base, en nuestro caso https://api.boot.dev, cancatenada con la ruta proporcionada.
*/

async function getResources(path) {
    const fullURL = `https://api.boot.dev${path}`

    const response = await fetch(fullURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': generateKey(),
            'Content-Type': 'application/json'
        }
    })
    const resources = await response.json()
    return resources
}

// don't touch below this line

const locations = await getResources('/v1/courses_rest_api/learn-http/locations')
console.log('Locations:')
logResources(locations)
console.log(' --- ')

const items = await getResources('/v1/courses_rest_api/learn-http/items')
console.log('Items:')
logResources(items)
console.log(' --- ')

const users = await getResources('/v1/courses_rest_api/learn-http/users')
console.log('Users:')
logResources(users)

function logResources(resources) {
    for (const resource of resources) {
        console.log(` - ${JSON.stringify(resource)}`)
    }
}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}