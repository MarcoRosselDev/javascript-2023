/* Status Codes Practice
eng

Let's check some status codes!
The .status property on a Response object will give you the code.
----------------------------------------------------
spa 

Vamos a checkar algunos status codes!
La propiedad .status en un objeto Response le llevara el codigo. 
*/

// Assignment

// Update the getUserCode function to return the status code of the response.
// NOTE>    Notice that you get a 404 response when requesting a user for an ID that doesn't exist !

async function getUserCode(url, apiKey) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
    // ?
    return response.status
}

/* log successful

id: invalid-id, status code: 404
id: 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8, status code: 200

*/

// Don't touch below this line

const generatedKey = generateKey()

const invalidId = 'invalid-id'
const codeFirst = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`, generatedKey)
console.log(`id: ${invalidId}, status code: ${codeFirst}`)

const validId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
const codeSecond = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`, generatedKey)
console.log(`id: ${validId}, status code: ${codeSecond}`)

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}