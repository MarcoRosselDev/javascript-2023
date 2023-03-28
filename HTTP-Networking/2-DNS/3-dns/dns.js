/* DNS
eng
As we discussed, the "domain name" or "hostname" is part of a URL. We'll get to the other parts of a URL later.

For example, the URL https://example.com/path has a hostname of example.com. 
The https:// and /path portions aren't part of the domain name -> IP address mapping that we've been learning about.
---------------------------------------------------------------------------------------------------------------------
spa

como vimos, el "nombre de dominio" o "hostname" es parte de una URL. veremos la otra parte de la URL despues.

por ejemplo, la URL https://example.com/path es un hostname de example.com.
la parte https:// y /path no forman parte de el nombre de dominio --> direccion IP mapea eso,  vamos a aprender sobre eso. 

*/

/* Using the URL in javascript

la URL API es construida en javaScript. tu puedes crear un nuevo objeto URL;
    
    const urlObj = new URL('https://example.com/example-path')

y entonces tu puedes extraer solo el nombre de dominio:

    const urlObj.hostname

*/

function getDomainNameFromURL(url) {
    const urlObj = new URL(url);
    return urlObj.hostname
}

// The domain name for https://boot.dev/learn/learn-python is boot.dev
    
// don't touch below this line
    
const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`)