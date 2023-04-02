/* Assignment
eng

It's common for developers to write local tests 
using mock (or fake) data that looks like real data. 
Let's ensure that the JSON format that the backend Fantasy Quest 
developers provided to us is valid JSON! 
It would be a shame to write a bunch of code just to find out the backend 
has given us the wrong format.

Complete the parseLocation function. 
Use a try/catch block to safely call JSON.parse on the 
locationString provided. 
Keep in mind that JSON.parse throws an error 
if it is given a string that isn't valid JSON.

If you can parse the string successfully, 
use the printLocationObj function to print the parsed object. 
If an error was thrown, just log invalid json string to the console.
----------------------------------------------------------
spa

Es comun que los desarrolladores escriban pruebas locales 
utilizando datos simulados (o falsos) que parecen datos reales.
Aseguremosnos de que el formato JSON que los desarrolladores de Fantasy Quest 
nos proporcionarion sean JSON valido ! 
Seria una pena escribir un monton de codigo solo para decubrir que el backend 
nos ha dado el formato incorrecto.

Complete la funcion parseLocation.
Utilice un bloque try/catch para llamar de forma segura a JSON.parse 
en la cadena de ubicacion proporcionada.
Tenga en cuenta que JSON.parse arroja un error 
si se le proporciona una cadena que no es JSON valida.

Si puede analizar la cadena correctamente,
use la funcion printLocationObj para imprimir el objeto analizado.
Si se produjo un error, simplemente registre una cadena json no valida en la consola.
*/