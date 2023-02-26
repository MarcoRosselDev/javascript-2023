// ejercicio 290: uso de la sentencia try...catch para gestionar errores.

// const numeros = new Array(-1); // este codigo es propenso a errores 
// para eso usamos try...catch

try {
    const numeros = new Array(-1)
} catch (RangeError) {
    console.log('Se ha producido un error.');
}

// try.catch nos ayuda a la captura de los errores que puede generar un bloque de codigo.