// ejercicio 298: usar una expresion regular para reemplazar texto en una cadena de caracteres.

let frase = 'javascript es un lenguaje de programacion que se ejecuta en un navegador Web.'; 

let patron = /javascripT/i

frase = frase.replace(patron, 'JavaScriptinggggggggg')

console.log(frase); // JavaScriptinggggggggg es un lenguaje de programacion que se ejecuta en un navegador Web.

// lo mismo, con expresiones regulares no import camelcase.