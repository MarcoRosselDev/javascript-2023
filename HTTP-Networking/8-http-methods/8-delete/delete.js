/* HTTP Delete
eng

The delete request does exactly as you would expect:
    it deletes a specifed resource.
------------------------------------------------------
spa

La solicitud de eliminacion hace exactamente lo que cabria esperar:
    elimina un recurso especifico.
*/

// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'

await fetch(url, {
    method: 'DELETE',
    mode: 'cors'
})