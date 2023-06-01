(function () {
    'use strict';

    console.log('se ejecuto automaticamente cuando se cargo la pagina ');


    const body = document.getElementById('body');
    body.innerHTML = `
    <form>
        <input type="text">
        <button class="btnSend">send</button>
    </form>`;


    // quiero que cuando se cargue la paguina se cargue el formulario desde javaScript!


})()