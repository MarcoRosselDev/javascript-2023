/* 
    <script src="./script.js" defer></script>

    defer nos soluciona el problema de espera del cargado del DOM
    ya no es nesesario evitare errores colocando el script al final del documento ,
    justo arriba del cierre de body.
    aplicar script en el header nos ayuda en el rendimiento, ahora puede cargar al mismo tiempo que el DOM.
    ajilizando todo el proseso en especial si la web es grande.
*/

/* async y defer

-   async y defer indican al navegador que descargue los scripts en un hilo separado, mientras que el resto de la pagina (DOM) se descarga, por lo que los scripts no bloquean la carga de la pagina.

-   si tus script se deben ejecutar inmediatamente y no tienen ninuna dependencia, utilza async
    <script async src="./script.js"></script>

-   si tus script necesitan esperar a ser procesados y dependen de otros scripts y/p del DOM en su lugar, cargalos usando defer y coloca tus elementos script correspondientes en el orden que desees que el navegador los ejecute.

    <script defer src="js/vendor/jquery.js"></script>
    <script defer src="js/script2.js"></script>
    <script defer src="js/script3.js"></script>

    se cargaran en en el orden que se escribieron.


*/