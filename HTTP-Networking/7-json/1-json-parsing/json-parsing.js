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