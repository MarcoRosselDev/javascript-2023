/* Why are Promises useful ?
eng

Promises are the cleanest (but not the only) 
way to handle the common scenario where we need to make requests to a server, 
which is typically done via an HTTP request.
In fact, the fetch() function we were using earlier in the course returns a promise!
--------------------------------------------------
spa

Las Promesas son la forma mas limpia (pero no la unica)
de  manejar el escenario comun en el que necesitamos realizar solicitudes a un servidor,
lo que generalmente se realiza a traves de una solicitud HTTP.
De hecho, la funcion fetch() que usamos anteriormente en el curso devuelve una promesa.
*/

/* I/O, or "input/output"
eng

Almost every time you use a promise in JavaScript 
it will be to handle some form of I/O. 
I/O, or input/output, refers to when our code needs to 
interact with systems outside of the (relatively) 
simple world of local variables and functions.

Common examples of I/O include:
    HTTP requests
    Reading files from the hard drive
    Interacting with a Bluetooth device

Promises help us perform I/O without forcing our 
entire program to freeze up while we wait for a response.
--------------------------------------------------
spa

Casi cada vez que use una promesa en JavaScript,
sera para manejar alguna forma de E/S. 
E/S, o entrada/salida refiere a cuando nuestro codigo necesita 
interactuar con sistemas fuera del mundo (relativamente) 
simple de variables y funciones locales.

Los ejemplos comundes de E/S incluyen:
    Solicitudes HTTP
    Lectura de archivos de disco duro
    Interactuar con un dispositivo Bluetooth

Las promesas nos ayudan a realizar E/S sin obligar
a que todo nuestro programa se congele mientras esperamos una respuesta.
*/