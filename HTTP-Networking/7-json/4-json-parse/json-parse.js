/* Parsing JSON 
eng

The JSON.parse() method takes a JSON string as input and constructs the JavaScript value/object 
described by the string. 
This allows us to work with the JSON as an object !
-----------------------------------------------------------------------
spa

El metodo JSON.parse() toma una cadena JSON como entrada y construye el valor/objeto
JavaScript  descrito por la cadena.
Esto nos permite trabajar con el JSON como un objeto !
*/

const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj = JSON.parse(json)

console.log(obj.title)
// Avengers Endgame 