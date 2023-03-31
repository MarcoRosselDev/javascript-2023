/* Why are headers useful?
eng

Headers are useful for several reasons from design to security, 
but most often headers are used as metadata or data about the request. 
So, for example, let's say we wanted to ask for a player's level from the Fantasy Quest server. 
We need to send that player's ID to the server so it knows which player to send back the information for. 
That ID is my request, it's not information about my request.

A good example of a use case for headers is authentication. 
Often times a user's credentials are included in request headers. 
Credentials don't have much to do with the request itself, 
but simply authorize the requester to be allowed to make the request in question.

----------------------------------------------------------------
spa

Los encabezados son utiles por varios motivos, desde el dise;o hasta la seguridad,
pero la mayoria de las veces los encabezados se usan como metadatos o datos sobre la solicitud.
Entonces, poe ejemplo, digamos que queremos preguntar el nivel de un jugador del servidor Fantasy Quest.
Necesitamos enviar la identificacion de ese jugador al servidor para que sepa a que jugador enviar la informacion.
Esa identificacion es mi solicitud, no es informacion sobre mi solicitud.

Un buen ejemplo de un caso de uso para encabezados es la autenticacion.
A menudo, las credenciales de un usuario se incluyen en los encabezados de las solicitudes.
Las credenciales no tienen mucho que ver con la solicitud en si, 
sino que simplemente autorizan al solicitante a que se le perimta realizar la solicitud en cuestion.
*/