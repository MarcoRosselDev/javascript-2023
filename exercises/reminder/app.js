(function () {
    'use strict';

    // quiero que cuando se cargue la paguina se cargue el formulario desde javaScript!

    // si o si tiene que estar primero toda esta parte
    const body = document.getElementById('body');
    body.innerHTML = `
    <form>
        <input type="text">
        <button class="btnSend">send</button>
    </form>
    <ul>
    </ul>
    `;

    // ahora que estoy seguro que se cargo este form puedo manipular.

    const inputValue = document.querySelector('input');
    const sendBtn = document.querySelector('.btnSend');
    const ul = document.querySelector('ul');

    sendBtn.addEventListener('click', function (event) {
        event.preventDefault();

        console.log(inputValue.value);
        ul.innerHTML = `<li>${inputValue.value}</li>`;
        inputValue.value = '';

    })

})()