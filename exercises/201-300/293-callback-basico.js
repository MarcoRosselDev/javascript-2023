// ejercicio 293: crear una implementacion basica del patron callback.

function exito() {
    console.log('La funcion se ejecuto de forma satisfactoria.');
}

function fallo() {
    console.error('La funcion fallo.');
}

function ejecutarProceso(name ,exito, fallo) {
    if (name == 'Marco') {
        exito()
    } else {
        fallo()
    }
}

ejecutarProceso('lushito', exito, fallo) // La funcion fallo.
ejecutarProceso('Marco', exito, fallo) // La funcion se ejecuto de forma satisfactoria.
