/*  -un "client" es una computadora haciendo una HTTP request
    -un "server" es una computadora respondiendo a una HTTP request
    -un computador puede ser un client, un server, los dos, o ninguno.
        "client" and "server" son solo palabras que usamos para describir que es lo que
        hace un computador en una comunicacion de systemas.
    -"clients" envian requests y reciven "responses"
    -"server" reciven requests y envian "responses"

*/

// codigo de ejemplo
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'

const items = await getData(itemURL)

console.log(items)

async function getData(url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
        'X-API-Key': 'Testing',
        'Content-Type': 'application/json'
        }
    })
    return response.json()
}

/* quest

que hace el codigo de ejemplo, un cliente o un server ?

    a   client
    b   serrver

    respuesta = client por que el metodo dice GET, por lo que esta solicitando

*/