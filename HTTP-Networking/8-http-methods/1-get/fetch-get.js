/* Making a GET request using the Fetch API
eng

In this course, we have been and will continue to use the Fetch API 
to make HTTP requests. 
The fetch() method accepts an optional init object parameter 
as its second argument that we can use to define things like:

    method: The HTTP method of the request, like GET.
    headers: The headers to send.
    mode: Used for security, we'll talk about this in future courses.
    body: The body of the request. Often encoded as JSON.

-----------------------------------------------------------------
spa

En este curso, hemos estado y continuaremos usand la API Fetch 
para realizar solicitudes HTTP.
El metodo fetch() acepta un parametro objeto init opcional como 
segundo argumento que podemos usar para definir cosas como:

    método: el método HTTP de la solicitud, como GET.
    headers: Los encabezados a enviar.
    modo: Usado por seguridad, hablaremos de esto en cursos futuros.
    cuerpo: El cuerpo de la solicitud. A menudo codificado como JSON.
*/

// Example GET request using fetch:

await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'sec-ch-ua-platform': 'macOS'
    }
})