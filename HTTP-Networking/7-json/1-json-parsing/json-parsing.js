/* JSON Parsing
eng

JavaScript Object Notation, or JSON, 
is a standard for representing structured data based on JavaScript's object syntax.

JSON is commonly used to transmit data in web apps using HTTP. 
The HTTP fetch() requests we have been using in this course have been returning Fantasy Quest locations, 
users, and items as JSON data!

-------------------------------------------------------------------
spa

La notacion de objetos de JavaScript, o JSON,
es un estandar para representar datos estructurados basados en la sintaxis de objetos de javaScript.

JSON se usa comunmente para transmitir datos en aplicaciones web usando HTTP.
!Las solicitudes HTTP fetch() que hemos estado usando en este curso han devuelto ubicaciones,
usuarios y elementos de Fantasy Quest como datos JSON.

*/

/* JSON Syntax
eng

Because we already understand what JavaScript objects look like, 
understanding JSON is easy! JSON is just a stringified JavaScript object. 
The following is valid JSON data:
----------------------------------------------------------------
spa

Debido a que ya entendemos como se ven los objetos de JavaScript,
! comprender JSON es facil ! JSON es solo un objeto de JavaScript en forma de cadena.
Los siguientes son datos JSON validos:
*/

{
    "movies": [
        {
            "id": 1,
            "genre": "Action",
            "title": "Iron Man",
            "director": "Jon Favreau"
        },
        {
            "id": 2,
            "genre": "Action",
            "title": "The Avengers",
            "director": "Joss Whedon"
        }
    ]
}

/* Parsing HTTP Responses as JSON
eng

JavaScript provides us with some easy tools to help us work with JSON. 
After making an HTTP request with the fetch() API, 
we get a Response object. 
That response object offers us some methods that help us interact with the response. 
One such method is the .json() method. 
The .json() method takes the response stream returned by a fetch request and 
returns a promise that resolves into a JavaScript object parsed 
from the JSON body of the HTTP response!

const resp = await fetch(...)
const javascriptObjectResponse = await resp.json()
-----------------------------------------------------------------
spa

JavaScript nos proporciona algunas herramientas sencillas para ayudarnos a trabajar con JSON.
Despues de realizar una solicitud HTTP con la API fetch(),
obtenemos un objeto de respuesta.
Ese objeto de respuesta nos ofrece algunos metodos que nos ayudan a interactuar con la respuesta.
Uno de esos metodos es el metodo .json().
El metodo .json() toma el flujo de respuesta devuelto 
por una solicitud de busqueda y devuelve una promesa que 
se resualve en un objeto javaScript analizado desde el cuerpo JSON  de la respuesta HTTP.

const resp = await fetch(...)
const javascriptObjectResponse = await resp.json()

*/

/* Note

It's important to note that the result of this method is NOT JSON. 
It is the result of taking JSON data from the HTTP response body and parsing that input into a JavaScript Object
-------------------------------------------------------------
spa

Es importatne tener en cuenta que el resultado de este metodo NO es JSON.
Es el resultado de tomar datos JSON del cuerpo de respuesta HTTP y analizar esa entrada en un objeto JavaScript.
*/