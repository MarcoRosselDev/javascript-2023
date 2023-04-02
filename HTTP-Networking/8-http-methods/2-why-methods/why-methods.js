/* Why do we use HTTP methods?
eng

As we touched on in the last exercise, the primary purpose of HTTP 
methods is to indicate to the server what we want to do with the resource we're trying to interact with. 
At the end of the day, an HTTP method is just a string, like GET, POST, PUT, or DELETE, 
but by convention, backend developers almost always write their server code so that the 
methods correspond with different "CRUD" actions.

The "CRUD" actions are:

    Create
    Read
    Update
    Delete

The bulk of the logic in most web applications is "CRUD" logic. 
The web interface allows users to create, read, update and delete various resources. 
Think of a social media site - users are basically creating, reading, updating and deleting their social posts. 
They are also creating, reading, updating and deleting their user accounts.
It's CRUD all the way down!

As it happens, the 4 most common HTTP methods map nicely to the CRUD actions:

    POST = create
    GET = read
    PUT = update
    DELETE = delete
-------------------------------------------------------------
spa

Como mencionamos en el ultimo ejercicio, el proposito principal de lso metodos HTTP  
es indicale al servidor que queremos hacer con el recurso con el que intentamos interactuar.
Al final del dia, un metodo HTTP es solo una cadena, como GET, POST, PUT o DELETE,
pero por convencion, los desarrolladores de back-end casi siempre escriben su codigo de 
servidor para que los metodos se correspondan con diferentes acciones "CRUD".

Las acciones de "CRUD" son :

    Crear
    Leer
    Actualizar
    Borrar

La mayor parte de la logica en la mayoria de las aplicaciones web es la logica "CRUD".
La interfaz web permite a los usuarios crear, leer, actualizar y eliminar varios recursos.
Piense en un sitio de redes sociales: los usuarios basicamente crean, leen, actualizan y eliminan sus publicaciones sociales.
Tambien estan creando, leyendo, actualizando y eliminando sus cuentas de usuario.
Es CRUD hasta el final !

Da la cualidad de que los 4 metodos HTTP mas comunes se asignan muy bien a las acciones GRUD:

    POST = crear
    OBTENER = leer
    PONER = actualizr
    ELIMINAR = eliminar
*/