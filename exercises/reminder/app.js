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
    const list = []

    sendBtn.addEventListener('click', function (event) {
        event.preventDefault();
        list.push(inputValue.value)
        inputValue.value = '';

        let printDom = '';
        for (let i = 0; i < list.length; i++) {
            printDom += `<li>${list[i]}</li>`;
        }
        ul.innerHTML = printDom;
    })

})()