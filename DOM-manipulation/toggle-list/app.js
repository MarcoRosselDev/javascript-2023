(function () {
    'use strict';

    const spans = document.querySelectorAll('.spanUl');
    const uls = document.querySelectorAll('ul li ul');

    console.log(uls);
    uls.forEach(e => e.className = 'hide-menu')

    console.log(spans);
    spans.forEach(e => e.addEventListener('click', function () {
        const este = this.parentNode.querySelector('ul');
        
        if (este.className == 'hide-menu') {
            este.className = 'show-menu';
        } else {
            este.className = 'hide-menu';
        }
        /* ocultar cuando otro menu este mostrando su lista */

        /* cambiar el texto cuando clickee un enlace de la lista */

        /* puede ser agregar un formulario */
    }))
}
)()