// ejercicio 291: atrapar un error tipo ReferenceError con try...catch.

// este tipo de error se aplica cuando tratamos de invocar una variable que no esta definida en el codigo.

//const resultado = 5 * a; // ReferenceError: a is not defined

//--------------------------------------------------------------

try {
    const resultado = 5 * A
} catch (ReferenceError) {
    console.log('Error de referencia, la variable A no se a definido');
}

// Error de referencia, la variable A no se a definido

// notece que el programa no se termina de forma abrupta,
// si aplicamos cualquier otro codigo despues este seguira su curso ---->


console.log('codigo despues del error producido');
console.log('...');

/* Error de referencia, la variable A no se a definido
codigo despues del error producido
... */