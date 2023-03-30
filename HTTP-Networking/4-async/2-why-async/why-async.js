/* Why do we want async code?
eng

We try to keep most of our code synchronous because it's easier to understand, 
and therefore often has fewer bugs. 
However, sometimes we need our code to be asynchronous. 
For example, whenever you update your user settings on a website, 
your browser will need to communicate those new settings to the server. 
The time it takes your HTTP request to physically travel across all 
the wiring of the internet is usually around 100 milliseconds. 
It would be a very poor experience if your webpage were to freeze while 
waiting for the network request to finish. 
You wouldn't even be able to move the mouse while waiting!
-------------------------------------------------------
spa

tratamos de mantener la mayor parte de nuestro 
codigo sincronico porque es mas facil de entender,
y por lo tanto, a menudo tiene menos errores.
Sin embargo, algunas veces necesitamos que nuestro codigo sea asincrono.
Por ejemplo, siempre que actualice su configuracion de usuario en un sitio web,
su navegador debera comunicar esa nueva configuracion al servidor.
El tiempo que tarda su colicitud HTTP en v iajar 
fisicamente a traves de todo el cableado de internet
suele ser de alrededor de 100 milisegundos.
Seria una experiencia muy mala si su pagina web se congelara mientras 
espera que finalice la solicitud de la red.
!Ni siquiera podrias mover el mouse mientras esperas!

*/