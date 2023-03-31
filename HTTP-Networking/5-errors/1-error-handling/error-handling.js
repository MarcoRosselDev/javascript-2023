/* Error handling in JavaScript
eng

When something goes wrong while a program is running, 
JavaScript uses the try/catch paradigm for handling those errors. 
Try/catch is fairly common, Python uses a similar mechanism.
------------------------------------------------------
spa

Cuando algo va mal cuando el programa esta corriendo,
JavaScript usa el paradigma de puerba/captura para manejar esos errores.
Try/catch es bastante comun, Python usa un mecanismo similar. 

*/

/* First, an error is thrown    |   Primero, se arroja un error
eng

For example, let's say we try to access a property on an undefined variable. 
JavaScript will automatically "throw" an error.

const speed = car.speed

The code crashes with the following error:
"ReferenceError: car is not defined"
------------------------------------------------------
spa

Por ejemplo, supongamos que intentamos acceder a una propiedad en una varioable indefinida.
JavaScript "arrojara" automaticamente un error.

const speed = car.speed

The code crashes with the following error:
"ReferenceError: car is not defined"
*/

const a = 10

try {
    const speed = car.speed
} catch (error) {
    console.log(`An error was thrown: ${error}`);
}

console.log(a);
// se ejecuta lo que sigue de todos modos

/* 
eng

By wrapping that code in a try/catch block, 
we can handle the case where car is not yet defined.
------------------------------------------------------
spa

Al envolver ese codigo en un bloque try/catch,
podemos manejar el caso en el que el automovil aun no esta definido.
*/ 
