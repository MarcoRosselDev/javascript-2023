/* JSON Review
eng

JSON is a stringified representation of a JavaScript object, 
which makes it perfect for saving to a file or sending in an HTTP request. 
Remember, an actual JavaScript object is something that exists only within your program's variables. 
If we want to send an object outside our program, for example, across the internet in an HTTP request, 
we need to convert it to JSON first.
---------------------------------------------------------------------------
spa

JSON es una representacion en cadena de un objeto de JavaScrpt,
lo que lo hace perfecto para guardar en un archivo o enviar una solicitud HTTP.
Recuerda, un objeto JavaScript real es algo que existe solo dentro de las variables de u programa.
Si queremos enviar un objeto fuera de nuestro programa, por ejemplo, a traves de internet en una solicitud HTTP,
primero debemos convertirlo a JSON.
*/

/* It's not just used in JavaScript
eng

Just because JSON is called JavaScript Object Notation doesn't mean it's only used by JavaScript! 
JSON is a common standard that is recognized and supported by every major programming language. 
For example, even though Boot.dev's backend is written in Go, 
we still use JSON as the communication format between the front-end and backend.

---------------------------------------------------------------------------
spa

El hecho de que JSON se llame notacion de objeto de javaScript no significa que solo lo use javaScript !
JSON es un estandar comun reconocido y compatible con todos los principales lenguajes de programacion.
Por ejemplo, aunque el backend de Boot.dev esta escrito en Go, 
todavia usamos JSON como formato de comunicacion estre el front-end y el backend.
*/

/* Common use-cases
eng

    In HTTP request and response bodies
    As formats for text files. .json files are often used as configuration files.
    In NoSQL databases like MongoDB, ElasticSearch and Firestore
-----------------------------------------
spa

    En cuerpo de solicitud y respuesta HTTP
    Como formatos para archivos de texto. Los archivos .json a menudo se usan como archivos de configuracion.
    En bases de datos NoSQL como MongoDB, ElasticSearch y Firestore
*/