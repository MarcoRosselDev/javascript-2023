// Using fetch

const response = await fetch(url, settings)
const responseData = await response.json()

/* por ahora cubriremos algunos conceptros basicos de fetch

response        es la data que viene desde el server
url             es la URL a la que vamos a solicitar la data
settings        es un objeto contenedor de request especificas configuradas "opcional".
await           es la palabra clave "keyword" que le dice a javascript que espere a que respondan del servidor antes de continuar.
response.json() convierte la respuesta en notacion javascript "la data viene en texto plano".

*/