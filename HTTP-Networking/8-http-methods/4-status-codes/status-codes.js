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