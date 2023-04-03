/* Status Codes
eng

When looking at requests we can check on the Status Code of the request to 
get some information if the request was successful or not.

100-199: Informational responses. These are very rare.
200-299: Successful responses. Hopefully, most responses are 200's!
300-399: Redirection messages. These are typically invisible because the browser or HTTP client will automatically do the redirect.
400-499: Client errors. You'll see these often, especially when trying to debug a client application
500-599: Server errors. You'll see these sometimes, usually only if there is a bug on the server.
---------------------------------------------------------------
spa

Al mirar las solicitudes, podemos verificar el Codigo de estado de la solicitud para 
obtener informacion sobre si la solicitud fue exitosa o no.

100-199: Respuestas informativas. Estos son muy raros.
200-299: Respuestas Exitosas. Con suerte, la mayoria de las respuestas son 200's!
300-399: Mensaje de Redireccion. Estas son invisibles porque el navegador o el cliente HTTP realizaran automaticamente la redireccion.
400-499: Errores del cliente. Los veras con frecuencia, especialmente cuando intente depurar una aplicacion cliente
500-599: Error del servidor. Los veras a veces, generalmente solo si hay un error en el servidor.
*/

/* Most common status codes
eng

Here are some of the most common status codes, but you can see a full list here if you're interested.
link:       https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

200 - OK. This is by far the most common code, it just means that everything worked as expected.
201 - Created. This means that a resource was created successfully. Typically in response to a POST request.
301 - Moved permanently. This means the resource was moved to a new place, 
        and the response will include where that new place is. Websites often use 301 redirects when they change their domain name, for example.
400 - Bad request. A general error indicating the client made a mistake in their request.
403 - Unauthorized. This means the client doesn't have the correct permissions. Maybe they didn't include a required authorization header, for example.
404 - Not found. You'll see this on websites quite often. It just means the resource doesn't exist.
500 - Internal server error. This means something went wrong on the server, likely a bug on their end.
-----------------------------------------------------------------
spa

Estas son algunos de los estados mas comunes, pero puede ver una lista completa aqui si esta interesado.
link:       https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

200 - OK. Este es por lejor el codigo mas comun, este solo dice que todo a funcionado como se esperaba.
201 - Created. Esto significa que un recurso se creo con exito. Normalmente en respuesta a un POST request.
301 - Moved permanently. Este dice que el recurso se movio a un lugar nuevo, 
        y la respuesta incluira donde esta ese nuevo lugar.
        por ejemplo, los sitios web lo usan cuando cambian su nombre de dominio.
400 - Bad request. Un error general que indica que el cliente se equivoco en su solicitud
403 - Unauthorized. Este dice que el cliente no tiene la autorizacion requerida.
        por ejemplo, tal vez no inluyeron un encabezzado de autorizacion requerido.
404 - Not found. significa que el recurso no existe.
500 - Internal server error. Este dice que que algo salio mal en el servidor, tal vez un bug en el end.

*/