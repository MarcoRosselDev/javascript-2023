/* Paths in REST
eng

In a RESTful API, the last section of the path of a URL should specify which resource is being accessed. 
Then, as we talked about in the "methods" chapter, depending on whether the request is a GET, 
POST, PUT or DELETE, the resource is read, created, updated, or deleted.

The Fantasy Quest API we have been working with is a RESTful API! Take a look at the URLs we've been using:
    https://api.boot.dev/v1/courses_rest_api/learn-http/locations
    https://api.boot.dev/v1/courses_rest_api/learn-http/users
    https://api.boot.dev/v1/courses_rest_api/learn-http/items

The first part of the path specifies the version. In this case, version 1, or v1.

The second part of the path tells our server that this is a REST API for the "learn http" course.

Finally, the last part denotes which resource is being accessed, be it a location, user, or item.
--------------------------------------------------------------
spa

En una API RESTful, la ultima seccion de la ruta de una URL debe especificar a que recurso se accede.
Luego, como hablamos en el capitulo "metodos", dependiendo de si la solicitud es GET, 
POST, PUT o DELETE, el recurso se lee, crea, actualiza o elimina.

La API Fantasy Quest con la que hemos estado trabajando es una API RESTful ! Echa un vistazo a las URL que hemos estado usando:
    https://api.boot.dev/v1/courses_rest_api/learn-http/locations
    https://api.boot.dev/v1/courses_rest_api/learn-http/users
    https://api.boot.dev/v1/courses_rest_api/learn-http/items

La primera parte de la ruta especifica la varsion. En este caso, version 1, o v1.

La segunda parte de la ruta nos dice nuestro servidor que se trata de una API REST para  el curso "aprender http".

Finalmente, la utlima parte indica a que recurso se accede, ya sea una ubicacion, un usuario o un elemento.
*/