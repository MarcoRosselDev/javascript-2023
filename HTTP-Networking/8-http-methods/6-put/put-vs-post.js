/* POST VS PUT
eng

You may be thinking PUT is similar to POST or PATCH, and frankly, you'd be right! 
The main difference is that PUT is meant to be idempotent, 
meaning multiple identical PUT requests should have the same effect on the server. 
In contrast, several identical POST requests would have additional side effects,
such as creating multiple copies of the resource.
------------------------------------------------------------------------------
spa

Tal vez piensas que PUT es similar a POST o PATCH, y francamente, tienes razon !
la diferencia principal es que PUT esta destinado a ser idempotente, 
lo que significa que multiples solicitudes PUT identicas deberian tener el mismo efecto en el servicio.
Por el contrario, varias solicitudes POST identicas tendrian efectos secundarios adicionales,
como la creacion de varias copias del recurso.
*/