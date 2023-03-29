/* Sections of a URL    |   Partes de una URL

eng

URLs have quite a few sections, some of which are required, others not.
-----------------------------------------------------------------------

spa

URLs tienen bastantes secciones, algunas de las cuales son obligatorias,
otras no.

*/

/* 
eng

Let's use the URL API again. 
This time, we'll parse a URL and print all the different parts. 
We'll learn more about each part later, for now, 
let's just split and print a URL!

Complete the printURLParts function. It should print all the parts of a URL. 
For example, given this URL:
    http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash

    Your code should print:
        protocol: http:
        username: testuser
        password: testpass
        hostname: testdomain.com
        port: 8080
        pathname: /testpath
        search: ?testsearch=testvalue
        hash: #testhash

    Use the following properties on the URL object:
        protocol
        username
        password
        hostname
        port
        pathname
        search
        hash
-----------------------------------------------------------------------
spa

usemos la URL API denuevo.
esta vez, analizaremos una URL e imprimiremos todas las partes diferentes.
aprenderemos mas sobre cada parte mas adeleante, 
por ahora , dividamos e imprimamos una URL !

complete la funcion printURLParts.
debe imprimir todas las partes de una URL.
por ejemplo, dada esta URL:
    http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash

    tu codigo deveria imprimir:
        protocol: http:
        username: testuser
        password: testpass
        hostname: testdomain.com
        port: 8080
        pathname: /testpath
        search: ?testsearch=testvalue
        hash: #testhash
    
    Use las siguientes propiedades en el objeto de la URL:
        protocol
        username
        password
        hostname
        port
        pathname
        search
        hash

*/