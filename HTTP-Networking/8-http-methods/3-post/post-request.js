/* POST Requests
eng

An HTTP POST request sends data to a server, typically to create a new resource. 
The body of the request is the payload that is being sent to the server with the request, 
its type is indicated by the Content-Type header.
-------------------------------------------------------------------
spa

Una solicitud HTTP POST envia datos a un servidor, normalmente para crear un nuevo recurso.
El cuerpo de la solicitud es la carga util que se envia al sevidor con la solicitud,
su tipo se indica mediante el encabezado Content-Type.
*/

/* Adding a body
eng

The body of the request is the payload that is being sent to the server with the request, 
its type is indicated by the Content-Type header - for us, that's going to be JSON. 
POST requests are generally not safe methods to call multiple times, because it alters the state of the server. 
You wouldn't want to accidentally create 2 accounts for the same user, for example.

-------------------------------------------------------------------
spa 

El cuerpo de la solicitud es la carga util que se envia al servidor con la solicitud,
su tipo se indica mediante el encabezado Content-Type; para nosotros, sera JSON.
Las solicitudes POST generalment no son metodos seguros para llamar varias veces, porque alteran el estado del servidor.
Por ejemplo, no querra crear accidentalmente 2 cuentas para el mismo usuario.
*/

await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})