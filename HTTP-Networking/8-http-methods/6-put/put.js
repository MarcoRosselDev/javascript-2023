/* HTTP PUT
eng

The HTTP PUT method creates a new resource or replaces a representation of the 
target resource with the contents of the request's body. 
In short, it updates a resource's properties.

--------------------------------------------------------------------------
spa

El metodo HTTP PUT crea un nuevo recurso o remplaza una representacion de el 
recurso seleccionado con el contenido de el cuerpo del requerimiento.
En resumen, actualiza las propiedades de un recurso.
*/

await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})