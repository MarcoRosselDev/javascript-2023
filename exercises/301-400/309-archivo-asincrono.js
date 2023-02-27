// ejercicio 309 : escribir un archivo en disco de forma asincrona con Node.js

const fs = require('fs')

fs.appendFile('exercises/301-400/309_saludo.txt', '! Hola desde JavaScript Node asincrono ', (error) => {
    if (error) {
        throw error
    }

    console.log('El archivo se ha guardado de forma satisfactoria.');
})