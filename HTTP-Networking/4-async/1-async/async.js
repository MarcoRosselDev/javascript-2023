/* Synchronous vs Asynchronous
eng
All of the earlier courses on Boot.dev only had synchronous code, 
which means code that runs in sequence. 
Each line of code executes in order, one after the next.

Example of synchronous code:
    console.log("I print first")
    console.log("I print second")
    console.log("I print third")

Asynchronous or async code runs in parallel. 
That means code further down runs at the same time that a previous line of code is still running. 
A good way to visualize this is with the JavaScript function setTimeout().

setTimeout accepts a function and a number of milliseconds as inputs. 
It waits until the number of milliseconds has elapsed, and then it executes the function it was given.

Example of asynchronous code:

console.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100)
console.log("I print second");
----------------------------------------------------------------
spa

Todos los cursos anteriores sobre Boot.dev solo tenian codigo sincrono.
lo que significa codigo que se ejecuta en secuencia.
Cada linea de codigo se ejecuta en orden, una tras otra.

Ejemplo de codigo sincrono :
    console.log("me imprimo primero")
    console.log("me imprimo segundo")
    console.log("me imprimo tercero")

El codigo sincrono o asincrono se ejecuta en paralelo.
Eso significa que el codigo mas abajo se ejecuta al mismo tiempo que se sigue ejecutando una lina de codigo anterior.
Una buena forma de visualizar esto es con la funcion de javaScript setTimeout()

setTimeout acepta una funcion y un numero en milisegundo como entrada.
Espera hasta que haya transcurrido la cantidad de milisegundos y luego ejecuta la funcion que se le dio.

Ejemplo de codigo asincrono:

console.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100)
console.log("I print second");

*/

console.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100)
console.log("I print second");

/* log

I print first
I print second
I print third because I'm waiting 100 milliseconds

*/