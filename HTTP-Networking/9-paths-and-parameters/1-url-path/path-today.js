/* How paths are used today
eng

Most modern web servers don't use that simple mapping of URL path -> file path.
Technically, a URL path is just a string that the web server can do what it wants with, 
and modern websites take advantage of that flexibility. 
Some common examples of what paths are used for include:
    The hierarchy of pages on a website, whether or not that reflects a server's file structure
    Parameters being passed into an HTTP request, like an ID of a resource
    The version of the API
    The type of resource being requested
-----------------------------------------------------------------------------
spa

La mayoria de los servers mas modernos no usan ese mapeo simple de URL -> file path.
Tecnicamente, una ruta URL es solo una cadena con la que el servidor web puede hacer lo que quiera,
y los sitios web modernos aprovechan esa flexibilidad.
Algunos ejemplos comunes de para que se usan las rutas incluyen:
    La jerarquia de paginas en un sitio web, ya sea que refleje o no la estructura de archivos.
    Parametros que se pasan a una solicitud HTTP, como un ID de un recurso
    La version de la API
    El tipo de recursos que se solicita.
*/