// ejercicio 294 --> crear una clase de error personalizado heredando de Error.

class DivisionEntreCeroError extends Error{
    constructor(mensaje){
        super(mensaje)
    }
}

function dividir(a, b) {
    try {
        if (b != 0) {
            return a/b;
        }

        throw new DivisionEntreCeroError('La division entre cero no esta permitida')
    } catch (error) {
        throw(error)
    }
}

try {
    dividir(5, 0)
} catch (error) {
    console.log(error);
}

console.log('...');

/*  output
DivisionEntreCeroError: La division entre cero no esta permitida
    at dividir (c:\Users\andre\Desktop\gitHub\javascript-2023\exercises\201-300\294-error-personalizado.js:15:15)
    at Object.<anonymous> (c:\Users\andre\Desktop\gitHub\javascript-2023\exercises\201-300\294-error-personalizado.js:22:5)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
...

*/